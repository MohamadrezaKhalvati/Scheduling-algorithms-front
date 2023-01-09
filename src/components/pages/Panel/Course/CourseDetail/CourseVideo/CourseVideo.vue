
<template>
  <div>
    <q-card class="p-2 mb-1">
      برای انتخاب ویدیو های یک بخش، تمامی ویدیوهای مورد نظر را انتخاب کرده و سپس با کلیک راست به بخش مورد نظر منتقل کنید.
    </q-card>
    <TableContainer ref="table"
      v-model:selected="qTableConfig.selected"
      v-model:pagination="qTableConfig.pagination"
      v-bind="qTableConfig"
      @request="paginator.gotoPage($event.pagination.page, $event.pagination.rowsPerPage)"
      :pagination="tablePagination">
      <template #title>
        <div class="row between center mid px-1">
          <TableTitle :title="adminContainer.title" />
          <div class="row mid center">
            <q-btn flat
              round
              dense
              color="primary"
              icon="close"
              @click="deleteVideo" />
            <q-btn flat
              round
              dense
              @click="showAdd"
              color="primary"
              icon="add"
              v-if="user.userData.value.role == 'Admin'" />
          </div>
        </div>
        <q-separator></q-separator>
      </template>
      <template #body-cell-volume="props">
        <q-td v-if="props.value != '0 B'"
          :props="props">
          {{ props.value }}
        </q-td>
        <q-td v-else
          :props="props">
          ----
        </q-td>
      </template>

      <template #body-cell-view="props">
        <q-td :props="props">
          <q-btn flat
            round
            dense
            color="primary"
            icon="video_library"
            @click="openVideo(props.row)" />
        </q-td>
      </template>
    </TableContainer>

    <q-menu touch-position
      :target="$refs.table"
      context-menu>
      <q-list dense>
        <q-item clickable>
          <q-item-section>انتقال به</q-item-section>

          <q-item-section side>
            <q-icon name="keyboard_arrow_left" />
          </q-item-section>

          <q-menu anchor="top end"
            self="top start">
            <q-list>
              <q-item v-for="(item, index) in courseStoreData"
                :key="item.id"
                v-close-popup
                dense
                clickable
                @click="moveItems(item.id)"
                :disable="qTableConfig.selected.length == 0">

                <q-item-section>بخش {{ index + 1 }} - {{ item.title }}</q-item-section>
              </q-item>
            </q-list>
          </q-menu>

        </q-item>

        <q-separator />

        <q-item v-close-popup
          clickable>
          <q-item-section>خروج</q-item-section>
        </q-item>
      </q-list>

    </q-menu>

    <q-dialog v-model="playVid">
      <div>
        <VideoPlayer v-bind="plyInput"
          class="video-player" />
      </div>
    </q-dialog>

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

            <!-- <button @click="createCourseVideo">Upload</button>
						<q-file v-model="file">file</q-file> -->

            <!-- <q-uploader url="http://20.20.20.107:8000/multer/addMedia"
              :factory="createCourseVideo"
              style="width: 100%;"
							auto-upload="false"/> -->

            <q-uploader url="http://20.20.20.107:8000/multer/addMedia"
              :headers="headerFactory"
              method="POST"
              auto-upload="false"
              :form-fields="formFieldFactory"
              :field-name="(file) => 'file'"
              style="width:100%" />

            <!--    <FormMaker :form="uploadForm"
              class="mb-1" /> -->
          </q-tab-panel>

          <q-tab-panel name="embedLink">
            <FormContainer :form="linkForm"
              :container="linkContainer"
              @submit="submitLink" />
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </q-dialog>

  </div>
</template>


<style scoped lang="scss">
// @import "~plyr/src/sass/plyr.scss";
.uploader {
  overflow: hidden;
  width: 450px;
}
.q-uploader__list {
  display: none !important;
}
</style>

<script src="./CourseVideo.ts" lang="ts"></script>
