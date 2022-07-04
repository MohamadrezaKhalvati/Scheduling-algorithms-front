<template>

    <div class="home ">
  <q-layout view="lHr LpR lfr" class="full-layout-container">
    <Header />
   <PortalTarget name="layout-right-drawer">
      <Drawer />
    </PortalTarget>
    
  </q-layout>

    </div>
</template>

<script src="./home.ts">

</script>

<style>

.home{
    background-color: black;
}
</style>