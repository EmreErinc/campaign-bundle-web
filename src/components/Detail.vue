<template>
  <div class="grey lighten-3">
    <v-card dark color="blue-grey darken-2">
      <v-container grid-list-md text-center>
        <v-layout wrap>
          <v-flex style="display: inline-flex; justify-content: center" d-flex xs12>
            <v-card-title primary-title>
              <div>
                <span class="headline">{{item.name}}</span>
                <span class="addition">Description : {{item.description}}</span>
              </div>
            </v-card-title>
            <v-card-title style="text-align: end">
              <v-card-text>
                <span>Price : {{item.price}} TL</span>
              </v-card-text>
              <v-card-text v-show="hasCampaign(item)">
                <span>Take {{item.badge.requirement}} Gift {{item.badge.gift}}</span>
              </v-card-text>
            </v-card-title>
          </v-flex>
        </v-layout>
      </v-container>

      <v-container grid-list-md text-center>
        <v-layout wrap>
          <v-flex v-for="(variant) in item.variants" :key="`2${variant}`">
            <v-card>
              <v-card-actions style="text-align: center; justify-content: center">
                <v-btn style="height: auto" v-on:click="selectVariant(variant.id)" outlined medium>
                  <!-- <span class="addition">Stock : {{variant.stock}}</span> -->
                  <!-- <br /> -->
                  <v-flex v-for="(variantSpec) in variant.variantSpecs" :key="`${variantSpec}`">
                    <span
                      align-center
                      justify-end
                      class="addition"
                    >{{variantSpec.specDetail}} - {{variantSpec.specData}}</span>
                  </v-flex>
                </v-btn>
              </v-card-actions>
            </v-card>
            <v-divider light></v-divider>
          </v-flex>
        </v-layout>
      </v-container>

      <v-layout>
        <v-flex xs4 offset-xs4>
          <v-text-field v-model="count" type="number" label="Count" value="1"></v-text-field>
        </v-flex>
      </v-layout>

      <v-card-actions v-show="isUser()" style="text-align: center">
        <v-flex xs4 offset-xs4>
          <v-btn v-on:click="addToCart" outlined large>Add To Cart</v-btn>
        </v-flex>
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
    isUser() {
      return this.$store.getters.getRole == "USER" ? true : false;
    },
    hasCampaign(item) {
      return !isNullOrUndefined(item.badge.gift);
    },
    selectVariant(id) {
      this.variantId = id;
    },
    addToCart() {
      var request = {
        productId: this.item.id,
        variantId: this.variantId,
        count: this.count == "" ? 1 : this.count
      };

      var isUser = this.$store.getters.getRole == "USER" ? true : false;
      if (isUser == true) {
        Worker.methods.addItemToCart(request);
      } else {
        alert("You can not buy this product. You have to an user account");
        this.$router.push("/login");
      }
    }
  },
  created() {
    Worker.methods.getItemDetail(this.$route.params.id).then(res => {
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
button:focus {
  background: grey;
}
</style>
