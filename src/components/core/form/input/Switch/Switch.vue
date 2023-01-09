<template>
  <q-field v-on="events">

    <template v-if="$attrs['icon']"
      #prepend>
      <q-icon :name="$attrs['icon']"
        :color="$attrs.iconColor" />
    </template>

    <template #append>
      <component :is="type"
        v-bind="componentInput"
        :modelValue="modelValue"
        @update:modelValue="onInput($event)" />
    </template>

  </q-field>
</template>

<style lang="scss" scoped>
</style>

<script src="./Switch.ts" lang="ts"></script>
