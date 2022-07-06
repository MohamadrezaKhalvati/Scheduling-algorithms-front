<template>
  <div class="linear-chart">
    <div class="title">
      <span>پیشرفت کار</span>
    </div>
    <div class="linear-chart">
      <apexchart type="line"
        height="169"
        :options="chartOptions"
        :series="series" />

    </div>
  </div>
</template>

<script src="./WorkProgress.ts">
</script>

<style>
.linear-chart {
  height: 233px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #282f46;
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