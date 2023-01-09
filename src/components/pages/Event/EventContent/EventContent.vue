<template>
  <div class="container">
    <template v-if="!skeleton">
      <div class="container--header mb-3">
        <h1 class="text-primary text-center-mob my-2">
          {{ event.title }}
        </h1>

        <div class="container--header--data between text-grey-8">
          <div class="row mid">
            <q-avatar>
              <img :src="event.presenterImage">
            </q-avatar>
            <span class="mx-1">
              توسط: {{ event.presenter }}
            </span>
          </div>

          <div class="row mid">
            <span>
              تاریخ رویداد: {{ event.date }}
            </span>
            <q-icon name="event"
              class="mx-1" />
          </div>
        </div>
      </div>

      <img :src="event.image"
        class="container--image">

      <div class="ck-content my-3"
        v-html="event.description" />
    </template>

    <template v-else>
      <div class="container--header my-3 my-xs-2">
        <q-skeleton class="my-2"
          type="text"
          height="15px"
          width="220px" />

        <div class="container--header--data between text-grey-8">
          <q-skeleton class="ml-2 ml-xs-0"
            type="text"
            height="8px"
            width="80px" />

          <q-skeleton type="text"
            height="8px"
            width="80px" />
        </div>
      </div>

      <q-skeleton type="rect"
        class="container--image" />

      <q-skeleton class="mt-3"
        type="text"
        width="100%" />
      <q-skeleton v-for="i in 2"
        :key="i"
        class="my-1"
        type="text"
        width="100%" />
    </template>
  </div>
</template>


<style scoped lang="scss">
@import "src/css/partial/_mixin.scss";
.container {
  z-index: 10;
  font-size: 16px;
  &--header {
    display: flex;
    flex-direction: column;
    @include screen(mobile) {
      flex-direction: column;
      align-items: center;
    }
    &--data {
      display: flex;
      flex-direction: row;
      @include screen(mobile) {
        flex-direction: column;
        align-items: center;
      }
      img {
        width: 40px;
        height: 40px;
      }
    }
  }
  &--image {
    width: 100%;
    height: 450px;
    object-fit: contain;
    @include screen(mobile) {
      height: 200px;
    }
  }
}
</style>
<script src="./EventContent.ts" lang="ts" />
