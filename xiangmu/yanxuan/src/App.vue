<template>
  <div id="app">
    <div class="tabs border-top">
      <router-link :to="item.path" v-for="item in tabList" :key="item.index">
        <div>
          <img src="/img/tab.png" :style="style(item.index,item.path)">
        </div>
        <p>{{item.title}}</p>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabList: [
        { title: "首页", path: "/home", index: 2 },
        { title: "分类", path: "/category", index: 1 },
        { title: "识物", path: "/topic", index: 3 },
        { title: "购物车", path: "/cart", index: 0 },
        { title: "我的", path: "/mine", index: 4 }
      ]
    };
  },
  methods: {
    style(index, path) {
      let offset = index * -61;
      if (this.$route.path !== path) {
        offset -= 32;
      }
      return {
        transform: `translateY(${offset}px)`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.tabs {
  width: 100%;
  height: 49px;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  a {
    flex: 1;
    text-align: center;
    div {
      width: 26px;
      height: 30px;
      overflow: hidden;
      display: inline-block;
      img {
        display: inline-block;
        width: 100%;
      }
    }
    p {
      font-size: 12px;
    }
  }
}

.page {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 49px;
}
</style>

