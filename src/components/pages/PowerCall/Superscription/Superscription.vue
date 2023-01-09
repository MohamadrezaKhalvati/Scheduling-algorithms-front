<template>
  <div class="container column mid relative-position text-primary">
    <CloudImage class="container--cloud left untouchable" />

    <CloudImage class="container--cloud right untouchable" />

    <Title tag="h2"
      :title="title" />

			<div class="center mid">
				<p class="my-2 container--description line-height">
			    {{props.description}}
		    </p>
			</div>

    <ExpansionItem class="my-1"
      :items="questions" />
  </div>
</template>


<style scoped lang="scss">
@import "src/css/partial/_mixin.scss";
.line-height {
	line-height: 44px;
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
  z-index: 10;
  &--expantion-item {
    line-height: 1rem;
    border-radius: 30px;
  }
  &--background {
    width: 100% !important;
  }
  &--image {
    z-index: 10;
    width: 300px;
    height: 250px;
  }
}
</style>
<script src="./Superscription.ts" lang="ts" />
