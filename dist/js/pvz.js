/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/pages/pvz.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/components/maps/pvz-map.js":
/*!***********************************************!*\
  !*** ./src/blocks/components/maps/pvz-map.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

ymaps.ready(function () {
  var myMap = new ymaps.Map('pvz-map', {
    center: [55.751574, 37.573856],
    zoom: 10
  }, {
    restrictMapArea: true
  }),
      // Создаём макет содержимого.
  MyIconContentLayout = ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'),
      gumPlacemark = new ymaps.Placemark([55.75463856900362, 37.621632500000004], {
    hintContent: 'ГУМ',
    balloonContent: 'ГУМ - Красная площадь, 3, ГУМ, 2 этаж, 1 линия'
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: './img/svg/pvz-location.svg',
    // Размеры метки.
    iconImageSize: [48, 48],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-24, -24],
    // Смещение слоя с содержимым относительно слоя с картинкой.
    iconContentOffset: [15, 15],
    // Макет содержимого.
    iconContentLayout: MyIconContentLayout
  }),
      smolenkaPlacemark = new ymaps.Placemark([55.74748456898525, 37.58129849999999], {
    hintContent: 'Смоленский Пассаж',
    balloonContent: 'Смоленский Пассаж - Смоленская площадь, 3'
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: './img/svg/pvz-location.svg',
    // Размеры метки.
    iconImageSize: [48, 48],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-24, -24],
    // Смещение слоя с содержимым относительно слоя с картинкой.
    iconContentOffset: [15, 15],
    // Макет содержимого.
    iconContentLayout: MyIconContentLayout
  }),
      vesnaPlacemark = new ymaps.Placemark([55.75215606896742, 37.58854749999995], {
    hintContent: 'ВЕСНА',
    balloonContent: 'ВЕСНА - Новый Арбат, 19'
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: './img/svg/pvz-location.svg',
    // Размеры метки.
    iconImageSize: [48, 48],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-24, -24],
    // Смещение слоя с содержимым относительно слоя с картинкой.
    iconContentOffset: [15, 15],
    // Макет содержимого.
    iconContentLayout: MyIconContentLayout
  }),
      savinkaPlacemark = new ymaps.Placemark([55.73644256901647, 37.568632000000015], {
    hintContent: 'Саввинка',
    balloonContent: 'Саввинка - Саввинская наб, 12, стр. 10 Б'
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: './img/svg/pvz-location.svg',
    // Размеры метки.
    iconImageSize: [48, 48],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-24, -24],
    // Смещение слоя с содержимым относительно слоя с картинкой.
    iconContentOffset: [15, 15],
    // Макет содержимого.
    iconContentLayout: MyIconContentLayout
  }),
      vnukovoPlacemark = new ymaps.Placemark([55.60411200068269, 37.336156999999986], {
    hintContent: 'Vnukovo Outlet Village',
    balloonContent: 'Vnukovo Outlet Village 27-й км. Киевского шоссе'
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: './img/svg/pvz-location.svg',
    // Размеры метки.
    iconImageSize: [48, 48],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-24, -24],
    // Смещение слоя с содержимым относительно слоя с картинкой.
    iconContentOffset: [15, 15],
    // Макет содержимого.
    iconContentLayout: MyIconContentLayout
  });
  myMap.geoObjects.add(gumPlacemark).add(smolenkaPlacemark).add(vesnaPlacemark).add(savinkaPlacemark).add(vnukovoPlacemark);
});
var expandMapButton = document.querySelector('.map-buttons__button--expand');
var printMapButton = document.querySelector('.map-buttons__button--print');
var mapToPrint = document.querySelector('#pvz-map');
var mapPopup = document.querySelector('.popup__map');
var overlay = document.querySelector('.popup_overlay');

if (printMapButton) {
  printMapButton.addEventListener('click', function () {
    window.print();
  });
}

if (expandMapButton && mapToPrint && overlay) {
  var ovelayClose = mapPopup.querySelector('.close-element');
  overlay.addEventListener('click', function () {
    mapPopup.classList.toggle('popup__map--open');
    overlay.classList.toggle('popup__map--open');
  });
  ovelayClose.addEventListener('click', function () {
    mapPopup.classList.toggle('popup__map--open');
    overlay.classList.toggle('popup__map--open');
  });
  expandMapButton.addEventListener('click', function () {
    mapPopup.classList.toggle('popup__map--open');
    overlay.classList.toggle('popup__map--open');

    if (!mapPopup.querySelector('.ymaps-2-1-74-map')) {
      ymaps.ready(function () {
        var myMap = new ymaps.Map('popup-map', {
          center: [55.751574, 37.573856],
          zoom: 10
        }, {
          restrictMapArea: true
        }),
            // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'),
            gumPlacemark = new ymaps.Placemark([55.75463856900362, 37.621632500000004], {
          hintContent: 'ГУМ',
          balloonContent: 'ГУМ - Красная площадь, 3, ГУМ, 2 этаж, 1 линия'
        }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: './img/svg/pvz-location.svg',
          // Размеры метки.
          iconImageSize: [48, 48],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-24, -24],
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [15, 15],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout
        }),
            smolenkaPlacemark = new ymaps.Placemark([55.74748456898525, 37.58129849999999], {
          hintContent: 'Смоленский Пассаж',
          balloonContent: 'Смоленский Пассаж - Смоленская площадь, 3'
        }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: './img/svg/pvz-location.svg',
          // Размеры метки.
          iconImageSize: [48, 48],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-24, -24],
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [15, 15],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout
        }),
            vesnaPlacemark = new ymaps.Placemark([55.75215606896742, 37.58854749999995], {
          hintContent: 'ВЕСНА',
          balloonContent: 'ВЕСНА - Новый Арбат, 19'
        }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: './img/svg/pvz-location.svg',
          // Размеры метки.
          iconImageSize: [48, 48],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-24, -24],
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [15, 15],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout
        }),
            savinkaPlacemark = new ymaps.Placemark([55.73644256901647, 37.568632000000015], {
          hintContent: 'Саввинка',
          balloonContent: 'Саввинка - Саввинская наб, 12, стр. 10 Б'
        }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: './img/svg/pvz-location.svg',
          // Размеры метки.
          iconImageSize: [48, 48],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-24, -24],
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [15, 15],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout
        }),
            vnukovoPlacemark = new ymaps.Placemark([55.60411200068269, 37.336156999999986], {
          hintContent: 'Vnukovo Outlet Village',
          balloonContent: 'Vnukovo Outlet Village 27-й км. Киевского шоссе'
        }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: './img/svg/pvz-location.svg',
          // Размеры метки.
          iconImageSize: [48, 48],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-24, -24],
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [15, 15],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout
        });
        myMap.geoObjects.add(gumPlacemark).add(smolenkaPlacemark).add(vesnaPlacemark).add(savinkaPlacemark).add(vnukovoPlacemark);
      });
    }
  });
}

/***/ }),

/***/ "./src/js/pages/pvz.js":
/*!*****************************!*\
  !*** ./src/js/pages/pvz.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_maps_pvz_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %components%/maps/pvz-map */ "./src/blocks/components/maps/pvz-map.js");
/* harmony import */ var _components_maps_pvz_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_maps_pvz_map__WEBPACK_IMPORTED_MODULE_0__);


/***/ })

/******/ });
//# sourceMappingURL=pvz.js.map