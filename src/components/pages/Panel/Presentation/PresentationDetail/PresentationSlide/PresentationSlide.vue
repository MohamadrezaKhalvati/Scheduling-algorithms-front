
<template>
  <q-card class="container">
    <div class="container--header between mid p-1">
      <div>
        فایل اسلاید ارائه
      </div>

      <q-btn color="primary"
        dense
        flat
        icon="add"
        @click="openDialog"
        v-if="user.userData.value.role == 'Admin'" />

    </div>

    <q-separator />

    <q-card-section>
      <transition appear
        mode="out-in"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut">
        <template v-if="!Input.slide">
          <div class="column mid">
            <div>
              هنوز فایلی اضافه نشده است، از طریق دکمه
              <q-icon name="add" />
              ویدیو ارائه را ایجاد کنید.
            </div>

            <img src="/images/upload.svg"
              class="container--no-image mt-2">
          </div>
        </template>

        <template v-else>
          <div class="column center mid">
            <span>
              برای دریافت فایل، بر روی لینک زیر کلیک کنید
            </span>

            <a :href="DocInput.src"
              target="open">
              <img src="/images/upload.svg"
                class="container--no-slide mt-2">
            </a>
          </div>
        </template>
      </transition>
    </q-card-section>

    <q-dialog v-model="showUploadDialog">
      <q-card class="uploader p-1">
        <div class="p-2">
          برای آپلود فایل جدید از دکمه
          <q-icon name="add"
            dense
            color="primary" />
          استفاده کنید.
        </div>
        <q-uploader url="http://20.20.20.107:8000/multer/changePresentationDocument"
          :headers="headerFactory"
          method="POST"
          auto-upload="false"
          :form-fields="formFieldFactory"
          :field-name="(file) => 'file'"
          style="width:100%" />
      </q-card>
    </q-dialog>
  </q-card>
</template>


<style scoped lang="scss">
.container {
  &--no-image {
    width: 125px;
  }

  &--no-slide {
    cursor: pointer;
    transition: transform 100ms linear;
    &:hover {
      transform: scale(1.05);
    }
    width: 125px;
  }
}

.uploader {
  overflow: hidden;
  width: 450px;
}
</style>

<script src="./PresentationSlide.ts" lang="ts"></script>
