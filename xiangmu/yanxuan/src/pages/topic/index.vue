<template>
  <div id="topic" class="page">
    <header class="header border-bottom">
      <span class="header-icon">
        <van-icon name="wap-home"/>
      </span>
      <nav class="title">
        <li class="active">发现</li>
        <li>甄选家</li>
      </nav>
      <div class="header-right">
        <span class="header-icon">
          <van-icon name="search"/>
        </span>
        <span class="header-icon">
          <van-icon name="shopping-cart-o"/>
        </span>
      </div>
    </header>
    <nav class="nav border-bottom">
      <li
        v-for="(item,index) in tabData"
        :key="item.id"
        @click="tabAction(index,item)"
        :class="{active:selectIndex===index}"
      >{{item.name}}</li>
    </nav>
    <router-view :dataId="id"/>
  </div>
</template>

<script>
import { getTopicTab } from "@/services/homeService";
export default {
  data() {
    return {
      tabData: [],
      selectIndex: 0,
      id: 0
    };
  },
  created() {
    getTopicTab().then(data => {
      this.tabData = data;
      this.$router.push("/topic/topic/" + this.tabData[0].id);
    });
  },
  methods: {
    tabAction(index, item) {
      this.selectIndex = index;
      this.id = item.id;
      if (item.name == "晒单") {
        this.$router.push("/topic/show");
      } else {
        this.$router.push("/topic/topic/" + item.id);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#topic {
  .header {
    width: 100%;
    height: 44px;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    box-sizing: border-box;
    line-height: 44px;
    .title {
      display: flex;
      margin-left: 50px;
      li {
        height: 100%;
        line-height: 44px;
        float: left;
        margin-right: 10px;
        font-size: 14px;
        color: #333;
        &.active {
          font-size: 20px;
          color: crimson;
        }
      }
    }
    .header-right {
      span {
        margin: 0 10px;
      }
    }
    .header-icon {
      font-size: 30px;
    }
  }
  .nav {
    height: 30px;
    width: 100%;
    position: absolute;
    left: 0;
    top: 44px;
    display: flex;
    li {
      flex: 1;
      line-height: 30px;
      text-align: center;
      font-size: 12px;
      color: #7f7f7f;
      border-bottom: 2px solid transparent;
      &.active {
        border-bottom: 2px solid #b4282d;
        color: #b4282d;
      }
    }
  }
}
</style>

