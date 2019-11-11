<template>
  <div class="demo">
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  name:"demo",
//   data() {
//     return {
//       cols: 4
//     };
//   },
  components: {
  }
};
</script>

<style scoped>
.demo {
  box-sizing: border-box;
}

</style>
