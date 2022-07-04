<template>
  <q-layout view="lHr LpR lfr" class="full-layout-container">
    
    <Header />

    <Drawer />

    <q-page-container>
      <WorkStatus />
    </q-page-container>
  </q-layout>

</template>

<script src="./home.ts">
import WorkStatus from "../components/workStatus/WorkStatus.vue"

</script>

<style>

.home{
    background-color: black;
}
</style>