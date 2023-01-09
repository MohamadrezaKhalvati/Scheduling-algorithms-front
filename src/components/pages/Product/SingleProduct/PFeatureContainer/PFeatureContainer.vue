<template>
  <div>
    <OrdinaryPFeatureContainer v-if="ordinaryFeatures.length"
      class="max-container"
      :ordinaryFeatures="ordinaryFeatures" />

    <SpecialPFeatureContainer v-if="specialFeatures.length"
      class="max-container"
      :specialFeatures="specialFeatures" />
  </div>
</template>


<style scoped lang="scss">
@import "./../../../../../css/core/_mixin.scss";
</style>
<script src="./PFeatureContainer.ts" lang="ts" />
