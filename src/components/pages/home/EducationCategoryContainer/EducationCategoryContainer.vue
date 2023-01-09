<template>
  <div class="container column mid relative-position">
    <CloudImage class="container--cloud left untouchable" />

    <CloudImage class="container--cloud right untouchable" />

    <Title tag="h2"
      title="چه چیز آموزش داده می شود؟"
      class="column mid text-primary" />

    <div class="row center my-3 my-xs-2">
      <q-btn v-for="(category, index) of categories"
        :key="index"
        :label="category.title"
        :color="categoryId == index ? 'accent' : 'white'"
        :text-color="categoryId == index ? 'white' : 'grey-10'"
        class="m-1"
        @click="changeCategory(category, index)" />
    </div>

    <SlotTransitionWrapper class="full-height"
      :skeleton="skeleton"
      :size="articles.length"
      :enterAnimation="animation.enterAnimation"
      :leaveAnimation="animation.leaveAnimation">

      <template #loading>
        <div class="row evenly fit">
          <div v-for="i of 4"
            :key="i"
            class="col-12 col-md-6 col-lg-3 p-1 py-web-2">
            <HorizentalArticleCard :skeleton="true" />
          </div>
        </div>
      </template>

      <template #hasContext>
        <div class="row evenly fit">
          <div v-for="article of articles"
            :key="article.id"
            class="col-12 col-md-6 col-lg-3 p-1 py-web-2">
            <HorizentalArticleCard :article="article"
              :skeleton="skeleton" />
          </div>
        </div>
      </template>

      <template #noContext>
        <div class="column fit pr-1 pl-1">
          <q-card key="noContext_card"
            class="p-2 center bg-white shadow-1 tCext-grey-9 my-2 ">
            <span>
              آموزشی برای نمایش وجود ندارد
            </span>
          </q-card>

          <img key="noContext_image"
            src="/images/no_item.svg"
            class="container--no-item center my-5  ">
            
        </div>
      </template>

    </SlotTransitionWrapper>

    <q-btn v-if="!skeleton && articles.length"
      label="مشاهده همه"
      outline
      rounded
      :to="educationLink"
      size="md"
      class="my-2"
      text-color="primary" />
  </div>
</template>


<style scoped lang="scss">
@import "src/css/core/_mixin.scss";
.container {
  &--cloud {
    max-width: 350px;
    @include from-size(md) {
      max-width: 250px;
    }
    @include from-size(xs) {
      max-width: 150px;
    }
    position: absolute;
    &.right {
      right: -110px;
      top: 350px;
    }
    &.left {
      left: -110px;
      top: 150px;
    }
  }
  &--no-item {
    width:1400px;
    height:380px;

    @include from-size(lg) {
      height: 380px;
    }
    @include from-size(md) {
      height: 300px;
    }
  }
}
</style>
<script src="./EducationCategoryContainer.ts" lang="ts" />
