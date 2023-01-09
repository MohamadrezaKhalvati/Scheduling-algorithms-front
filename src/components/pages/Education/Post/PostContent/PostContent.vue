<template>
  <div class="container text-primary">
    <template v-if="!skeleton">
      <div class="container--header mb-3">
        <h1 class="text-primary text-center-mob my-2">
          {{ post.title }}
        </h1>

        <div class="container--header--data between text-grey-8">
          <div class="row mid">
            <q-avatar>
              <img :src="post.presenterImage">
            </q-avatar>
            <span class="mx-1">
              نویسنده: {{ post.presenter }}
            </span>
          </div>

          <div class="row mid">
            <span>
              تاریخ رویداد: {{ post.date }}
            </span>
            <q-icon name="event"
              class="mx-1" />
          </div>
        </div>
      </div>

      <img :src="post.image"
        class="container--image">

      <div class="ck-content text-grey-9 mt-2"
        v-html="post.description" />

      <q-separator color="primary"
        inset />

      <div class="row my-2">
        <q-chip v-for="(tag) in post.tagList"
          :key="tag"
          class="bg-grey-4 text-primary px-2">
          {{ tag }}
        </q-chip>
      </div>
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
        height="10px"
        width="100%" />
      <q-skeleton v-for="i in 2"
        :key="i"
        class="my-1"
        type="text"
        height="10px"
        width="100%" />

      <q-separator color="primary"
        inset
        class="mt-3" />

      <div class="row my-2">
        <q-skeleton v-for="(i) in 4"
          :key="i"
          width="60px"
          height="25px"
          class="skeleton--chip-border-radius mx-1" />
      </div>
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
    @include to-size(mobile) {
      flex-direction: column;
      align-items: center;
    }
    &--data {
      display: flex;
      flex-direction: row;
      @include to-size(mobile) {
        flex-direction: column;
        align-items: center;
      }
      img {
        width: 40px;
        height: 40px;
        object-fit: cover;
      }
    }
  }
  &--image {
    width: 100%;
    height: 450px;
    max-width: 800px;
    object-fit: cover;
    @include to-size(mobile) {
      height: 200px;
    }
  }
  .skeleton--chip-border-radius {
    border-radius: 30px;
  }
}
</style>
<script src="./PostContent.ts" lang="ts" />
