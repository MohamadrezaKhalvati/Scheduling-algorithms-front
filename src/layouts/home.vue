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
      <OkrProgress class="col-6" />
    </q-page-container>

  </q-layout>

</template>

<script src="./home.ts">
import OkrProgress from "src/components/okrProgress/OkrProgress.vue";
</script>

<style>
.home {
  background-color: #1d1f20;
}
</style>