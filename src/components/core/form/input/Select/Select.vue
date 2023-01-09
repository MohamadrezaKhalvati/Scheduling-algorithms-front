<template>
  <QuasarSelect v-bind="attributes"
    :options="filteredOptions"
    :modelValue="modelValue"
    @update:modelValue="onInput($event)"
    v-on="events"
    @filter="onFilter">
    <template v-for="(_, name) in $slots"
      #[name]="slotData">
      <slot :name="name"
        v-bind="slotData || {}" />
    </template>
  </QuasarSelect>

</template>

<style scoped lang="scss">
</style>

<script src="./Select.ts" lang="ts"></script>
