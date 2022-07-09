<template>
  <div class="active-tasks">
    <div class="active-tasks-table-header">
      <span>جدول تسک های فعال</span>
      <q-icon name="search"
        class="img" />
    </div>

    <div class="q-pa-md">
      <q-table :rows="rows"
        class="table-text no-shadow"
        card-class="table"
        :columns="columns"
        row-key="name">

        <template #body="props">

          <q-td key="number">
            {{ props.row.number }}
          </q-td>

          <q-td key="taskName">
            {{ props.row.taskName }}
          </q-td>

          <q-td key="deadline">
            <q-badge class="bg-green-8">
              {{ props.row.deadline }}
            </q-badge>
          </q-td>

          <q-td key="situation">
            <q-badge class="situation-element-style">
              {{ props.row.situation }}
            </q-badge>
          </q-td>

          <q-td key="project">
            {{ props.row.project }}
          </q-td>

          <q-td key="category">
            <q-badge class="category-element-style">
              {{ props.row.category }}
            </q-badge>
          </q-td>

        </template>

      </q-table>
    </div>

  </div>
</template>

<script src="./ActiveTasksTable.ts">
</script>

<style  lang="scss">
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
[dir="rtl"] .text-center {
  text-align: right;
}

.situation-element-style {
  border-color: rgb(120, 73, 2);
  color: rgb(120, 73, 2);
  background-color: rgb(252, 201, 125);
}

.category-element-style {
  border-color: rgb(32, 87, 91);
  color: rgb(32, 87, 91);
  background-color: rgb(157, 216, 221);
}
</style>