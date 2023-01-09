
<template>
  <q-card class="container mt-1">
    <div class="container--hedear mid between p-2">
      <div>
        قسمت های دوره
      </div>

      <div>
        <q-btn icon="add"
          padding="none"
          class="mr-2"
          color="primary"
          @click="addNewSection"
          v-if="user.userData.value.role == 'Admin'">
          <q-tooltip>ایجاد بخش جدید</q-tooltip>

        </q-btn>
      </div>
    </div>

    <q-separator />

    <q-tabs v-model="selectedTab"
      dense
      class="text-grey mt-1"
      active-color="primary"
      indicator-color="primary"
      align="justify"
      narrow-indicator>
      <q-tab v-for="(item, index) of Module"
        :key="item.read"
        :name="index"
        :label="item.title">
        <q-menu context-menu>
          <q-list dense>
            <!-- <q-item clickable
              v-close-popup>
              <q-item-section side>
                <q-icon size="20px"
                  name="edit" />
              </q-item-section>

              <q-item-section>تغییر نام</q-item-section>
            </q-item> -->

            <q-item v-close-popup
              clickable
              @click="deleteSection(item.id)">
              <q-item-section side>
                <q-icon size="20px"
                  name="delete" />
              </q-item-section>

              <q-item-section>حذف</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-tab>
    </q-tabs>

    <div v-if="!DraggableItems.length"
      class="p-2">
      <span>
        هنوز قسمتی به این دوره اضافه نشده است. برای اضافه کردن یک قسمت جدید از دکمه
        <q-icon name="add" />
        استفاده کنید.
      </span>

      <div class="center">
        <img src="/images/404.svg"
          width="100px">
      </div>
    </div>

    <draggable class="dragArea list-group w-full px-1 py-2"
      :list="DraggableItems"
      @change="logHandler">
      <q-card class="list-group-item bg-gray-300 m-1 p-2 rounded-md text-center between mid"
        v-for="(element, ctx) in DraggableItems"
        :key="element.title">
        <span>{{ctx + 1}}</span>
        <span>{{ element.title }}</span>
        <q-btn flat
          round
          dense
          color="primary"
          icon="close"
          @click="CourseModualeDelete(element.id)" />
      </q-card>
    </draggable>

    <!-- <div v-for="(item, index) of moduleChild">
       <q-tab-panels>
        <q-tab-panel>
       <transition appear
        mode="out-in"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut">
        <draggable v-model="DraggableItems"
				 transition="100">
					<template v-slot:item="{ item }">
						<div>
							<h1>{{item.title}}</h1>
						</div>
					</template>
				</draggable>
       </transition>
      </q-tab-panel>
      </q-tab-panels>
    </div> -->

    <!-- <q-tab-panels v-model="selectedTab"
      animated>
      <q-tab-panel v-for="(item, index) of moduleChild"
        :key="item.id"
        :name="index"
        :label="item.title">
        <transition appear
          mode="out-in"
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut">

          <div v-if="item.mediaList"
            class="p-1"
            :get-ghost-parent="getGhostParent"
            @drop="onDrop($event, item.id)">
            <draggable v-for="(video, innerIndex) of item.mediaList"
              :key="video.id">
              <q-card class="m-1 p-1 mid between cursor-pointer">
                <q-badge outline
                  color="primary"
                  :label="innerIndex + 1" />

                <span>
                  {{ video.name }}
                </span>

                <q-btn icon="close"
                  flat
                  dense
                  color="red-9"
                  @click="deleteSectionVideo(item.id, video.id)" />
              </q-card>
            </draggable>
          </div>

          <div v-else
            class="mid py-1 column">
            <img src="/images/no-video.svg"
              width="150px">

            <span class="pt-2">
              هنوز ویدیویی به این بخش اضافه نشده است، از طریق جدول بالا و کلیک راست
              اقدام به انتقال ویدیو جدید کنید
            </span>
          </div>
        </transition>

      </q-tab-panel>
    </q-tab-panels> -->

  </q-card>
</template>


<style scoped lang="scss"></style>

<script src="./CourseSection.ts" lang="ts">
</script>
