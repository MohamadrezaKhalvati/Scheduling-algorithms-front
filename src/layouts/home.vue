<template>
  <q-layout view="lHr LpR lfr"
    class="full-layout-container home">

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

    </q-page-container>

  </q-layout>

</template>

<script src="./home.ts">
</script>

<style>
.home {
  background-color: #1d1f20;
}
</style>