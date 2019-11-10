<template>
  <div class="demo">
    <group>
      <cell title="Live Demo" value="value" is-link>
        <icon slot="icon" type="success"></icon>Github
      </cell>
      <cell title="Github" value="value" is-link>
        <icon slot="icon" type="success"></icon>Star me
      </cell>
    </group>
  </div>
</template>
<script>
import { Group, Cell } from "vux";
import { Icon } from "vux";
export default {
  name: "demo",
  props: {},
  methods: {},
  components: {
    Group,
    Cell,
    Icon
  }
};
</script>

<style scoped>
.demo {
  padding-top: 60px;
  box-sizing: border-box;
}
</style>
