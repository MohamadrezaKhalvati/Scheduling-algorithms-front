<template>
  <div class="career-container text-primary relative-position">
    <Title tag="h2"
      title="فرصت های شغلی" />

    <q-tabs v-model="tab"
      dense
      class="row mid center-mob text-grey-7 px-1 my-2"
      active-color="primary"
      indicator-color="transparent"
      narrow-indicator>
      <q-tab v-for="item in CareerTabs"
        :key="item"
        :name="item"
        class="title"
        :label="item" />
    </q-tabs>

    <transition appear
      mode="out-in"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut">
      <template v-if="computedCards && computedCards.length">
        <transition-group appear
          mode="out-in"
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut">
          <CareerCard v-for="card of computedCards"
            :key="card.id"
            class="my-1"
            :card="card" />
        </transition-group>
      </template>

      <div v-else
        class="column mid fit">
        <q-card class="p-2 center full-width">
          فراخوانی موجود نیست
        </q-card>

        <img src="/images/no_item.svg"
          class="career-container--no-item mt-2">
      </div>
    </transition>

  </div>
</template>

<style scoped lang="scss">
@import "src/css/partial/_mixin.scss";
.career-container {
  &--no-item {
    max-height: 400px;
    max-width: 600px;
    width: 100%;
  }
}
</style>
<style lang="scss">
.career-container {
  .q-tab__label {
    font-size: 1.4rem !important;
  }
}
</style>
<script src="./CareerOpportunities.ts" lang="ts" />
