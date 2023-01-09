<template>
  <div class="container column between">
    <div class="container--top text-white column center fit">
      <div class="mb-lg-4 pb-md-4 column mid">
        <span class="title my-3">جهت مشاوره رایگان تماس بگیرید</span>

        <q-btn label="تماس با ما"
          color="accent"
          rounded
          to="/contact"
          text-color="white"
          size="md" />
      </div>

      <div class="row-sm column evenly fit container--top--content max-container mb-3 pt-4">
        <div class="column col-12 col-md-5 col-lg-3 mid top-md center">
          <FooterLink :linkTitle="links.service.title"
            :linkData="links.service.data" />
        </div>

        <div class="column col-12 col-md-5 col-lg-2 mid top-md center">
          <div class="column my-xs-2 mid top-sm">
            <FooterLink :linkTitle="links.department.title"
              :linkData="links.department.data" />
          </div>

          <div class="column my-xs-2 top-sm">
            <FooterLink :linkTitle="links.events.title"
              :linkData="links.events.data" />
          </div>
        </div>

        <div class="column col-12 col-sm-12 col-md-5 col-lg-2 mid top-md center">
          <FooterLink :linkTitle="links.education.title"
            :linkData="links.education.data" />
        </div>

        <div class="column col-12 col-md-5 col-lg-2 mid top-md center">
          <FooterLink :linkTitle="links.about.title"
            :linkData="links.about.data" />
        </div>
      </div>
    </div>

    <div class="container--bottom text-white p-3 p-xs-2 column mid">
      <div class="row evenly full-width">

        <div class="container--bottom--data column col-12 col-md-7 my-1">
          <div v-for="info in information"
            :key="info.id"
            class="row no-wrap mid my-1">
            <img :src="info.image"
              class="data--image">

            <span class="px-2 col-xs-10">
              {{ info.title }}
            </span>
          </div>
        </div>

        <div class="column mid col-lg-4 col-md-5 col-12">
          <FormContainer :container="container"
            :form="form"
            class="container--bottom--form"
            @submit="submit">
            <template #button>
              <div class="center p-1">
                <q-btn v-close-popup
                  label="ارسال"
                  class="fit"
                  type="submit"
                  color="info"
                  text-color="white" />
              </div>
            </template>
          </FormContainer>

          <div class="container--bottom--link row between my-3">
            <a v-for="item in contact"
              :key="item.id"
              :href="item.link">
              <img :src="item.image"
                class="pointer link--image m-1">
            </a>
          </div>
        </div>
      </div>

      <span class="text-center m-1">تمامی حقوق این سایت، متعلق به شرکت کیفیت نرم افزار فراز مبین ماهان است</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "src/css/core/_mixin.scss";
.title {
	font-size: 21px;
}
.container {
  &--top {
    background: #633dd9;
    background-image: url("./../../../../css/core/images/Footer.svg");
    z-index: 5;
    background-repeat: no-repeat;
    background-position-y: 100%;
    font-size: calc(0.9rem);

    @include from-size(lg) {
      background-size: 100%;
    }

    @include to-size(lg) {
      background-size: 2400px;
    }

    @include to-size(sm) {
      background-size: 4200px;
    }
    &--content {
      z-index: 10;
      .content-title {
        transition: 0.1s;
      }
      .content-title:hover {
        transform: translateX(-6px);
      }
    }
  }

  &--bottom {
    background-color: #27014a;
    font-size: calc(0.9rem);
    &--form {
      max-width: 400px;
      background: rgba(255, 255, 255, 0.877);
    }
    &--data {
      .data--image {
        width: 30px;
        height: 30px;
      }
    }
    &--link {
      .link--image {
        width: 25px;
        height: 25px;
      }
    }
  }
}
</style>

<script src="./Footer.ts" lang="ts"></script>
