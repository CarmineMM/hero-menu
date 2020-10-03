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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_skins_skin_1_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/skins/_skin_1.scss */ "./src/scss/skins/_skin_1.scss");
/* harmony import */ var _scss_skins_skin_1_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_skins_skin_1_scss__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Stylesheets



window.HeroMenu = function (el, configUser) {
  var config = _objectSpread({
    // Configuraciones por defecto
    breakpoint: 768,
    // Delimita el tamaño mínimo de la pantalla para pasar a menu mobil
    subContainer: 'ul',
    // Es el contenedor que contiene las opciones del menu, este es el que se oculta en dispositivo mobil
    contentAnchor: 'li',
    // Es el contenedor de las anclas, de las opciones del menu
    clickOutOnClose: true,
    // Indica si el menu se cerrara si usuario hace click afuera del menu. Si es falso, el usuario se ve obligado a clicker el botón para cerrar
    dropdownContent: '<i class="hero-menu-dropdown-icon"></i>'
  }, configUser);

  var navbar; // Intenta seleccionar el elemento pasado por el usuario

  try {
    navbar = document.querySelector(el);
  } catch (error) {
    console.error("--------------------------\n\n\tImposible seleccionar el elemento: |--".concat(el, "--|\n\n--------------------------"));
    return false;
  }
  /**
   * Agregara las clases oportunas a cada elemento del menu
   */


  try {
    // Clases al contenedor
    if (!navbar.classList.contains('hero-menu-container')) navbar.classList.add('hero-menu-container'); // Sub-contenedor

    navbar.querySelectorAll(config.subContainer).forEach(function (subContainer, index) {
      // Sub-contenedores anidados, se les agrega un dropdown
      if (index !== 0) {
        subContainer.classList.add('hero-menu-dropdown');

        if (!subContainer.parentNode.classList.contains('hero-menu-container')) {
          var span = document.createElement('span');
          span.classList.add('hero-menu-dropdown-span');
          span.innerHTML = config.dropdownContent;
          subContainer.parentNode.querySelector('a').appendChild(span);
          subContainer.parentNode.classList.add('hero-menu-dropdown-button');
        }
      } else {
        // Primer sub-contenedor
        subContainer.classList.add('hero-menu-sub-container');
      } // Contenedor de las anclas


      subContainer.querySelectorAll(config.contentAnchor).forEach(function (contentAnchor) {
        contentAnchor.classList.add('hero-menu-content-anchor');
      });
    }); // Si existe un menu especial para la parte responsive

    var mobileMenu = navbar.querySelector('[data-hero="mobile"]');
    if (mobileMenu) mobileMenu.className = 'hero-menu-sub-container';
  } catch (error) {
    console.error("--------------------------\n\n\tHero menu require de:\n\t\t* Contenedor\n\t\t* Sub Contenedor\n\t\t* Content Anchor\n\tSi al menos uno no esta presente, se genera este error \n\n--------------------------");
    return false;
  }
  /**
   * Soporte para todos los dropdowns
   */


  var dropdowns = document.querySelectorAll('.hero-menu-dropdown-button');

  var callDropdownAction = function callDropdownAction() {
    closeAllDropdown();
    dropdowns.forEach(function (dropdown) {
      if (window.innerWidth <= config.breakpoint) {
        var anchor = dropdown.querySelector('a');
        anchor.addEventListener('click', function (e) {
          return toggleDropdown(e);
        });
        anchor.querySelector('.hero-menu-dropdown-span').addEventListener('click', function (e) {
          return toggleDropdown(e);
        });
      } else {
        dropdown.addEventListener('mouseenter', function (e) {
          return openDropdown(e.target);
        });
        dropdown.addEventListener('mouseleave', function (e) {
          return closeDropdown(e.target);
        });
      }
    });
  };
  /**
   * Intercambia las clases para abrir u ocultar el dropdown
   *
   * @param e
   */


  var toggleDropdown = function toggleDropdown(e) {
    e.stopPropagation();
    e.preventDefault();
    var find = e.target.parentNode; // Busca el elemento padre encargado de manejar la clase css para la apertura del dropdown

    do {
      if (find.classList.contains('hero-menu-dropdown-button')) {
        find.classList.contains('hero-menu-dropdown-open') ? closeDropdown(find) : openDropdown(find);
        find = false;
      } else {
        find = find.parentNode;
      }
    } while (find);
  };
  /**
   * Abrir o cerrar Dropdown
   * @param e
   */


  var openDropdown = function openDropdown(e) {
    return e.classList.add('hero-menu-dropdown-open');
  };

  var closeDropdown = function closeDropdown(e) {
    return e.classList.remove('hero-menu-dropdown-open');
  };
  /**
   * Cierra todos los modales
   */


  var closeAllDropdown = function closeAllDropdown() {
    dropdowns.forEach(function (dropdown) {
      dropdown.classList.remove('hero-menu-dropdown-open');
    });
  };
  /**
   * Función ayudante para las clases de los botones
   *
   * @param buttons
   * @param action * add (agrega una clase) * * remove (remueve una clase) * * event (agrega un evento) *
   * @param valueOrEvent
   * @param func
   */


  var controlBtn = function controlBtn(buttons, action, valueOrEvent, func) {
    buttons.forEach(function (btn) {
      if (action === 'add') {
        btn.classList.add(valueOrEvent);
      } else if (action === 'remove') {
        btn.classList.remove(valueOrEvent);
      } else if (action === 'event') {
        btn.addEventListener(valueOrEvent, func);
      }
    });
  };
  /**
   * Captura el Botón y estará disponible por el resto de la aplicación
   */


  var buttons;

  try {
    /**
     * Selecciona el/los botones que van alternar el menu responsivo
     * @type {NodeListOf<Element>}
     */
    buttons = document.querySelectorAll('[data-hero="button"]');
    controlBtn(buttons, 'add', 'hero-menu-button');
  } catch (error) {
    console.error("--------------------------\n\n\tHero menu:\n\t\tNo Pudo seleccionar bot\xF3n para el menu \n\n--------------------------");
    return false;
  }
  /**
   * Función encarga del menu responsivo
   */


  var mobileClass = function mobileClass() {
    if (window.innerWidth <= config.breakpoint) {
      navbar.classList.add('mobile');
      navbar.classList.remove('open');
    } else {
      navbar.classList.remove('mobile', 'open');
    }

    callDropdownAction();
  };
  /**
   * Alterna eventos para el cierre automático
   * y las clases del menu
   *
   */


  var toggleClassNav = function toggleClassNav() {
    if (navbar.classList.contains('open')) {
      navbar.classList.remove('open');
      controlBtn(buttons, 'remove', 'open');
      if (config.clickOutOnClose) document.removeEventListener('click', checkClickUser);
    } else {
      navbar.classList.add('open');
      controlBtn(buttons, 'add', 'open');
      if (config.clickOutOnClose) document.addEventListener('click', checkClickUser);
    }
  };
  /**
   * Event del Botón
   */


  controlBtn(buttons, 'event', 'click', toggleClassNav);
  /**
   * Comprueba si el usuario esta haciendo click AFUERA del navbar
   * Comprueba también si esta haciendo click ADENTRO del navbar
   *
   * @param e
   * @returns {boolean}
   */

  var checkClickUser = function checkClickUser(e) {
    closeAllDropdown();
    var navbarElements = navbar.querySelectorAll('*');

    for (var i = 0; i < navbarElements.length; i++) {
      if (e.target === navbarElements[i]) return true;
      if (i + 1 === navbarElements.length) toggleClassNav();
    }
  }; // Visualiza si se deben color las clases pertinentes


  window.addEventListener('resize', mobileClass);
  mobileClass(); // Invoca la clase para colocar el mobile

  return el;
};

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/skins/_skin_1.scss":
/*!*************************************!*\
  !*** ./src/scss/skins/_skin_1.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL3NraW5zL19za2luXzEuc2NzcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJIZXJvTWVudSIsImVsIiwiY29uZmlnVXNlciIsImNvbmZpZyIsImJyZWFrcG9pbnQiLCJzdWJDb250YWluZXIiLCJjb250ZW50QW5jaG9yIiwiY2xpY2tPdXRPbkNsb3NlIiwiZHJvcGRvd25Db250ZW50IiwibmF2YmFyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZXJyb3IiLCJjb25zb2xlIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJhZGQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImluZGV4IiwicGFyZW50Tm9kZSIsInNwYW4iLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJtb2JpbGVNZW51IiwiY2xhc3NOYW1lIiwiZHJvcGRvd25zIiwiY2FsbERyb3Bkb3duQWN0aW9uIiwiY2xvc2VBbGxEcm9wZG93biIsImRyb3Bkb3duIiwiaW5uZXJXaWR0aCIsImFuY2hvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidG9nZ2xlRHJvcGRvd24iLCJvcGVuRHJvcGRvd24iLCJ0YXJnZXQiLCJjbG9zZURyb3Bkb3duIiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJmaW5kIiwicmVtb3ZlIiwiY29udHJvbEJ0biIsImJ1dHRvbnMiLCJhY3Rpb24iLCJ2YWx1ZU9yRXZlbnQiLCJmdW5jIiwiYnRuIiwibW9iaWxlQ2xhc3MiLCJ0b2dnbGVDbGFzc05hdiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjaGVja0NsaWNrVXNlciIsIm5hdmJhckVsZW1lbnRzIiwiaSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FB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RyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELGNBQWMsQ0FBQ0UsTUFBbkMsRUFBMkNELENBQUMsRUFBNUMsRUFBZ0Q7QUFDNUMsVUFBR3BCLENBQUMsQ0FBQ0csTUFBRixLQUFhZ0IsY0FBYyxDQUFDQyxDQUFELENBQTlCLEVBQ0ksT0FBTyxJQUFQO0FBRUosVUFBS0EsQ0FBQyxHQUFDLENBQUYsS0FBUUQsY0FBYyxDQUFDRSxNQUE1QixFQUNJTCxjQUFjO0FBQ3JCO0FBQ0osR0FYRCxDQTFOa0MsQ0F3T2xDOzs7QUFDQW5ELFFBQU0sQ0FBQ2tDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDZ0IsV0FBbEM7QUFDQUEsYUFBVyxHQTFPdUIsQ0EwT3BCOztBQUVkLFNBQU9oRCxFQUFQO0FBQ0gsQ0E3T0QsQzs7Ozs7Ozs7Ozs7QUNKQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJqcy9oZXJvLW1lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluLmpzXCIpO1xuIiwiLy8gU3R5bGVzaGVldHNcclxuaW1wb3J0ICcuL3Njc3MvbWFpbi5zY3NzJ1xyXG5pbXBvcnQgJy4vc2Nzcy9za2lucy9fc2tpbl8xLnNjc3MnXHJcblxyXG53aW5kb3cuSGVyb01lbnUgPSAoZWwsIGNvbmZpZ1VzZXIpID0+IHtcclxuXHJcbiAgICBsZXQgY29uZmlnID0ge1xyXG4gICAgICAgIC8vIENvbmZpZ3VyYWNpb25lcyBwb3IgZGVmZWN0b1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2OCwgICAgICAgLy8gRGVsaW1pdGEgZWwgdGFtYcOxbyBtw61uaW1vIGRlIGxhIHBhbnRhbGxhIHBhcmEgcGFzYXIgYSBtZW51IG1vYmlsXHJcbiAgICAgICAgc3ViQ29udGFpbmVyOiAndWwnLCAgICAvLyBFcyBlbCBjb250ZW5lZG9yIHF1ZSBjb250aWVuZSBsYXMgb3BjaW9uZXMgZGVsIG1lbnUsIGVzdGUgZXMgZWwgcXVlIHNlIG9jdWx0YSBlbiBkaXNwb3NpdGl2byBtb2JpbFxyXG4gICAgICAgIGNvbnRlbnRBbmNob3I6ICdsaScsICAgLy8gRXMgZWwgY29udGVuZWRvciBkZSBsYXMgYW5jbGFzLCBkZSBsYXMgb3BjaW9uZXMgZGVsIG1lbnVcclxuICAgICAgICBjbGlja091dE9uQ2xvc2U6IHRydWUsIC8vIEluZGljYSBzaSBlbCBtZW51IHNlIGNlcnJhcmEgc2kgdXN1YXJpbyBoYWNlIGNsaWNrIGFmdWVyYSBkZWwgbWVudS4gU2kgZXMgZmFsc28sIGVsIHVzdWFyaW8gc2UgdmUgb2JsaWdhZG8gYSBjbGlja2VyIGVsIGJvdMOzbiBwYXJhIGNlcnJhclxyXG4gICAgICAgIGRyb3Bkb3duQ29udGVudDogJzxpIGNsYXNzPVwiaGVyby1tZW51LWRyb3Bkb3duLWljb25cIj48L2k+JywgLy8gQ29udGVuaWRvIHBvciBkZWZlY3RvIGRlbCBpbmRpY2Fkb3IgZGUgZHJvcGRvd25cclxuXHJcbiAgICAgICAgLy8gQ29uZmlndXJhY2lvbmVzIGRlbCB1c3VhcmlvXHJcbiAgICAgICAgLi4uY29uZmlnVXNlclxyXG4gICAgfVxyXG5cclxuICAgIGxldCBuYXZiYXJcclxuICAgIC8vIEludGVudGEgc2VsZWNjaW9uYXIgZWwgZWxlbWVudG8gcGFzYWRvIHBvciBlbCB1c3VhcmlvXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuXFxuXFx0SW1wb3NpYmxlIHNlbGVjY2lvbmFyIGVsIGVsZW1lbnRvOiB8LS0ke2VsfS0tfFxcblxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tYClcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZ3JlZ2FyYSBsYXMgY2xhc2VzIG9wb3J0dW5hcyBhIGNhZGEgZWxlbWVudG8gZGVsIG1lbnVcclxuICAgICAqL1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBDbGFzZXMgYWwgY29udGVuZWRvclxyXG4gICAgICAgIGlmICggIW5hdmJhci5jbGFzc0xpc3QuY29udGFpbnMoJ2hlcm8tbWVudS1jb250YWluZXInKSApIFxyXG4gICAgICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZCgnaGVyby1tZW51LWNvbnRhaW5lcicpXHJcblxyXG4gICAgICAgIC8vIFN1Yi1jb250ZW5lZG9yXHJcbiAgICAgICAgbmF2YmFyLnF1ZXJ5U2VsZWN0b3JBbGwoY29uZmlnLnN1YkNvbnRhaW5lcikuZm9yRWFjaCgoc3ViQ29udGFpbmVyLCBpbmRleCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgLy8gU3ViLWNvbnRlbmVkb3JlcyBhbmlkYWRvcywgc2UgbGVzIGFncmVnYSB1biBkcm9wZG93blxyXG4gICAgICAgICAgICBpZiAoIGluZGV4ICE9PSAwICkge1xyXG4gICAgICAgICAgICAgICAgc3ViQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlcm8tbWVudS1kcm9wZG93bicpXHJcbiAgICAgICAgICAgICAgICBpZiAoICFzdWJDb250YWluZXIucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2hlcm8tbWVudS1jb250YWluZXInKSApe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgnaGVyby1tZW51LWRyb3Bkb3duLXNwYW4nKVxyXG4gICAgICAgICAgICAgICAgICAgIHNwYW4uaW5uZXJIVE1MID0gY29uZmlnLmRyb3Bkb3duQ29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgIHN1YkNvbnRhaW5lci5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2EnKS5hcHBlbmRDaGlsZChzcGFuKVxyXG4gICAgICAgICAgICAgICAgICAgIHN1YkNvbnRhaW5lci5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2hlcm8tbWVudS1kcm9wZG93bi1idXR0b24nKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIC8vIFByaW1lciBzdWItY29udGVuZWRvclxyXG4gICAgICAgICAgICAgICAgc3ViQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlcm8tbWVudS1zdWItY29udGFpbmVyJylcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ29udGVuZWRvciBkZSBsYXMgYW5jbGFzXHJcbiAgICAgICAgICAgIHN1YkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKGNvbmZpZy5jb250ZW50QW5jaG9yKS5mb3JFYWNoKGNvbnRlbnRBbmNob3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29udGVudEFuY2hvci5jbGFzc0xpc3QuYWRkKCdoZXJvLW1lbnUtY29udGVudC1hbmNob3InKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIFNpIGV4aXN0ZSB1biBtZW51IGVzcGVjaWFsIHBhcmEgbGEgcGFydGUgcmVzcG9uc2l2ZVxyXG4gICAgICAgIGNvbnN0IG1vYmlsZU1lbnUgPSBuYXZiYXIucXVlcnlTZWxlY3RvcignW2RhdGEtaGVybz1cIm1vYmlsZVwiXScpO1xyXG4gICAgICAgIGlmICggbW9iaWxlTWVudSApIG1vYmlsZU1lbnUuY2xhc3NOYW1lID0gJ2hlcm8tbWVudS1zdWItY29udGFpbmVyJ1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG5cXG5cXHRIZXJvIG1lbnUgcmVxdWlyZSBkZTpcXG5cXHRcXHQqIENvbnRlbmVkb3JcXG5cXHRcXHQqIFN1YiBDb250ZW5lZG9yXFxuXFx0XFx0KiBDb250ZW50IEFuY2hvclxcblxcdFNpIGFsIG1lbm9zIHVubyBubyBlc3RhIHByZXNlbnRlLCBzZSBnZW5lcmEgZXN0ZSBlcnJvciBcXG5cXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWApXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNvcG9ydGUgcGFyYSB0b2RvcyBsb3MgZHJvcGRvd25zXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGRyb3Bkb3ducyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZXJvLW1lbnUtZHJvcGRvd24tYnV0dG9uJyk7XHJcbiAgICBjb25zdCBjYWxsRHJvcGRvd25BY3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgY2xvc2VBbGxEcm9wZG93bigpXHJcblxyXG4gICAgICAgIGRyb3Bkb3ducy5mb3JFYWNoKGRyb3Bkb3duID0+IHtcclxuICAgICAgICAgICAgaWYgKCB3aW5kb3cuaW5uZXJXaWR0aCA8PSBjb25maWcuYnJlYWtwb2ludCApe1xyXG4gICAgICAgICAgICAgICAgbGV0IGFuY2hvciA9IGRyb3Bkb3duLnF1ZXJ5U2VsZWN0b3IoJ2EnKTtcclxuICAgICAgICAgICAgICAgIGFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gdG9nZ2xlRHJvcGRvd24oZSkpXHJcbiAgICAgICAgICAgICAgICBhbmNob3IucXVlcnlTZWxlY3RvcignLmhlcm8tbWVudS1kcm9wZG93bi1zcGFuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHRvZ2dsZURyb3Bkb3duKGUpKVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZSA9PiBvcGVuRHJvcGRvd24oZS50YXJnZXQpKVxyXG4gICAgICAgICAgICAgICAgZHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGUgPT4gY2xvc2VEcm9wZG93bihlLnRhcmdldCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW50ZXJjYW1iaWEgbGFzIGNsYXNlcyBwYXJhIGFicmlyIHUgb2N1bHRhciBlbCBkcm9wZG93blxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IHRvZ2dsZURyb3Bkb3duID0gZSA9PiB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgICBsZXQgZmluZCA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XHJcbiAgICAgICAgLy8gQnVzY2EgZWwgZWxlbWVudG8gcGFkcmUgZW5jYXJnYWRvIGRlIG1hbmVqYXIgbGEgY2xhc2UgY3NzIHBhcmEgbGEgYXBlcnR1cmEgZGVsIGRyb3Bkb3duXHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBpZiAoIGZpbmQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoZXJvLW1lbnUtZHJvcGRvd24tYnV0dG9uJykgKSB7XHJcbiAgICAgICAgICAgICAgICBmaW5kLmNsYXNzTGlzdC5jb250YWlucygnaGVyby1tZW51LWRyb3Bkb3duLW9wZW4nKVxyXG4gICAgICAgICAgICAgICAgICAgID8gY2xvc2VEcm9wZG93bihmaW5kKVxyXG4gICAgICAgICAgICAgICAgICAgIDogb3BlbkRyb3Bkb3duKGZpbmQpXHJcblxyXG4gICAgICAgICAgICAgICAgZmluZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGZpbmQgPSBmaW5kLnBhcmVudE5vZGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH13aGlsZSAoZmluZClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFicmlyIG8gY2VycmFyIERyb3Bkb3duXHJcbiAgICAgKiBAcGFyYW0gZVxyXG4gICAgICovXHJcbiAgICBjb25zdCBvcGVuRHJvcGRvd24gID0gZSA9PiBlLmNsYXNzTGlzdC5hZGQoJ2hlcm8tbWVudS1kcm9wZG93bi1vcGVuJylcclxuICAgIGNvbnN0IGNsb3NlRHJvcGRvd24gPSBlID0+IGUuY2xhc3NMaXN0LnJlbW92ZSgnaGVyby1tZW51LWRyb3Bkb3duLW9wZW4nKVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENpZXJyYSB0b2RvcyBsb3MgbW9kYWxlc1xyXG4gICAgICovXHJcbiAgICBjb25zdCBjbG9zZUFsbERyb3Bkb3duID0gKCkgPT4ge1xyXG4gICAgICAgIGRyb3Bkb3ducy5mb3JFYWNoKGRyb3Bkb3duID0+IHtcclxuICAgICAgICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZSgnaGVyby1tZW51LWRyb3Bkb3duLW9wZW4nKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmNpw7NuIGF5dWRhbnRlIHBhcmEgbGFzIGNsYXNlcyBkZSBsb3MgYm90b25lc1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBidXR0b25zXHJcbiAgICAgKiBAcGFyYW0gYWN0aW9uICogYWRkIChhZ3JlZ2EgdW5hIGNsYXNlKSAqICogcmVtb3ZlIChyZW11ZXZlIHVuYSBjbGFzZSkgKiAqIGV2ZW50IChhZ3JlZ2EgdW4gZXZlbnRvKSAqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVPckV2ZW50XHJcbiAgICAgKiBAcGFyYW0gZnVuY1xyXG4gICAgICovXHJcbiAgICBjb25zdCBjb250cm9sQnRuID0gKGJ1dHRvbnMsIGFjdGlvbiwgdmFsdWVPckV2ZW50LCBmdW5jKSA9PiB7XHJcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgICAgIGlmICggYWN0aW9uID09PSAnYWRkJyApe1xyXG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQodmFsdWVPckV2ZW50KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGFjdGlvbiA9PT0gJ3JlbW92ZScpIHtcclxuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKHZhbHVlT3JFdmVudClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGFjdGlvbiA9PT0gJ2V2ZW50Jykge1xyXG4gICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIodmFsdWVPckV2ZW50LCBmdW5jKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYXB0dXJhIGVsIEJvdMOzbiB5IGVzdGFyw6EgZGlzcG9uaWJsZSBwb3IgZWwgcmVzdG8gZGUgbGEgYXBsaWNhY2nDs25cclxuICAgICAqL1xyXG4gICAgbGV0IGJ1dHRvbnM7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNlbGVjY2lvbmEgZWwvbG9zIGJvdG9uZXMgcXVlIHZhbiBhbHRlcm5hciBlbCBtZW51IHJlc3BvbnNpdm9cclxuICAgICAgICAgKiBAdHlwZSB7Tm9kZUxpc3RPZjxFbGVtZW50Pn1cclxuICAgICAgICAgKi9cclxuICAgICAgICBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtaGVybz1cImJ1dHRvblwiXScpXHJcbiAgICAgICAgY29udHJvbEJ0bihidXR0b25zLCAnYWRkJywgJ2hlcm8tbWVudS1idXR0b24nKVxyXG4gICAgfWNhdGNoIChlcnJvcil7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG5cXG5cXHRIZXJvIG1lbnU6XFxuXFx0XFx0Tm8gUHVkbyBzZWxlY2Npb25hciBib3TDs24gcGFyYSBlbCBtZW51IFxcblxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tYClcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY2nDs24gZW5jYXJnYSBkZWwgbWVudSByZXNwb25zaXZvXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IG1vYmlsZUNsYXNzID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICggd2luZG93LmlubmVyV2lkdGggPD0gY29uZmlnLmJyZWFrcG9pbnQgKXtcclxuICAgICAgICAgICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoJ21vYmlsZScpXHJcbiAgICAgICAgICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJylcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKCdtb2JpbGUnLCAnb3BlbicpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhbGxEcm9wZG93bkFjdGlvbigpXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFsdGVybmEgZXZlbnRvcyBwYXJhIGVsIGNpZXJyZSBhdXRvbcOhdGljb1xyXG4gICAgICogeSBsYXMgY2xhc2VzIGRlbCBtZW51XHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBjb25zdCB0b2dnbGVDbGFzc05hdiA9ICgpID0+IHtcclxuICAgICAgICBpZiAoIG5hdmJhci5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSApe1xyXG4gICAgICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpXHJcbiAgICAgICAgICAgIGNvbnRyb2xCdG4oYnV0dG9ucywgJ3JlbW92ZScsICdvcGVuJylcclxuXHJcbiAgICAgICAgICAgIGlmICggY29uZmlnLmNsaWNrT3V0T25DbG9zZSApXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrQ2xpY2tVc2VyKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZCgnb3BlbicpXHJcbiAgICAgICAgICAgIGNvbnRyb2xCdG4oYnV0dG9ucywgJ2FkZCcsJ29wZW4nKVxyXG5cclxuICAgICAgICAgICAgaWYgKCBjb25maWcuY2xpY2tPdXRPbkNsb3NlIClcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tDbGlja1VzZXIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXZlbnQgZGVsIEJvdMOzblxyXG4gICAgICovXHJcbiAgICBjb250cm9sQnRuKGJ1dHRvbnMsICdldmVudCcsICdjbGljaycsIHRvZ2dsZUNsYXNzTmF2KVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbXBydWViYSBzaSBlbCB1c3VhcmlvIGVzdGEgaGFjaWVuZG8gY2xpY2sgQUZVRVJBIGRlbCBuYXZiYXJcclxuICAgICAqIENvbXBydWViYSB0YW1iacOpbiBzaSBlc3RhIGhhY2llbmRvIGNsaWNrIEFERU5UUk8gZGVsIG5hdmJhclxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBlXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgY29uc3QgY2hlY2tDbGlja1VzZXIgPSBlID0+IHtcclxuICAgICAgICBjbG9zZUFsbERyb3Bkb3duKClcclxuICAgICAgICBjb25zdCBuYXZiYXJFbGVtZW50cyA9IG5hdmJhci5xdWVyeVNlbGVjdG9yQWxsKCcqJylcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZiYXJFbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZihlLnRhcmdldCA9PT0gbmF2YmFyRWxlbWVudHNbaV0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgaWYgKCBpKzEgPT09IG5hdmJhckVsZW1lbnRzLmxlbmd0aCApXHJcbiAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc05hdigpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBWaXN1YWxpemEgc2kgc2UgZGViZW4gY29sb3IgbGFzIGNsYXNlcyBwZXJ0aW5lbnRlc1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG1vYmlsZUNsYXNzKVxyXG4gICAgbW9iaWxlQ2xhc3MoKSAvLyBJbnZvY2EgbGEgY2xhc2UgcGFyYSBjb2xvY2FyIGVsIG1vYmlsZVxyXG5cclxuICAgIHJldHVybiBlbFxyXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==