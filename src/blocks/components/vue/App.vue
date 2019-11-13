<template>
  <div id="app" class="examples">
    <h1 class="examples__title">Наши работы</h1>
    <div class="examples__buttons">
      <button
        class="examples__button"
        ref="button1"
        v-on:click="
          () => {
            changeCategory(0);
            toggleActiveClass('button1');
          }
        "
      >Одежда</button>
      <button
        ref="button2"
        class="examples__button"
        v-on:click="
          () => {
            changeCategory(1);
            toggleActiveClass('button2');
          }
        "
      >Косметика</button>
      <button
        ref="button3"
        class="examples__button"
        v-on:click="
          () => {
            changeCategory(1);
            toggleActiveClass('button3');
          }
        "
      >Игрушки</button>
      <button
        ref="button4"
        class="examples__button"
        v-on:click="
          () => {
            changeCategory(1);
            toggleActiveClass('button4');
          }
        "
      >Посуда</button>
      <button
        ref="button5"
        class="examples__button"
        v-on:click="
          () => {
            changeCategory(1);
            toggleActiveClass('button5');
          }
        "
      >Украшения</button>
      <button
        ref="button6"
        class="examples__button"
        v-on:click="
          () => {
            changeCategory(1);
            toggleActiveClass('button6');
          }
        "
      >Сумки</button>
      <button
        ref="button7"
        class="examples__button"
        v-on:click="
          () => {
            changeCategory(1);
            toggleActiveClass('button7');
          }
        "
      >Аксессуары</button>
    </div>
    <div class="examples__slider owl-carousel">
      <img
        v-for="image in imageCollections[active].collection"
        v-bind:key="image.id"
        v-bind:data-hash="image.id"
        v-bind:src="image.src"
        v-bind:alt="image.alt"
      />
    </div>
    <div class="examples__nav">
      <a
        v-for="image in imageCollections[active].collection"
        v-bind:class="{ active: isActive === image.id }"
        class="examples__nav-link"
        v-bind:key="image.id"
        v-bind:id="`nav-link` + image.id"
        v-bind:href="`#` + image.id"
        v-on:click="isActive = isActive === image.id ? null : image.id"
      >
        <img
          class="examples__nav-img"
          v-bind:key="image.id"
          v-bind:src="image.src"
          v-bind:alt="image.alt"
        />
      </a>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import "owl.carousel";

export default {
  name: "app",
  methods: {
    changeCategory: function(num) {
      this.active = num;
    },
    toggleActiveClass: function(ref) {
      for (let item in this.$refs) {
        console.log(this.slides);
        this.$refs[item].classList.remove("examples__button--active");
      }
      this.$refs[ref].classList.toggle("examples__button--active");
    },
    watchForActiveClass: function() {}
  },
  beforUpdate: function() {
    console.log("Обновлен");
  },
  beforeMount: function() {
    $(document).ready(function() {
      this.watchForActiveClass = function() {
        let sliderImages = $(".owl-item");
        let navigationImages = $(".examples__nav-link");
        for (let item of navigationImages) {
          item.classList.remove("active");
        }
        for (let i = 0; i < sliderImages.length; i++) {
          if (sliderImages[i].classList.contains("active")) {
            this.sliderImagesIndex = i;
          }
        }
        navigationImages[this.sliderImagesIndex].classList.add("active");
      };
    });
  },
  mounted: function() {
    console.log("Обновлен");
    $(document).ready(function() {
      this.owl = $(".examples__slider");
      this.owl.owlCarousel({
        items: 1,
        loop: false,
        margin: 10,
        URLhashListener: true,
        autoplayHoverPause: true,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        startPosition: "URLHash",
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        nav: true
      });

      this.watchForActiveClass();
      this.owl.on("translated.owl.carousel", this.watchForActiveClass);
    });
  },
  updated: function() {
    $(document).ready(function() {
      this.owl = $(".examples__slider");
      console.log(this.owl);
      this.owl.trigger("destroy.owl.carousel");
      this.owl.find(".owl-item").remove();
      console.log(this.owl);

      this.owl = $(".examples__slider");
      this.owl.owlCarousel({
        items: 1,
        loop: false,
        margin: 10,
        URLhashListener: true,
        autoplayHoverPause: true,
        startPosition: "URLHash",
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        nav: true
      });
      this.owl.on("translated.owl.carousel", this.watchForActiveClass);
    });
  },
  data() {
    return {
      owl: "",
      active: 0,
      isActive: null,
      sliderImagesIndex: "",
      watchActiveClass: null,
      imageCollections: [
        {
          name: "clothes",
          id: 1,
          activeNav: null,
          collection: [
            {
              alt: "cloth1",
              id: 1,
              src: "./img/clothes1.jpg",
              src2x: "./img/clothes1@2x.jpg"
            },
            {
              alt: "cloth2",
              id: 2,
              src: "./img/clothes2.jpg",
              src2x: "./img/clothes2@2x.jpg"
            },
            {
              alt: "cloth3",
              id: 3,
              src: "./img/clothes3.jpg",
              src2x: "./img/clothes3@2x.jpg"
            },
            {
              alt: "cloth4",
              id: 4,
              src: "./img/clothes4.jpg",
              src2x: "./img/clothes4@2x.jpg"
            },
            {
              alt: "cloth5",
              id: 5,
              src: "./img/clothes5.jpg",
              src2x: "./img/clothes5@2x.jpg"
            },
            {
              alt: "cloth6",
              id: 6,
              src: "./img/clothes6.jpg",
              src2x: "./img/clothes6@2x.jpg"
            },
            {
              alt: "cloth6",
              id: 7,
              src: "./img/clothes7.jpg",
              src2x: "./img/clothes7@2x.jpg"
            },
            {
              alt: "cloth6",
              id: 8,
              src: "./img/clothes8.jpg",
              src2x: "./img/clothes8@2x.jpg"
            },
            {
              alt: "cloth6",
              id: 9,
              src: "./img/clothes9.jpg",
              src2x: "./img/clothes9@2x.jpg"
            },
            {
              alt: "cloth6",
              id: 10,
              src: "./img/clothes10.jpg",
              src2x: "./img/clothes10@2x.jpg"
            },
            {
              alt: "cloth6",
              id: 11,
              src: "./img/clothes11.jpg",
              src2x: "./img/clothes11@2x.jpg"
            }
          ]
        },
        {
          name: "bags",
          id: 1,
          collection: [
            {
              alt: "	bags1",
              id: 1,
              src: "./img/bag1.jpg",
              src2x: "./img/bag1@2x.jpg"
            },
            {
              alt: "bags2",
              id: 2,
              src: "./img/bag2.jpg",
              src2x: "./img/bag2@2x.jpg"
            },
            {
              alt: "bags3",
              id: 3,
              src: "./img/bag3.jpg",
              src2x: "./img/bag3@2x.jpg"
            },
            {
              alt: "bags3",
              id: 4,
              src: "./img/bag3.jpg",
              src2x: "./img/bag3@2x.jpg"
            },
            {
              alt: "bags3",
              id: 5,
              src: "./img/bag3.jpg",
              src2x: "./img/bag3@2x.jpg"
            }
          ]
        }
      ]
    };
  }
};
</script>
