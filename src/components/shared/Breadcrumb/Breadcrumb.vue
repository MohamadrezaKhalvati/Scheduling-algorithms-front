<template>
  <div class="breadcrumb row no-wrap">
    <div v-for="item of computedData"
      :key="item.label"
      class="row no-wrap mid text"
      :class="{'text-primary': item.isLast}">

      <q-btn :to="item.link"
        flat
        class="row no-wrap clickable">
        <div class="row no-wrap">

          <div v-if="item.icon"
            class="ml-1">
            <q-icon :name="item.icon"
              size="15px" />
          </div>

          <div class="label">
            {{ item.label }}
          </div>
        </div>

      </q-btn>

      <div class="px-1">
        <q-icon v-if="!item.isLast"
          size="15px"
          name="arrow_back_ios" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.breadcrumb {
  overflow-x: auto;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    height: 0px;
  }

  .text {
    color: var(--text-color);
  }

  .label {
    white-space: pre;
    text-transform: none;
  }
}
</style>

<script src="./Breadcrumb.ts" lang="ts"></script>
