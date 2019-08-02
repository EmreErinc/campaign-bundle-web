<template>
  <div class="grey lighten-3">
    <template v-for="(item,index) in itemList" xs3>
      <item-summary :item="item" :index="index" :key="`3${item}`"></item-summary>
    </template>
    <v-divider light></v-divider>
  </div>
</template>

<script>
import Worker from "../worker/Worker.js";
import ItemSummary from "../components/ItemSummary.vue";

export default {
  name: "itemList",
  data: () => ({
    itemList: []
  }),
  components: {
    ItemSummary
  },
  created() {
    Worker.methods.getItems().then(res => {
      this.itemList = res;
    });
  }
};
</script>

<style>
.container {
  max-width: 95%;
}
.v-btn {
  text-transform: none;
}
.theme--dark.v-btn {
  color: #fff;
  max-width: 100%;
  white-space: normal;
  text-overflow: clip;
  padding: 0px 10px 0px 10px;
  height: auto;
  border-radius: 4px;
}
.theme--dark.v-sheet {
  border-radius: 4px;
}
.theme--light.application {
  width: 50px;
  background-color: #43a047;
}
.v-btn--block {
  height: auto;
}
.v-btn__content {
  white-space: normal;
  text-align: start;
  padding: 10px 6px 10px 0;
  display: table;
}
.application--wrap {
  position: relative;
}
.addition {
  font-size: 12px;
}
</style>
