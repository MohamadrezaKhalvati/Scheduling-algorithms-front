<template>
  <div class="container column mid">
    <Title tag="h2"
      class="center"
      :title="content.title" />

    <p class="container--description index mid-title justify-text text-grey-7 mt-3">
      {{ content.description }}
    </p> 

    <q-timeline :layout="layout"
    side="right"
      class="text-grey-9 container--timeline"
      color="secondary">
      
      <q-timeline-entry v-for="time of times"
        :key="time.title"
        :side="time.side"
        :color="time.color"
        class="index mid-title subtitle"
        :title="time.title">
        <h4 :class="time.class"
          class="mwt subtitle my-1 text-justify px-2">
          {{ time.description }}
        </h4>
      </q-timeline-entry>

    </q-timeline> 
  </div>
</template>

<style scoped lang="scss">
@import "src/css/core/_mixin.scss";
.container {

  .index {
    z-index: 20;
  }
  &--description {
    font-size:18.2px;
    @include from-size(xs) {
      text-align: center;
    }
  }
  &--timeline {
    font-size: 14px;

    &--float {
      font-size: 14px;

      @include from-size(lg) {
        float: left;
      }
      @include to-size(md) {
        float: right;
      }
    }
  }
}
</style>
<script src="./TimeLine.ts" lang="ts" />
