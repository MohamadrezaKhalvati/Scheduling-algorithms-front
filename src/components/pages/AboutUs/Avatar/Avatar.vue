<template>
  <div class="column mid">
    <div class="relative-position avatar-container">
      <img class="avatar-container--avatar"
        :src="input.image">
    </div>

    <span class="mt-1 mid-title">
      {{ input.name }}
    </span>

    <span class="subtitle text-grey-9">
      {{ input.title }}
    </span>
  </div>
</template>


<style scoped lang="scss">
@import "src/css/partial/_mixin.scss";
.avatar-container {
  &--avatar {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: contain;
    display: block;
  }
}
</style>
<script src="./Avatar.ts" lang="ts" />
