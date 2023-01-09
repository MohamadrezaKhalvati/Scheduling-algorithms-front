<template>
  <q-card class="column no-shadow no-wrap" style="background-color :#227C70">
    <slot name="header">
      <div>
        <div v-if="containerConfig.title" class="header text-left mr-2">
          <span style="color : black">
            {{ containerConfig.title }}
          </span>
        </div>

        <q-separator v-if="containerConfig.title" />
      </div>
    </slot>

    <FormMaker ref="formMaker" :form="form" class="column p-1 full-width no-wrap col" v-bind="$attrs"
      :loading="containerConfig.loading">

      <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData || {}" />
      </template>

      <template #button>
        <div class="center mt-3">
          <q-btn :loading="containerConfig.loading" label="ثبت" type="submit" text-color="white" color="primary" />
        </div>
      </template>
    </FormMaker>
  </q-card>
</template>

<style lang="scss" scoped>
.header {
  font-size: 1rem;
  padding: 10px;
}

.list {
  min-width: 175px;
  font-size: 0.75rem;
}
</style>

<script src="./FormContainer.ts" lang="ts"></script>
