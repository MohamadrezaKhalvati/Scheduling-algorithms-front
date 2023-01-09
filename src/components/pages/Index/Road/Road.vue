<template>
  <div class="container column mid relative-position">
    <Title title="چطور کار می کنیم؟"
      tag="h2"
      class="container--title" />

    <img class="fit container--path--background untouchable"
      src="/images/path_bg.png">

    <img
      class="container--path absolute-center"
      src="/images/path.png">
  </div>
</template>


<style scoped lang="scss">
@import "src/css/partial/_mixin.scss";
.container {
  color: white;
  @include screen(mobile) {
    color: $primary;
  }
  &--title {
    position: absolute;
    color: white;
    top: 15px;
    @include screen(mobile) {
      position: relative;
      color: $primary;
      top: 0px;
    }
    @include screen(tablet) {
      top: 0px;
    }
  }
  &--path--background {
    transform: translateY(30px) scale(1.2);
    @include screen(mobile) {
      transform: translateY(10px) scale(1.1);
    }
  }
  &--path {
    width: 98%;
    max-height: 450px;
    object-fit: contain;
    @include screen(tablet) {
      top: 56%;
    }
    @include screen(mobile) {
      top: 70%;
    }
  }
}
</style>

<style lang="scss">
</style>
<script src="./Road.ts" lang="ts" />
