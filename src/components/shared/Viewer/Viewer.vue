<template>

 <q-card>
   <div class="m-2 p-2">
    <q-file v-model="file"
    filled
    dense 
    :label="label"
    :modelValue="modelValue"
    @update:modelValue="onInput($event)"
    v-on="events">
    <template #append>
      <slot name="append" />
    </template>

    <template 
      #prepend>
      <q-icon name="image" class="mr-1"
        color="primary" />
    </template>

  </q-file>

      <div class="mt-3">
        <q-img 
          class="mb-1 center mx-auto image-viewer "
          :src="imageSrc"
          loading
           />
      </div>

   </div>
 </q-card>
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

.image-viewer{
  object-fit: contain;
  width: 350px;
}

</style>
<script lang="ts" src="./Viewer.ts"></script>