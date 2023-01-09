<template>
  <div class="container relative-position">
    <CloudImage class="container--cloud left untouchable" />

    <CloudImage class="right container--cloud untouchable" />

    <Title :title="title"
      :skeleton="skeleton"
      class="center"
      tag="h3" />

    <div class="row container--card-container evenly my-1 p-1">
      <template v-if="skeleton">
        <div v-for="i of 4"
          :key="i"
          class="col-12 col-md-6 col-lg-3 p-1">
          <HorizentalArticleCard :skeleton="true" />
        </div>
      </template>

      <template v-if="!skeleton && articles && articles.length > 0">
        <div v-for="article of articles"
          :key="article.id"
          class="col-12 col-md-6 col-lg-3 p-1">
          <HorizentalArticleCard :skeleton="skeleton"
            :article="article" />
        </div>
      </template>

      <template v-else>
        <q-card class="p-1 full-width center shadow-1 text-grey-10 my-2">
          آموزشی برای نمایش وجود ندارد
        </q-card>

        <img src="/images/no_item.svg"
          class="container--no-item">
      </template>
    </div>
  </div>
</template>


<style scoped lang="scss">
@import "src/css/partial/_mixin.scss";
.container {
  &--cloud {
    position: absolute;
    max-width: 350px;
    @include screen(tablet) {
      max-width: 250px;
    }
    @include screen(mobile) {
      max-width: 150px;
    }
    &.left {
      left: -110px;
    }
    &.right {
      right: -110px;
      bottom: 0;
    }
  }
  &--card-container {
    z-index: 10;
  }
  &--no-item {
    max-width: 600px;
    width: 100%;
  }
}
</style>
<script src="./ArticleContainer.ts" lang="ts" />
