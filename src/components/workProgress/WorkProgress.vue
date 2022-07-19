<template>
  <q-card class="linear-chart ">
    <div class="p-2 text-primary huge-title">
      <span style="color: #d0d2d6">پیشرفت کار</span>
    </div>
    <div class="chart">
      <apexchart type="line"
        height="169"
        :options="chartOptions"
        :series="series" />
    </div>
  </q-card>
</template>

<script src="./WorkProgress.ts">
</script>

<style scoped>
.linear-chart {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #282f46;
}

.chart {
  padding: 0px 10px 0px 10px;
}

.title {
  padding: 13px;
  color: #d0d2d6;
  width: 100%;
  font-weight: bold;
}

.arrow-box {
  width: 120px;
  height: 40px;
  display: flex;
  flex-direction: row;
  background-color: white;
  color: rgb(27, 27, 27);
}
</style>