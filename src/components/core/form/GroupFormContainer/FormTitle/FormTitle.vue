<template>
  <div class="row mid">
    <q-icon class="ml-1"
      size="20px"
      :name="icon" />

    <div class="huge-title text-primary">
      <slot />
    </div>
  </div>

  <q-separator class="my-2" />
</template>

<style lang="scss" scoped>
@import "src/css/core/_mixin.scss";
</style>

<script src="./FormTitle.ts" lang="ts"></script>
