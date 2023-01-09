<template>
  <div class="mid">
    <div class="badge text-center center"
      :style="computedStyle">
      {{ text }}
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.badge {
  border-radius: 5px;
  padding: 1px 8px;
}
</style>

<script src="./Badge.ts" lang="ts"></script>
