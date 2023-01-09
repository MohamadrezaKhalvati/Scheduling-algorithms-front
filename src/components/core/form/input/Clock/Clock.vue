<template>
  <q-input v-bind="$attrs"
    :modelValue="modelValue"
    @update:modelValue="onInput($event)"
    v-on="events">
    <template #append>

      <slot name="append" />

      <q-icon name="access_time"
        class="cursor-pointer">
        <q-popup-proxy transition-show="scale"
          transition-hide="scale"
          breakpoint="10000">
          <q-time :modelValue="modelValue"
            @update:modelValue="onInput($event)" />
        </q-popup-proxy>
      </q-icon>

    </template>

    <template v-if="$attrs.icon"
      #prepend>
      <q-icon :name="$attrs.icon"
        color="primary" />
    </template>
  </q-input>
</template>

<style lang="scss" scoped>
</style>

<script src="./Clock.ts" lang="ts"></script>
