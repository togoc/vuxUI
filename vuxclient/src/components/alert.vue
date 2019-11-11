<template>
  <div class="alert">
    <group>
      <x-switch v-model="value" title="显示" @click.native="Switch"></x-switch>
    </group>
    <Alert
      title="这是title"
      content="这是content"
      @on-show="onShow"
      @on-hide="onHide"
      v-model="value"
      button-text="这是按钮内容"
    ></Alert>
  </div>
</template>

<script>
import { Group, XSwitch } from "vux";
import { Alert } from "vux";

export default {
  name: "alert",
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
      //   title: "温馨提示",
      //   content: "此桌已被预定！",
      //   buttonText: "好的",
      //   hideOnBlur: true,
      //   maskZIndex: 100
      // });
      // this.$vux.alert.show({
      //   title: "Vux is Cool",
      //   content: "Do you agree?",
      //   onShow() {
      //     console.log("Plugin: I'm showing");
      //   },
      //   onHide() {
      //     console.log("Plugin: I'm hiding");
      //   }
      // });
      // AlertModule.show({
      //   title: "VUX is Cool",
      //   content: this.$t("Do you agree?"),
      //   onShow() {
      //     console.log("Module: I'm showing");
      //   },
      //   onHide() {
      //     console.log("Module: I'm hiding now");
      //   }
      // });
    }
  },
  components: {
    Group,
    XSwitch,
    Alert
  }
};
</script>


<style scoped>
</style>



