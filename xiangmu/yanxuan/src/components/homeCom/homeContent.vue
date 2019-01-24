<template>
  <scroller :top="74">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item class="banner" v-for="item in bannerData" :key="item.id">
        <img :src="item.picUrl">
      </van-swipe-item>
    </van-swipe>
    <div class="top-module" :style="{backgroundImage:'url('+bgUrl+')',backgroundSize:'cover'}">
      <ul class="policy">
        <li class="policy-item" v-for="item in policyDescList" :key="item.desc">
          <img :src="item.icon">
          <span>{{item.desc}}</span>
        </li>
      </ul>
      <ul class="kingKong" :style="{backgroundImage:'url('+kingKongImg+')'}">
        <li class="kingKong-item" v-for="item in kingKongList" :key="item.id">
          <img :src="item.picUrl">
          <p>{{item.text}}</p>
        </li>
      </ul>
      <ul class="promotion">
        <li class="promotion-item" v-for="list in  bigPromotionList" :key="list.sequen">
          <img :src="list.picUrl">
        </li>
      </ul>
    </div>
  </scroller>
</template>

<script>
import { getHomeFocusList, getHomeTopData } from "@/services/homeService";
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
Vue.use(Swipe).use(SwipeItem);
export default {
  data() {
    return {
      bannerData: [],
      policyDescList: [],
      bgUrl: "",
      kingKongImg: "",
      kingKongList: [],
      bigPromotionList: []
    };
  },
  created() {
    getHomeFocusList().then(data => {
      this.bannerData = data;
    });
    getHomeTopData().then(
      ({ policyDescList, kingKongData, bigPromotionData, bgUrl }) => {
        this.policyDescList = policyDescList;
        this.kingKongImg = kingKongData.background;
        this.kingKongList = kingKongData.list;
        this.bigPromotionList = bigPromotionData;
        this.bgUrl = bgUrl;
      }
    );
  }
};
</script>

<style lang="scss" scoped>
.banner {
  img {
    width: 100%;
  }
}
.top-module {
  padding: 0 6px;
  .policy {
    height: 20px;
    display: flex;
    font-size: 12px;
    .policy-item {
      flex: 1;
      line-height: 20px;
      color: red;
      img {
        width: 16px;
        display: inline-block;
        transform: translateY(4px);
      }
    }
  }
  .kingKong {
    overflow: hidden;
    .kingKong-item {
      width: 20%;
      float: left;
      padding: 10px 0;
      box-sizing: border-box;
      text-align: center;
      img {
        width: 80%;
        margin: 0 auto;
      }
      p {
        font-size: 12px;
        color: #333;
      }
    }
  }
}
.promotion {
  overflow: hidden;
  .promotion-item img {
    width: 50%;
    float: left;
  }
  .promotion-item:nth-of-type(1) img {
    width: 100%;
  }
}
</style>
<style>
.van-swipe__indicator {
  border-radius: 0;
  width: 12px;
  height: 2px;
}
</style>

