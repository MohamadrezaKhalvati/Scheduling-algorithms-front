<template>
  <FormContainer :container="container"
    :form="form"
    @submit="$emit('submit')">
    <template #header>
      <div class="center py-2 text-bold">
        <h2 class="my-1">
          ارتباط مکاتبه ای
        </h2>
      </div>
    </template>

    <template #button>
      <div class="center">
        <q-btn v-close-popup
          label="ارسال پیام"
          type="submit"
          color="purple-5"
          rounded
          text-color="white" />
      </div>
    </template>
  </FormContainer>
</template>

<style scoped lang="scss">
</style>
<script src="./ContactForm.ts" lang="ts"></script>
