<template>
  <div>
    <v-card flat class="mx-auto card-acomment" max-width="500">
      <v-list-item three-line>
        <v-list-item-avatar size="60">
          <v-img :src="require('../assets/images/avatar.jpg')"></v-img>
        </v-list-item-avatar>
        <v-list-item-content class="justify-space-between">
          <div class="overline">
            <span class="gray--text">Cao Dai Quang</span>
            <div class="d-block d-sm-flex mt-0 mt-sm-n3">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>
            <small class="grey--text">10 ngay truoc</small>
            </div>
            <div
              class="text-subtitle-2 text-lowercase grey--text text--darken-2"
            >
              Món ăn ngon quá &lt;3 rất phù hợp với người ít tiền như tôi 
            </div>
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card-acomment {
  display: table-cell;
}
</style>
