<template>
  <div class="calendar">
    <group>
      <calendar v-model="value" placeholder="placeholder" title="使用今天"></calendar>
    </group>
  </div>
</template>

<script>
import { Group, Calendar } from "vux";
export default {
  nme: "calendar",
  data() {
    return {
      value: "TODAY"
    };
  },
  methods: {},
  watch: {
    value(n, o) {
      console.log(n, o); //2019-11-11, TODAY
    }
  },
  components: {Group, Calendar }
};
</script>


<style scoped>
</style>