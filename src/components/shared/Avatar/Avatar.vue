<template>
  <div class="avatar mid center"
    :style="computedStyle">
    <img v-if="!skeleton"
      class="avatar"
      :src="image">

    <q-skeleton v-else
      type="QAvatar" />
    <slot />
  </div>
</template>

<style scoped lang="scss">
.avatar {
  border-radius: 20%;
}
</style>

<script src="./Avatar.ts" lang="ts"></script>
