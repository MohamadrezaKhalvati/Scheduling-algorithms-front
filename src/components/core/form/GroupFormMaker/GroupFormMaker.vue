<template>
  <q-form v-bind="$attrs"
    ref="qForm"
    class="relative p-2 card"
    @submit="submit">

    <div v-for="(formWrapper, index) in form"
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
                class="field"
                :class="{normalize : !fieldVal['rules'] && !fieldVal['hint'] }" />
            </template>
          </div>
        </div>
      </div>

      <slot :name="index" />
    </div>

    <slot name="after" />

    <slot name="button" />
  </q-form>
</template>

<style lang="scss" scoped>
@import "src/css/core/_mixin.scss";
.form-slot {
  width: 100%;
}

.max-width {
  max-width: 1000px;
  width: 100%;
}
</style>

<script src="./GroupFormMaker.ts" lang="ts"></script>
