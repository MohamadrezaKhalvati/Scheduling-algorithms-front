<template>
  <div class="container relative-position">
    <Title tag="h2"
      title="مراحل ماهانی شدن" />

    <ExpansionItem class="my-1"
      :items="steps" />
  </div>
</template>


<style scoped lang="scss">
@import "src/css/partial/_mixin.scss";
.container {
  z-index: 10;
  &--expantion-item {
    line-height: 1rem;
    border-radius: 30px;
  }
}
</style>
<script src="./CareerSteps.ts" lang="ts" />
