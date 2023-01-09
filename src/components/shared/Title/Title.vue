<template>
  <div class="container">
    <template v-if="!skeleton">
      <component :is="tag"
        class="container--tag"
        :class="titleClass">
        {{ title }}
      </component>
    </template>

    <template v-else>
      <q-skeleton type="rect"
        width="130px"
        class="my-1"
        height="10px" />
    </template>
  </div>
</template>


<style scoped lang="scss">
@import "./../../../css/core/_common.scss";
@import "./../../../css/core/_mixin.scss";
.container {
  color: $primary;
  z-index: 10;
  @font-face {
    font-family: "B Homa";
    src: url("./../../../css/core/Fonts/BHoma.woff");
  }
  &--tag {
    font-family: "B Homa";
    display: inline-block;
    position: relative;
    &::before {
      right: 50%;
      transform: translate(50%, 25px);
      bottom: 12px;
      position: absolute;
      content: "";
      width: 100%;
      max-width: 100px;
      background: linear-gradient(to right, #fec440, #f27255);
      height: 4px;
      border-radius: 8px;
    }
  }
}
</style>
<script src="./Title.ts" lang="ts" />
