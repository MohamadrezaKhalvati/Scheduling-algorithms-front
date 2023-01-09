<template>
  <div class="container row relative-position px-4 px-xs-3 text-primary">
    <img v-if="!size.state.value.xs"
      src="/images/powercall/benefits.png"
      class="absolute-center container--background">

    <div class="container--content row column-mob">
      <span class="container--content--title text-bold my-1">
        مزایای شغلی ماهان
      </span>

      <q-separator v-if="!size.state.value.xs"
        vertical
        class="container--separator mx-3 bg-accent" />

      <div class="column between">
        <div v-for="benefit of benefits"
          :key="benefit"
          class="title my-2 my-xs-1 center-mob">
          {{ benefit }}
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
@import "src/css/partial/_mixin.scss";
.container {
  @include screen(mobile) {
    background: url("/images/powercall/benefits.png");
  }
  &--background {
    height: 300px;
    width: 100%;
    object-fit: cover;
  }
  &--content {
    z-index: 10;
    align-items: flex-end;
    &--title {
      font-size: 1.5rem;
    }
  }
  &--separator {
    min-height: 120px;
    width: 4px;
    height: 100%;
  }
}
</style>
<script src="./JobBenefits.ts" lang="ts" />
