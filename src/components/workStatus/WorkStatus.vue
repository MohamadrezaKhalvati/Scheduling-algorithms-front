<template>
  <q-card class="work-status ">
    <div class="p-2 text-primary huge-title">
      <span style="color: #d0d2d6">وضعیت کاری</span>
    </div>
    <div class="row-md between mt-2">
      <div class="row m-3">
        <div class="weekly-avg-img">
          <q-icon name="bolt"
            class="bolt-img" />
        </div>
        <div class="detail">
          <span>{{ workStatusData.weekly }} ساعت</span>
          <span>میانگین ساعت هفتگی</span>
        </div>
      </div>

      <div class="row m-3">
        <div class="monthly-avg-img">
          <q-icon name="timeline"
            class="timeline-img" />
        </div>
        <div class="detail">
          <span>{{ workStatusData.monthly }}</span>
          <span>میانگین ساعت ماهانه</span>
        </div>
      </div>

      <div class="row m-3">
        <div class="task-number-img">
          <q-icon name="join_right"
            class="join-right-img" />
        </div>
        <div class="detail">
          <span> {{ workStatusData.activeTasksCount }} عدد </span>
          <span>تعداد تسک فعال</span>
        </div>
      </div>
    </div>

  </q-card>
</template>
<script src="./WorkStatus.ts">
</script>


<style scoped>
.work-status {
  border-radius: 8px;
  background-color: #282f46;
}

.bolt-img {
  border-radius: 50%;
  font-size: 40px;
  color: #ea5455;
}

.timeline-img {
  background-color: #00cfe81f;
  border-radius: 50%;
  color: #00cde8;
  font-size: 40px;
}

.join-right-img {
  background-color: #7367f01f;
  border-radius: 50%;
  font-size: 40px;
  color: #7367f0;
}
.detail {
  display: flex;
  flex-direction: column;
  color: #d0d2d6;
  font-size: 13px;
  margin-right: 1rem;
}
</style>