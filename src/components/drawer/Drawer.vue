<template>
  <div class="root .col-1 ">
    <q-drawer v-model="drawer" show-if-above :mini="!drawer || miniState" :width="200" :breakpoint="500" bordered
      style="background-color : #282f46 " @click.capture="changeMiniStateValue">

      <div class="drawer-header">
        <span v-if="!miniState" class="shanks-header-label">
          scheduling algorithms
        </span>

        <q-icon :style="[!miniState ? { 'transform': 'rotate(180deg)' } : null]" name="arrow_back_ios"
          class="arrow-icon" @click="miniState = true" />
      </div>

      <q-list padding>

        <div>
          <q-item v-ripple clickable>
            <q-item-section avatar>
              <q-icon name="dashboard" color="white" />
            </q-item-section>

            <q-item-section class="section-name">
              FCFS
            </q-item-section>
          </q-item>
        </div>

        <p v-if="miniState" class="dot-line">
          . . . .
        </p>
        <div>
          <q-item v-ripple clickable>
            <q-item-section avatar>
              <q-icon name="pending_actions" color="white" />
            </q-item-section>

            <q-item-section class="section-name">
              SJF
            </q-item-section>
          </q-item>
        </div>

        <p v-if="miniState" class="dot-line">
          . . . .
        </p>

        <div>
          <q-item v-ripple clickable>
            <q-item-section avatar>
              <q-icon name="dashboard" color="white" />
            </q-item-section>

            <q-item-section class="section-name">
              SRTF
            </q-item-section>
          </q-item>
        </div>












      </q-list>

    </q-drawer>

  </div>
</template>
<script src="./Drawer.ts">
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "Vazir";
  src: url("/fonts/Vazir.woff") format("woff");
}

.root {
  display: flex;
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
  margin: 10px 0px 10px 0px;
  font-size: 0.8rem;
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
</style>
