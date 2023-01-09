<template>
  <div class="container text-primary relative-position">
    <CloudImage class="container--cloud left untouchable" />

    <CloudImage class="container--cloud right untouchable" />

    <div class="container--tab row evenly mx-5">
      <router-link v-for="(category) in categories"
        :key="category.title"
        class="column mid cursor-pointer"
        :to="category.link"
        :class="{
          'container--tab--active': category.title == activeItem
          }"
        @click="changeContent(category)">
        <img :src="category.image"
          class="container--tab--image">

        <span class="title mt-2">
          {{ category.title }}
        </span>
      </router-link>
    </div>

    <div class="container--search center max-container-y mt-md-4 mt-2">
      <q-input v-model="filter.text"
        borderless
        clearable
        dense
        class="bg-grey-4 px-1 shadow-3 container--search--title"
        @keyup.enter="search" />

      <q-btn text-color="white"
        class="container--search--button px-1"
        dense
        label="جستجو کن"
        @click="search" />
    </div>

    <Tags v-if="tags.length && (education.currentTab.value == 'article')"
      :tags="tags"
      class="max-container-y"
      @input="filterOnTag" />

    <q-tabs v-model="filter.tab"
      dense
			content-class="center start-md"
			class="mt-md-4 mt-2 px-4"
      active-color="pink-5"
      indicator-color="pink-5">
      <span v-show="size.sm" class="title ml-3">
        مرتب سازی براساس
      </span>

      <q-tab name="newest"
        label="جدید ترین"
        @click="changeFilterOrder('newest')" />

      <q-tab name="most_seen"
        label="پربازدید ترین"
        @click="changeFilterOrder('most_seen')" />
    </q-tabs>

    <div class="row my-2 px-lg-3 px-md-3 px-2">
      <template v-if="(cards && cards.length) && !skeleton">
        <EducationCard v-for="card of cards"
          :key="card.id"
          class="col-web-12 col-tab-6 col-mob-12 my-1"
          :skeleton="skeleton"
          :card="card" />
      </template>

      <template v-if="skeleton">
        <EducationCard v-for="i of paginationInput.pageSize"
          :key="i"
          class="col-lg-12 col-md-6 col-sm-12 my-1"
          :skeleton="true" />
      </template>

      <div v-if="!skeleton && (!cards || !cards.length)"
        class="column mid fit">
        <q-card class="p-2 center full-width">
          آموزشی برای نمایش وجود ندارد
        </q-card>

        <img src="/images/no_item.svg"
          class="container--no-item mt-2">
      </div>
    </div>

    <div v-if="cards && cards.length"
      class="center">
      <Pagination :input="paginationInput"
        @request="search(false)" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "src/css/core/_mixin.scss";
.title {
	font-size: 21px;
}
.container {
  &--cloud {
    max-width: 150px;
    position: absolute;
    &.right {
      right: -10px;
      top: 700px;
    }
    &.left {
      left: -10px;
      top: 460px;
    }
  }
  &--tab {
    margin-top: 10%;
    @include to-size(md) {
    margin-top: 30%;
    }
    &--disable-image {
      img {
        filter: grayscale(1);
      }
      span {
        filter: blur(2px);
      }
    }
    &--image {
      width: 200px;
      height: 200px;
      opacity: 0.8;
      transition: transform 1s;
      @include to-size(lg) {
        width: 100px;
        height: 100px;
      }
      @include to-size(md) {
        width: 80px;
        height: 80px;
      }
    }
    &--active > img {
      opacity: 1;
      transform: scale(1.2);
    }
  }
  &--search {
    &--title {
      min-width: 400px;
      @include to-size(md) {
        min-width: 200px;
        max-width: 200px;
      }
    }
    &--button {
      border-radius: 0;
      background: linear-gradient(to right, #fec440, #f27255);
    }
  }
  &--no-item {
    max-height: 400px;
    max-width: 600px;
    width: 100%;
  }
}
</style>
<script src="./EducationTabContainer.ts" lang="ts" />
