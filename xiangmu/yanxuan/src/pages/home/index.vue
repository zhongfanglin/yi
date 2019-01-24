<template>
  <div id="home" class="page">
    <header class="header">
      <img src="/img/logo.png">
      <p>
        <van-icon name="search"/>搜索商品, 共21446款好物
      </p>
      <span>登录</span>
    </header>
    <homeNav v-model="selectIndex" ref="nav"/>
    <homeConent v-show="selectIndex===0"/>
    <homeCateConent v-show="selectIndex!==0" :data="selectItem"/>
  </div>
</template>

<script>
import homeNav from "@/components/homeCom/homeNav";
import homeConent from "@/components/homeCom/homeContent";
import homeCateConent from "@/components/homeCom/homeCateContent";
export default {
  data() {
    return {
      selectIndex: 0
    };
  },
  components: {
    homeNav,
    homeConent,
    homeCateConent
  },
  computed: {
    selectItem() {
      if (this.selectIndex > 0) {
        return this.$refs.nav.list[this.selectIndex];
      } else {
        return {};
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#home {
  .header {
    width: 100%;
    height: 44px;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    padding: 12px 8px;
    box-sizing: border-box;
    img {
      height: 100%;
    }
    p {
      padding: 0 8px;
      line-height: 20px;
      font-size: 12px;
      background: #ededed;
      color: #666;
      border-radius: 4px;
      margin: 0 8px;
      flex: 1;
    }
    span {
      color: #b4282d;
      border: 1px solid #b4282d;
      border-radius: 2px;
      font-size: 12px;
      padding: 6px;
      line-height: 8px;
    }
  }
}
</style>

