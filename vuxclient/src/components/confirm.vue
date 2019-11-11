<template>
  <div class="confirm">
    <group>
      <x-switch v-model="value" title="显示" @click.native="Switch">
        <confirm
          title="这是title"
          content="这是content"
          @on-show="onShow"
          @on-hide="onHide"
          v-model="value"
          button-text="这是按钮内容"
          mask-z-index="999999999"
        ></confirm>
      </x-switch>
    </group>
  </div>
</template>

<script>
import { Group, XSwitch, Confirm } from "vux";

export default {
  name: "confirm",
  data() {
    return {
      value: false
    };
  },
  methods: {
    onShow() {
      console.log("onShow");
      let alertImgLen = document.getElementsByClassName("weui-dialog__hd")[0];
      //修改成图标
      alertImgLen.innerHTML = '<span class="iconfont icon-shouye"></span>';
    },
    onHide() {
      console.log("onHide");
    },
    Switch() {
      // this.$vux.alert.show({

    }
  },
  components: {
    Group,
    XSwitch,
    Confirm
  }
};
</script>


<style scoped>
</style>



