<template>
  <div class="container column mid relative-position">
    <Title title="چطور کار می کنیم؟"
      tag="h2"
      class="container--title" />

    <img class="fit container--path--background untouchable"
      src="/images/path_bg.png">

    <img class="container--path absolute-center"
      src="/images/path.png">
  </div>
</template>


<style scoped lang="scss">
@import "src/css/core/_mixin.scss";
.container {
  color: white;
  @include from-size(xs) {
    color: $primary;
  }

  &--title {
    position: absolute;
    color: white;
    top: 15px;

    @include from-size(xs) {
        position: relative;
        color: $primary;
        top: -20px;
    }

    @include from-size(md) {
        top: 75px;
        color:white
    }

  }
  &--path--background {
    transform: translateY(30px) scale(1.2);
    
  }
  &--path {
    width: 98%;
    max-height: 450px;
    object-fit: contain;
    @include from-size(md) {
      top: 56%;
    }
    @include from-size(xs) {
      top:70%;
    }
  }
}
</style>

<style lang="scss">
</style>
<script src="./Road.ts" lang="ts" />
