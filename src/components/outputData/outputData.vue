<template>
  <q-page>
    <TableContainer :container="container" v-bind="table" :v-bind="table">
      <template #title>
        <div class="row between center mid px-1">
          <TableTitle :title="container.title" />
        </div>
        <q-separator />
      </template>
    </TableContainer>
  </q-page>
</template>

<script src="./outputData.ts" />



<style scoped lang="scss">

</style>
