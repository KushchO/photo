<template>
  <section id="app" class="examples fade-block">
    <h1 class="examples__title">Наши работы</h1>
    <div v-bind:class="{'owl-carousel': screenWidth <769}" class="examples__buttons">
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
      <template v-for="image in imageCollections[active].collection">
        <img
          v-if="screenWidth < 1200 && screenWidth > 768 &&  image.id < 9"
          class="examples__slide"
          v-bind:key="image.id"
          v-bind:data-hash="image.id"
          v-bind:src="image.src"
          v-bind:alt="image.alt"
        />
      </template>
      <template v-for="image in imageCollections[active].collection">
        <img
          v-if="screenWidth <= 768 &&  image.id < 6"
          class="examples__slide"
          v-bind:key="image.id"
          v-bind:data-hash="image.id"
          v-bind:src="image.src"
          v-bind:alt="image.alt"
        />
      </template>
      <template v-for="image in imageCollections[active].collection">
        <img
          v-if="screenWidth >= 1200"
          class="examples__slide"
          v-bind:key="image.id"
          v-bind:data-hash="image.id"
          v-bind:src="image.src"
          v-bind:alt="image.alt"
        />
      </template>
    </div>
    <div class="examples__nav">
      <template v-for="image in imageCollections[active].collection">
        <a
          v-if="screenWidth < 1200 && screenWidth > 768 && image.id < 9"
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
      </template>
      <template v-for="image in imageCollections[active].collection">
        <a
          v-if="screenWidth <= 768 && image.id < 6"
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
      </template>
      <template v-for="image in imageCollections[active].collection">
        <a
          v-if="screenWidth >= 1200"
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
      </template>
    </div>
  </section>
</template>

<script>
import $ from "jquery";
import "owl.carousel";

