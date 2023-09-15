/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContactPage: () => (/* binding */ createContactPage)
/* harmony export */ });
const createContactPage = () => {
    const contentDiv = document.getElementById('content');
  
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');
  
    const contactTitle = document.createElement('h2');
    contactTitle.textContent = 'Contact Us';
    contactDiv.appendChild(contactTitle);
  
    const contactInfo = document.createElement('p');
    contactInfo.textContent = 'For reservations or inquiries, please contact us at:';
    contactDiv.appendChild(contactInfo);
  
    const contactEmail = document.createElement('p');
    contactEmail.textContent = 'Email: info@restaurant.com';
    contactDiv.appendChild(contactEmail);
  
    const contactPhone = document.createElement('p');
    contactPhone.textContent = 'Phone: 123-456-7890';
    contactDiv.appendChild(contactPhone);
  
    contentDiv.appendChild(contactDiv);
  };
  
  
  

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHomePage: () => (/* binding */ createHomePage)
/* harmony export */ });
function createHomePage() {
    const contentDiv = document.getElementById('content');
  
    const homepageDiv = document.createElement('div');
    homepageDiv.classList.add('homepage');
  
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to Our Restaurant!';
  
    const copy = document.createElement('p');
    copy.textContent = 'Experience the finest dining in town. Our restaurant offers a wide range of delicious dishes prepared by our talented chefs. Come and enjoy a memorable dining experience with us.';
  
    homepageDiv.appendChild(headline);
    homepageDiv.appendChild(copy);
  
    contentDiv.appendChild(homepageDiv);
  }
  
  

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMenuPage: () => (/* binding */ createMenuPage)
/* harmony export */ });
function createMenuPage() {
    const contentDiv = document.getElementById('content');
  
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');
  
    const menuTitle = document.createElement('h1');
    menuTitle.textContent = 'Menu';
  
    const menuList = document.createElement('ul');
  
    const menuItem1 = document.createElement('li');
    menuItem1.textContent = 'Item 1';
  
    const menuItem2 = document.createElement('li');
    menuItem2.textContent = 'Item 2';
  
    const menuItem3 = document.createElement('li');
    menuItem3.textContent = 'Item 3';
  
    menuList.appendChild(menuItem1);
    menuList.appendChild(menuItem2);
    menuList.appendChild(menuItem3);
  
    menuDiv.appendChild(menuTitle);
    menuDiv.appendChild(menuList);
  
    contentDiv.appendChild(menuDiv);
  }
  
  

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");




const contentDiv = document.getElementById('content');

function clearContent() {
  const contentChildren = Array.from(contentDiv.children);
  contentChildren.forEach(child => {
    if (!child.classList.contains('tabs')) {
      contentDiv.removeChild(child);
    }
  });
}

function createTab(tabName) {
  const tab = document.createElement('div');
  tab.classList.add('tab');
  tab.textContent = tabName;
  return tab;
}

function createTabs() {
  const tabsDiv = document.createElement('div');
  tabsDiv.classList.add('tabs');

  const homeTab = createTab('Home');
  const contactTab = createTab('Contact');
  const menuTab = createTab('Menu');

  homeTab.addEventListener('click', () => {
    clearContent();
    (0,_homepage__WEBPACK_IMPORTED_MODULE_0__.createHomePage)();
  });

  contactTab.addEventListener('click', () => {
    clearContent();
    (0,_contact__WEBPACK_IMPORTED_MODULE_1__.createContactPage)();
  });

  menuTab.addEventListener('click', () => {
    clearContent();
    (0,_menu__WEBPACK_IMPORTED_MODULE_2__.createMenuPage)();
  });

  tabsDiv.appendChild(homeTab);
  tabsDiv.appendChild(contactTab);
  tabsDiv.appendChild(menuTab);

  return tabsDiv;
}

function initializeWebsite() {
  contentDiv.appendChild(createTabs());
  (0,_homepage__WEBPACK_IMPORTED_MODULE_0__.createHomePage)();
}

