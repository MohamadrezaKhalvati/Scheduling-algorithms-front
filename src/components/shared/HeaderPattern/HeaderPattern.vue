<template>
  <img :src="header"
    class="container header--image ">
</template>


<style scoped lang="scss">
@import "src/css/core/_mixin.scss";
.container {
  position: absolute;
  top: calc(var(--header-height) * -1);
  width: 100%;
  min-height: 180px;
  max-height: 250px;
  object-fit: cover;
  object-position: bottom;
  z-index: 1;
}
</style>

<script src="./HeaderPattern.ts" lang="ts"></script>
