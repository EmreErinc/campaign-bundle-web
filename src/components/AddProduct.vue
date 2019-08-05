<template>
  <v-container grid-list-xl fluid>
    <v-layout wrap>
      <v-flex xs12 sm6>
        <v-form>
          <v-text-field class="input-group--focused" v-model="name" label="Name"></v-text-field>
          <v-text-field class="input-group--focused" v-model="description" label="Description"></v-text-field>
          <v-text-field class="input-group--focused" type="number" v-model="price" label="Price"></v-text-field>

          <v-select
            v-model="cargoType"
            :items="items"
            item-text="type"
            item-value="enum"
            label="Cargo Type"
            persistent-hint
            return-object
            single-line
          ></v-select>

          <v-text-field class="input-group--focused" v-model="cargoCompany" label="Cargo Company"></v-text-field>
          <v-text-field class="input-group--focused" type="number" v-model="stock" label="Stock"></v-text-field>

          <v-btn v-on:click="addProduct()" class="ma-2" outlined color="indigo">Add Product</v-btn>
        </v-form>
      </v-flex>
      <v-flex xs12></v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Worker from "../worker/Worker.js";

export default {
  name: "addProduct",
  data: () => ({
    select: { type: "Free", enum: "FREE" },
    items: [{ type: "Free", enum: "FREE" }, { type: "Paid", enum: "PAY" }],

    name: "",
    description: "",
    price: "",
    cargoType: "",
    cargoCompany: "",
    stock: "",
    variants: []
  }),
  methods: {
    addProduct() {
      var request = {
        name: this.name,
        description: this.description,
        price: this.price,
        cargoType: this.cargoType.enum,
        cargoCompany: this.cargoCompany,
        stock: this.stock,
        variants: this.variants
      };

      Worker.methods.addItem(request);
    }
  }
};
</script>

<style>
</style>
