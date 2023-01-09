<template>
  <div class="container relative-position">
    <img src="/images/intersection.svg"
      class="absolute-bottom container--background untouchable">

    <Title tag="h2"
      class="my-2 column mid relative-position text-primary"
      title="سوالات متداول" />

    <div class="row mid evenly max-container my-2">
      <img src="/images/question.svg"
        class="container--image">

      <ExpansionItem class="col-lg-7 my-1"
        :items="faqs" />
    </div>
  </div>
</template>


<style scoped lang="scss">
@import "src/css/partial/_mixin.scss";
.container {
  z-index: 10;
  &--expantion-item {
    line-height: 1rem;
    border-radius: 30px;
  }
  &--background {
    width: 100% !important;
  }
  &--image {
    z-index: 10;
    width: 300px;
    height: 250px;
  }
}
</style>
<style lang="scss">
.container {
  .q-item__label {
    line-height: 2.2rem !important;
  }
}
</style>
<script src="./FaqContainer.ts" lang="ts" />
