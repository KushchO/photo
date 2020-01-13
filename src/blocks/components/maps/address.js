ymaps.ready(function() {
  var myMap = new ymaps.Map(
      'address-map',
      {
        center: [55.73265656900669, 37.748914999999954],
        zoom: 14
      },
      {
        restrictMapArea: true
      }
    ),
    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
    officePlacemark = new ymaps.Placemark(
      [55.73265656900669, 37.748914999999954],
      {
        hintContent: 'BOSCO INTERNET BOUTIQUE',
        balloonContent: `<b>BOSCO INTERNET BOUTIQUE</b><br>
           2-я Карачаровская улица, дом 14 А, строение 1`
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
  myMap.behaviors.disable('scrollZoom');
  myMap.geoObjects.add(officePlacemark);
});
