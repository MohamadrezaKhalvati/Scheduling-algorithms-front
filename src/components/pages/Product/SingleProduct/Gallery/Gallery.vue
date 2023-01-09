<template>
  <div class="container relative-position column">
    <CloudImage :index="2"
      class="container--cloud untouchable" />

    <Title tag="h2"
      class="mid"
      :title="title" />

      <q-carousel v-model="slide"
        animated
        arrows
        transition-prev="scale"
        transition-next="scale"
        swipeable
        navigation
        infinite
        class="full-height bg-transparent container--carousel row col-12 center mid"
        control-color="primary">
        <q-carousel-slide v-for="(set, index) of customImages"
          :key="set[0].src"
          :name="index"
          class="row evenly">
          <img v-for="image of set"
            :key="image"
            :src="image.src"
            class="container--carousel--image m-1"
						@click="showDialog(image.src)">
        </q-carousel-slide>
      </q-carousel>

  </div>
</template>


<style scoped lang="scss">
@import "./../../../../../css/core/_mixin.scss";
.container {
  z-index: 10;
  &--cloud {
    max-width: 250px;
    position: absolute;
    top: 340px;
    @include from-size(xs) {
      max-width: 100px;
    }
  }
  &--carousel {
    width: 100%;
    max-width: 1000px;
    min-height: 500px;
    @include to-size(md) {
      min-height: 280px;
    }
    @include to-size(md) {
      min-height: 100%;
      max-width: 300px;
    }
    &--image {
      min-width: 300px;
      max-width: 300px;
      max-height: 200px;
      min-height: 200px;
      object-fit: contain;
      transition: transform 1s;
      &:hover {
        transform: scale(1.06);
      }
    }
  }
}
</style>
<style>
  html, body {
    scroll-behavior: auto;
  }
</style>
<script src="./Gallery.ts" lang="ts" />
