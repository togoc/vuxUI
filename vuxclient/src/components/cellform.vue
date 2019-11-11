<template>
  <div class="cellform">
    <group>
      <cell title="Total" :value="'￥'+total"></cell>
      <cell-form-preview :list="list"></cell-form-preview>
    </group>
  </div>
</template>

<script>
import { CellFormPreview, Group, Cell } from "vux";
export default {
  name: "cellform",
  data() {
    return {
      list: [
        {
          label: "苹果",
          value: "3.29"
        },
        {
          label: "香蕉",
          value: "1.04"
        },
        {
          label: "鱼肉",
          value: "8.00"
        }
      ]
    };
  },
  computed: {
    total() {
      let total = 0;
      this.list.forEach(element => {
        total += Number(element.value);
      });
      return total;
    }
  },
  components: {
    CellFormPreview,
    Group,
    Cell
  }
};
</script>


