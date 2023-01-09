
<template>
  <div class="container p-2 relative-position">
    <template v-if="!skeleton">
      <img src="/images/shooting.png"
        class="container--image">

      <div class="text-white p-2 container--box column">
        <Title tag="h3"
          titleClass="mb-1 mt-0"
          class="my-2 my-md-2 my-xs-2 text-white column top"
          title="ارائه" />

        <h4 class="my-1 text-accent">
          {{ bannerData.title }}
        </h4>

        <span class="text-justify container--box--description">
          {{ shortenedDescription }}
        </span>

        <div class="row center mid my-2">
          <q-btn rounded
            :to="bannerData.link"
            class="button"
            label="بیشتر" />
        </div>
      </div>
    </template>

    <template v-else>
      <q-skeleton height="250px" />
    </template>
  </div>
</template>

<style scoped lang="scss">
@import "src/css/partial/_mixin.scss";
.container {
  $banner-width: 300px;
  background-color: #4626a9;
  background-image: url("/images/pattern.svg");

  &--image {
    transform: translateY(-50%);
    top: 50%;
    width: $banner-width;
    left: 0px;
    z-index: 11;
    position: absolute;
    @include screen(tablet) {
      left: 0;
      top: 50px;
      width: 130px;
    }
    @include screen(mobile) {
      left: 0;
      top: 50px;
      width: 120px;
    }
  }

  &--box {
    border: white 3px dashed;

    &--description {
      @include screen(web) {
        max-width: calc(100% - #{$banner-width});
      }
    }

    .button {
      background: linear-gradient(to right, #f27255, #fec440);
      @include screen(mobile) {
        width: 100%;
      }
    }
  }
}
</style>
<style scoped lang="scss">
@import "src/css/partial/_mixin.scss";
</style>
<script src="./Banner.ts" lang="ts" />
