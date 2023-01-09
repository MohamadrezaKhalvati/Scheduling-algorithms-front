<template>
  <div class="column mid top-md">
    <span class="my-2 text-secondary">
      {{ linkTitle }}
    </span>

    <q-btn v-for="service of linkData"
      :key="service.title"
      flat
      align="left"
      :label="service.title"
      class="my-1 subtitle content-title"
      :to="service.link"
      :disable="service.disable" />
  </div>

</template>

<style scoped lang="scss">
@import "src/css/core/_mixin.scss";
.content-title {
  transition: 0.1s;
}
.content-title:hover {
  transform: translateX(-6px);
}
.text-secondary {
	color: $info !important;
}
</style>

<script src="./FooterLink.ts" lang="ts"></script>
