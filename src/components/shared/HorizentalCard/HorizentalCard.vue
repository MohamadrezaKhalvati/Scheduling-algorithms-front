<template>
  <div class="container">
    <template v-if="!skeleton && card">
      <router-link :to="card.link">
        <q-card class="container--card row overflow-hidden">
          <div class="col-lg-4 col-12 px-0 mid-lg">
            <img :src="cardImage"
              class="container--card--image block ">
          </div>

          <div class="container--card--data full-width p-2 col-lg-8 col-12 column between">
            <div class="column">
              <span class="title text-bold container--card--data--title">
                {{ card.title }}
              </span>

              <span class="my-1 container--card--data--description text-justify"
                v-html="description" />
            </div>

            <div class="row between center-mob text-grey-7">
              <div class="row mid">
                <img :src="cardAvatar"
                  class="container--card--data--avatar">

                <span class="mx-1 container--card--data--subtitle">
                  {{ card.author }}
                </span>
              </div>

              <!-- <div class="row mid my-xs-1">
                <span class="m-1 container--card--data--subtitle">
                  {{ card.duration }}
                </span>

                <q-icon :name="card.durationIcon" />
              </div> -->
            </div>
          </div>
        </q-card>
      </router-link>
    </template>

    <template v-else>
      <q-card class="container--card row">
        <q-skeleton type="rect"
          class="container--card--image col-lg-4 col-12 px-0"
          width="100%" />

        <div class="container--card--data col-lg-8 col-12 p-2 column between">
          <div class="column">
            <q-skeleton type="rect"
              height="5px"
              class="my-2"
              width="100px" />

            <q-skeleton v-for="i in 8"
              :key="i"
              type="rect"
              height="5px"
              class="mt-1"
              width="100%" />

            <q-skeleton type="rect"
              height="5px"
              class="my-1"
              width="80%" />
          </div>

          <div class="row between center">
            <div class="row mid">
              <q-skeleton class="container--card--data--avatar" />

              <q-skeleton width="100px"
                height="5px"
                class="mx-1 container--card--data--subtitle" />
            </div>

            <div class="row mid my-xs-1">
              <q-skeleton width="100px"
                height="5px"
                class="mx-1 container--card--data--subtitle" />

              <q-skeleton width="50px"
                height="5px"
                class="mx-1 container--card--data--subtitle" />
            </div>
          </div>
        </div>
      </q-card>
    </template>
  </div>
</template>


<style scoped lang="scss">
@import "src/css/core/_mixin.scss";
.container {
  &--card {
    width: 100%;
    min-height: 280px;
    @include to-size(lg) {
      justify-content: center;
      height: 100%;
    }
    @include to-size(md) {
      justify-content: center;
      height: 100%;
    }
    &--image {
      // max-width: 400px;
      width: 100%;
      object-fit: cover;
      height: 280px;
      @include to-size(lg) {
        max-width: 100%;
        min-width: 100%;
        height: 250px !important;
      }
      @include to-size(md) {
        height: 200px !important;
        min-width: 100%;
      }
    }
    &--data {
      &--description {
        line-height: 1.7rem;
      }
      &--avatar {
        width: 40px;
        height: 40px;
        object-fit: cover;
        border-radius: 50%;
      }
    }
  }
}
</style>

<script src="./HorizentalCard.ts" lang="ts"></script>
