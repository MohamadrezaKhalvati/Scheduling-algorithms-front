<template>
  <div class="container column mid relative-position mt-5">
    <CloudImage class="container--cloud right untouchable" />

    <CloudImage class="container--cloud left-bottom untouchable" />

    <Title tag="h2"
      title="چه کار هایی کرده ایم ؟"
      class="column mid my-1 text-primary" />

<q-carousel v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      infinite
      control-color="accent"
      animated
      :navigation="size.lg"
      padding
      arrows
      class="container--carousel bg-transparent my-5 fit mt-3">

      <q-carousel-slide v-for="(set, index) of customProjects"
        :key="index"
        :name="index"
        class="row mb-3 center ">
         <div v-for="(project, innerIndex) of set"
          :key="project.id"
          class="col-lg-4 col-12 my-lg-2 center mt-2"> 
          <q-card class="card shadow-5 column around mid px-2"
            :class="{'transform': innerIndex == 1 && set.length == 3}">
            <img :src="project.image"
              class="card--image">

            <div class="text-center column center mid">
              <span class="carousel--title text-grey-7">
                {{ project.category }}
              </span>

              <div class="dot bg-accent my-1" />

              <div class="subtitle text-grey-10">
                {{ project.title }}
              </div>
            </div> 

            <q-btn label="بیشتر بخوانید"
              color="accent"
              rounded
              dense
              :to="project.link"
              icon="arrow_forward"
              class="px-1" />
          </q-card> 
        </div></q-carousel-slide>
    </q-carousel> 
  </div>
</template>


<style scoped lang="scss">
@import "src/css/core/_mixin.scss";
.container {
  
  &--cloud {

    max-width: 300px;
    
    @include from-size(md) {
      max-width: 250px;
    }
    @include from-size(xs) {
      max-width: 150px;
    }
    &.right {
      position: absolute;
      right: -110px;
      top: 100px;
    }
    &.left-bottom {
      left: -110px;
      bottom: -70px;
    }
  }
  &--carousel {
    .card {
      border-radius: 15px;
      max-width: 250px;
      min-width: 250px;
      height: 330px;
      @include from-size(xs) {
        min-width: 265px;
        max-width: 100%;
      }
      &--image {
        min-height: 100px;
        max-height: 150px;
        object-fit: contain;
        transform: scale(1.25) translateY(-10px);
      }
      .carousel--title {
        font-size: calc(0.8rem);
      }
    }
    .transform {
      transform: scale(1.1);
    }
  }
  .dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
  }
}
</style>

<style lang="scss">
@import "src/css/core/_mixin.scss";
.container--carousel {
  .q-btn__content {
    font-size: 12px !important;
  }
  .scroll {
    overflow: hidden !important;
  }
  .q-carousel__slides-container {
    width: 100%;
  }
}
</style>
<script src="./ProductCarouselContainer.ts" lang="ts" />

