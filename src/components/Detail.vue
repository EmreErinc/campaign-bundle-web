<template>
<v-label>{{item.name}}</v-label>
<!--   <div class="grey lighten-3">
    <v-card v-bind="item" dark color="blue-grey darken-2">
      <v-card-title primary-title>
        <div>
          <div class="headline">{{item.name}}</div>
          <span class="addition">Price : {{item.price}} TL</span>
        </div>
      </v-card-title>
      <v-card-text v-show="hasCampaign(index)">
        <span>Take {{item.badge.requirement}} Gift {{item.badge.gift}}</span>
      </v-card-text>
      <v-card-actions style="text-align: center">
        <v-btn outlined large>Add To Cart</v-btn>
      </v-card-actions>
    </v-card>
    <v-divider light></v-divider>
  </div> -->
</template>

<script>
import Worker from "../worker/Worker.js";

export default {
  name: "detail",
  props: {
    id: { type: Number },
    index: { type: Number }
  },
  /* data: () => {
    item: "";
  }, */
  data() {
    return {
      item: "",
    }
  },
  methods: {
    hasCampaign(index) {
      if (!isNullOrUndefined(badge.requirement)) {
        return true;
      }
    }
  },
  created() {
    Worker.methods.getItemDetail(id).then(res => {
      console.log(res);
      this.item = res;
    });
  }
};
</script>

<style>
</style>
