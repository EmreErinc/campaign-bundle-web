<template>
  <v-container grid-list-xl fluid>
    <v-layout wrap>
      <v-flex xs12 sm6>
        <v-form>
            <v-select
            v-model="product"
            :items="itemList"
            item-text="name"
            item-value="id"
            label="Related Product"
            persistent-hint
            return-object
            single-line
          ></v-select>

          <v-text-field class="input-group--focused" v-model="title" label="Title"></v-text-field>

          <v-layout justify-center>
            <v-date-picker v-model="startAt"></v-date-picker>
            <v-date-picker v-model="endAt"></v-date-picker>
          </v-layout>

          <v-text-field
            class="input-group--focused"
            type="number"
            v-model="cartLimit"
            label="Cart Limit"
          ></v-text-field>
          <v-text-field
            class="input-group--focused"
            type="number"
            v-model="campaignLimit"
            label="Campaign Limit"
          ></v-text-field>
          <v-text-field
            class="input-group--focused"
            type="number"
            v-model="requirement"
            label="Requirement"
          ></v-text-field>
          <v-text-field class="input-group--focused" type="number" v-model="gift" label="Gift"></v-text-field>

          <v-btn v-on:click="addCampaign()" class="ma-2" outlined color="indigo">Add Campaign</v-btn>
        </v-form>
      </v-flex>
      <v-flex xs12></v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Worker from "../worker/Worker.js";
import { VDaterange } from "vuetify-daterange-picker";
import "vuetify-daterange-picker/dist/vuetify-daterange-picker.css";

export default {
  name: "addCampaign",
  components: { VDaterange },
  data: () => ({
    select: { type: "Free", enum: "FREE" },
    items: [{ type: "Free", enum: "FREE" }, { type: "Paid", enum: "PAY" }],

    product: "",
    title: "",
    startAt: "",
    endAt: "",
    cartLimit: "",
    campaignLimit: "",
    requirement: "",
    gift: "",

    itemList: []
  }),
  methods: {
    addCampaign() {
      var request = {
        productId: this.product.id,
        title: this.title,
        startAt: new Date(this.startAt).valueOf(),
        endAt: new Date(this.endAt).valueOf(),
        cartLimit: this.cartLimit.valueOf(),
        campaignLimit: this.campaignLimit.valueOf(),
        requirement: this.requirement.valueOf(),
        gift: this.gift.valueOf()
      };

      Worker.methods.addCampaign(request);
    }
  },
  created() {
    Worker.methods.getItems().then(res => {
      this.itemList = res;
    });
  }
};
</script>

<style>
</style>
