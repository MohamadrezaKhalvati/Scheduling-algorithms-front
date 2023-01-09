<template>
  <div class="container">
    <Title tag="h3"
      :skeleton="skeleton"
      title="محتوای دوره"
      class="column container--title" />

    <template v-if="!skeleton && courses">
      <q-expansion-item v-for="(course, index) of courses"
        :key="course.id"
        :default-opened="index == 0"
        :label="course.title"
        class="container--expantion-item shadow-7 my-1"
        header-class="bg-primary text-white"
        expand-icon-class="text-white">
        <q-list>
          <q-item v-for="(innerCourse) of course.innerCourse"
            :key="innerCourse.title"
            class="mid between">
            <span class="text-primary mx-1">
              {{ innerCourse.title }}
            </span>

            <div>
              <q-chip v-if="innerCourse.time != '0:00'"
                class="bg-red-1 px-2 text-pink-7"
                outline>
                {{ innerCourse.time }}
              </q-chip>

              <q-btn flat
                dense
                color="primary"
                icon="play_arrow"
                @click="openVideo(innerCourse)" />

              <q-btn v-if="innerCourse.time != '0:00'"
                flat
                color="primary"
                dense
                icon="download"
                @click="downloadFile(innerCourse.downloadLink)" />
            </div>
          </q-item>
        </q-list>
      </q-expansion-item>

      <q-dialog v-model="playVid">
        <VideoPlayer v-bind="plyInput"
          class="video-player" />
      </q-dialog>
    </template>

    <template v-if="skeleton">
      <q-skeleton v-for="i in 2"
        :key="i"
        type="rect"
        height="40px"
        class="my-1"
        width="100%" />
    </template>

    <div v-if="!skeleton && !courses.length"
      class="column mid">
      <q-card class="p-2 center my-2 fit">
        در حال حاضر بخشی به دوره اضاف نشده است
      </q-card>

      <img src="/images/no_item.svg"
        class="container--no-item">
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "src/css/partial/_mixin.scss";
.container {
  &--expantion-item {
    overflow: hidden;
    border-radius: 10px;
  }
  &--title {
    @include screen(tablet) {
      align-items: center;
      align-items: center;
    }
  }
  &--no-item {
    max-height: 400px;
    max-width: 600px;
    width: 100%;
  }
  .video-player {
    height: 500px;
  }
}
</style>
<script src="./CourseSegmentContainer.ts" lang="ts" />
