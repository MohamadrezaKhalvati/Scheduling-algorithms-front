<template>
  <div class="p-2">
    <q-expansion-item v-for="(item) of items"
      :key="item.id"
      class="container--expantion-item shadow-1 overflow-hidden my-1"
      :label="item.label"
      label-lines="100px"
      header-class="bg-primary text-white"
      expand-icon-class="text-white">
      <q-card>
        <q-card-section class="text-primary line-height">
          {{ item.description }}
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </div>
</template>


<style scoped lang="scss">
@import "src/css/core/_mixin.scss";
.container {
  z-index: 10;
  &--expantion-item {
    line-height: 1rem;
    border-radius: 30px;
  }
}
</style>
<style lang="scss">
.container {
  .q-item__label {
    line-height: 2.2rem !important;
  }
}
</style>
<script src="./ExpansionItem.ts" lang="ts" />
