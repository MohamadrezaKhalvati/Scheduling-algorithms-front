
<template>
  <q-dialog ref="dialog">
    <FormContainer :form="form"
      :container="filterContianer"
      class="q-dialog-plugin form"
      @submit="submit">
      <template #button>
        <div class="center">
          <q-btn :loading="filterContianer.loading"
            type="submit"
            color="primary"
						@click="onOKClick">
						ثبت
            <q-icon name="search"
              class="mr-1" />
          </q-btn>
        </div>
      </template>
    </FormContainer>
  </q-dialog>
</template>

<style scoped lang="scss">
@import "src/css/core/_mixin.scss";
.form {
  border: 1px rgb(92, 92, 92) solid;
  min-width: 650px;
  min-height: 200px;
}
</style>

<script src="./TableFilter.ts" lang="ts"></script>
