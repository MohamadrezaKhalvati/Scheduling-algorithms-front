
<template>
  <div class="relative-position container">
    <img src="/images/waterfall_bg.svg"
      class="absolute container--background untouchable">

    <div class="relative-position max-container row center">
      <CloudImage class="container--cloud right untouchable" />

      <CloudImage class="container--cloud left untouchable" />

      <Title tag="h2"
        title="ویژگی های منحصر به فرد"
        class="mid container--header" />

      <div class="row-r text-primary around index">
        <img src="/images/features.svg"
          class="my-2 container--image col-lg-3 col-12">

        <div class="row evenly col-lg-9 col-12">
          <div v-for="feature of props.features"
            :key="feature.title"
            class="col-lg-5 col-md-6 col-xs-12  container--feature my-3 column-md center-md column-xs center-xs">
            <img v-if="feature.image"
              class="container--feature--icons"
              :src="feature.image">

            <h3 class="my-1 container--feature--title mid-title text-center-mob">
              {{ feature.title }}
            </h3>

            <h4 class="my-0 container--feature--description  ">
              {{ feature.description }}
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
@import "src/css/core/_mixin.scss";
.container {
  &--background {
    width: 100% !important;
    @include from-size(md) {
      height: 100%;
      object-fit: cover;
    }
    @include from-size(xs) {
      height: 100%;
      object-fit: cover;
    }
  }
  &--cloud {
    max-width: 250px;
    top: 150px;
    @include from-size(xs) {
      max-width: 100px;

    }
    position: absolute;
    &.right {
      right: -100px;
      bottom: 100px;
    }
    &.left {
      left: -110px;
      top: 340px;
    }
  }

  &--header {
    max-width: 700px;
   @include from-size(md) {
      max-width: 100%;

    }
  }
  &--feature {
    align-items: center;
    @include from-size(lg) {
      align-items: flex-start;
    }


    &--title {
      font-size: 18.2px;
      text-align:right;
    }
 
    &--description {
      font-size: $body-font-size;
       text-align: justify;
       width: 80%;
      
      @include to-size(xs) {
        text-align: center;
      }
    
    }
    &--icons {
      width: 50px;
      height: 40px;
      object-fit: contain;

    }
  }
  .index {
    z-index: 10;
  }
  &--image {
    max-height: 300px;
  }
}
</style>
<script src="./SFeatureContainer.ts" lang="ts" />
