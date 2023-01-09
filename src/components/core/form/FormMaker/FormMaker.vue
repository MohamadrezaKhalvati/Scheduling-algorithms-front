<template>
  <q-form v-bind="$attrs"
    ref="qForm"
    class="relative column shadow-2">

    <slot name="before" />

    <div class="row form-slot"
      :class="{'center': $attrs.centralize}">
      <template v-for="(fieldVal, key) in form.fields.value"
        :key="key">
        <FormField v-if="!fieldVal['skipRender']"
          v-model="form.modelValue.value[key]"
          v-model:field="form.fields.value[key]"
          class="field"
          :class="{normalize : !fieldVal.rules && !fieldVal['hint'] }" />
      </template>
    </div>

    <slot name="after" />

    <div v-if="$slots.button"
      class="button-slot column end col-xs-12">
      <slot name="button" />
    </div>
  </q-form>
</template>

<style lang="scss" scoped>
.form-slot {
  width: 100%;
}
.field {
  max-width: 100%;
}
.button-slot {
  flex: 1;
}
</style>

<script src="./FormMaker.ts" lang="ts"></script>
