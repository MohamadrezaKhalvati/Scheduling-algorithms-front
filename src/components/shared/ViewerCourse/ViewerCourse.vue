<template>
  <div class="app">

    <div class="preview column">
      <q-img v-if="imageSrcCourse"
        class="mb-1"
        :src="imageSrcCourse"
        loading
        style="height:140px; max-width:150px" />

      <input type="file"
        class="input"
        @change="onFileChange">
    </div>

  </div>
</template>
<style scoped>
.body {
  background-color: #e2e2e2;
}

.app {
  padding: 20px;
}

.preview {
  display: flex;
  align-items: flex-start;
}

.preview img {
  max-width: 100%;
  max-height: 500px;
}
</style>
<script lang="ts" src="./ViewerCourse"></script>
