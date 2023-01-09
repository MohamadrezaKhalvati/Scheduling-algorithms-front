<template>
  <div class="container">
    <div class="center">
      <div ref="editorRef"
        :style="computedStyle"
        :class="computedClass"
        class="col editor p-1" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  position: relative;
  background-color : rgba(0,0,0,0.05) ;
  border-radius : 4px;
}

.btn-toggle {
  position: absolute;
  right: 50%;
  top: -25px;
  transform: translateX(50%);
}

.editor {
  max-width: 1000px;
}
</style>

<script src="./Editor.ts" lang="ts"></script>
