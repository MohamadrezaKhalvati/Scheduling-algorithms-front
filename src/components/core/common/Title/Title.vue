<template>
  <div class="text">
    {{ text }}
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.text {
  font-size: 1.25rem;
}
</style>

<script src="./Title.ts" lang="ts"></script>
