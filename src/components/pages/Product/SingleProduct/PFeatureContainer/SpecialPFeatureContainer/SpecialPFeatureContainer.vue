<template>
  <div class="container column relative-position p-lg-4 p-md-3 p-1 pt-0">
    <Title tag="h2"
      class="mid container--title my-3 center"
      title="ویژگی های منحصر به فرد" />

    <div class="row-r between">
      <img src="/images/features.svg"
        class="col-lg-4 col-12 mid container--image p-2">

      <div class="row col-lg-8 col-12">
        <div v-for="feature of props.specialFeatures"
          :key="feature.title"
          class="col-lg-6 col-md-6 col-xs-12 container--feature p-1 text-primary">
          <img v-if="feature.image"
            class="my-1 container--feature--icons"
            :src="feature.image">

          <h3 class="text-bold my-1 container--feature--title center start-md title-font-size">
            {{ feature.title }}
          </h3>

          <h4 class="my-1 container--feature--description">
            {{ feature.description }}
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
@import "./../../../../../../css/core/_mixin.scss";
.title-font-size {
font-size: 18.2px;
}
.container {
  z-index: 10;
  &--title {
    max-width: 750px;
    @include from-size(md) {
      max-width: 100%;
    }
  }
  &--feature {
    @include from-size(xs) {
      align-items: center;
      text-align: center;
    }
    &--description {
      font-size: 1rem;
      text-align: justify;
    }
    &--icons {
      width: 50px;
      height: 40px;
    }
  }
  &--image {
    max-height: 300px;
    @include from-size(md) {
      max-height: 250px;
    }
  }
}
</style>
<script src="./SpecialPFeatureContainer.ts" lang="ts" />
