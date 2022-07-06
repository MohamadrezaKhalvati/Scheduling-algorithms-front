<template>
  <q-layout view="lHr LpR lfr"
    class="full-layout-container ">

    <Header />

    <Drawer />

    <q-page-container>
      <div class="row">
        <div class="col-6">
          <WorkStatus />
        </div>
        <div class="col-3">
          <WorkProgress />
        </div>
        <div class="col-3">
          <OkrProgress />
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <ActiveTasksTable />
        </div>
      </div>
    </q-page-container>

  </q-layout>

</template>

<script src="./home.ts">
</script>

<style>
</style>