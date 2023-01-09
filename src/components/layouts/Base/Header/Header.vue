<template>
  <q-header class="header mid"
    :class="headerClass">
    <q-toolbar v-if="!searchMode"
      class="row">
      <q-btn v-show="!size.lg"
        flat
        round
        :dense="size.xs"
        icon="menu"
        aria-label="منو"
        @click="layout.openRightDrawer" />

      <q-btn to="/"
        class="logo "
        flat>
        <img src="/images/logo.png"
          alt="ایووتیم - EvoTeam">
      </q-btn>

      <div v-show="size.lg"
        class="yekan row text-h6">
        <div v-for="link in links"
          :key="link.to">
          <router-link v-if="link.typeLink && !link.sidebar"
            :to="link.to">
            <q-btn flat>
              {{ link.title }}
            </q-btn>
          </router-link>
          <q-btn-dropdown v-if="!link.typeLink"
            v-model="link.menu"
            flat
            content-class="disable-menu-max-height"
            :label="link.title"
            :disable="link.disabled"
						class="mb-0 pb-0"
						@mouseenter="mouseOver(link)"
            @mouseleave="mouseOut(link)">
            <q-list :class="link.class"
						     class="mt-0 pt-0"
								 @mouseenter="mouseOver(link)"
								 @mouseleave="mouseOut(link)">
              <router-link v-for="data of link.data"
                :key="data.title"
                :to="data.link"
                class="column m-0 p-0"
                :class="data.class">
                <q-item v-close-popup
                  :clickable:disabled="data.disabled"
                  :disable="data.disabled"
                >
                  <q-item-section class="column mid m-0 p-0">
                    <q-item-label v-if="data.image">
                      <img :src="data.image"
                        class="list--dropdown-image">
                    </q-item-label>
                    <q-item-label class="text-center py-1">
                      {{ data.title }}
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </router-link>
            </q-list>
          </q-btn-dropdown>
        </div>
      </div>

      <q-space />

      <q-btn v-if="user.isLogged.value"
        icon="dashboard"
        flat
        :dense="size.xs"
        to="/panel"
        round />

      <q-btn icon="search"
        flat
        :dense="size.xs"
        round
        @click="searchMode = true" />
    </q-toolbar>

    <q-toolbar v-else
      class="header">
      <Search @closeSearchMode="closeSearchMode" />
    </q-toolbar>
  </q-header>
</template>

<style lang="scss" scoped>
@import "src/css/core/_mixin.scss";

.logo {
  width: 120px;

  @include to-size(md) {
    position: absolute;
    right: 50%;
    transform: translate(50%);
  }
}

.list {
  overflow: hidden;
  max-width: 500px;
  &--dropdown-image {
    width: 50px;
    height: 50px;
  }
}
</style>

<script src="./Header.ts" lang="ts"></script>


<!-- @mouseover="mouseOver(link)"
@mouseout="mouseOut(link)" -->
