<template>
  <div :class="field['class']"
    class="px-1">
    <div class="text-primary mb-1">
      {{ field["upperLabel"] }}
    </div>

    <component :is="field['component']"
      v-bind="childProp"
      ref="reference"
      :modelValue="modelValue"
      v-on="childEvent"
      @update:modelValue="onValChanged">

      <template v-if="childProp['icon']"
        #prepend>
        <q-icon :name="childProp['icon']"
          :color="childProp.iconColor" />
      </template>

      <template #append>
        <q-icon v-if="field['passwordToggle']"
          dense
          flat
          round
          :color="childProp.iconColor"
          :name="field['type'] == 'password' ? 'visibility' : 'visibility_off'"
          @click="field['type'] == 'password' ? field['type'] = 'text' : field['type'] = 'password'" />

        <q-icon v-if="field['clearable'] && modelValue"
          round
          size="xs"
          class="cursor-pointer"
          name="close"
          @click="clear">
          <q-tooltip>
            پاک سازی
          </q-tooltip>
        </q-icon>
      </template>

    </component>
  </div>
</template>

<style lang="scss" scoped>
.cursor-pointer {
  transition: all 100ms linear;
  color: $secondary;
  &:hover {
    transform: scale(1.15);
    color: $red;
  }
}
</style>

<script src="./FormField.ts" lang="ts"></script>
