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
        <icon slot="icon" type="success"></icon>
        <label slot="label">Home</label>
      </TabbarItem>
      <TabbarItem
        class="tabbarItem1"
        link="/demo"
        index="/demo"
        :selected="index=='/demo'?true:false"
      >
        <icon slot="icon" type="success"></icon>
        <label slot="label">Demo List</label>
      </TabbarItem>
    </Tabbar>
  </div>
</template>

<script>
import { Icon, XHeader, Tabbar, TabbarItem } from "vux";
export default {
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
    Icon,
    Tabbar,
    TabbarItem,
    XHeader
  }
};
</script>
<style scoped>
#app{

}
.weui-tabbar {
  position: fixed;
  margin: 0;
  padding: 0;
}

</style>
