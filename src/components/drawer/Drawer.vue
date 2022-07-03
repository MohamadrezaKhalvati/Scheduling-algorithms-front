<template>
  <div>
      <q-drawer
        v-model="drawer"
        show-if-above

        :mini="!drawer || miniState"
        :width="200"

        :breakpoint="500"
        bordered
        class="drawer"
        @click.capture="drawerClick"
      >
        <q-scroll-area class="fit">
          <q-list padding>

          <q-item v-ripple clickable>
              <q-item-section avatar>
                <q-icon name="dashboard" color="white" />
              </q-item-section>

              <q-item-section class="section-name">
                صفحه اصلی
              </q-item-section>
          </q-item>

          <q-item v-ripple clickable>
              <q-item-section avatar>
                <q-icon name="pending_actions" color="white" />
              </q-item-section>

              <q-item-section class="section-name"> 
                گزارش
              </q-item-section>
          </q-item>

          <q-item v-ripple clickable>
              <q-item-section avatar>
                <q-icon name="task_alt" color="white" />
              </q-item-section>

              <q-item-section class="section-name">
                 تسک ها
              </q-item-section>
          </q-item>

          <q-item v-ripple clickable>
              <q-item-section avatar>
                <q-icon name="sell" color="white" />
              </q-item-section>

              <q-item-section class="section-name">
                 تگ ها
              </q-item-section>
          </q-item>

          <q-item v-ripple clickable>
              <q-item-section avatar>
                <q-icon name="work" color="white" />
              </q-item-section>

              <q-item-section class="section-name">
                  پروژه ها
              </q-item-section>
          </q-item>

          <q-item v-ripple clickable>
              <q-item-section avatar>
                <q-icon name="sell" color="white" />
              </q-item-section>

              <q-item-section class="section-name">
                 تگ ها
              </q-item-section>
          </q-item>



          </q-list>
        </q-scroll-area>

        <!-- <div class="q-mini-drawer-hide absolute" style="top: 15px; right: -17px">
          <q-btn
            dense
            round
            unelevated
            color="accent"
            icon="chevron_left"
            @click="miniState = true"
          />
        </div> -->
      </q-drawer>
  
</div>
</template>
<script src="./Drawer.ts">
</script>

<style>

.drawer{
  background-color: #282f46 ;
}


.section-name{
  color: #fff;
}
</style>