initializeWebsite();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBK0I7QUFDL0I7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDOUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ040QztBQUNFO0FBQ047O0FBRXhDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSx5REFBYztBQUNsQixHQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFJLDJEQUFpQjtBQUNyQixHQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFJLHFEQUFjO0FBQ2xCLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUseURBQWM7QUFDaEI7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9zcmMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNyZWF0ZUNvbnRhY3RQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBcbiAgICBjb25zdCBjb250YWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdERpdi5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG4gIFxuICAgIGNvbnN0IGNvbnRhY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29udGFjdFRpdGxlLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgVXMnO1xuICAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY29udGFjdFRpdGxlKTtcbiAgXG4gICAgY29uc3QgY29udGFjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29udGFjdEluZm8udGV4dENvbnRlbnQgPSAnRm9yIHJlc2VydmF0aW9ucyBvciBpbnF1aXJpZXMsIHBsZWFzZSBjb250YWN0IHVzIGF0Oic7XG4gICAgY29udGFjdERpdi5hcHBlbmRDaGlsZChjb250YWN0SW5mbyk7XG4gIFxuICAgIGNvbnN0IGNvbnRhY3RFbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb250YWN0RW1haWwudGV4dENvbnRlbnQgPSAnRW1haWw6IGluZm9AcmVzdGF1cmFudC5jb20nO1xuICAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY29udGFjdEVtYWlsKTtcbiAgXG4gICAgY29uc3QgY29udGFjdFBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRhY3RQaG9uZS50ZXh0Q29udGVudCA9ICdQaG9uZTogMTIzLTQ1Ni03ODkwJztcbiAgICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGNvbnRhY3RQaG9uZSk7XG4gIFxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY29udGFjdERpdik7XG4gIH07XG4gIFxuICBleHBvcnQgeyBjcmVhdGVDb250YWN0UGFnZSB9O1xuICAiLCJmdW5jdGlvbiBjcmVhdGVIb21lUGFnZSgpIHtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgXG4gICAgY29uc3QgaG9tZXBhZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lcGFnZURpdi5jbGFzc0xpc3QuYWRkKCdob21lcGFnZScpO1xuICBcbiAgICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGxpbmUudGV4dENvbnRlbnQgPSAnV2VsY29tZSB0byBPdXIgUmVzdGF1cmFudCEnO1xuICBcbiAgICBjb25zdCBjb3B5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvcHkudGV4dENvbnRlbnQgPSAnRXhwZXJpZW5jZSB0aGUgZmluZXN0IGRpbmluZyBpbiB0b3duLiBPdXIgcmVzdGF1cmFudCBvZmZlcnMgYSB3aWRlIHJhbmdlIG9mIGRlbGljaW91cyBkaXNoZXMgcHJlcGFyZWQgYnkgb3VyIHRhbGVudGVkIGNoZWZzLiBDb21lIGFuZCBlbmpveSBhIG1lbW9yYWJsZSBkaW5pbmcgZXhwZXJpZW5jZSB3aXRoIHVzLic7XG4gIFxuICAgIGhvbWVwYWdlRGl2LmFwcGVuZENoaWxkKGhlYWRsaW5lKTtcbiAgICBob21lcGFnZURpdi5hcHBlbmRDaGlsZChjb3B5KTtcbiAgXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChob21lcGFnZURpdik7XG4gIH1cbiAgXG4gIGV4cG9ydCB7IGNyZWF0ZUhvbWVQYWdlIH0iLCJmdW5jdGlvbiBjcmVhdGVNZW51UGFnZSgpIHtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgXG4gICAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVEaXYuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICBcbiAgICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIG1lbnVUaXRsZS50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgXG4gICAgY29uc3QgbWVudUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBcbiAgICBjb25zdCBtZW51SXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIG1lbnVJdGVtMS50ZXh0Q29udGVudCA9ICdJdGVtIDEnO1xuICBcbiAgICBjb25zdCBtZW51SXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIG1lbnVJdGVtMi50ZXh0Q29udGVudCA9ICdJdGVtIDInO1xuICBcbiAgICBjb25zdCBtZW51SXRlbTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIG1lbnVJdGVtMy50ZXh0Q29udGVudCA9ICdJdGVtIDMnO1xuICBcbiAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChtZW51SXRlbTEpO1xuICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKG1lbnVJdGVtMik7XG4gICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQobWVudUl0ZW0zKTtcbiAgXG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQobWVudUxpc3QpO1xuICBcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1lbnVEaXYpO1xuICB9XG4gIFxuICBleHBvcnQge2NyZWF0ZU1lbnVQYWdlfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZUhvbWVQYWdlIH0gZnJvbSAnLi9ob21lcGFnZSc7XG5pbXBvcnQgeyBjcmVhdGVDb250YWN0UGFnZSB9IGZyb20gJy4vY29udGFjdCc7XG5pbXBvcnQgeyBjcmVhdGVNZW51UGFnZSB9IGZyb20gJy4vbWVudSc7XG5cbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5mdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XG4gIGNvbnN0IGNvbnRlbnRDaGlsZHJlbiA9IEFycmF5LmZyb20oY29udGVudERpdi5jaGlsZHJlbik7XG4gIGNvbnRlbnRDaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICBpZiAoIWNoaWxkLmNsYXNzTGlzdC5jb250YWlucygndGFicycpKSB7XG4gICAgICBjb250ZW50RGl2LnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYWIodGFiTmFtZSkge1xuICBjb25zdCB0YWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFiLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuICB0YWIudGV4dENvbnRlbnQgPSB0YWJOYW1lO1xuICByZXR1cm4gdGFiO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYWJzKCkge1xuICBjb25zdCB0YWJzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhYnNEaXYuY2xhc3NMaXN0LmFkZCgndGFicycpO1xuXG4gIGNvbnN0IGhvbWVUYWIgPSBjcmVhdGVUYWIoJ0hvbWUnKTtcbiAgY29uc3QgY29udGFjdFRhYiA9IGNyZWF0ZVRhYignQ29udGFjdCcpO1xuICBjb25zdCBtZW51VGFiID0gY3JlYXRlVGFiKCdNZW51Jyk7XG5cbiAgaG9tZVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhckNvbnRlbnQoKTtcbiAgICBjcmVhdGVIb21lUGFnZSgpO1xuICB9KTtcblxuICBjb250YWN0VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsZWFyQ29udGVudCgpO1xuICAgIGNyZWF0ZUNvbnRhY3RQYWdlKCk7XG4gIH0pO1xuXG4gIG1lbnVUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgY3JlYXRlTWVudVBhZ2UoKTtcbiAgfSk7XG5cbiAgdGFic0Rpdi5hcHBlbmRDaGlsZChob21lVGFiKTtcbiAgdGFic0Rpdi5hcHBlbmRDaGlsZChjb250YWN0VGFiKTtcbiAgdGFic0Rpdi5hcHBlbmRDaGlsZChtZW51VGFiKTtcblxuICByZXR1cm4gdGFic0Rpdjtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZVdlYnNpdGUoKSB7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVGFicygpKTtcbiAgY3JlYXRlSG9tZVBhZ2UoKTtcbn1cblxuaW5pdGlhbGl6ZVdlYnNpdGUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==