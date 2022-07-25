<template>
  <q-card class="active-tasks ">
    <div class="p-2 text-primary huge-title between">
      <span style="color : #d0d4d6">جدول تسک های فعال</span>
      <q-icon name="search"
        style="color : #d0d4d6"
        class="img"
        @click="filter = true" />
    </div>

    <div class="q-pa-md">

      <q-table v-model:pagination="pagination"
        :rowsPerPageOptions="pagination.rowsPerPageOptions"
        :rows="activityTask"
        class="table-text no-shadow  text-align"
        card-class="table"
        :columns="columns"
        row-key="name"
        @request="getTaskWithPagination">

        <template #body="props">
          <q-tr :props="props">
            <q-td key="number"
              :props="props">
              #{{ props.row.number }}
            </q-td>
            <q-td key="title"
              :props="props">
              {{ props.row.title }}
            </q-td>
            <q-td key="deadline"
              :props="props">
              <q-badge class="p-1"
                :style="'background-color:' +props.row.deadlineColor">
                {{ props.row.deadline }}
              </q-badge>
            </q-td>
            <q-td key="status"
              :props="props">
              <q-badge :style="'background-color: ' + props.row.statusColor + '; color: ' + props.row.statusTextColor"
                class="p-1">
                {{ props.row.status }}
              </q-badge>
            </q-td>
            <q-td key="project"
              :props="props">
              {{ props.row.project }}
            </q-td>
            <q-td key="category"
              :props="props"
              class="category">
              <q-badge class="p-1"
                :style="'background-color: ' + props.row.categoryColor">
                {{ props.row.category }}
              </q-badge>
            </q-td>

          </q-tr>

        </template>

      </q-table>
    </div>

    <div>

      <q-dialog v-model="filter">
        <q-card class="searching-form disable-scroll">

          <q-card-section class="row items-center q-pb-none header ">
            <div class="text-h6"
              style="padding-bottom: 13px;">
              فرم جستجو
            </div>
            <q-space />
            <q-btn v-close-popup
              style="padding-bottom: 13px; font-size:13px"
              icon="close"
              flat
              round
              dense />
          </q-card-section>

          <q-card-section>

            <div class="body"
              style="padding : 0px 2px 2px 2px">

              <div class="body-part1">

                <div class="col-md-4 col-xs-12 px-1 field normalize">
                  <span style="padding-bottom:4px">نام تسک</span>
                  <q-input v-model="taskName"
                    color="teal"
                    class="self-center full-width no-outline"
                    outlined=""
                    stack-label>
                    <template #prepend>
                      <q-icon name="event"
                        color="white"
                        style="font-size : 23px" />
                    </template>
                  </q-input>
                </div>

                <div class="col-md-4 col-xs-12 px-1 field normalize">
                  <span style="padding-bottom:4px">دسته بندی</span>
                  <q-select v-model="categoryModel"
                    class="q-field__control relative-position row no-wrap select-field "
                    outlined
                    bottom-slots
                    :options="categoryOptions"
                    :dense="dense"
                    :options-dense="denseOpts">
                    <template #prepend>
                      <q-icon name="category"
                        color="white"
                        @click.stop.prevent />
                    </template>
                  </q-select>
                </div>

                <div class="col-md-4 col-xs-12 px-1 field normalize">
                  <span style="padding-bottom:4px">تحویل گیرنده </span>
                  <q-select v-model="providedModel"
                    class="q-field__control relative-position row no-wrap select-field"
                    outlined
                    bottom-slots
                    :options="providedOptions"
                    :dense="dense"
                    :options-dense="denseOpts">
                    <template #prepend>
                      <q-icon name="timeline"
                        color="white"
                        @click.stop.prevent />
                    </template>
                  </q-select>
                </div>

              </div>

              <div class="body-part2">
                <div class=" col-md-4 col-xs-12 px-1 q-field  no-wrap items-start q-field--outlined q-input q-field--dense q-field--dark q-field--with-bottom column ">
                  <span style="padding-bottom:4px">تاریخ نهایی از</span>
                  <q-input v-model="dateFrom"
                    outlined
                    mask="date"
                    :rules="['date']">
                    <template #append>
                      <q-icon name="event"
                        class="cursor-pointer">
                        <q-popup-proxy cover
                          transition-show="scale"
                          transition-hide="scale">
                          <q-date v-model="dateFrom"
                            calendar="persian">
                            <div class="row items-center justify-end">
                              <q-btn v-close-popup
                                label="Close"
                                color="primary"
                                flat />
                            </div>
                          </q-date>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                </div>

                <div class=" col-md-4 col-xs-12 px-1 q-field  no-wrap items-start q-field--outlined q-input q-field--dense q-field--dark q-field--with-bottom column ">
                  <span style="padding-bottom:4px">تاریخ نهایی تا</span>
                  <q-input v-model="dateTo"
                    outlined
                    mask="date"
                    :rules="['date']">
                    <template #append>
                      <q-icon name="event"
                        class="cursor-pointer">
                        <q-popup-proxy cover
                          transition-show="scale"
                          transition-hide="scale">
                          <q-date v-model="dateTo"
                            calendar="persian">
                            <div class="row items-center justify-end">
                              <q-btn v-close-popup
                                label="Close"
                                color="primary"
                                flat />
                            </div>
                          </q-date>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                </div>

              </div>

              <div class="button-div">
                <q-btn class="button"
                  @click="getTaskDaTaByfilterr">
                  جستجو
                </q-btn>
              </div>

            </div>

          </q-card-section>
        </q-card>

      </q-dialog>
    </div>

  </q-card>

</template>

<script src="./ActiveTasksTable.ts">
</script>

<style  lang="scss" scoped>
.text-align {
  text-align: right;
}
.searching-form {
  background-color: #282f46;
}
.active-tasks {
  display: flex;
  background-color: #282f46;
  border-radius: 8px;
  flex-direction: column;
}

.button-div {
  display: flex;
  justify-content: center;
}

.button {
  background-color: $purple-4;
  font-size: 14px;
}

.status {
  color: rgb(120, 73, 2);
  .span {
    background-color: rgb(252, 201, 125);
  }
}

.active-tasks-table-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #d0d2d6;
  font-weight: bold;
}

.img {
  font-size: 22.28px;
}
.table {
  background-color: #282f46;
}

.table-header-class {
  background-color: blueviolet;
}

.table-text {
  color: #d0d2d6;
  display: flex;
  justify-content: flex-start;
}
.disable-scroll {
  overflow-y: hidden;
}

.situation-element-style {
  border-color: rgb(120, 73, 2);
  color: rgb(120, 73, 2);
  background-color: rgb(252, 201, 125);
}

.category {
  border-color: rgb(32, 87, 91);
  color: #20575b;
}

.searching-form {
  background-color: #282f46;
  height: 280px;
  width: 560px;
}

.header {
  border-bottom-style: solid;
  border-color: #d0d2d6;
  border-width: 1px;
  height: 50px;
}

.body-part1 {
  color: #d0d2d6;
}

.body-part1 {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 14px;
}
.body-part2 {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  font-size: 14px;
  color: #d0d2d6;
}
</style>