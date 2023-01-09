
<template>
  <q-dialog ref="dialog"
    :maximized="!size.state.value.md"
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
