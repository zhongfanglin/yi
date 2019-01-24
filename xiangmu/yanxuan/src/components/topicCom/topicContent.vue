<template>
  <scroller :top="74">
    <ul class="topic-list">
      <template v-for="item in topicData">
        <style1 :data="item" :type="item.style" :key="item.id" v-if="item.style == 1 || item.style == 0"/>
        <style2 :data="item" :key="item.id" v-if="item.style==2"/>
      </template>
    </ul>
  </scroller>
</template>

<script>
import style1 from "./styleItem1";
import style2 from "./styleItem2";
import { getTopicFindData } from "@/services/homeService";
export default {
  components: {
    style1,
    style2
  },
  props: ["id"],
  data() {
    return {
      topicData: []
    };
  },
  watch: {
    id: function() {
      getTopicFindData(this.id).then(data => {
        this.topicData = data;
      });
    },
    immediate:true
  }
};
</script>

<style lang="scss" scoped>
.topic-list {
  background: #efefef;
  padding: 10px 0;
  .topic-item {
    background: #fff;
    margin-bottom: 10px;
  }
}
</style>

