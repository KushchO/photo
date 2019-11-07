import $ from 'jquery';

ymaps.ready(init);

function init() {
	var myMap = new ymaps.Map('main-map-range', {
		center: [55.76, 37.64],
		zoom: 9
	});

	var myGeoObject = new ymaps.GeoObject(
		{
			// Описываем геометрию геообъекта.
			geometry: {
				// Тип геометрии - "Многоугольник".
				type: 'Polygon',
				// Указываем координаты вершин многоугольника.
				coordinates: [
					// Координаты вершин внешнего контура.
					[
						[55.8806, 37.2768],
						[55.9561, 37.3152],
						[55.9184, 37.3921],
						[55.9785, 37.4086],
						[55.9946, 37.4663],
						[55.9608, 37.6407],
						[55.9854, 37.8233],
						[55.9631, 37.8714],
						[55.9191, 37.9167],
						[55.868, 37.8485],
						[55.8294, 37.8334],
						[55.8108, 37.843],
						[55.7505, 37.9721],
						[55.7226, 37.9831],
						[55.6721, 37.9872],
						[55.6729, 37.9364],
						[55.5633, 37.9172],
						[55.5291, 37.7703],
						[55.5163, 37.7846],
						[55.5148, 37.6129],
						[55.5553, 37.6047],
						[55.5428, 37.5264],
						[55.5949, 37.4028],
						[55.6532, 37.3781],
						[55.7517, 37.3259],
						[55.8275, 37.3575],
						[55.8806, 37.2768]
					]
				],
				// Задаем правило заливки внутренних контуров по алгоритму "nonZero".
				fillRule: 'nonZero'
			},
			// Описываем свойства геообъекта.
			properties: {
				// Содержимое балуна.
				balloonContent: 'Многоугольник'
			}
		},
		{
			// Описываем опции геообъекта.
			// Цвет заливки.
			fillColor: '#9E1935',
			// Цвет обводки.
			strokeColor: '#D15F5F',
			// Общая прозрачность (как для заливки, так и для обводки).
			fillOpacity: 0.1,
			// Ширина обводки.
			strokeWidth: 3
		}
	);

	myMap.geoObjects.add(myGeoObject);

	var myMap1 = new ymaps.Map(
			'main-map-pvz',
			{
				center: [55.751574, 37.573856],
				zoom: 9
			},
			{
				restrictMapArea: true
			}
		),
		// Создаём макет содержимого.
		MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
			'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
		),
		gumPlacemark = new ymaps.Placemark(
			[55.75463856900362, 37.621632500000004],
			{
				hintContent: 'ГУМ',
				balloonContent: 'ГУМ - Красная площадь, 3, ГУМ, 2 этаж, 1 линия'
			},
			{
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
			}
		),
		smolenkaPlacemark = new ymaps.Placemark(
			[55.74748456898525, 37.58129849999999],
			{
				hintContent: 'Смоленский Пассаж',
				balloonContent: 'Смоленский Пассаж - Смоленская площадь, 3'
			},
			{
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
			}
		),
		vesnaPlacemark = new ymaps.Placemark(
			[55.75215606896742, 37.58854749999995],
			{
				hintContent: 'ВЕСНА',
				balloonContent: 'ВЕСНА - Новый Арбат, 19'
			},
			{
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
			}
		),
		savinkaPlacemark = new ymaps.Placemark(
			[55.73644256901647, 37.568632000000015],
			{
				hintContent: 'Саввинка',
				balloonContent: 'Саввинка - Саввинская наб, 12, стр. 10 Б'
			},
			{
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
			}
		),
		vnukovoPlacemark = new ymaps.Placemark(
			[55.60411200068269, 37.336156999999986],
			{
				hintContent: 'Vnukovo Outlet Village',
				balloonContent: 'Vnukovo Outlet Village 27-й км. Киевского шоссе'
			},
			{
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
			}
		);

	myMap1.geoObjects
		.add(gumPlacemark)
		.add(smolenkaPlacemark)
		.add(vesnaPlacemark)
		.add(savinkaPlacemark)
		.add(vnukovoPlacemark);

	myMap.behaviors.disable('scrollZoom');
	myMap1.behaviors.disable('scrollZoom');

	$(window).click(function() {
		myMap.container.fitToViewport();
		myMap1.container.fitToViewport();
	});
}
