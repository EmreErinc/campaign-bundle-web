<template>
  <div class="grey lighten-3">
    <v-container grid-list-md text-center>
      <v-layout wrap>
        <v-flex v-for="(item,index) in itemList" :key="`3${item}`" xs5 sm4 md3>
          <item-summary :item="item" :index="index"></item-summary>
        </v-flex>
      </v-layout>
    </v-container>
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
  methods: {
    isUser() {
      return this.$store.getters.getRole == "USER" ? true : false;
    },
    isSeller() {
      return;
    }
  },
  created() {
    var isSeller = this.$store.getters.getRole == "SELLER" ? true : false;
    var accountId = this.$store.getters.getAccountId;
    if (isSeller == true) {
      Worker.methods.getSellerItems(accountId).then(res => {
        this.itemList = res;
      });
    } else {
      Worker.methods.getItems().then(res => {
        this.itemList = res;
      });
    }
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
