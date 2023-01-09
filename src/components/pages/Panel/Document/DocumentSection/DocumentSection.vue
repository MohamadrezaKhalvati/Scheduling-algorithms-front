<template>
  <q-card class="container">
    <div class="container--hedear mid between p-2">
      <div style="color : #000000">
        زیرمجموعه های مستند
      </div>

      <div>
        <q-btn icon="article"
          padding="none"
          class="mr-2"
          color="primary"
          @click="chooseNewDoc">
          <q-tooltip>انتخاب مستند جدید</q-tooltip>
        </q-btn>
      </div>
    </div>

    <q-separator />

    <div v-if="value"
      class="p-2">
      <span>
        هنوز مستندی انتخاب نشده است. برای انتخاب کردن یک مستند جدید از دکمه
        <q-icon name="article" />
        استفاده کنید.
      </span>

      <div class="center">
        <img src="/images/404.svg"
          width="100px">
      </div>
    </div>

    <Container v-if="draggableItems"
      class="p-1"
      :get-ghost-parent="getGhostParent"
      @drop="onDrop($event)">

      <draggable class="dragArea list-group w-full"
        :list="draggableItems"
        @change="onDrop($event)">
        <div v-for="(item , index) in draggableItems"
          :key="item.id"
          class="list-group-item bg-gray-300 m-1 mt-2  rounded-md text-center"
          :name="index"
          :label="item.title">
          <q-card class="m-1 p-1 mid between cursor-pointer">
            <q-badge outline
              color="primary"
              :label="index + 1" />
            <span>
              {{ item.title }}
            </span>

            <span>
              {{ item.parentTitle }}
            </span>
          </q-card>
        </div>
      </draggable>
    </Container>

    <div v-else
      class="mid py-1 column">
      <img src="/images/no_item.svg"
        width="350px">

      <span class="pt-2">
        هنوز مستندی به این مستند اضافه نشده است.
      </span>
    </div>

    <q-dialog v-model="dialog">
      <FormContainer class="dialog--form"
        :form="form"
        :container="container"
        @submit="getDocument" />
    </q-dialog>

  </q-card>
</template>


<style scoped lang="scss">
@import "src/css/core/_mixin.scss";
.dialog--form {
  width: 350px !important;
  @include to-size(md) {
    widows: 250px;
  }
}
</style>

<script src="./DocumentSection.ts" lang="ts"></script>
