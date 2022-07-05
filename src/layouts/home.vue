<template>
  <q-layout view="lHr LpR lfr"
    class="full-layout-container home">

    <Header />

    <Drawer />

    <q-page-container>
      <div class="row">
        <WorkStatus class="col-6" />
        <WorkProgress class="col-3" />
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