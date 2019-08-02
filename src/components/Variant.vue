<template>
  <div>
    <v-card>
      <v-card-actions style="text-align: center">
        <v-btn style="height: auto" v-on:click="selectVariant" outlined medium>
          <span class="addition">Stock : {{variant.stock}}</span><br/>
          <template v-for="(variantSpec) in variant.variantSpecs" xs3>
            <span
              align-center
              justify-end
              class="addition"
              :key="`${variantSpec}`"
            >{{variantSpec.specDetail}} - {{variantSpec.specData}}</span></br>
          </template>
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-divider light></v-divider>
  </div>
</template>

<script>

export default {
  name: "variant",
  props: {
    variant: { type: Object }
  },
  methods: {
    //
    selectVariant(event) {
      console.log("clicked " + event);
      //this.$emit("clicked", id);
    }
  }
};
</script>

<style>
.addition {
  font-size: 12px;
}
</style>
