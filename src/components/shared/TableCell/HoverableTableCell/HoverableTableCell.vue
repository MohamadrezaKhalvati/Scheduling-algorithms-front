<template>
  <q-td :key="keyField"
    class="action-td text-primary no-border-radius end no-shadow"
    :props="props">
    <div class="row mid no-wrap"
      :style="computedOpacity">
      <slot name="action" />

      <q-icon v-if="props.row.ableToAct != false"
        size="20px"
        color="primary"
        class="cursor-pointer icon mx-1"
        name="edit"
        @click="editRow" />

      <q-icon v-if="!props.row.hideDelete && props.row.ableToAct != false"
        size="20px"
        class="cursor-pointer icon mx-1"
        name="delete"
        @click="deleteRow" />
    </div>
  </q-td>
</template>


<style scoped lang="scss">
.action-td {
  min-width: 120px;
  .icon:hover {
    transform: scale(1.2);
  }
}
</style>

<script src="./HoverableTableCell.ts" lang="ts"></script>
