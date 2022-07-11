<template>
  <div class="daily-work-activity">

    <div class="header">
      <span>جدول گزارش روزانه</span>
      <q-icon name="search"
        class="img" />
    </div>

    <div class="q-pa-md">
      <q-table :rows="rows"
        class="table-text no-shadow"
        card-class="table"
        :columns="columns"
        row-key="name">

        <template #body-cell-totalHour="props">
          <q-td key="totalHour">
            <q-badge class="element-style">
              {{ props.row.totalHour }}
            </q-badge>
          </q-td>
        </template>

      </q-table>
    </div>

  </div>

</template>
<script src="./DailyWorkActivity.ts">
</script>

<style lang="scss" >
.daily-work-activity {
  margin-top: 13px;
  display: flex;
  height: 500px !important;
  background-color: #282f46;
  border-radius: 8px;
  flex-direction: column;
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 13px;
  color: #d0d2d6;
  font-weight: bold;
}

.img {
  font-size: 22.28px;
}

.table {
  padding: 0px;
  background-color: #282f46;
  height: 420px;
}

.table-header-class {
  background-color: blueviolet;
}

.table-text {
  color: #d0d2d6;
  border-color: white;
}

.total-hours {
  display: flex;
  justify-content: center;
  color: #b33900;
}

.q-table thead,
.q-table td,
.q-table th {
  border-color: #fafafa33;
}

[dir="rtl"] .text-right {
  text-align: right;
}

.element-style {
  border-color: rgb(179, 57, 0);
  color: rgb(179, 57, 0);
  background-color: rgb(255, 203, 179);
}
</style>