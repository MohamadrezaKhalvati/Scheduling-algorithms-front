<template>
  <q-drawer v-model="layout.rightModel.value"
    bordered
    elevated
    :breakpoint="10000"
    class="q-drawer-bg text-primary">
    <q-list>
      <q-item-label header>
        دسترسی سریع
      </q-item-label>
      <div v-for="link in links"
        :key="link.to">
        <q-item v-if="link.typeLink"
          clickable
          tag="a"
          :disable="link.disabled"
          :to="link.to">
          <q-item-section avatar>
            <q-icon :name="link.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ link.title }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-expansion-item v-else
          expand-separator
          :disable="link.disabled"
          :icon="link.icon"
          :label="link.title">
          <q-list dense
            bordered
            padding>
            <q-item v-for="child in link.data"
              :key="child.title"
              v-ripple
              :disable="child.disabled"
              :to="child.link"
              clickable>
              <q-item-section>
                {{ child.title }}
              </q-item-section>
            </q-item>
          </q-list>

        </q-expansion-item>
      </div>
    </q-list>
  </q-drawer>
</template>

<style lang="scss" scoped>
</style>

<script src="./Drawer.ts" lang="ts"></script>

