<template>
  <router-link v-if="!!(!skeleton && article)"
    :to="article.link">
    <q-card class="article column overflow-hidden full-height">
      <div>

        <div class="article--image-container">
          <img :src="article.image"
            class="article--img">
        </div>
        <div class="article--title text-grey-10 p-2">
          {{ article.title }}
        </div>

      </div>
      <div class="px-2">
        <div class="article--subtitle line-height my-1 text-grey-8 text-justify"
          v-html="description" />
      </div>
      <!-- <div class="mid text-grey-9 p-2"
        v-if="article.duration != '0'">
        <q-icon name="event" />

        <span class="mx-1">
          {{ article.duration }}
        </span>
      </div> -->
    </q-card>
  </router-link>

  <div v-else
    class>
    <q-card class="article column between">
      <div class="column">
        <q-skeleton type="rect"
          height="200px"
          width="100%" />

        <div class="p-2">
          <q-skeleton type="text"
            width="100px" />

          <q-skeleton v-for="i in 5"
            :key="i"
            type="text"
            width="100%" />

          <q-skeleton type="text"
            width="80%" />
        </div>
      </div>

      <div class="p-2 mid text-grey-9">
        <q-skeleton type="text"
          height="25px"
          width="100px" />
      </div>
    </q-card>
  </div>
</template>


<style scoped lang="scss">
@import "src/css/core/_mixin.scss";
.article {
  &--image-container {
    max-height: 230px;
  }
  &--title {
    font-size: 1.2rem;
  }
  &--subtitle {
    font-size: var(--font-size);
  }
  &--img {
    transition: transform 1s;
    height: 200px;
    width: 300px;
    object-fit: cover;
    display: block;
    width: 100%;
  }
  &:hover {
    .article--image__container {
      transform: rotate(-4deg) translateY(20px) scaleX(1);
    }
    .article--img {
      transform: scale(1.05);
    }
  }
}
</style>
<script src="./HorizentalArticleCard.ts" lang="ts" />
