<template>
  <QInput ref="qRef"
    :modelValue="modelValue"
    @update:modelValue="onInput"
    v-on="events"
		>
    <template v-for="(_, name) in $slots"
      #[name]="slotData">
      <slot :name="name"
        v-bind="slotData || {}" />
    </template>
  </QInput>

</template>

<style scoped lang="scss">
</style>

<script src="./Text.ts" lang="ts"></script>
