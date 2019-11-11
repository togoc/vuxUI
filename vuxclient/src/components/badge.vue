<template>
  <div class="badge">
    <group>
      <cell title="cell" is-link>
        红点
        <Badge></Badge>
      </cell>
      <cell title="cell" is-link>
        数字
        <Badge text="1"></Badge>
      </cell>
      <cell title="cell" is-link>
        多位数
        <Badge text="1111"></Badge>
      </cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell, Badge } from "vux";
export default {
  name: "badge",

  components: { Group, Cell, Badge }
};
</script>


<style scoped>
</style>