import $ from 'jquery';
ymaps.ready(function() {
	var myMap = new ymaps.Map(
			'pvz-map',
			{
				center: [55.751574, 37.573856],
				zoom: 10
			},
			{
				searchControlProvider: 'yandex#search'
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
				iconImageHref: '../img/svg/pvz-location.svg',
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
				iconImageHref: '../img/svg/pvz-location.svg',
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
				iconImageHref: '../img/svg/pvz-location.svg',
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
				iconImageHref: '../img/svg/pvz-location.svg',
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
				iconImageHref: '../img/svg/pvz-location.svg',
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

	myMap.geoObjects
		.add(gumPlacemark)
		.add(smolenkaPlacemark)
		.add(vesnaPlacemark)
		.add(savinkaPlacemark)
		.add(vnukovoPlacemark);
});
