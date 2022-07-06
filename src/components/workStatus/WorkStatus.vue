<template>
  <div class="work-status">
    <div class="work-status-title">
      <span>وضعیت کاری</span>
    </div>
    <div class="chart">

      <div class="base">
        <div class="weekly-avg-img">
          <q-icon name="bolt"
            class="bolt-img" />
        </div>
        <div class="detail">
          <span>۲.۷۵ ساعت</span>
          <span>میانگین ساعت هفتگی</span>
        </div>
      </div>

      <div class="base">
        <div class="monthly-avg-img">
          <q-icon name="timeline"
            class="timeline-img" />
        </div>
        <div class="detail">
          <span>۰.۹۴</span>
          <span>میانگین ساعت ماهانه</span>
        </div>
      </div>

      <div class="base">
        <div class="task-number-img">
          <q-icon name="join_right"
            class="join-right-img" />
        </div>
        <div class="detail">
          <span>۱ عدد</span>
          <span>تعداد تسک فعال</span>
        </div>
      </div>
    </div>

  </div>
</template>
<script src="./WorkStatus.ts">
</script>

<style>
.work-status {
  height: 233px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #282f46;
}

.work-status-title {
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  color: #d0d2d6;
  width: 100%;
  font-weight: bold;
}
.chart {
  margin: 55px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.bolt-img {
  font-size: 30px;
  color: #ea5455;
}

.timeline-img {
  color: #00cde8;
  font-size: 30px;
}

.join-right-img {
  font-size: 30px;
  color: #7367f0;
}
.detail {
  display: flex;
  flex-direction: column;
  color: #d0d2d6;
  font-size: 13px;
  margin-right: 1rem;
}

.base {
  display: flex;
  flex-direction: row;
}
</style>