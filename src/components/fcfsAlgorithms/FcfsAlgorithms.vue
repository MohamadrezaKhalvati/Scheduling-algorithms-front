<template>
  <FormContainer :form="form" :container="container" @submit="submit">

    <template #button>

      <div>
        <q-btn :loading="container.loading" label="submit" dense type="submit" color="primary" class="button-zone"
          @click="submit" />
      </div>
      <div>
        <q-btn :loading="container.loading" label="add another process" dense type="submit" color="primary" center
          @click="addAnotherValue" />
      </div>
    </template>
  </FormContainer>
</template>

<script src="./FcfsAlgorithms.ts" lang="ts" />



<style scoped lang="scss">
.button-zone {
  display: flex;
  justify-content: center;
  background-color: red;
}
</style>
