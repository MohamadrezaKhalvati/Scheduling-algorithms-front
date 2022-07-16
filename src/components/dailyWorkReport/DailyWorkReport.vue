<template>
  <div class="daily-work-activity">

    <div class="p-2 text-primary huge-title between">
      <span style="color: #d0d2d6">جدول گزارش روزانه</span>
      <q-icon name="search"
        style="color: #d0d2d6"
        class="img"
        @click="filter = true" />
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

        <q-card-section class="column set-font">

          <div class="row">

            <div class="column col-md-6 col-xs-12 px-1 field ">
              <span style="padding-bottom:4px">تاریخ گزارش از</span>
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
                      <q-date v-model="dateFrom">
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

            <div class="column col-md-6 col-xs-12 px-1 field ">
              <span style="padding-bottom:4px">تاریخ گزارش تا</span>
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
                      <q-date v-model="dateTo">
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
        </q-card-section>

        <div class="body-part2 center">
          <q-btn class="button">
            جستجو
          </q-btn>
        </div>

      </q-card>

    </q-dialog>
  </div>

</template>
<script src="./DailyWorkReport.ts">
</script>

<style lang="scss" >
.set-font {
  font-size: 13px;
}

.header {
  border-bottom-style: solid;
  border-color: #d0d2d6;
  border-width: 1px;
  height: 50px;
}

.searching-form {
  background-color: #282f46;
  color: #d0d2d6;
}
.daily-work-activity {
  display: flex;
  height: 500px !important;
  background-color: #282f46;
  border-radius: 8px;
  flex-direction: column;
}
.button {
  background-color: $purple-4;
  font-size: 14px;
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