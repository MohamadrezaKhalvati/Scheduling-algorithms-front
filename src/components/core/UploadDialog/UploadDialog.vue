
<template>
  <q-dialog ref="dialog">
    <q-card class="uploader">
      <div class="p-2">
        برای آپلود فایل جدید از دکمه
        <q-icon name="add"
          dense
          color="primary" />
        استفاده کنید.
      </div>
      <FormMaker :form="uploadForm.form"
        class="mb-1" />
    </q-card>
  </q-dialog>
</template>


<style scoped lang="scss">
.uploader {
  overflow: hidden;
  width: 450px;
}
</style>

<script src="./UploadDialog.ts" lang="ts"></script>