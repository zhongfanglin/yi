<template>
  <li class="topic-item style1">
    <h6 class="header" v-if="type==1">
      <img :src="data.avatar">
      <span>{{data.nickname}}</span>
    </h6>
    <h3 class="title">{{data.title}}</h3>
    <div class="image">
      <img :src="data.picUrl"/>
    </div>
    <p class="info">{{data.readCount}}人看过</p>
  </li>
</template>

<script>
export default {
  props: ["data","type"]
};
</script>

<style lang="scss" scoped>
.style1 {
  .header {
    width: 100%;
    height: 25px;
    padding: 4px 10px;
    line-height: 25px;
    img {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      float: left;
    }
    span {
      font-weight: normal;
      font-size: 14px;
      float: left;
      padding-left: 10px;
    }
  }
  .title {
    font-size: 16px;
    font-weight: normal;
  }
  .image {
    img {
      width: 100%;
    }
  }
  .info {
    font-size: 12px;
    color: #999;
  }
}
</style>
