<template>
  <div class="active-tasks">
    <div class="active-tasks-table-header">
      <span>جدول تسک های فعال</span>
      <q-icon name="search"
        class="img" />
    </div>

    <div>
      <div class="q-pa-md">
        <q-table :rows="rows"
          class="table-text no-shadow"
          card-class="table"
          :columns="columns"
          row-key="name" />
      </div>
    </div>
  </div>
</template>

<script src="./ActiveTasksTable.ts">
</script>

<style scoped lang="scss">
.active-tasks {
  margin-top: 13px;
  display: flex;
  height: 500px !important;
  background-color: #282f46;
  border-radius: 8px;
  flex-direction: column;
}

.active-tasks-table-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 13px;
  color: #d0d2d6;
  font-weight: bold;
  .img {
    font-size: 22.28px;
  }
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
}
</style>