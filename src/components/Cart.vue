<template>
  <div>
    <template v-for="(cartItem) in cartItems" xs3>
      <v-card dark color="blue-grey darken-2" :key="`${cartItem}`">
        <v-card-title primary-title>
          <div>
            <div class="headline">{{cartItem.productId}}</div>
            <span class="addition">Count : {{cartItem.saleCount}}</span>
            <span class="addition">Price : {{cartItem.price}} TL</span>
          </div>
        </v-card-title>
        <v-card-text v-if="hasCampaign(cartItem)">
          <span>Your Earned Gift Count : {{cartItem.campaignParams.actualGiftCount}} -</span>
          <span>Badge : Take {{cartItem.campaignParams.badge.requirement}} Gift {{cartItem.campaignParams.badge.gift}}</span>
        </v-card-text>
        <v-card-actions style="text-align: center">
          <v-btn v-on:click="decrementItemCount(cartItem)" outlined large>Decrement</v-btn>
          <v-btn v-on:click="incrementItemCount(cartItem)" outlined large>Increment</v-btn>
          <v-btn v-on:click="removeItem(cartItem)" outlined large>Remove</v-btn>
        </v-card-actions>
      </v-card>
    </template>
    <v-card-actions style="text-align: center">
      <v-btn v-on:click="sale()" outlined large>Sale</v-btn>
    </v-card-actions>
  </div>
</template>

<script>
import Worker from "../worker/Worker.js";
import { isNullOrUndefined } from "util";

export default {
  name: "cart",
  data: () => ({
    selectedItemId: "",
    selectedVariantId: "",
    cartItems: []
  }),
  methods: {
    hasCampaign(cartItem) {
      return cartItem.hasCampaign;
    },
    decrementItemCount(cartItem) {
      var request = {
        productId: cartItem.productId,
        variantId: isNullOrUndefined(cartItem.variant)
          ? ""
          : cartItem.variant.id
      };
      Worker.methods
        .decrementItemCountOnCart(request)
        .then(res => (this.cartItems = res));
    },
    incrementItemCount(cartItem) {
      var request = {
        productId: cartItem.productId,
        variantId: isNullOrUndefined(cartItem.variant)
          ? ""
          : cartItem.variant.id
      };
      Worker.methods
        .incrementItemCountOnCart(request)
        .then(res => (this.cartItems = res));
    },
    removeItem(cartItem) {
      var request = {
        productId: cartItem.productId,
        variantId: isNullOrUndefined(cartItem.variant)
          ? ""
          : cartItem.variant.id
      };
      Worker.methods
        .removeFromCart(request)
        .then(res => (this.cartItems = res));
    },
    sale() {
      Worker.methods.sale();
    }
  },
  created() {
    Worker.methods.getUserCart().then(res => {
      console.log(res);
      this.cartItems = res;
    });
  }
};
</script>

<style>
</style>
