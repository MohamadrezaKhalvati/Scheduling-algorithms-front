<template>
  <div class="container center">
    <a v-for="media of inputs"
      :key="media.src"
      :href="media.link"
      target="_blank">
      <img :src="media.src"
        class="container--link mx-1">
    </a>
  </div>
</template>


<style scoped lang="scss">
@import "src/css/partial/_mixin.scss";
.container {
  &--link {
    width: 35px;
    @include to-size(xs) {
      width: 30px;
    }
  }
}
</style>
<script src="./SocialMediaContainer.ts" lang="ts" />
