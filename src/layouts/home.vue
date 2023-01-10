<template>
  <q-layout view="lHr LpR lfr" class="full-layout-container ">

    <Header />


    <q-page-container style="padding-top:35px">

      <q-page>
        <div class="m-1">
          <div class="col-lg-12 col-mid-6 md-2">
            <FcfsAlgorithms />
          </div>
          <div class="col-lg-12 col-mid-6 mt-2">
            <outputData />
          </div>
        </div>
      </q-page>
    </q-page-container>

  </q-layout>

</template>

<script src="./home.ts">
</script>

<style lang="scss" scoped>
.home-button {
  padding-bottom: 5px;
  padding-right: 10px;
  color: white;
}
</style>
