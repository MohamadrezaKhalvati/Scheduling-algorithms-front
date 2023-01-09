<template>
  <div class="fix-height relative">
    <div ref="elementRef"
      class="max-height" />

    <transition appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      mode="out-in">
      <div v-if="loading"
        class="spinner mid center">
        <q-spinner size="md" />
      </div>
    </transition>
  </div>
</template>

<style scoped lang="scss">
.max-height {
  height: 100%;
}

.spinner {
  top: 0px;
  height: 100%;
  width: 100%;
  position: absolute;
  backdrop-filter: blur(2px);
}
</style>

<script lang="ts" src="./Echart.ts" />
