<template>
  <video v-if="isVideo"
    ref="videoElement"
    class="player"
    :data-poster="previewImage"
    playsinline
    controls>
    <source :src="src"
      type="video/mp4">
  </video>

  <div v-else
    class="script-player"
    v-html="computedSrc" />
</template>


<style scoped lang="scss">
@import "src/css/core/_mixin.scss";
.player {
  width: 100%;
  min-width: 550px;
  max-height: 500px;
  min-height: 350px;
  // @include screen(tablet) {
  //   max-height: 350px;
  // }
  // @include screen(mobile) {
  //   min-width: 300px;
  //   min-height: 100%;
  //   max-height: 200px;
  // }
}
.script-player {
  width: 100%;
  min-width: 450px;
  // @include screen(mobile) {
  //   min-width: 300px;
  // }
}
</style>
<style>
.h_iframe-aparat_embed_frame {
  max-height: 500px !important;
}
</style>
<script src="./VideoPlayer.ts" lang="ts" />
