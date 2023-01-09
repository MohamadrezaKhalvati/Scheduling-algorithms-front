<template>
  <div class="container column mid relative-position text-primary">
    <CloudImage class="container--cloud left untouchable" />

    <CloudImage class="container--cloud right untouchable" />

    <Title tag="h4"
      class="mid title-font"
      :title="title"
			titleClass="titleClass" />

    <p class="my-2 container--description text-justify line-height" v-html="props.description" />
  </div>
</template>


<style scoped lang="scss">
@import "src/css/core/_mixin.scss";
.line-height {
	line-height: 28px;
}
.title-font{
	font-size: 1.25rem;
}
.container {
  &--cloud {
    max-width: 150px;
    position: absolute;
    &.right {
      right: -110px;
      bottom: 100px;
    }
    &.left {
      left: -110px;
      top: 150px;
    }
  }
  &--description {
    z-index: 10;
    white-space: pre-wrap;
  }
}

</style>
<script src="./Superscription.ts" lang="ts" />
