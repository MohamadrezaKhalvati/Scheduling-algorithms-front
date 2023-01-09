<template>
  <q-card class="px-2 px-lg-4 py-2">
    <h2 class="my-2">
      ارتباط تلفنی
    </h2>

    <q-card v-for="(item, index) of contactPhone"
      :key="item.title"
      class="row mid center evenly my-3 shadow-1 p-3 bg-grey-1 rounded-borders"
      :class="{'row-r': index % 2 == 1}">
      <img :src="item.image"
        class="career--image my-1">

      <div class="column start">
        <span class="text-bold my-1">
          {{ item.title }}
        </span>

        <span class="mb-1">
          تلفن همراه :{{ item.phoneNumber }}
        </span>

        <span v-for="email of item.emails"
          :key="email.address"
          class="mb-1">
          ایمیل :{{ email.address }}
        </span>
      </div>
    </q-card>
  </q-card>
</template>

<style scoped lang="scss">
@import "src/css/partial/_mixin.scss";
.index {
  z-index: 20 !important;
}
.career--image {
  width: 300px;
  height: 200px;
}
</style>
<script src="./ContactPhone.ts" lang="ts" />
