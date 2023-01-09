<template>
  <q-badge :color="deadlineColor"
    class="p-1">
    {{ formattedDeadline }}

    <q-tooltip>
      <div v-if="isFinished">
        تسک تمام شده است
      </div>

      <div v-else-if="remainingDays < 0">
        {{ -remainingDays }} روز از ددلاین گذشته است
      </div>

      <div v-else-if="remainingDays > 0">
        {{ remainingDays }} روز تا پایان ددلاین زمان باقی مانده است
      </div>

      <div v-else>
        امروز، روز آخر ددلاین است
      </div>
    </q-tooltip>
  </q-badge>
</template>

<style lang="scss" scoped>
</style>

<script src="./DeadlineBadge.ts" lang="ts"></script>
