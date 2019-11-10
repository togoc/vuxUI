<template>
  <div class="demo">
    <grid :cols="cols">
      <grid-item label="Actionsheet" link="/actionsheet">
        <span slot="icon" class="iconfont icon-list"></span>
      </grid-item>
      <grid-item label="Alert" link="/lert">
        <span slot="icon" class="iconfont icon-list"></span>
      </grid-item>
      <grid-item label="Badge" link="/buttontab">
        <span slot="icon" class="iconfont icon-list"></span>
      </grid-item>
      <grid-item label="Blur" link="/buttontab">
        <span slot="icon" class="iconfont icon-list"></span>
      </grid-item>
      <grid-item label="Button Tab" link="/buttontab">
        <span slot="icon" class="iconfont icon-list"></span>
      </grid-item>
      <grid-item label="Calendar Tab" link="/calendar">
        <span slot="icon" class="iconfont icon-list"></span>
      </grid-item>
    </grid>
  </div>
</template>
<script>
import { Grid, GridItem } from "vux";
import "../../public/icons-home/iconfont.css";
export default {
  data() {
    return {
      cols: 4
    };
  },
  components: {
    Grid,
    GridItem
  }
};
</script>

<style scoped>
.demo {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
</style>
