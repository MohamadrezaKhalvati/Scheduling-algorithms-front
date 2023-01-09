
<template>
  <div class="column center p-lg-4 p-md-3 p-1 pb-0">
    <Title tag="h2"
      class="mid center start-sm"
      title="ویژگی ها" />

    <div class="row between relative-position container p-1">

      <div class="container--righty col-lg-4 col-12 col-md-6">
        <div v-for="(feature) of rightFeatureList"
          :key="feature.title"
          class="row no-wrap text-primary my-2">
          <div class="ml-1 mt-1">
            <q-badge>{{ feature.index + 1 }}</q-badge>
          </div>
          <h3 class="mwt subtitle my-0 font-size">
            {{ feature.title }}
          </h3>
        </div>
      </div>

      <img src="/images/product/rocket.svg"
        class="container--rocket self-center untouchable">

      <div class="container--righty col-lg-4 col-xs-12 col-md-6">
        <div v-for="(feature) of leftFeatureList"
          :key="feature.title"
          class="row no-wrap text-primary my-2">
          <div class="ml-1 mt-1">
            <q-badge>{{ feature.index + 1 }}</q-badge>
          </div>
          <h3 class="mwt subtitle my-0 font-size">
            {{ feature.title }}
          </h3>
        </div>
      </div>

    </div>
  </div>
</template>


<style scoped lang="scss">
@import "./../../../../../../css/core/_mixin.scss";
.font-size {
	font-size: 14px;
}
.container {
  @include from-size(lg) {
    min-height: 150px;
  }

  @include from-size(md) {
    min-height: 100px;
  }

  &--righty,
  &--lefty {
    text-align: justify;
		font-size: 0.7rem;
    @include from-size(lg) {
      text-align: justify;
    }
  }

  &--rocket {
    max-height: 300px;
    z-index: 5;
    display: none;
    @include from-size(lg) {
      display: block;
    }
  }
}
</style>
<script src="./OrdinaryPFeatureContainer.ts" lang="ts" />
