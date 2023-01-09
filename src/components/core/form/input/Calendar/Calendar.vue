<template>
  <q-input v-bind="$attrs"
    :modelValue="internalModel"
    @update:modelValue="onInput($event)"
    v-on="events">
    <template #append>

      <slot name="append" />

      <q-btn dense
        icon="event"
        flat>
        <q-popup-proxy ref="qDateProxy"
          transition-show="scale"
          transition-hide="scale">
          <q-date :modelValue="internalModel"
            :calendar="$attrs.calendar"
            :options="$attrs.options"
            @update:modelValue="onInput($event)" />
        </q-popup-proxy>
      </q-btn>

    </template>

    <template #prepend>
      <q-icon v-if="$attrs.icon"
        :name="$attrs.icon"
        :color="$attrs.iconColor" />

      <q-icon v-if="$attrs['clearable'] && internalModel"
        size="xs"
        flat
        round
        class="cursor-pointer"
        name="close"
        @click="clear" />
    </template>
  </q-input>

</template>

<style lang="scss" scoped>
</style>

<script src="./Calendar.ts" lang="ts"></script>
