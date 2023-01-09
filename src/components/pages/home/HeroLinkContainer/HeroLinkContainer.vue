<template>
  <div class="container mid relative-position column row-lg">

    <div class="container--links column-lg row-xs center ">
      <a v-for="link in socialMediaLinks" :key="link.alt" class="block mx-lg-1 mb-2 ml-1 mt-1" target="_blank"
        :href="link.link">
        <img class="container--links--img" :src="link.icon">
      </a>
    </div>

    <Hero :heroImage="heroImage" class="container--hero px-lg-4 ">
      <div class="container--text column ">
        <h1 class="container--text--main-title my-1 mt-md-4 ">
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

    
  </div>
</template>


<style scoped lang="scss">
@import "src/css/core/_mixin.scss";

.container {
  &--hero {
    @include from-size(lg) {
      width: 1700px;
    }
  }

  &--text {
    z-index: 10;
    color: white;
    text-align: justify;

    &--main-title {
      font-size: 2.2rem;
      @include from-size(xs){
       text-align:center ;
      }
     
      @include from-size(lg){
        text-align: right;
      }
      }

   
    &--sub-description {
      font-size: 1rem;
      text-align: center;

      @include from-size(lg) {
        text-align: justify;
      }
      @include from-size(xs){
        text-align: center;
      }
      
    }
  }

  &--links {
    z-index: 10;

    @include from-size(lg) {
      position: absolute;
      top: -4px;
      left: 13px;
    }

    &--img {
      width: 18px;
      height: 18px;

      @include to-size(lg){
        margin-top:15px;
        margin-right: 4px;
        margin-left: 4px;

      }
    }
  }
}
</style>

<script src="./HeroLinkContainer.ts" lang="ts"></script>
