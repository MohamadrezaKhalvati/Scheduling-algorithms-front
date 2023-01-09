<template>
  <QInput ref="qRef"
    :modelValue="modelValue"
    input-class="english-input"
    @input="onInput">
    <template #prepend>
      <slot name="prepend" />
    </template>

    <template #append>
      <slot name="append" />

      <div class="circle"
        :style="computedCicleStyle" />

      <q-icon name="colorize"
        class="cursor-pointer ml-1">
        <q-popup-proxy transition-show="scale"
          transition-hide="scale">
          <q-color default-view="palette"
            no-header-tabs
            :modelValue="modelValue"
            @change="onInput" />
        </q-popup-proxy>
      </q-icon>
    </template>
  </QInput>
</template>

<style scoped lang="scss">
.circle {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
</style>

<script src="./ColorPicker.ts" lang="ts"></script>
