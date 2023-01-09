<template>
  <q-select color="white"
    input-class="text-white"
    label-color="white"
    ref="search"
    use-input
    v-model="model"
    :loading="loading"
    :options="options"
    behavior="menu"
    dense
    @input="changeModel"
    @input-value="searchForText"
    hide-dropdown-icon
    class="full-width z-top"
    label="جستجو">
    <template v-if="options.length"
      v-slot:option="scope">
      <q-item v-bind="scope.itemProps"
        v-on="scope.itemEvents">
        <img :src="scope.opt.image"
          class="option--image">

        <q-item-section class=" px-2 text-primary">
          <q-item-label class="title"
            v-html="scope.opt.title" />

          <q-item-label caption
            class="subtitle my-1"
            v-html="scope.opt.description" />
        </q-item-section>
      </q-item>
    </template>

    <template v-slot:prepend>
      <q-icon name="search"
        size="sm"
        color="white"
        class="cursor-pointer" />
    </template>

    <template v-slot:append>
      <q-icon name="close"
        size="sm"
        @click="closeSearchMode"
        color="white"
        class="cursor-pointer" />
    </template>
  </q-select>
</template>

<style lang="scss" scoped>
@import "src/css/partial/_mixin.scss";
.option--image {
  width: 50px;
  height: 50px;
}
</style>

<script src="./Search.ts" lang="ts"></script>
