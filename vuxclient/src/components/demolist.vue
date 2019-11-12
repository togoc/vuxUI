<template>
  <div class="demolist">
    <grid :cols="cols">
      <grid-item
        :label="item.label"
        :link="item.link"
        v-for="(item, index) in demoList"
        :key="index"
      >
        <span slot="icon" :class="item.class"></span>
      </grid-item>
    </grid>
  </div>
</template>

<script>
import { Grid, GridItem } from "vux";
import "../../public/icons-home/iconfont.css";
import "../../public/icons-list/iconfont.css";
export default {
  name: "demolist",
  data() {
    return {
      cols: 4,
      // demoList: [
      // { label: "Divider", link: "/divider", class: "iconfont icon-list" }
      // ],
      prototypeList: [
        // { path: "/actionsheet", name: "actionsheet", component: actionsheet },
      ]
    };
  },
  computed: {
    demoList() {
      let prototypeList = JSON.parse(localStorage.getItem("demoList"));
      let arr = [];
      let arr1 = [];
      prototypeList.forEach((elemen, index) => {
        arr[index] = elemen;
        arr[index].class = elemen.class;
        arr[index].link = elemen.path;
        arr[index].label = elemen["name"].replace(
          /^[a-z]/i,
          elemen["name"][0].toUpperCase()
        );
        arr1[index] = arr[index].label;
        delete arr[index]["path"];
        delete arr[index]["name"];
      });
      //按字母排序
      arr1.sort();
      arr1.forEach((item, index) => {
        arr.forEach((item1, index1) => {
          if (item == item1.label) {
            [arr[index], arr[index1]] = [arr[index1], arr[index]];
          }
        });
      });
      return arr;
    }
  },
  created() {},
  components: {
    Grid,
    GridItem
  }
};
</script>


<style scoped>
</style>