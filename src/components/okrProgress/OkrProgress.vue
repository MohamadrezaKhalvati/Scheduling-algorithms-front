<template>
  <q-card class="okr-progress ">
    <div class="p-2 text-primary huge-title  ">
      <span style="color: #d0d2d6">پیشرفت OKR</span>
    </div>
    <div class="okr-chart ">
      <div class="chart-wrapper row mid center">
        <apexchart id="chart"
          height="140px"
          width="100%"
          class="row"
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
  </q-card>
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
  padding: 13px;
  color: #d0d2d6;
  width: 100%;
  font-weight: bold;
}

.detail {
  margin: auto;
  padding-top: 5px;
  width: 100%;
  display: flex;
  flex-direction: row;
  color: #d0d2d6;
  justify-content: space-around;
}

.remaining-item {
  width: 50%;
  padding: 15px;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-top-style: solid;
  border-right-style: solid;
  border-width: 1px;
  border-color: black;
}

.done-item {
  width: 50%;
  font-size: 15px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-top-style: solid;
  border-left-style: solid;
  border-color: black;
  border-width: 1px;
}
</style>