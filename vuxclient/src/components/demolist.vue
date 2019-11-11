<template>
  <div class="demolist">
    <grid :cols="cols">
      <grid-item
        :label="item.label"
        :link="item.link"
        v-for="(item, index) in demoList"
        :key="index"
      >
        <span slot="icon" class="iconfont icon-list"></span>
      </grid-item>
    </grid>
  </div>
</template>

<script>
import { Grid, GridItem } from "vux";
import "../../public/icons-home/iconfont.css";
export default {
  name: "demolist",
  data() {
    return {
      cols: 4,
      // demoList: [
      // { label: "Divider", link: "/divider", class: "iconfont icon-list" }
      // ],
      prototypeList: [
        { link: "/divider", class: "iconfont icon-list" },
        { link: "/check", class: "iconfont icon-list" },
        { link: "/cellform", class: "iconfont icon-list" },
        { link: "/cell", class: "iconfont icon-list" },
        { link: "/xswitch", class: "iconfont icon-list" },
        { link: "/card", class: "iconfont icon-list" },
        { link: "/calendar", class: "iconfont icon-list" },
        { link: "/buttontab", class: "iconfont icon-list" },
        { link: "/blur", class: "iconfont icon-list" },
        { link: "/badge", class: "iconfont icon-list" },
        { link: "/alert", class: "iconfont icon-list" },
        { link: "/actionsheet", class: "iconfont icon-list" }
      ]
    };
  },
  computed: {
    demoList() {
      let arr = [];
      this.prototypeList.forEach((elemen, index) => {
        arr[index] = elemen;
        arr[index].label = elemen["link"]
          .slice(1)
          .replace(/^[a-z]/, elemen["link"][1].toUpperCase());
      });
      return arr;
    }
  },
  created() {
  },
  components: {
    Grid,
    GridItem
  }
};
</script>


<style scoped>
</style>