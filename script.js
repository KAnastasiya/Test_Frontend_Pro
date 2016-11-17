/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Обработчик события нажатия на пункты навигации
	 * @param {Object} event
	 */
	var _onNavClick = function _onNavClick(event) {
	  event.preventDefault();
	
	  // Если нажат пункт навигации
	  if (event.target.className.split(' ')[0] === 'page-nav__link') {
	    // Сброс ранее выбранного пункта
	    var navItems = document.querySelectorAll('.page-nav__link');
	    var contentList = document.querySelectorAll('.content__wrapper');
	
	    for (var i = 0; i < navItems.length; i++) {
	      navItems[i].classList.remove('page-nav__link_active');
	      contentList[i].classList.add('content__wrapper_hidden');
	      contentList[i].classList.remove('animated');
	      contentList[i].classList.remove('fadeIn');
	    }
	
	    // Установка нового выбранного пункта
	    event.target.classList.add('page-nav__link_active');
	    event.target.removeAttribute('href');
	
	    var chosenNavItemIndex = event.target.getAttribute('data-index');
	    var curremtContentWrapper = document.querySelector('.content__wrapper_' + chosenNavItemIndex);
	    curremtContentWrapper.classList.remove('content__wrapper_hidden');
	    curremtContentWrapper.classList.add('animated');
	    curremtContentWrapper.classList.add('fadeIn');
	  }
	};
	
	/**
	 * Обработчик события загрузки страницы
	 */
	var _onPageLoad = function _onPageLoad() {
	  // Установка выбранного по умолчанию пункта меню
	  document.querySelectorAll('.page-nav__link')[1].classList.add('page-nav__link_active');
	  document.querySelectorAll('.content__wrapper')[1].classList.remove('content__wrapper_hidden');
	};
	
	// Навешивание обработчиков событий
	document.querySelector('.page-nav').addEventListener('click', _onNavClick);
	window.addEventListener('load', _onPageLoad);

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWRlMTVlZGVlNjFkY2NiZTY0NTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC5qcyJdLCJuYW1lcyI6WyJfb25OYXZDbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJzcGxpdCIsIm5hdkl0ZW1zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29udGVudExpc3QiLCJpIiwibGVuZ3RoIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwicmVtb3ZlQXR0cmlidXRlIiwiY2hvc2VuTmF2SXRlbUluZGV4IiwiZ2V0QXR0cmlidXRlIiwiY3VycmVtdENvbnRlbnRXcmFwcGVyIiwicXVlcnlTZWxlY3RvciIsIl9vblBhZ2VMb2FkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7QUFJQSxLQUFJQSxjQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0FBQzNCQSxTQUFNQyxjQUFOOztBQUVBO0FBQ0EsT0FBR0QsTUFBTUUsTUFBTixDQUFhQyxTQUFiLENBQXVCQyxLQUF2QixDQUE2QixHQUE3QixFQUFrQyxDQUFsQyxNQUF5QyxnQkFBNUMsRUFBOEQ7QUFDNUQ7QUFDQSxTQUFJQyxXQUFXQyxTQUFTQyxnQkFBVCxDQUEwQixpQkFBMUIsQ0FBZjtBQUNBLFNBQUlDLGNBQWNGLFNBQVNDLGdCQUFULENBQTBCLG1CQUExQixDQUFsQjs7QUFFQSxVQUFJLElBQUlFLElBQUksQ0FBWixFQUFlQSxJQUFJSixTQUFTSyxNQUE1QixFQUFvQ0QsR0FBcEMsRUFBeUM7QUFDdkNKLGdCQUFTSSxDQUFULEVBQVlFLFNBQVosQ0FBc0JDLE1BQXRCLENBQTZCLHVCQUE3QjtBQUNBSixtQkFBWUMsQ0FBWixFQUFlRSxTQUFmLENBQXlCRSxHQUF6QixDQUE2Qix5QkFBN0I7QUFDQUwsbUJBQVlDLENBQVosRUFBZUUsU0FBZixDQUF5QkMsTUFBekIsQ0FBZ0MsVUFBaEM7QUFDQUosbUJBQVlDLENBQVosRUFBZUUsU0FBZixDQUF5QkMsTUFBekIsQ0FBZ0MsUUFBaEM7QUFDRDs7QUFFRDtBQUNBWixXQUFNRSxNQUFOLENBQWFTLFNBQWIsQ0FBdUJFLEdBQXZCLENBQTJCLHVCQUEzQjtBQUNBYixXQUFNRSxNQUFOLENBQWFZLGVBQWIsQ0FBNkIsTUFBN0I7O0FBRUEsU0FBSUMscUJBQXFCZixNQUFNRSxNQUFOLENBQWFjLFlBQWIsQ0FBMEIsWUFBMUIsQ0FBekI7QUFDQSxTQUFJQyx3QkFBd0JYLFNBQVNZLGFBQVQsQ0FBdUIsdUJBQXVCSCxrQkFBOUMsQ0FBNUI7QUFDQUUsMkJBQXNCTixTQUF0QixDQUFnQ0MsTUFBaEMsQ0FBdUMseUJBQXZDO0FBQ0FLLDJCQUFzQk4sU0FBdEIsQ0FBZ0NFLEdBQWhDLENBQW9DLFVBQXBDO0FBQ0FJLDJCQUFzQk4sU0FBdEIsQ0FBZ0NFLEdBQWhDLENBQW9DLFFBQXBDO0FBQ0Q7QUFDRixFQTFCRDs7QUE0QkE7OztBQUdBLEtBQUlNLGNBQWMsU0FBZEEsV0FBYyxHQUFNO0FBQ3RCO0FBQ0FiLFlBQVNDLGdCQUFULENBQTBCLGlCQUExQixFQUE2QyxDQUE3QyxFQUFnREksU0FBaEQsQ0FBMERFLEdBQTFELENBQThELHVCQUE5RDtBQUNBUCxZQUFTQyxnQkFBVCxDQUEwQixtQkFBMUIsRUFBK0MsQ0FBL0MsRUFBa0RJLFNBQWxELENBQTREQyxNQUE1RCxDQUFtRSx5QkFBbkU7QUFDRCxFQUpEOztBQU1BO0FBQ0FOLFVBQVNZLGFBQVQsQ0FBdUIsV0FBdkIsRUFBb0NFLGdCQUFwQyxDQUFxRCxPQUFyRCxFQUE4RHJCLFdBQTlEO0FBQ0FzQixRQUFPRCxnQkFBUCxDQUF3QixNQUF4QixFQUFnQ0QsV0FBaEMsRSIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlZGUxNWVkZWU2MWRjY2JlNjQ1MCIsIi8qKlxuICog0J7QsdGA0LDQsdC+0YLRh9C40Log0YHQvtCx0YvRgtC40Y8g0L3QsNC20LDRgtC40Y8g0L3QsCDQv9GD0L3QutGC0Ysg0L3QsNCy0LjQs9Cw0YbQuNC4XG4gKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAqL1xubGV0IF9vbk5hdkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgLy8g0JXRgdC70Lgg0L3QsNC20LDRgiDQv9GD0L3QutGCINC90LDQstC40LPQsNGG0LjQuFxuICBpZihldmVudC50YXJnZXQuY2xhc3NOYW1lLnNwbGl0KCcgJylbMF0gPT09ICdwYWdlLW5hdl9fbGluaycpIHtcbiAgICAvLyDQodCx0YDQvtGBINGA0LDQvdC10LUg0LLRi9Cx0YDQsNC90L3QvtCz0L4g0L/Rg9C90LrRgtCwXG4gICAgbGV0IG5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhZ2UtbmF2X19saW5rJyk7XG4gICAgbGV0IGNvbnRlbnRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRlbnRfX3dyYXBwZXInKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBuYXZJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgbmF2SXRlbXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgncGFnZS1uYXZfX2xpbmtfYWN0aXZlJyk7XG4gICAgICBjb250ZW50TGlzdFtpXS5jbGFzc0xpc3QuYWRkKCdjb250ZW50X193cmFwcGVyX2hpZGRlbicpO1xuICAgICAgY29udGVudExpc3RbaV0uY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZWQnKTtcbiAgICAgIGNvbnRlbnRMaXN0W2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGVJbicpO1xuICAgIH1cblxuICAgIC8vINCj0YHRgtCw0L3QvtCy0LrQsCDQvdC+0LLQvtCz0L4g0LLRi9Cx0YDQsNC90L3QvtCz0L4g0L/Rg9C90LrRgtCwXG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3BhZ2UtbmF2X19saW5rX2FjdGl2ZScpO1xuICAgIGV2ZW50LnRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoJ2hyZWYnKTtcblxuICAgIGxldCBjaG9zZW5OYXZJdGVtSW5kZXggPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XG4gICAgbGV0IGN1cnJlbXRDb250ZW50V3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50X193cmFwcGVyXycgKyBjaG9zZW5OYXZJdGVtSW5kZXgpO1xuICAgIGN1cnJlbXRDb250ZW50V3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdjb250ZW50X193cmFwcGVyX2hpZGRlbicpO1xuICAgIGN1cnJlbXRDb250ZW50V3JhcHBlci5jbGFzc0xpc3QuYWRkKCdhbmltYXRlZCcpO1xuICAgIGN1cnJlbXRDb250ZW50V3JhcHBlci5jbGFzc0xpc3QuYWRkKCdmYWRlSW4nKTtcbiAgfVxufTtcblxuLyoqXG4gKiDQntCx0YDQsNCx0L7RgtGH0LjQuiDRgdC+0LHRi9GC0LjRjyDQt9Cw0LPRgNGD0LfQutC4INGB0YLRgNCw0L3QuNGG0YtcbiAqL1xubGV0IF9vblBhZ2VMb2FkID0gKCkgPT4ge1xuICAvLyDQo9GB0YLQsNC90L7QstC60LAg0LLRi9Cx0YDQsNC90L3QvtCz0L4g0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4g0L/Rg9C90LrRgtCwINC80LXQvdGOXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYWdlLW5hdl9fbGluaycpWzFdLmNsYXNzTGlzdC5hZGQoJ3BhZ2UtbmF2X19saW5rX2FjdGl2ZScpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGVudF9fd3JhcHBlcicpWzFdLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbnRlbnRfX3dyYXBwZXJfaGlkZGVuJyk7XG59O1xuXG4vLyDQndCw0LLQtdGI0LjQstCw0L3QuNC1INC+0LHRgNCw0LHQvtGC0YfQuNC60L7QsiDRgdC+0LHRi9GC0LjQuVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UtbmF2JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfb25OYXZDbGljayk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIF9vblBhZ2VMb2FkKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHQuanMiXSwic291cmNlUm9vdCI6IiJ9