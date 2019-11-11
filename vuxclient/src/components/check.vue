<template>
  <div class="check">
    <!-- CheckIcon -->
    <cell title="CheckIcon"></cell>
    <cell-box>
      <check-icon v-model="value" @click.native="value=!value">帅哥{{value}}</check-icon>
    </cell-box>
    <cell-box>
      <check-icon v-model="value" @click.native="value=!value" type="plain">美女{{value}}</check-icon>
    </cell-box>
    <cell title="Checker"></cell>
    <divider>单选,默认不选中任何项</divider>
    <!-- checker -->
    <checker
      v-model="checker"
      default-item-class="item"
      :value="checker"
      selected-item-class="checker-item"
    >
      <checker-item v-for="(item, index) in checker" :value="item" :key="index">{{item}}</checker-item>
    </checker>
    <cell title="Check list"></cell>

    <!-- checklist -->
    <checklist
      @change.native="checklistChange"
      v-model="checklist"
      title="标题title , 最多选两个,最少选一个 "
      :options="options"
      :max="2"
      :mini="1"
      random-order
    ></checklist>
  </div>
</template>

<script>
import { CheckIcon, CellBox, Cell, Checker, CheckerItem, Checklist } from "vux";
import { Divider } from "vux";
export default {
  name: "check",
  data() {
    return {
      value: true,
      checker: [1, 2, 3, 4],
      checklist: [],
      options: [
        { key: "name1", value: "value1", inlineDesc: "inlineDesc" },
        { key: "name2", value: "value2", inlineDesc: "inlineDesc" },
        { key: "name3", value: "value3", inlineDesc: "inlineDesc" }
      ]
    };
  },
  methods: {
    checklistChange() {
      console.log(this.checklist);
    }
  },
  components: {
    CheckIcon,
    CellBox,
    Cell,
    Divider,
    Checker,
    CheckerItem,
    Checklist
  }
};
</script>
<style  scoped>
.check {
  -moz-user-select: none;
  user-select: none;
  -webkit-user-select: none;
}
.item {
  color: aqua;
}
.checker-item {
  color: red;
}
</style>