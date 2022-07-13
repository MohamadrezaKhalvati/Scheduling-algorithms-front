<template>
  <div class="root .col-1">
    <q-drawer v-model="drawer"
      show-if-above
      :mini="!drawer || miniState"
      :width="200"
      :breakpoint="500"
      bordered
      class="drawer"
      @click.capture="changeMiniStateValue">

      <div class="drawer-header">
        <span v-if="!miniState"
          class="shanks-header-label">
          Shanks
        </span>

        <q-icon :style="[!miniState ? {'transform': 'rotate(180deg)' } : null]"
          name="arrow_back_ios"
          class="arrow-icon"
          @click="miniState = true" />
      </div>

      <q-scroll-area class="fit">
        <q-list padding>

          <div>
            <q-item v-ripple
              clickable>
              <q-item-section avatar>
                <q-icon name="dashboard"
                  color="white" />
              </q-item-section>

              <q-item-section class="section-name">
                صفحه اصلی
              </q-item-section>
            </q-item>
          </div>

          <div>
            <q-item v-ripple
              clickable>
              <q-item-section avatar>
                <q-icon name="pending_actions"
                  color="white" />
              </q-item-section>

              <q-item-section class="section-name">
                گزارش
              </q-item-section>
            </q-item>
          </div>

          <p v-if="miniState"
            class="dot-line">
            . . . .
          </p>
          <p v-if="!miniState"
            class="category-label">
            تسک ها
          </p>

          <div>
            <q-item v-ripple
              clickable>
              <q-item-section avatar>
                <q-icon name="task_alt"
                  color="white" />
              </q-item-section>

              <q-item-section class="section-name">
                تسک ها
              </q-item-section>
            </q-item>
          </div>

          <div>
            <q-item v-ripple
              clickable>
              <q-item-section avatar>
                <q-icon name="sell"
                  color="white" />
              </q-item-section>

              <q-item-section class="section-name">
                تگ ها
              </q-item-section>
            </q-item>
          </div>

          <p v-if="miniState"
            class="dot-line">
            . . . .
          </p>
          <p v-if="!miniState"
            class="category-label">
            پروژه ها
          </p>

          <div>
            <q-item v-ripple
              clickable>
              <q-item-section avatar>
                <q-icon name="work"
                  color="white" />
              </q-item-section>

              <q-item-section class="section-name">
                پروژه ها
              </q-item-section>
            </q-item>
          </div>

          <div>
            <q-item v-ripple
              clickable>
              <q-item-section avatar>
                <q-icon name="sell"
                  color="white" />
              </q-item-section>

              <q-item-section class="section-name">
                تگ ها
              </q-item-section>
            </q-item>
          </div>

          <p v-if="!miniState"
            class="category-label">
            مدیریت
          </p>

        </q-list>
      </q-scroll-area>

    </q-drawer>

  </div>
</template>
<script src="./Drawer.ts">
</script>

<style>
@font-face {
  font-family: "Vazir";
  src: url("../../../public/fonts/Vazir.woff") format("woff");
}

.root {
  display: flex;
}
.drawer {
  background-color: #282f46;
}

.section-name {
  color: #d0d2d6;
  font-size: 15px;
  font-family: "vazir";
}

.drawer-header {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  color: #d0d2d6;
  margin: 15px 15px 10px 0px;
}

.shanks-header-label {
  font-size: 1.8rem;
}

.arrow-icon {
  margin: 10px 1px 4px 10px;
}

.dot-line {
  color: #d0d2d6;
  margin: 2px 15px 2px 3px;
}

.category-label {
  margin: auto;
  display: flex;
  justify-content: center;
  color: #a6a4b0;
  font-size: 13px;
}

.scroll {
  overflow: hidden;
}

.q-drawer {
  background: #282f46;
}
</style>