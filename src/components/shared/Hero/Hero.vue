
<template>
  <div class="hero mid around column row-md">
    <img :src="props.heroImage"
      class="hero--img col-lg-6 col-12">

    <div class="col-lg-6 center col-12 mt-xs-4 p-xs-2 mt-5">
      <slot />
    </div>
  </div>
</template>


<style scoped lang="scss">
@import "src/css/core/_mixin.scss";
.hero {
  z-index: 5;
  &--img {
    width: 500px;
    height: 350px;
    object-fit: contain;
    z-index: 10;
    order: 1;
    @include from-size(md) {
      width: 400px;
      height: 350px;
    }
    @include from-size(lg) {
      order: 0;
    }
  }
}
</style>

<script src="./Hero.ts" lang="ts"></script>
