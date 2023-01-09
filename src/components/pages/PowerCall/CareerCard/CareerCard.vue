<template>
  <q-expansion-item expand-separator
    class="career-card--wrapper"
    @show="expanded = true"
    @hide="expanded = false">
    <template #header>
      <q-card class="career-card--container relative-position row mid fit between text-grey-8 column-mob px-3 py-2">
        <div class="row mid column-mob">
          <img src="/images/powercall/briefcase.png"
            class="career-card--container--image my-1">

          <span class="text-primary m-1">
            {{ card.title }}
          </span>
        </div>

        <span class="my-1">
          {{ card.type }}
        </span>

        <span class="my-1">
          {{ card.timeAccepting }}
        </span>

        <span class="my-1">
          {{ card.place }}
        </span>

        <q-btn :label="expanded ? 'کمتر' : 'بیشتر'"
          class="px-2"
          :icon="expanded ? 'expand_less' : 'expand_more'"
          color="accent"
          text-color="white" />
      </q-card>
    </template>

    <q-card class="p-3 mx-2 shadow-3 my-0 subtitle">
      <q-card-section>
        {{ card.description }}
      </q-card-section>
    </q-card>
  </q-expansion-item>
</template>


<style scoped lang="scss">
@import "src/css/partial/_mixin.scss";
.career-card--container {
  font-size: 1.2rem;
  &--image {
    width: 40px;
    height: 40px;
  }
}
</style>
<style lang="scss">
.career-card--wrapper {
  .q-item__section--side {
    display: none !important;
  }
}
</style>
<script src="./CareerCard.ts" lang="ts" />
