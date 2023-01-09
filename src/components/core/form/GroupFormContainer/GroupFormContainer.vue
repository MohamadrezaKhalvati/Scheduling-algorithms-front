<template>
  <div class="form-wrapper pb-2">
    <q-form v-bind="$attrs"
      ref="qForm"
      class="relative p-2 card form column between no-wrap">

      <div v-for="formWrapper of internalForm"
        :key="formWrapper.title"
        class="column form-slot mb-2">

        <FormTitle :icon="formWrapper.icon">
          {{ formWrapper.title }}
        </FormTitle>

        <div class="column">
          <slot name="before" />

          <div class="center full-width">
            <div class="row max-width start">
              <template v-for="(fieldVal, key) in formWrapper.form.fields.value"
                :key="key">
                <FormField v-if="!fieldVal['skipRender']"
                  v-model="formWrapper.form.modelValue.value[key]"
                  v-model:field="formWrapper.form.fields.value[key]"
                  :class="{normalize : !fieldVal['rules'] && !fieldVal['hint'] }" />
              </template>
            </div>
          </div>

          <slot name="after" />
        </div>
      </div>

      <slot>
        <div class="center mid mt-3">
          <q-btn label="ثبت اطلاعات"
            dense
            :loading="container.loading"
            text-color="white"
            class="btn ml-1 py-1 px-2 radius"
            @click="submit" />
        </div>
      </slot>
    </q-form>
  </div>
</template>

<style lang="scss" scoped>
@import "src/css/core/_mixin.scss";
.form-wrapper {
  position: relative;
  .form {
    background: var(--front-color);
  }
}

.form-slot {
  width: 100%;
}

.normalize {
  padding-bottom: 20px;
}

.button-slot {
  flex: 1;
}

.max-width {
  max-width: 1000px;
  width: 100%;
}

.btn {
  background-color: var(--btn-color);
}
</style>

<script src="./GroupFormContainer.ts" lang="ts"></script>
