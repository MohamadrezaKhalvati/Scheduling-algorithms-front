<template>

  <div class="report-chart">
    <div class="p-2 text-primary huge-title between">
      <div>
        <span style="color: #d0d2d6">نمودار گزارش</span>
      </div>

      <div class="header-button">
        <q-btn round
          class="q-btn q-btn-item non-selectable no-outline q-btn--outline q-btn--round text-primary q-btn--actionable q-focusable q-hoverable q-btn--dense mx-1 buttons button-size"
          color="#282f46"
          icon="keyboard_arrow_right"
          @click="nextPage" />
        <q-btn round
          class="q-btn q-btn-item non-selectable no-outline q-btn--outline q-btn--round text-primary q-btn--actionable q-focusable q-hoverable q-btn--dense mx-1 buttons button-size"
          color="#282f46"
          icon="keyboard_arrow_left"
          @click="previousPage" />

      </div>
    </div>

    <div class="filter">

      <div class="category px-1">
        <span>نوع دسته بندی</span>

        <div>
          <q-select v-model="category"
            class="q-field__control relative-position row no-wrap select-field"
            outlined
            dense
            bottom-slots
            :options="categoryOptions"
            label-color="white"
            label="دسته بندی"
            color="white">
            <template #prepend>
              <q-icon name="category"
                color="white"
                @click.stop.prevent />
            </template>
          </q-select>
        </div>

      </div>

      <div class="day px-1">
        <span>واحد (روز)</span>

        <div>
          <q-select v-model="unit"
            class="q-field__control relative-position row no-wrap"
            outlined
            bottom-slots
            :options="unitOptions"
            label-color="white"
            :label="unitOptions[0]"
            color="white"
            dense>
            <template #prepend>
              <q-icon name="donut_small"
                color="white"
                @click.stop.prevent />

            </template>
          </q-select>
        </div>

      </div>

    </div>

    <div class="base-chart">
      <apexchart type="bar"
        height="224"
        :options="apexChartOptions"
        :series="apexChartOptions.series" />
    </div>

    <div class="button-div">
      <q-btn class="button px-2"
        dense
        @click="getReportDataWithFilter">
        ثبت
      </q-btn>
    </div>
  </div>
</template>

<script src="./ReportChart.ts">
</script>

<style lang="scss" scoped>
.report-chart {
  display: flex;
  height: 500px !important;
  background-color: #282f46;
  border-radius: 8px;
  flex-direction: column;
}

.header {
  color: #d0d2d6;
}
.button-size {
  font-size: 12px;
  color: #d0d2d6 !important;
}

.filter {
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  color: #d0d2d6;
}

.category {
  height: 100px;
  width: 310px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.day {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 310px;
  height: 100px;
}

.base-chart {
  padding-top: 20px;
}

.button-div {
  margin: auto;
}

.button {
  background-color: $purple-4;
}
</style>