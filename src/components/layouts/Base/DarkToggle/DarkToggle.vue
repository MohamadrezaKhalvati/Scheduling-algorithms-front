<template>
  <q-toggle v-model="isDarkMode"
    checked-icon="wb_sunny"
    unchecked-icon="nightlight_round"
    color="grey-7"
    dense
    @update:modelValue="setDarkMode" />
</template>

<style lang="scss" scoped>
</style>

<script src="./DarkToggle.ts" lang="ts"></script>
