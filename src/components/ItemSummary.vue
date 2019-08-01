<template>
  <v-card dark color="blue-grey darken-2">
    <v-card-title primary-title>
      <div>
        <div class="headline">{{item.name}}</div>
        <span class="addition">Price : {{item.price}} TL</span>
      </div>
    </v-card-title>
    <v-card-text v-show="hasCampaign(item.badge)">
      <span>Take {{item.badge.requirement}} Gift {{item.badge.gift}}</span>
    </v-card-text>
    <v-card-actions style="text-align: center">
      <v-btn :to="getItemDetail(parseInt(item.id))" outlined large>Product Detail</v-btn>
      <!-- <detail v-bind="item" :id="parseInt(item.id)" :index="parseInt(index)"></detail> -->
      <nav>
        <router-link :to="{ path: `/item/${item.id}`, props: { id: item.id, index: index }}">detail</router-link>
      </nav>
    </v-card-actions>
  </v-card>
</template>

<script>
import { isNullOrUndefined } from "util";
import Detail from "../components/Detail.vue";

export default {
  name: "itemSummary",
  components: {
    Detail
  },
  props: {
    item: { type: Object },
    index: { type: Number }
  },
  methods: {
    //itemDetail(id) {
    //  Worker.methods.getItemDetail(id).then(res => console.log(res));
    //},
    hasCampaign(badge) {
      if (!isNullOrUndefined(badge.requirement)) {
        return true;
      }
    },
    getItemDetail(id) {
      return `/item/${id}`;
    }
  }
};
</script>

<style>
</style>
