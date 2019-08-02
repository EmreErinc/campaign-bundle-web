<template>
  <div class="grey lighten-3">
    <v-card dark color="blue-grey darken-2">
      <v-card-title primary-title>
        <div>
          <div class="headline">{{item.name}}</div>
          <span class="addition">Description : {{item.description}}</span>
          <br />
          <span class="addition">Price : {{item.price}} TL</span>
        </div>
      </v-card-title>
      <!-- <v-card-text v-show="hasCampaign(index)">
        <span>Take {{item.badge.requirement}} Gift {{item.badge.gift}}</span>
      </v-card-text>-->
      <template v-for="(variant) in item.variants" xs3>
        <!-- <variant @clicked="selectVariant" :variant="variant" :key="`${variant}`"></variant> -->
        <v-card :key="`${variant}`">
          <v-card-actions style="text-align: center">
            <v-btn style="height: auto" v-on:click="selectVariant(variant.id)" outlined medium>
              <span class="addition">Stock : {{variant.stock}}</span>
              <br />
              <template v-for="(variantSpec) in variant.variantSpecs" xs3>
                <span
                  align-center
                  justify-end
                  class="addition"
                  :key="`${variantSpec}`"
                >{{variantSpec.specDetail}} - {{variantSpec.specData}}</span>
              </template>
            </v-btn>
          </v-card-actions>
        </v-card>
        <v-divider :key="`${variant}`" light></v-divider>
      </template>

      <v-layout>
        <v-flex xs2>
          <v-text-field v-model="count" label="Count" value="1"></v-text-field>
        </v-flex>
      </v-layout>

      <v-card-actions style="text-align: center">
        <v-btn v-on:click="addToCart" outlined large>Add To Cart</v-btn>
      </v-card-actions>
    </v-card>
    <v-divider light></v-divider>
  </div>
</template>

<script>
import Worker from "../worker/Worker.js";
import { isNullOrUndefined } from "util";
import Variant from "../components/Variant.vue";

export default {
  name: "detail",
  //props: ['id', 'index'],
  components: {
    Variant
  },
  props: {
    id: { type: Number },
    index: { type: Number }
  },
  data: () => ({
    item: "",
    variantId: "",
    count: ""
  }),
  methods: {
    hasCampaign(index) {
      if (!isNullOrUndefined(badge.requirement)) {
        return true;
      }
    },
    selectVariant(id) {
      this.variantId = id;
    },
    addToCart() {
      var request = {
        productId: this.item.id,
        variantId: this.variantId,
        count: this.count
      };

      Worker.methods.addItemToCart(request);
    }
  },
  created() {
    Worker.methods.getItemDetail(this.$route.params.id).then(res => {
      //console.log(res);
      this.item = res;
    });
  }
};
</script>

<style>
.addition {
  font-size: 12px;
  display: block;
}
.flex.xs2 {
  padding: 15px;
}
</style>
