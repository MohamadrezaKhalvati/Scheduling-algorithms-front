
<template>
  <div class="container column mid relative-position text-primary ">
    <CloudImage class="container--cloud right untouchable" />

    <CloudImage class="container--cloud left untouchable" />

    <div class="row evenly my-2">
      <div v-for="service of props.services"
        :key="service.title"
        class="col-lg-3 col-md-4 col-xs-12 p-1">
        <router-link :to="service.link">
          <q-card class="card column mid evenly">
            <img :src="service.image"
              class="card--image">

            <span class="text-center mx-2 text-color">
              {{ service.title }}
            </span>
          </q-card>
        </router-link>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
@import "src/css/core/_mixin.scss";
.container {
  &--cloud {
    max-width: 350px;
    @include from-size(md) {
      max-width: 250px;
    }
    @include from-size(xs) {
      max-width: 150px;
    }
      position: absolute;
    &.right {
      right: -110px;
    }
    &.left {
      left: -110px;
      bottom: -50px;
    }
  }
  .card {
    width : 100%;
    height: 220px;
    transition: transform 1s;
    &--image {
      width: 100%;
      height: 90px;
      width: 100px;
    }
    &:hover {
      transform: translateY(-10px);
    }
  }
}

.text-color{
  color: #32055A;
}

.container--size{ 
  width: 913px;
}
</style>

<script src="./ServiceContainer.ts" lang="ts"></script>
