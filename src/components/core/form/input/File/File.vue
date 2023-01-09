<template>
  <q-file v-bind="$attrs"
    :modelValue="modelValue"
    @update:modelValue="onInput($event)"
    v-on="events">
    <template #append>
      <slot name="append" />
    </template>

    <template v-if="$attrs.icon"
      #prepend>
      <q-icon :name="$attrs.icon"
        color="primary" />
    </template>
  </q-file>
</template>

<style lang="scss" scoped>
</style>

<script src="./File.ts" lang="ts"></script>
