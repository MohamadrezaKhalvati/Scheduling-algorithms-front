<template>
  <q-field v-bind="fieldInput"
    :modelValue="modelValue"
    v-on="events"
    @update:modelValue="clear">
    <template #control>

      <q-slider label
        class="mt-1"
        :min="$attrs.min"
        :max="$attrs.max"
        :step="$attrs.step"
        v-bind="fieldInput"
        :modelValue="modelValue"
        @update:modelValue="onInput($event)" />
    </template>

    <template v-if="$attrs.icon"
      #prepend>
      <q-icon :name="$attrs.icon"
        color="primary" />
    </template>
  </q-field>
</template>

<style lang="scss" scoped>
</style>

<script src="./Slider.ts" lang="ts"></script>
