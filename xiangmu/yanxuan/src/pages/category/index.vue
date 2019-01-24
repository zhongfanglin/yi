<template>
  <div id="category" class="page">
    <header class="header border-bottom">
      <p>
        <van-icon name="search"/>搜索商品, 共21446款好物
      </p>
    </header>
    <div class="wrap">
      <scroller :top="44" class="border-right" ref="content">
        <li
          v-for="(item,index) in navData"
          :key="item.id"
          :class="{active:selectIndex===index}"
          @click="selectItem(index,item.id)"
        >{{item.name}}</li>
      </scroller>
      <scroller
        :top="44"
        :forword="handleContentforword"
        :next="handleContentNext"
        v-if="navData.length>0"
      >
        <img class="banner" :src="navData[selectIndex].wapBannerUrl">
        <ul class="content-list" v-if="selectIndex<4">
          <li
            class="content-item"
            v-for="value in navData[selectIndex].subCateList"
            :key="value.id"
          >
            <img :src="value.bannerUrl">
            <p>{{value.name}}</p>
          </li>
        </ul>
        <ul class="cateList" v-else>
          <li v-for="lists in listData" :key="lists.id">
            <p class="listname">{{lists.name}}</p>
            <hr>
            <div class="cateContent" v-for="val in lists.categoryList" :key="val.id">
              <img v-lazy="val.wapBannerUrl">
              <p>{{val.name}}</p>
            </div>
          </li>
        </ul>
      </scroller>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Lazyload } from "vant";
// options 为可选参数，无则不传
Vue.use(Lazyload);
import { getCategoryList, getCategoryGrop } from "@/services/homeService";
export default {
  data() {
    return {
      navData: [],
      selectIndex: 0,
      id: 0,
      listData: []
    };
  },
  created() {
    getCategoryList().then(data => {
      this.navData = data;
      this.$nextTick(() => {
        this.$refs.content.scrollTo(0, -50);
      });
    });
  },
  methods: {
    selectItem(index, id) {
      this.selectIndex = index;
      this.id = id;
    },
    handleContentforword() {
      // console.log('触发跳转上一个滚动视图');
      if (this.selectIndex > 0) {
        this.selectItem(this.selectIndex - 1);
      }
    },
    handleContentNext() {
      // console.log('触发跳转下一个滚动视图');
      if (this.selectIndex < this.navData.length - 1) {
        this.selectItem(this.selectIndex + 1);
      }
    }
  },
  watch: {
    id: function() {
      if (this.selectIndex >= 4) {
        getCategoryGrop(this.id).then(data => {
          this.listData = data;
          console.log(this.listData);
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#category {
  .header {
    width: 100%;
    height: 44px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    padding: 8px;
    box-sizing: border-box;
    p {
      line-height: 30px;
      font-size: 12px;
      padding: 0 10px;
      background: #ededed;
      color: #666;
      border-radius: 4px;
      margin: 0 8px;
      flex: 1;
      text-align: center;
    }
  }
  .wrap {
    width: 100%;
    .scroller-wrap:nth-of-type(1) {
      width: 25%;
      li {
        line-height: 60px;
        font-size: 14px;
        color: #333;
        text-align: center;
        border-left: 2px solid transparent;
        &.active {
          color: #ab2b2b;
          border-left: 2px solid #ab2b2b;
        }
      }
    }
    .scroller-wrap:nth-of-type(2) {
      left: 25%;
      width: 75%;
      padding: 10px;
      box-sizing: border-box;
      .banner {
        width: 100%;
      }
      .content-list {
        padding-top: 10px;
        overflow: hidden;
        .content-item {
          width: 33.33%;
          float: left;
          img {
            display: block;
            width: 80%;
            margin: 0 auto;
          }
          p {
            text-align: center;
            font-size: 12px;
            color: #333;
            line-height: 14px;
            height: 28px;
          }
        }
      }
      .cateList {
        li {
          width: 100%;
          overflow: hidden;
          padding: 20px 0;
          .listname {
            font-size: 14px;
            line-height: 20px;
            font-weight: bold;
          }
        }
        .cateContent {
          overflow: hidden;
          padding-top:10px;
          text-align: center;
          display: inline-block;
          width: 33%;
          img {
            width: 100%;
          }
          p {
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>

