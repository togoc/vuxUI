<template>
  <div class="actionsheet">
    <group>
      <x-switch title="基本使用" v-model="value1"></x-switch>
      <x-switch title="安卓风格" v-model="value2"></x-switch>
    </group>
    <Actionsheet v-model="value1" :close-on-clicking-mask="false" :menus="menus1" show-cancel></Actionsheet>
    <Actionsheet v-model="value2" @on-click-menu="select" :menus="menus2" theme="android"></Actionsheet>
  </div>
</template>

<script>
import { Group, XSwitch, Actionsheet } from "vux";

export default {
  name: "actionsheet",
  data() {
    return {
      value1: false,
      value2: false,
      menus1: ["分享给朋友", "分享到朋友圈"],
      menus2: ["分享给朋友", "分享到朋友圈"]
    };
  },
  methods: {
    select(menuKey, menuItem) {
      console.log(menuKey, menuItem);
    }
  },
  components: {
    Group,
    XSwitch,
    Actionsheet
  }
};
</script>


<style scoped>
</style>