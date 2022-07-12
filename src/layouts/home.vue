<template>
  <q-layout view="lHr LpR lfr"
    class="full-layout-container ">

    <Header />

    <Drawer />

    <q-page-container>

      <div class="home-button">
        <q-icon name="dashboard"
          color="white" />
        <span>خانه</span>
      </div>

      <div class="row">
        <div class="col-lg-6 col-md-12 col-xs-12 mb-2 ">
          <WorkStatus class="full-height" />
        </div>
        <div class="col-lg-3 col-md-6 col-xs-12 mb-2 ">
          <WorkProgress class="full-height" />
        </div>
        <div class="col-lg-3 col-md-6 col-xs-12 mb-2 ">
          <OkrProgress class="full-height" />
        </div>
      </div>

      <div class="row">
        <div class=" col-lg-12 col-xs-12 mb-2">
          <ActiveTasksTable class="full-height" />
        </div>
      </div>

      <div class="row">
        <div class="col-lg-6 col-xs-12 mb-2">
          <DailyWorkActivity class="full-height" />
        </div>
        <div class="col-lg-6 col-xs-12 mb-2">
          <ReportChart />
        </div>
      </div>

    </q-page-container>

  </q-layout>

</template>

<script src="./home.ts">
</script>

<style scoped>
.home-button {
  padding-right: 10px;
  padding-bottom: 5px;
  color: white;
}
</style>