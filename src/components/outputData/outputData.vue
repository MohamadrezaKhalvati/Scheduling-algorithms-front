<template>
  <q-page style="background-color : #d0d2d6">
    <TableContainer :container="container" v-bind="table" :v-bind="table">
      <template #title>
        <div class="row between center mid px-1">
          <TableTitle :title="container.title" />
        </div>
        <q-separator />
      </template>
    </TableContainer>

    <div class="mt-2 mr-2">
      <span>average of response time is : {{ avgResponseTimeResult }}</span>
    </div>

    <div class="mt-2 mr-2">
      <span>average of waiting time is : {{ avgWaitingTimeResult }}</span>
    </div>
  </q-page>


</template>

<script src="./outputData.ts" />



<style scoped lang="scss">

</style>
