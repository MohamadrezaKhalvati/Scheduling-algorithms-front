
<template>
  <q-card class="container">
    <div class="container--header between mid p-1">
      <div>
        فایل ویدیویی ارائه
      </div>

      <q-btn color="primary"
        dense
        flat
        icon="add"
        @click="openDialog"
        v-if="user.userData.value.role == 'Admin'" />

    </div>

    <q-separator />

    <transition appear
      mode="out-in"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut">
      <q-card-section v-if="!Input.video">
        <div class="column mid">
          <div>
            هنوز فایلی اضافه نشده است، از طریف دکمه
            <q-icon name="add" />
            ویدیو ارائه را ایجاد کنید.
          </div>

          <img src="/images/projector.svg"
            class="container--no-image mt-2">
        </div>
      </q-card-section>

      <div v-else>
        <VideoPlayer v-bind="playerInput"
          class="container--video" />
      </div>
    </transition>

    <q-dialog v-model="showUploadDialog">
      <q-card class="uploader">
        <q-tabs v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify">
          <q-tab name="embedLink"
            label="اضافه کردن لینک امبد" />
          <q-tab name="uploadLink"
            label="آپلود ویدیو" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab"
          animated>
          <q-tab-panel name="uploadLink">
            <div class="p-2">
              برای آپلود فایل جدید از دکمه
              <q-icon name="add"
                dense
                color="primary" />
              استفاده کنید.
            </div>

            <q-uploader url="http://20.20.20.107:8000/multer/changePresentationVideo"
              :headers="headerFactory"
              method="POST"
              auto-upload="false"
              :form-fields="formFieldFactory"
              :field-name="(file) => 'file'"
              style="width:100%" />
          </q-tab-panel>

          <q-tab-panel name="embedLink">
            <FormContainer :form="linkForm"
              :container="linkContainer"
              @submit="submitLink" />
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </q-dialog>
  </q-card>
</template>


<style scoped lang="scss">
.container {
  &--no-image {
    width: 125px;
    transition: transform 1s;
  }
  &--video {
    max-height: 400px;
  }
}
.uploader {
  overflow: hidden;
  width: 450px;
}
</style>

<script src="./PresentationVideo.ts" lang="ts">
</script>
