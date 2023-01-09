<template>
  <div class="container mid relative-position column row-web">
    <Hero :heroImage="heroImage"
      class="container--hero px-web-4">
      <div class="container--text column mid-tab mid-mob">
        <h1 class="my-1 mt-md-4">
          کیفیت نرم افزار
        </h1>
        <h1 class="my-1 container--text--main-title">
          فراز مبین ماهان
        </h1>
        <h2 class="my-2 my-xs-1 container--text--sub-description line-height mwt">
          {{ heroContent }}
        </h2>
      </div>
    </Hero>

    <div class="container--links column-web center">
      <a v-for="link in socialMediaLinks"
        :key="link.alt"
        class="block mx-web-0 m-1"
        target="_blank"
        :href="link.link">
        <img class="container--links--img"
          :src="link.icon">
      </a>
    </div>
  </div>
</template>


<style scoped lang="scss">
@import "src/css/partial/_mixin.scss";
.container {
  &--hero {
    @include screen(web) {
      width: 1700px;
    }
  }
  &--text {
    z-index: 10;
    color: white;
    text-align: justify;
    &--main-title {
      font-size: 2.2rem;
    }

    &--sub-description {
      font-size: 1rem;
      text-align: center;
      @include screen(web) {
        text-align: justify;
      }
    }
  }

  &--links {
    position: absolute;
    z-index: 10;
    top: 20px;
    @include screen(web) {
      top: -5px;
      left: 25px;
    }
    &--img {
      width: 18px;
      height: 18px;
    }
  }
}
</style>

<script src="./HeroLinkContainer.ts" lang="ts"></script>
