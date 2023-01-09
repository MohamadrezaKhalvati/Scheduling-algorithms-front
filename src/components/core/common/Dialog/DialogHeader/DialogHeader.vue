
<template>
  <div class="row between relative-position p-1">
    <div>
      <slot />
    </div>

    <div class="mid">
      <q-btn icon="close"
        flat
        round
        color="primary"
        @click="dialogRef.hide" />
    </div>
  </div>

  <q-separator />
</template> 

<style scoped lang="scss">
</style>

<script src="./DialogHeader.ts" lang="ts"></script>