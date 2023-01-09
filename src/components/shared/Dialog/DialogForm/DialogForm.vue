
<template>
  <DialogWrapper v-model:dialogRef="dialogRef">
    <q-card>
      <DialogHeader :dialogRef="dialogRef">
        <Title>{{ headerTitle }}</Title>
      </DialogHeader>

      <FormMaker :form="form"
        class="form p-2"
        @submit="submit">
        <template #button>
          <div class="center">
            <q-btn text-color="white"
              class="btn"
              type="submit">
              {{ submitTitle }}
            </q-btn>
          </div>
        </template>
      </FormMaker>
    </q-card>
  </DialogWrapper>
</template>

<style scoped lang="scss">
.form {
  min-width: 100%;
  width: 600px;
  max-width: 100%;
  min-height: 200px;
}

.btn {
  background-color: var(--btn-color);
}
</style>

<script src="./DialogForm.ts" lang="ts"></script>
