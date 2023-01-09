
<template>
  <div class="container row mid center">
    <Title v-if="!hideTitle"
      tag="h2"
      class="mid mb-3"
      title="تکنولوژی ها" />

    <div class="container--scroll-area my-1 row between no-wrap">
      <div v-for="tech of props.techs"
        :key="tech.title"
        class="column mid mx-1">
        <img :src="tech.image"
          :style="style"
          class="container--image">

        <h3 class="subtitle text-grey-9">
          {{ tech.title }}
        </h3>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
@import "./../../../../css/core/_mixin.scss";
.container {
  &--scroll-area {
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;

    &::-webkit-scrollbar-track {
      border: 1px solid #000;
      padding: 1px 0;
      background-color: $warning;
      border-radius: 10px;
    }
    &::-webkit-scrollbar {
      height: 7px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: lighten($warning, 15%);
      border: 1px solid #000;
    }
  }

  &--image {
    // object-fit: contain;
		max-width: 50px;
  }
}
</style>
<script src="./TechnologyContainer.ts" lang="ts" />
