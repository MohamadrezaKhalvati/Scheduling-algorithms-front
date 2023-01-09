<template>
  <q-card class="container column mid text-primary p-2">
    <img :src="product.image"
      class="container--image">

    <span class="title my-1 text-bold text-center">
      {{ product.title }}
    </span>

    <p class="text-justify line-height"
      v-html="description" />

    <TechnologyContainer :edgeHightWidth="40"
      :hideTitle="true"
      class="full-width"
      :techs="product.techs" />

    <q-btn :to="productLink"
      label="بیشتر بخوانید"
      color="primary"
      outline
      size="md"
      icon="arrow_forward"
      class="shadow-2 container--button" />
  </q-card>
</template>


<style scoped lang="scss">
@import "./../../../../css/core/_mixin.scss";
.container {
  justify-content: space-between;
  &--image {
    min-width: 200px;
    max-width: 200px;
    min-height: 200px;
    max-height: 200px;
    object-fit: contain;
  }
  &--button {
    width: 100%;
  }
}
.title {
  font-size: 1.5rem;
}
.line-height {
  line-height: 28px;
}
</style>

<script src="./ProductCard.ts" lang="ts"></script>
