<template>
  <div class="column full-height between no-wrap container"
    :class="{'radius': size.state.value.width > 1300}">
    <div class="col column no-wrap max-width">
      <div class="text-primary m-2 center">
        فیلتر پیشرفته
      </div>

      <q-separator />

      <div class="col form-maker oveflow-auto">
        <FormMaker class="form p-1"
          :form="form"
          @submit="filter" />
      </div>
    </div>

    <div class="p-1 center">
      <q-btn label="جستجو"
        class="mt-1 full-width btn"
        :loading="loading"
        @click="filter">
        <q-tooltip>Ctrl + Enter</q-tooltip>
      </q-btn>
    </div>

  </div>
</template>


<style scoped lang="scss">
.container {
  background: var(--front-color);
  .form-maker {
    max-width: 100%;
  }
}

.btn {
  background-color: var(--btn-color);
  color: white;
}
</style>

<script src="./FilterFormMaker.ts" lang="ts"></script>
