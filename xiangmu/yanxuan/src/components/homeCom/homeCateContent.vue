<template>
  <scroller :top="74" ref="scroller">
    <img v-lazy="bannerUrl" class="banner">
    <div v-for="itemList in list" :key="itemList.id" class="content">
      <header>
        <h3>{{itemList.name}}</h3>
        <p class="header-name">{{itemList.frontName}}</p>
      </header>
      <div class="pic">
        <ul>
          <li v-for="item in itemList.itemlist" :key="item.id" class="pic-item">
            <div class="imgs">
              <img v-lazy="item.listPicUrl">
              <div class="simple">{{item.simpleDesc}}</div>
            </div>
            <p class="pic-name">{{item.name}}</p>
            <p class="pic-price">￥{{item.price}}</p>
          </li>
        </ul>
      </div>
    </div>
  </scroller>
</template>

<script>
import Vue from "vue";
import { Lazyload } from "vant";
// options 为可选参数，无则不传
Vue.use(Lazyload);
import { getHomeCateListItemList } from "@/services/homeService";
import { Indicator } from "mint-ui";
export default {
  props: ["data"],
  data() {
    return {
      bannerUrl: "",
      list: ""
    };
  },
  watch: {
    "data.id": function(newVal) {
      if (newVal) {
        Indicator.open();
        getHomeCateListItemList(newVal).then(data => {
          this.bannerUrl = data.bannerUrl;
          this.list = data.categoryList;
          this.$nextTick(() => {
            Indicator.close();
            this.$refs.scroller.scrollTo(0, 0);
          });
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  display: block;
}
.content {
  background: #fff;
  overflow: hidden;
  width: 100%;
  header {
    text-align: center;
    overflow: hidden;
    width: 100%;
    margin: 10px 0;
  }
  .header-name {
    color: #999;
    margin-top: 5px;
  }
  h3 {
    color: #333;
    font-weight: normal;
  }
  .pic {
    overflow: hidden;
    width: 100%;
    ul {
      padding: 0 5px;
      box-sizing: border-box;
    }
    .pic-item {
      padding: 0 5px;
      box-sizing: border-box;
      float: left;
      width: 50%;
      .imgs {
        width: 100%;
        background: #f4f4f4;
        .simple {
          background: #f1ece2;
          color: #9f8a60;
          font-size: 12px;
          width: 100%;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        img {
          width: 100%;
        }
      }
      .pic-name {
        font-size: 12px;
        color: #333;
        width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .pic-price {
        font-size: 12px;
        color: red;
      }
    }
  }
}
</style>

