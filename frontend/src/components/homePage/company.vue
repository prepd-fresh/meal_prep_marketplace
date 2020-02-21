<template>
  <div>
    <h4>{{idNumber}} Example of comapny</h4>
    <b-card
      img-src="https://placekitten.com/300/300"
      img-alt="Card image"
      img-left
      class="mb-3"
      @click="$bvModal.show(`bv-modal-{{idNumber}}`)"
    >
      <b-card-text>Some quick example text to build on the card and make up the bulk of the card's content.</b-card-text>
    </b-card>

    <template>
      <b-modal :id="'bv-model-' + idNumber" hide-footer>
        <template v-slot:modal-title>
          {{idNumber}}
          <code>$bvModal</code> Methods
        </template>
        <div class="d-block text-center">
          <h3>Hello From This Modal!</h3>
        </div>
        <b-button class="mt-3" block @click="$bvModal.hide(`bv-modal-{{idNumber}}`)">Close Me</b-button>
      </b-modal>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    idNumber: Number
  },
  methods: {}
};
</script>

<style>
</style>