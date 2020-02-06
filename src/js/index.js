import './utility/utitlity';
import './import/modules';
import './import/components';

/*Функционал редиректа на главную по нажатию на крестик*/
$('.close-element--to-front').on('click', () => {
  window.location.href = '/';
});

$('section').each(function() {
  $(this).addClass('fade-block');
});

/*Всплывающие элементы на главной*/
/**Чтобы добавить блоки блоку эфект всплытия -добавляем ему класс fade-block*/
/**Всем section этот класс добавляется автоматически */
$(document).ready(function() {
  setTimeout(() => {
    $('.fade-block').each(function(index) {
      setTimeout(() => {
        if (
          $(window).scrollTop() + $(window).height() >=
          $(this).offset().top
        ) {
          $(this).addClass('fade-block--visible');
        }
      }, 1 + index * 1000);
    });
    //отслеживаем событие прокрутки страницы
    $(document).on('scroll', () => {
      //Складываем значение прокрутки страницы и высоту окна, этим мы получаем положение страницы относительно нижней границы окна, потом проверяем, если это значение больше, чем отступ нужного элемента от верха страницы, то значит элемент уже появился внизу окна, соответственно виден
      $('.fade-block').each(function() {
        if (
          $(window).scrollTop() + $(window).height() >=
          $(this).offset().top
        ) {
          $(this).addClass('fade-block--visible');
        }
      });
    });
  });
});
