<template>
  <div class="container relative-position">
    <CloudImage class="container--cloud left untouchable" />

    <CloudImage class="container--cloud right untouchable" />

    <div class="max-container mb-2 container--search center no-wrap mt-lg-4 mt-md-3 mt-0">
      <q-input v-model="filter.text"
        borderless
        clearable
        dense
        input-class="px-2"
        class="bg-grey-4 container--search--title shadow-3 px-1"
        @keydown.enter="search(filter.text)" />

      <q-btn text-color="white"
        class="container--search--button px-1"
        dense
        label="جستجو کن"
        @click="search(filter.text)" />
    </div>

    <div class="center">
      <TagContainer :tags="TagList"
        @input="setServiceFilterValue" />
    </div>

    <!-- must change to SlotTransitionWrapper -->
    <transition name="fade">

      <div v-if="products.length"
        class="center row midle px-lg-4 px-sm-3 p-1">
        <transition-group name="fade">
          <div v-for="product of products"
            :key="product.title"
            class="col-lg-4 col-md-6 col-xs-12 p-1 center">
            <ProductCard :product="product"
              class="full-width" />
          </div>
        </transition-group>
      </div>

      <div v-else
        class="column fit">
        <q-card class="center p-2">
          محصولی وجود ندارد
        </q-card>

        <img src="/images/no_item.svg"
          class="container--no-product mid my-2">
      </div>
    </transition>

    <div v-if="products.length"
      class="center my-3 pb-4">
      <Pagination :input="paginationInput"
        @request="search(filter.text, false)" />
    </div>
  </div>
</template>


<style scoped lang="scss">
@import "./../../../../css/core/_mixin.scss";
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.container {
  padding: 0;
  &--cloud {
    max-width: 350px;
    @include to-size(lg) {
      max-width: 250px;
    }
    @include to-size(sm) {
      max-width: 150px;
    }
    position: absolute;
    &.right {
      right: -110px;
      top: 100px;
    }
    &.left {
      left: -110px;
      top: 300px;
    }
  }

  &--data {
    min-height: 400px;
  }

  &--search {
    max-width: 550px;
    border: white;
    padding: 0 15px 0 15px;
    z-index: 10;
    &--title {
      width: 400px;
      @include to-size(sm) {
        width: 100%;
      }
    }
    &--button {
      min-width: 100px;
      border-radius: 0 !important;
      background: linear-gradient(to right, #fec440, #f27255);
    }
  }

  &--no-product {
    max-height: 500px;
    margin: auto;
    @include to-size(sm) {
      max-height: 280px;
    }
  }
}
</style>
<script src="./ProductListContainer.ts" lang="ts" />
