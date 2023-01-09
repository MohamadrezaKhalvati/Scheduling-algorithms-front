<template>
  <img :src="acceptedCloud"
    class="cloud"
    :class="cloudClass">
</template>


<style scoped lang="scss">
@import "src/css/core/_mixin.scss";
.cloud {
  transition: transform 0.5s;
}
.transform {
  transform: translate(5px, 5px);
}
</style>

<script src="./CloudImage.ts" lang="ts"></script>
