<template>
  <div class="container">
    <template v-if="!skeleton && present">
      <div class="container--header mb-3">
        <h1 class="text-primary text-center-mob my-2">
          {{ present.title }}
        </h1>

        <div class="container--header--data text-grey-8">
          <!-- <div class="row mid">
            <q-icon name="person"
              class="ml-1" />
            <span class=" ml-2">
              ارائه دهنده: {{ present.presenter }}
            </span>
          </div> -->

          <div class="row mid">
            <q-icon name="event"
              class="mx-1" />

            <span>
              تاریخ ارائه: {{ present.date }}
            </span>
          </div>
        </div>
      </div>

      <div class="container--video column">
        <div class="full-width">
          <VideoPlayer v-bind="plyInput"
            class="video-player" />
        </div>

        <div class="row mid center column-mob my-2">
          <q-btn rounded
            text-color="white"
            class="container--video--button m-1"
            label="دانلود اسلایدها"
            :disable="!present.slideLink"
            @click="downloadFile(present.slideLink)" />

          <q-btn v-if="downloadLinkNotEmbedLink"
            rounded
            text-color="white"
            class="container--video--button m-1"
            label="دانلود ارائه"
            @click="downloadFile(present.downloadLink)" />
        </div>
      </div>

      <Title tag="h3"
        class="my-1 center-mob"
        title="نکات کلیدی" />
      <span class="text-justify center-mob p-1"
        v-html="present.presentPoints" />

      <Title tag="h3"
        class="my-1 center-mob"
        title="توضیحات ارائه" />
      <span class="text-justify center-mob p-1"
        v-html="present.description" />

      <Title tag="h3"
        class="my-1 center-mob"
        title="خلاصه ارائه" />
      <span class="text-justify center-mob p-1"
        v-html="present.summary" />
    </template>

    <template v-else>
      <div class="container--header my-3 my-xs-2">
        <q-skeleton class="my-2"
          type="text"
          height="8px"
          width="150px" />

        <div class="container--header--data text-grey-8">
          <q-skeleton class="ml-2 ml-xs-0"
            type="text"
            height="8px"
            width="80px" />

          <q-skeleton type="text"
            height="8px"
            width="80px" />
        </div>
      </div>

      <div class="container--video px-xs-2 column mid center">
        <q-skeleton class="video mb-2 full-width"
          height="400px" />

        <div class="row mid column-mob my-xs-2">
          <q-skeleton class="my-xs-1 mx-1"
            type="rect"
            width="80px"
            height="30px" />
          <q-skeleton class="mx-1"
            type="rect"
            width="100px"
            height="30px" />
        </div>
      </div>

      <div class="column">
        <Title v-for="i in 3"
          :key="i"
          :skeleton="skeleton"
          class="column my-1 text-primary" />
        <q-skeleton class="mt-2 text-justify"
          type="text"
          width="100%" />
        <q-skeleton class="text-justify"
          type="text"
          width="100%" />
        <q-skeleton class="text-justify"
          type="text"
          width="100%" />
      </div>
    </template>
  </div>
</template>


<style scoped lang="scss">
@import "src/css/partial/_mixin.scss";
.container {
  z-index: 10;
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
    }
  }
  &--video {
    .video-player {
      width: 100%;
    }
    &--button {
      background: linear-gradient(to right, #fec440, #f27255);
    }
  }
}
</style>
<script src="./PresentaionContent.ts" lang="ts" />
