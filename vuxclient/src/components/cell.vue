<template>
  <div class="cellbox">
    <group>
      <cell title="cell" value="value" is-link></cell>
      <cell title="cell" value="value"></cell>
      <cell-box>cell-box</cell-box>
      <cell-box is-link>cell-box</cell-box>
    </group>
  </div>
</template>

<script>
import { Group, CellBox, Cell } from "vux";
export default {
  name: "cellbox",
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
  components: { CellBox, Group, Cell }
};
</script>


<style scoped>
</style>