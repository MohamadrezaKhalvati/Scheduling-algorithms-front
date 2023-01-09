<template>
  <FormContainer :form="form" :container="container" @submit="submit">

    <template #button>

      <div class="row  button-zone">
        <div>
          <q-btn :loading="container.loading" label="submit" type="submit" color="primary" @click="submit" />
        </div>
        <div>
          <q-btn :loading="container.loading" label="add another process" type="submit" color="primary"
            @click="submit" />
        </div>
      </div>
    </template>
  </FormContainer>
</template>

<script src="./FcfsAlgorithms.ts" lang="ts" />



<style scoped lang="scss">
.button-zone {
  display: flex;
  justify-content: center;
}
</style>