export default {
  name: "app",
  methods: {
    getScreenWidth: function() {
      this.screenWidth = window.innerWidth;
    },
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
  created: function() {
    this.getScreenWidth();
    window.addEventListener("resize", this.getScreenWidth);
  },
  beforeMount: function() {
    let expanded = this.expanded;
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
      this.toggleSliderPopup = function(owl) {
        $(".examples__slider").on("click", function(e) {
          if (
            e.target.tagName === "IMG" &&
            !e.target.classList.contains("examples__nav-img") &&
            !expanded
          ) {
            expanded = true;
            $(".popup_overlay").addClass("popup_overlay--visible-white");
            $(".examples").addClass("examples--popup");
            $(".examples__slider").addClass("examples__slider--popup");
            $(".examples__slider").append(
              "<button class='close-element'></button>"
            );
            owl.trigger("refresh.owl.carousel");
            $(".close-element, .popup_overlay").on("click", function(e) {
              $(".examples__slider .close-element").remove();
              $(".popup_overlay").removeClass("popup_overlay--visible-white");
              $(".examples").removeClass("examples--popup");
              $(".examples__slider").removeClass("examples__slider--popup");
              owl.trigger("refresh.owl.carousel");
              expanded = false;
            });
          }
        });
      };
    });
  },
  mounted: function() {
    let expanded = this.expanded;
    $(document).ready(function() {
      let owl = $(".examples__slider");
      let owl1 = $(".examples__buttons");
      if (window.innerWidth < 769) {
        owl1.owlCarousel({
          items: 1,
          centered: true,
          loop: false,
          margin: 10,
          nav: false,
          dots: false,
          autoWidth: true
        });
      }
      owl.owlCarousel({
        items: 1,
        loop: false,
        margin: 10,
        autoplayHoverPause: true,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        nav: true
      });
      const imgList = document.querySelectorAll(".examples__nav-img");
      console.log(imgList);
      const sliderNavButtons = document.querySelectorAll(".owl-dot");
      for (let i = 0; i < imgList.length; i++) {
        sliderNavButtons[i].appendChild(imgList[i].cloneNode());
      }
      this.toggleSliderPopup(owl);
    });
  },
  updated: function() {
    $(document).ready(function() {
      let owl = $(".examples__slider");
      owl.trigger("destroy.owl.carousel");
      owl.find(".owl-item").remove();

      owl = $(".examples__slider");
      owl.owlCarousel({
        items: 1,
        loop: false,
        margin: 10,
        autoplayHoverPause: true,
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        nav: true
      });
      const imgList = document.querySelectorAll(".examples__nav-img");
      const sliderNavButtons = document.querySelectorAll(".owl-dot");
      for (let i = 0; i < imgList.length; i++) {
        sliderNavButtons[i].appendChild(imgList[i].cloneNode());
      }

      this.toggleSliderPopup(owl);
    });
  },
  data() {
    return {
      owl: null,
      owl1: null,
      active: 0,
      isActive: null,
      expanded: false,
      screenWidth: 0,
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
              src2x: "./img/clothes1@2x.jpg",
              classTab: "examples__nav-img--tab"
            },
            {
              alt: "cloth2",
              id: 2,
              src: "./img/clothes2.jpg",
              src2x: "./img/clothes2@2x.jpg",
              classTab: "examples__nav-img--tab"
            },
            {
              alt: "cloth3",
              id: 3,
              src: "./img/clothes3.jpg",
              src2x: "./img/clothes3@2x.jpg",
              classTab: "examples__nav-img--tab"
            },
            {
              alt: "cloth4",
              id: 4,
              src: "./img/clothes4.jpg",
              src2x: "./img/clothes4@2x.jpg",
              classTab: "examples__nav-img--tab"
            },
            {
              alt: "cloth5",
              id: 5,
              src: "./img/clothes5.jpg",
              src2x: "./img/clothes5@2x.jpg",
              classTab: "examples__nav-img--tab"
            },
            {
              alt: "cloth6",
              id: 6,
              src: "./img/clothes6.jpg",
              src2x: "./img/clothes6@2x.jpg",
              classTab: "examples__nav-img--tab"
            },
            {
              alt: "cloth7",
              id: 7,
              src: "./img/clothes7.jpg",
              src2x: "./img/clothes7@2x.jpg",
              classTab: "examples__nav-img--tab"
            },
            {
              alt: "cloth8",
              id: 8,
              src: "./img/clothes8.jpg",
              src2x: "./img/clothes8@2x.jpg",
              classTab: "examples__nav-img--tab"
            },
            {
              alt: "cloth9",
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
              src2x: "./img/bag1@2x.jpg",
              classTab: "examples__nav-img--tab"
            },
            {
              alt: "bags2",
              id: 2,
              src: "./img/bag2.jpg",
              src2x: "./img/bag2@2x.jpg",
              classTab: "examples__nav-img--tab"
            },
            {
              alt: "bags3",
              id: 3,
              src: "./img/bag3.jpg",
              src2x: "./img/bag3@2x.jpg",
              classTab: "examples__nav-img--tab"
            },
            {
              alt: "bags3",
              id: 4,
              src: "./img/bag3.jpg",
              src2x: "./img/bag3@2x.jpg",
              classTab: "examples__nav-img--tab"
            },
            {
              alt: "bags3",
              id: 5,
              src: "./img/bag3.jpg",
              src2x: "./img/bag3@2x.jpg",
              classTab: "examples__nav-img--tab"
            },
            {
              alt: "bags3",
              id: 6,
              src: "./img/bag3.jpg",
              src2x: "./img/bag3@2x.jpg",
              classTab: "examples__nav-img--tab"
            },
            {
              alt: "bags3",
              id: 7,
              src: "./img/bag3.jpg",
              src2x: "./img/bag3@2x.jpg",
              classTab: "examples__nav-img--tab"
            },
            {
              alt: "bags3",
              id: 8,
              src: "./img/bag3.jpg",
              src2x: "./img/bag3@2x.jpg",
              classTab: "examples__nav-img--tab"
            }
          ]
        }
      ]
    };
  }
};
</script>
