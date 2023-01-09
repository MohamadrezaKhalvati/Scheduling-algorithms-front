<template>
  <transition appear
    mode="out-in"
    class="row evenly fit"
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut">

    <slot v-if="skeleton"
      name="loading" />

    <slot v-else-if="size > 0"
      name="hasContext" />

    <slot v-else
      name="noContext" />
  </transition>
</template>


<style scoped lang="scss">
@import "src/css/core/_mixin.scss";
</style>
<script src="./SlotTransitionWrapper.ts" lang="ts" />
