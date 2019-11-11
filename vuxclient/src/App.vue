<template>
  <div id="app">
    <XHeader :title="title" right-options.showMore></XHeader>
    <router-view />
    <Tabbar>
      <TabbarItem
        class="tabbarItem1"
        link="/home"
        index="/home"
        :selected="index=='/home'?true:false"
      >
        <span slot="icon" class="iconfont icon-shouye"></span>
        <label slot="label">Home</label>
      </TabbarItem>
      <TabbarItem
        class="tabbarItem1"
        link="/demo"
        index="/demo"
        :selected="index!='/home'?true:false"
      >
        <span slot="icon" class="iconfont icon-list"></span>
        <label slot="label">Demo List</label>
      </TabbarItem>
    </Tabbar>
  </div>
</template>

<script>
import { XHeader, Tabbar, TabbarItem } from "vux";
export default {
  name:"app",
  data() {
    return {};
  },
  computed: {
    index() {
      return this.$route.path;
    },
    title() {
      let str;
      this.index == "/demo" ? (str = "Demo") : (str = "Home");
      return str;
    }
  },
  components: {
    Tabbar,
    TabbarItem,
    XHeader
  }
};
</script>
<style scoped>
.weui-tabbar {
  position: fixed;
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
</style>
