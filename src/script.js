/**
 * Обработчик события нажатия на пункты навигации
 * @param {Object} event
 */
let _onNavClick = (event) => {
  event.preventDefault();

  // Если нажат пункт навигации
  if(event.target.className.split(' ')[0] === 'page-nav__link') {
    // Сброс ранее выбранного пункта
    let navItems = document.querySelectorAll('.page-nav__link');
    let contentList = document.querySelectorAll('.content__wrapper');

    for(let i = 0; i < navItems.length; i++) {
      navItems[i].classList.remove('page-nav__link_active');
      contentList[i].classList.add('content__wrapper_hidden');
      contentList[i].classList.remove('animated');
      contentList[i].classList.remove('fadeIn');
    }

    // Установка нового выбранного пункта
    event.target.classList.add('page-nav__link_active');
    event.target.removeAttribute('href');

    let chosenNavItemIndex = event.target.getAttribute('data-index');
    let curremtContentWrapper = document.querySelector('.content__wrapper_' + chosenNavItemIndex);
    curremtContentWrapper.classList.remove('content__wrapper_hidden');
    curremtContentWrapper.classList.add('animated');
    curremtContentWrapper.classList.add('fadeIn');
  }
};

/**
 * Обработчик события загрузки страницы
 */
let _onPageLoad = () => {
  // Установка выбранного по умолчанию пункта меню
  document.querySelectorAll('.page-nav__link')[1].classList.add('page-nav__link_active');
  document.querySelectorAll('.content__wrapper')[1].classList.remove('content__wrapper_hidden');
};

// Навешивание обработчиков событий
document.querySelector('.page-nav').addEventListener('click', _onNavClick);
window.addEventListener('load', _onPageLoad);
