<template>
  <div class="container row center mid">
    <q-item v-for="(tag, index) in tags"
      :key="tag.title"
      clickable
      dense
      class="container--item m-1 shadow-1 center mid"
      :class="{'container--item--active shadow-2' : active == index}"
      @click="activate(index, tag.title)">
      <span class="line-height">
        {{ tag.title }}
      </span>
    </q-item>
  </div>
</template>

<style lang="scss" scoped>
@import "src/css/core/_mixin.scss";
.container {
  max-width: 850px;
  overflow-x: auto;
  overflow-y: hidden;
  @include to-size(md) {
    height: 50px;
    flex-wrap: nowrap;
  }
  &--item {
    color: $primary;
    border-radius: 50px;
    min-width: fit-content;
    opacity: 0.7;
    &--active {
      background: $primary;
      color: white;
      opacity: 1;
    }
  }
}
</style>

<script src="./TagContainer.ts" lang="ts"></script>
