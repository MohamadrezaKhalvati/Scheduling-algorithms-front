<template>
  <div class="relative-position text-primary">
    <Title tag="h2"
      class="center"
      title="اعضای شرکت" />

    <div class="row around">
      <Avatar v-for="person in peopleList"
        :key="person.name"
        class="col-12 col-md-6 col-lg-3 my-2"
        :input="person" />
    </div>
  </div>
</template>


<style scoped lang="scss">
@import "src/css/partial/_mixin.scss";
</style>
<script src="./AvatarContainer.ts" lang="ts" />
