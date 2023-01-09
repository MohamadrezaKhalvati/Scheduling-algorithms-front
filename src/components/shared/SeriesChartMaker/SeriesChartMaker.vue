<template>
  <q-card class="shadow radius column card">
    <div class="row between full-width">
      <slot name="title" />

      <div v-if="!hideNavigation"
        class="row py-2 px-1">
        <q-btn round
          color="primary"
          outline
          dense
          class="mx-1 buttons"
          icon="keyboard_arrow_right"
          @click="navigatePage(1)">
          <q-tooltip>
            صفحه بعد
          </q-tooltip>
        </q-btn>

        <q-btn round
          color="primary"
          outline
          class="mx-1 buttons"
          dense
          icon="keyboard_arrow_left"
          @click="navigatePage(-1)">
          <q-tooltip>
            صفحه قبل
          </q-tooltip>
        </q-btn>
      </div>
    </div>

    <FormMaker :form="form"
      :style="$attrs.formStyle"
      :centralize="true"
      class="form"
      @submit="submit">
      <template #after>
        <div ref="reportChartRef"
          :style="$attrs.chartStyle"
          class="chart p-2" />
      </template>

      <template #button>
        <div class="center my-2">
          <q-btn label="ثبت"
            class="btn"
            :loading="loading"
            text-color="white"
            type="submit" />
        </div>
      </template>
    </FormMaker>
  </q-card>
</template>

<style lang="scss" scoped>
.chart {
  min-height: 250px;
}

.buttons {
  height: 30px;
  width: 30px;
}

.btn {
  background-color: var(--btn-color);
}
</style>

<script src="./SeriesChartMaker.ts" lang="ts"></script>
