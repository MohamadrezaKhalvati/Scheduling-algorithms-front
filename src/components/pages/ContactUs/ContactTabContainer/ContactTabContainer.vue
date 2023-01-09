<template>
  <div class="contact text-primary overflow-hidden">
    <h1 class="contact--header">
      راه های ارتباطی با ما
    </h1>

    <div class="contact--tab row evenly no-wrap">
      <div v-for="(item, index) of imageData"
        :key="item.title"
        class="column mid cursor-pointer p-xs-1 relative-position"
        @click="changeContent(index)">
        <img src="/images/contact/tab_bg.svg"
          :class="{'contact--md--active-background': index == activeItemIndex}"
          class="contact--md--background absolute">

        <img :src="item.image"
          :class="{'contact--md--active': index == activeItemIndex}"
          class="contact--md--image">

        <span class="my-3 my-xs-2 title">
          {{ item.title }}
        </span>
      </div>
    </div>

    <transition appear
      mode="out-in"
      class="fit"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut">
      <ContactForm v-if="activeItemIndex == 0"
        :container="container"
        class="contact--data max-container"
        :form="form"
        @submit="$emit('submit')" />

      <PhoneContact v-if="activeItemIndex == 1"
        class="contact--data max-container" />
    </transition>
  </div>
</template>


<style scoped lang="scss">
@import "src/css/partial/_mixin.scss";
.contact {
  &--header {
    margin-top: 200px;
    @include to-size(md) {
      margin-top: 150px;
    }
    @include to-size(xs) {
      margin-top: 100px;
      text-align: center;
    }
  }
  &--tab {
    &--image {
      width: 100px;
      height: 100px;
      transition: transform 1s;
      @include from-size(lg) {
        width: 150px;
        height: 150px;
      }
    }
    &--background {
      display: none;
      opacity: 0.8;
      top: 0px;
      transform: scale(1.4);
      @include to-size(xs) {
        transform: scale(1.1);
      }
    }
    &--active {
      transform: skewX(12deg);
    }
    &--active-background {
      display: block;
    }
  }
  &--data {
    max-width: 900px;
  }
}
</style>
<script src="./ContactTabContainer.ts" lang="ts" />
