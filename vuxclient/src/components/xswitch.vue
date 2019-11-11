<template>
  <div class="xswitch">
    <group>
      <x-switch
        v-model="value"
        title="标题title"
        @change.native="Change"
        @click.native="Switch"
        inline-desc="底下文字"
      ></x-switch>
      <x-switch title="不可点击" disabled class="name"></x-switch>
    </group>
  </div>
</template>

<script>
import { Group, XSwitch } from "vux";

export default {
  name: "xswitch",
  data() {
    return {
      value: true
    };
  },
  components: {
    Group,
    XSwitch
  },
  methods: {
    Switch(newVal) {
      console.log(this.value);
      console.log(newVal.toElement.checked);
    },
    Change() {
      console.log(this.value);
    }
  }
};
</script>


<style scoped>
</style>