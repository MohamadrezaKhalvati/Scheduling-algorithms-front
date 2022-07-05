<template>
  <div class="okr-progress">
    <div class="okr-progress-title">
      <span>پیشرفت OKR</span>
    </div>
    <div class="okr-chart">
      <div class="chart-wrapper row mid center">
        <VueApexCharts id="chart"
          height="100%"
          width="100%"
          class="chart"
          type="radialBar"
          :options="options"
          :series="options.series" />
      </div>
    </div>
    <div class="detail">
      <div class="done-item">
        <span>موارد انجام شده</span>
        <span>۲۰</span>
      </div>
      <div class="remaining-item">
        <span>موارد مانده</span>
        <span>۱۱</span>
      </div>

    </div>
  </div>
</template>



<script src="./OkrProgress.ts">
</script>

<style scoped>
.okr-progress {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #282f46;
}

.okr-progress-title {
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  color: #d0d2d6;
  width: 100%;
  font-weight: bold;
}

.detail {
  height: 100px;
  display: flex;
  flex-direction: row;
  color: #d0d2d6;
  justify-content: space-around;
}

.remaining-item {
  padding: 15px;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.done-item {
  font-size: 15px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
</style>