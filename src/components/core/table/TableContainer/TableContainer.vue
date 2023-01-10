<template>
  <div class="table-container column shadow-2 no-wrap">
    <div>
      <slot name="title" />
    </div>

    <div class="body column flex-grow">
      <q-table v-bind="computedAttrs" v-model:selected="internalSelected" v-model:pagination="internalPagination"
        style="background-color : #696969" :loading="$attrs.loading" class="flex-grow sticky-table no-shadow"
        table-header-class="table-header" separator="horizontal" :columns="transformedColumns" v-on="childEvents">
        <template #header-selection="scope">
          <q-checkbox v-model="scope.selected" dense color="primary" />
        </template>

        <template v-for="(_, name) in $slots" #[name]="slotData">
          <slot :name="name" v-bind="slotData" class="table-header" />
        </template>

      </q-table>

      <div v-if="isEmpty" class="column no-data mid center no-wrap " style="background-color : #d0d2d6">
        <div class="mt-3">
          هیچ داده ای برای نمایش وجود ندارد.
        </div>
      </div>
    </div>

    <q-inner-loading :showing="$attrs.loading" />
  </div>
</template>

<style lang="scss" scoped>
$header-height: 48px;

.text-left {
  font-size: 12px !important;
  font-weight: 500 !important;
}

.table-header {
  font-size: 1rem;
  font-weight: 300;
}

.table-container {
  max-width: 100%;
  max-height: 100%;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  overflow: hidden;
  position: relative;
  background-color: #d0d2d6;

  .sticky-table {
    min-height: 350px;
    // needed to make table scroll vertically.
    max-width: 100%;
    // essential part to make header sticky
    overflow: auto;
    padding-top: 0 !important;

    thead tr th {
      position: sticky;
      z-index: 2;
    }

    /* this will be the loading indicator */
    thead tr:last-child th {
      /* height of all previous header rows */
      top: 0px;
    }

    thead tr:first-child th {
      background-color: #d0d2d6;
      top: 0;
      font-weight: bold;
    }
  }

  .body {
    position: relative;
    overflow: auto;
  }

  .no-data {
    position: absolute;
    top: $header-height;
    right: 0px;
    left: 0px;
    bottom: 0px;

    &>* {
      z-index: 4;
    }

    img {
      display: block;
      height: 125px;
    }
  }

  .q-table {
    th {
      font-size: var(--font-size);
    }

    th,
    td {
      border-color: #d0d2d6;
    }

    tbody tr {
      &:nth-child(even) {
        background-color: #d0d2d6;
      }

      &:nth-child(odd) {
        background-color: #d0d2d6;
      }

      &:hover {
        background-color: #d0d2d6;
      }
    }
  }

  .q-table__container>div:last-child {
    background: #d0d2d6;
  }
}
</style>

<script src="./TableContainer.ts" lang="ts"></script>
