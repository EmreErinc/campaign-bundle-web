<template>
  <v-flex>
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
      <v-card-text v-show="!hasCampaign(item.badge)">
        <span> </span>
      </v-card-text>
      <v-card-actions style="text-align: center">
        <v-btn
          :to="{ path: '/item/' + item.id }"
          v-bind:id="item.id"
          v-bind:index="index"
          outlined
          large
        >Product Detail</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
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
    hasCampaign(badge) {
      if (!isNullOrUndefined(badge.requirement)) {
        return true;
      }
    },
    getDetail(id, index) {
      this.$router.push({
        path: `/item/${id}`,
        name: "detail",
        props: { id: id, index: index }
      });
    }
  }
};
</script>

<style>
</style>
