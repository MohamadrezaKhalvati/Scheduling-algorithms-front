<template>
  <div v-if="!skeleton && card"
    class="container evenly text-primary">
    <div class="container--description-block col-lg-7 col-12">
      <div v-for="(content) of contents"
        :key="content.question">
        <Title tag="h2"
          class="center-mob center-tab"
          :title="content.question" />

        <div :class="computedTextClass"
          v-html="content.answer" />
      </div>
    </div>

    <q-card class="no-wrap container--card column col-lg-5 col-12 p-0">
      <img :src="card.image"
        class="container--card--image">

      <div class="column between">
        <div class="p-2">
          <h1 class="text-center">
            {{ card.title }}
          </h1>

          <h2 class="text-justify subtitle"
            v-html="card.description" />
        </div>

        <div class="px-xs-3 px-4">
          <div v-for="feature of card.features"
            :key="feature.label"
            class="row mt-1 mid">
            <q-icon :name="feature.icon"
              class="mx-1" />
            <span>
              {{ feature.label }} : {{ feature.value }}
            </span>
          </div>
        </div>

        <div class="center py-3">
          <q-chip class=" text-white"
            color="primary"
            rounded>
            <template v-if="card.status == 'در حال ضبط'">
              <span>
                Rec
              </span>

              <span class="dot mx-1" />

              <span>
                در حال ضبط است
              </span>
            </template>

            <template v-else>
              <span>
                ضبط شده است
              </span>
            </template>
          </q-chip>
        </div>
      </div>
    </q-card>
  </div>

  <div v-else
    class="container between">
    <div class="container--description-block column col-lg-7 col-12">
      <div v-for="i of 2"
        :key="i"
        class="column my-3">
        <Title titleClass="my-1"
          class="column position center-text"
          :skeleton="true" />

        <q-skeleton width="100%"
          height="10px"
          class="my-1" />

        <q-skeleton width="80%"
          height="10px"
          class="my-1" />
      </div>
    </div>

    <q-skeleton class="container--card col-lg-5 col-12 center"
      type="rect" />
  </div>
</template>


<style scoped lang="scss">
@import "src/css/partial/_mixin.scss";
.container {
  &--description-block {
    order: 1;
    @include from-size(lg) {
      order: 0;
    }
  }
  &--card {
    border-radius: 10px !important;
    transform: translateY(-100px);
    overflow: hidden;
    min-height: 550px;
    max-height: 830px;
    @include from-size(lg) {
      max-width: 400px;
    }
    @include from-size(md) {
      max-width: 500px;
    }
    &--image {
      height: 300px;
      width: 100%;
      object-fit: cover;
      @include to-size(xs) {
        height: 200px;
      }
    }
    &--button {
      background: #9e217d;
    }
  }
  .dot {
    width: 6px;
    height: 6px;
    background: white;
    border-radius: 50%;
  }
}
</style>


<script src="./CourseDetail.ts" lang="ts" />
