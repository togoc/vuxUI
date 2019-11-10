<template>
  <div class="home">
    <img src="../assets/logo.png" alt />

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
  name: "home",
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
.tabbarItem1 {
  text-decoration: none;
}
.home {
  box-sizing: border-box;
  padding-top: 60px;
}

img {
  display: block;
  margin: auto;
}
.github {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
