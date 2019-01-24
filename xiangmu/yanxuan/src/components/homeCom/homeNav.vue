<template>
  <div class="nav-wrap">
    <nav class="nav">
      <div class="nav-bar" v-show="!showMenu">
        <ul class="nav-list" ref="list">
          <li
            v-for="(item,index) in list"
            :key="item.id"
            class="nav-item"
            :class="{active:value===index}"
            ref="item"
            @click="selectTab(index)"
          >{{item.name}}</li>
        </ul>
      </div>
      <div v-show="showMenu" class="menu-bar">
        <h6>全部频道</h6>
        <ul class="menu">
          <li
            v-for="(item,index) in list"
            :key="item.id"
            :class="{active:value===index}"
            @click="selectTab(index)"
          >{{item.name}}</li>
        </ul>
      </div>
      <div class="slot" @click="showAction">
        <span></span>
        <span>
          <van-icon name="arrow-down"/>
        </span>
      </div>
    </nav>
    <div class="cover" v-show="showMenu" @click="showAction"></div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { getHomeCateList } from "@/services/homeService";
export default {
  props: ["value"],
  data() {
    return {
      list: [],
      showMenu: false
    };
  },
  methods: {
    showAction() {
      this.showMenu = !this.showMenu;
    },
    selectTab(index) {
      this.showMenu = false;
      this.$emit("input", index);
    }
  },
  created() {
    getHomeCateList().then(data => {
      this.list = [{ name: "推荐", id: -1 }, ...data];
      this.$nextTick(() => {
        let width = 0;
        this.$refs.item.map(item => {
          width += item.offsetWidth;
        });
        this.$refs.list.style.width = width + 30 + "px";
        new BScroll(".nav-bar", {
          scrollX: true,
          scrollY: false,
          click: true
        });
      });
    });
  }
};
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  height: 26px;
  position: absolute;
  left: 0;
  top: 44px;
  z-index: 2;
  .nav-bar {
    overflow: hidden;
    .nav-list {
      white-space: nowrap;
      .nav-item {
        display: inline-block;
        line-height: 26px;
        padding: 0 10px;
        font-size: 12px;
        color: #333;
        &.active {
          color: #b4282d;
          border-bottom: 1px solid red;
        }
        box-sizing: border-box;
      }
    }
  }
  .slot {
    position: absolute;
    top: 0;
    right: 0;
    width: 60px;
    height: 100%;
    span {
      display: block;
      float: left;
      height: 100%;
    }
    span:nth-of-type(1) {
      width: 20px;
      background-image: linear-gradient(
        to right,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 1)
      );
    }
    span:nth-of-type(2) {
      width: 40px;
      line-height: 26px;
      text-align: center;
      background: #fff;
    }
  }
  .menu-bar {
    background: #fff;
    overflow: hidden;
    padding: 10px;
    box-sizing: border-box;
    h6 {
      font-weight: normal;
      font-size: 14px;
      color: #333;
    }
    .menu {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 20%;
        font-size: 14px;
        color: #333;
        border: 1px solid #ccc;
        margin: 10px 7px;
        text-align: center;
        box-sizing: border-box;
        background: #ccc;
        &.active {
          color: #b4282d;
        }
      }
    }
  }
}
.cover {
  width: 100%;
  position: absolute;
  left: 0;
  top: 44px;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
</style>

