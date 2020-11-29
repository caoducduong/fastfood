<template>
  <div>
    <v-dialog persistent v-model="dialog" width="400">
      <v-card>
        <v-card-title class="d-flex justify-center red darken-4 white--text">
          {{ title.title }}
        </v-card-title>
        <div class="pa-5 d-flex justify-center">
          <p class="mb-0">{{ title.subTitle }}</p>
        </div>
        <v-card-actions class="py-3 d-flex justify-center">
          <v-btn class="mr-1 grey darken-1 white--text">Đồng ý</v-btn>
          <v-btn @click="close()" class="pl-1 red white--text darken-2">Quay lại</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      require: true
    },
    title: {
      type: Object,
      require: true
    }
  },
  methods: {
    close() {
      this.$emit('onClose')
    }
  }
};
</script>

<style scoped></style>
