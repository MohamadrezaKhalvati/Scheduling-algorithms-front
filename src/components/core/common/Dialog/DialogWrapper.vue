
<template>
  <q-dialog ref="dialog"
    :maximized="size.state.value.xs && !size.state.value.sm"
    @hide="onHide">
    <slot />
  </q-dialog>
</template>

<style scoped lang="scss">
.wrapper {
  position: relative;
}
</style>

<script src="./DialogWrapper.ts" lang="ts"></script>
