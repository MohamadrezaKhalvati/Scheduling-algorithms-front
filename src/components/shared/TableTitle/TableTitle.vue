<template>
  <div class="container rounded p-0 m-0 pr-2">
    <h3 class="container--tag">
      {{ props.title }}
    </h3>
  </div>
</template>


<style scoped lang="scss">
@import "./../../../css/core/_mixin.scss";
@import "./../../../css/core/_common.scss";

.container {
  color: #000000;
  border-radius: 3px;

  &--tag {
    font-family: "Vazir";
    display: inline-block;
    position: relative;
    font-size: 14px;
  }
}
</style>
<script src="./TableTitle.ts" lang="ts" />
