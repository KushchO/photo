ymaps.ready(init);

function init() {
	var myMap = new ymaps.Map(
		'delivery-map-map',
		{
			center: [55.76, 37.64],
			zoom: 10
		},
		{
			restrictMapArea: true
		}
	);

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
	myMap.behaviors.disable('scrollZoom');
	myMap.geoObjects.add(myGeoObject);
}
