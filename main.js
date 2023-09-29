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
function randomNumber() {
  for (let i = 0; i < 10; i++) {
    let randomMobile = '07' + Math.random().toString().slice(2, 11);
    return randomMobile;
  }
}

const createContactPage = () => {
  const contentDiv = document.getElementById('content');

  const people = [
    {
      name: 'Wigglytuff',
      role: 'Role: Guild Leader',
      email: 'guildmaster@wigglytuffguild.pmd',
      phone: randomNumber(),
      icon: '../src/images/wigglytuff-icon.png',
    },
    {
      name: 'Chatot',
      role: 'Role: Guild Assistant',
      email: 'guildassistant@wigglytuffguild.pmd',
      phone: randomNumber(),
      icon: '../src/images/chatot-icon.png',
    },
    {
      name: 'Dugtrio',
      role: 'Role: Security',
      email: 'sentry@wigglytuffguild.pmd',
      phone: randomNumber(),
      icon: '../src/images/dugtrio-icon.png',
    },
  ];

  people.forEach((person) => {
    const personDiv = document.createElement('div');
    personDiv.classList.add('person');

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('info');

    const textDiv = document.createElement('div');
    textDiv.classList.add('text');

    const personName = document.createElement('h2');
    personName.textContent = person.name;
    textDiv.appendChild(personName);

    const personRole = document.createElement('p');
    personRole.textContent = person.role;
    textDiv.appendChild(personRole);

    infoDiv.appendChild(textDiv);

    const iconDiv = document.createElement('div');
    iconDiv.classList.add('icon');

    const personIcon = document.createElement('img');
    personIcon.src = person.icon;
    personIcon.alt = `${person.name}'s icon`;
    iconDiv.appendChild(personIcon);

    infoDiv.appendChild(iconDiv);

    personDiv.appendChild(infoDiv);

    const contactList = document.createElement('ul');

    const emailItem = document.createElement('li');
    emailItem.textContent = `Email: ${person.email}`;
    contactList.appendChild(emailItem);

    const phoneItem = document.createElement('li');
    phoneItem.textContent = `Phone: ${person.phone}`;
    contactList.appendChild(phoneItem);

    personDiv.appendChild(contactList);

    contentDiv.appendChild(personDiv);
  });
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
  const contentDiv = document.getElementById("content");

  const homepageDiv = document.createElement("div");
  homepageDiv.classList.add("homepage");

  const headline = document.createElement("h2");
  headline.textContent = "Welcome to The Pokémon Mystery Dungeon Café!";

  const copy = document.createElement("p");
  copy.textContent =
    "Experience the finest dining in the world of PMD! Our café offers a selection of all the delicious food items found by our brave explorers and then prepared by our talented chefs. Come and enjoy a delicious snack to fill your hunger before beginning your next expedition, where ever that might take you!";

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




const contentDiv = document.getElementById("content");

function clearContent() {
  const contentChildren = Array.from(contentDiv.children);
  contentChildren.forEach((child) => {
    if (!child.classList.contains("tabs")) {
      contentDiv.removeChild(child);
    }
  });
}

function createTab(tabName) {
  const tab = document.createElement("div");
  tab.classList.add("tab");
  tab.textContent = tabName;
  return tab;
}

function createTabs() {
  const tabsDiv = document.createElement("div");
  tabsDiv.classList.add("tabs");

  const homeTab = createTab("Home");
  const contactTab = createTab("Contact");
  const menuTab = createTab("Menu");

  homeTab.addEventListener("click", () => {
    clearContent();
    (0,_homepage__WEBPACK_IMPORTED_MODULE_0__.createHomePage)();
  });

  contactTab.addEventListener("click", () => {
    clearContent();
    (0,_contact__WEBPACK_IMPORTED_MODULE_1__.createContactPage)();
  });

  menuTab.addEventListener("click", () => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsWUFBWTtBQUNwQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLHNDQUFzQyxhQUFhO0FBQ25EOztBQUVBO0FBQ0Esc0NBQXNDLGFBQWE7QUFDbkQ7O0FBRUE7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRTZCOzs7Ozs7Ozs7Ozs7Ozs7QUNsRjdCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRTBCOzs7Ozs7Ozs7Ozs7Ozs7QUNuQjFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUM5QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjRDO0FBQ0U7QUFDTjs7QUFFeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHlEQUFjO0FBQ2xCLEdBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUksMkRBQWlCO0FBQ3JCLEdBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUkscURBQWM7QUFDbEIsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSx5REFBYztBQUNoQjs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL3NyYy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gcmFuZG9tTnVtYmVyKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBsZXQgcmFuZG9tTW9iaWxlID0gJzA3JyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKS5zbGljZSgyLCAxMSk7XG4gICAgcmV0dXJuIHJhbmRvbU1vYmlsZTtcbiAgfVxufVxuXG5jb25zdCBjcmVhdGVDb250YWN0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgY29uc3QgcGVvcGxlID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdXaWdnbHl0dWZmJyxcbiAgICAgIHJvbGU6ICdSb2xlOiBHdWlsZCBMZWFkZXInLFxuICAgICAgZW1haWw6ICdndWlsZG1hc3RlckB3aWdnbHl0dWZmZ3VpbGQucG1kJyxcbiAgICAgIHBob25lOiByYW5kb21OdW1iZXIoKSxcbiAgICAgIGljb246ICcuLi9zcmMvaW1hZ2VzL3dpZ2dseXR1ZmYtaWNvbi5wbmcnLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0NoYXRvdCcsXG4gICAgICByb2xlOiAnUm9sZTogR3VpbGQgQXNzaXN0YW50JyxcbiAgICAgIGVtYWlsOiAnZ3VpbGRhc3Npc3RhbnRAd2lnZ2x5dHVmZmd1aWxkLnBtZCcsXG4gICAgICBwaG9uZTogcmFuZG9tTnVtYmVyKCksXG4gICAgICBpY29uOiAnLi4vc3JjL2ltYWdlcy9jaGF0b3QtaWNvbi5wbmcnLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0R1Z3RyaW8nLFxuICAgICAgcm9sZTogJ1JvbGU6IFNlY3VyaXR5JyxcbiAgICAgIGVtYWlsOiAnc2VudHJ5QHdpZ2dseXR1ZmZndWlsZC5wbWQnLFxuICAgICAgcGhvbmU6IHJhbmRvbU51bWJlcigpLFxuICAgICAgaWNvbjogJy4uL3NyYy9pbWFnZXMvZHVndHJpby1pY29uLnBuZycsXG4gICAgfSxcbiAgXTtcblxuICBwZW9wbGUuZm9yRWFjaCgocGVyc29uKSA9PiB7XG4gICAgY29uc3QgcGVyc29uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGVyc29uRGl2LmNsYXNzTGlzdC5hZGQoJ3BlcnNvbicpO1xuXG4gICAgY29uc3QgaW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZm9EaXYuY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xuXG4gICAgY29uc3QgdGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRleHREaXYuY2xhc3NMaXN0LmFkZCgndGV4dCcpO1xuXG4gICAgY29uc3QgcGVyc29uTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgcGVyc29uTmFtZS50ZXh0Q29udGVudCA9IHBlcnNvbi5uYW1lO1xuICAgIHRleHREaXYuYXBwZW5kQ2hpbGQocGVyc29uTmFtZSk7XG5cbiAgICBjb25zdCBwZXJzb25Sb2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBlcnNvblJvbGUudGV4dENvbnRlbnQgPSBwZXJzb24ucm9sZTtcbiAgICB0ZXh0RGl2LmFwcGVuZENoaWxkKHBlcnNvblJvbGUpO1xuXG4gICAgaW5mb0Rpdi5hcHBlbmRDaGlsZCh0ZXh0RGl2KTtcblxuICAgIGNvbnN0IGljb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpY29uRGl2LmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcblxuICAgIGNvbnN0IHBlcnNvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBwZXJzb25JY29uLnNyYyA9IHBlcnNvbi5pY29uO1xuICAgIHBlcnNvbkljb24uYWx0ID0gYCR7cGVyc29uLm5hbWV9J3MgaWNvbmA7XG4gICAgaWNvbkRpdi5hcHBlbmRDaGlsZChwZXJzb25JY29uKTtcblxuICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQoaWNvbkRpdik7XG5cbiAgICBwZXJzb25EaXYuYXBwZW5kQ2hpbGQoaW5mb0Rpdik7XG5cbiAgICBjb25zdCBjb250YWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICBjb25zdCBlbWFpbEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGVtYWlsSXRlbS50ZXh0Q29udGVudCA9IGBFbWFpbDogJHtwZXJzb24uZW1haWx9YDtcbiAgICBjb250YWN0TGlzdC5hcHBlbmRDaGlsZChlbWFpbEl0ZW0pO1xuXG4gICAgY29uc3QgcGhvbmVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBwaG9uZUl0ZW0udGV4dENvbnRlbnQgPSBgUGhvbmU6ICR7cGVyc29uLnBob25lfWA7XG4gICAgY29udGFjdExpc3QuYXBwZW5kQ2hpbGQocGhvbmVJdGVtKTtcblxuICAgIHBlcnNvbkRpdi5hcHBlbmRDaGlsZChjb250YWN0TGlzdCk7XG5cbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHBlcnNvbkRpdik7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlQ29udGFjdFBhZ2UgfTtcbiIsImZ1bmN0aW9uIGNyZWF0ZUhvbWVQYWdlKCkge1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gIGNvbnN0IGhvbWVwYWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG9tZXBhZ2VEaXYuY2xhc3NMaXN0LmFkZChcImhvbWVwYWdlXCIpO1xuXG4gIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBoZWFkbGluZS50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0byBUaGUgUG9rw6ltb24gTXlzdGVyeSBEdW5nZW9uIENhZsOpIVwiO1xuXG4gIGNvbnN0IGNvcHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29weS50ZXh0Q29udGVudCA9XG4gICAgXCJFeHBlcmllbmNlIHRoZSBmaW5lc3QgZGluaW5nIGluIHRoZSB3b3JsZCBvZiBQTUQhIE91ciBjYWbDqSBvZmZlcnMgYSBzZWxlY3Rpb24gb2YgYWxsIHRoZSBkZWxpY2lvdXMgZm9vZCBpdGVtcyBmb3VuZCBieSBvdXIgYnJhdmUgZXhwbG9yZXJzIGFuZCB0aGVuIHByZXBhcmVkIGJ5IG91ciB0YWxlbnRlZCBjaGVmcy4gQ29tZSBhbmQgZW5qb3kgYSBkZWxpY2lvdXMgc25hY2sgdG8gZmlsbCB5b3VyIGh1bmdlciBiZWZvcmUgYmVnaW5uaW5nIHlvdXIgbmV4dCBleHBlZGl0aW9uLCB3aGVyZSBldmVyIHRoYXQgbWlnaHQgdGFrZSB5b3UhXCI7XG5cbiAgaG9tZXBhZ2VEaXYuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuICBob21lcGFnZURpdi5hcHBlbmRDaGlsZChjb3B5KTtcblxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhvbWVwYWdlRGl2KTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlSG9tZVBhZ2UgfTtcbiIsImZ1bmN0aW9uIGNyZWF0ZU1lbnVQYWdlKCkge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBcbiAgICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudURpdi5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG4gIFxuICAgIGNvbnN0IG1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgbWVudVRpdGxlLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICBcbiAgICBjb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIFxuICAgIGNvbnN0IG1lbnVJdGVtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbWVudUl0ZW0xLnRleHRDb250ZW50ID0gJ0l0ZW0gMSc7XG4gIFxuICAgIGNvbnN0IG1lbnVJdGVtMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbWVudUl0ZW0yLnRleHRDb250ZW50ID0gJ0l0ZW0gMic7XG4gIFxuICAgIGNvbnN0IG1lbnVJdGVtMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbWVudUl0ZW0zLnRleHRDb250ZW50ID0gJ0l0ZW0gMyc7XG4gIFxuICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKG1lbnVJdGVtMSk7XG4gICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQobWVudUl0ZW0yKTtcbiAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChtZW51SXRlbTMpO1xuICBcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKG1lbnVUaXRsZSk7XG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChtZW51TGlzdCk7XG4gIFxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWVudURpdik7XG4gIH1cbiAgXG4gIGV4cG9ydCB7Y3JlYXRlTWVudVBhZ2V9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlSG9tZVBhZ2UgfSBmcm9tIFwiLi9ob21lcGFnZVwiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGFjdFBhZ2UgfSBmcm9tIFwiLi9jb250YWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVNZW51UGFnZSB9IGZyb20gXCIuL21lbnVcIjtcblxuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuZnVuY3Rpb24gY2xlYXJDb250ZW50KCkge1xuICBjb25zdCBjb250ZW50Q2hpbGRyZW4gPSBBcnJheS5mcm9tKGNvbnRlbnREaXYuY2hpbGRyZW4pO1xuICBjb250ZW50Q2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICBpZiAoIWNoaWxkLmNsYXNzTGlzdC5jb250YWlucyhcInRhYnNcIikpIHtcbiAgICAgIGNvbnRlbnREaXYucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhYih0YWJOYW1lKSB7XG4gIGNvbnN0IHRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhYi5jbGFzc0xpc3QuYWRkKFwidGFiXCIpO1xuICB0YWIudGV4dENvbnRlbnQgPSB0YWJOYW1lO1xuICByZXR1cm4gdGFiO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYWJzKCkge1xuICBjb25zdCB0YWJzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFic0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFic1wiKTtcblxuICBjb25zdCBob21lVGFiID0gY3JlYXRlVGFiKFwiSG9tZVwiKTtcbiAgY29uc3QgY29udGFjdFRhYiA9IGNyZWF0ZVRhYihcIkNvbnRhY3RcIik7XG4gIGNvbnN0IG1lbnVUYWIgPSBjcmVhdGVUYWIoXCJNZW51XCIpO1xuXG4gIGhvbWVUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhckNvbnRlbnQoKTtcbiAgICBjcmVhdGVIb21lUGFnZSgpO1xuICB9KTtcblxuICBjb250YWN0VGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgY3JlYXRlQ29udGFjdFBhZ2UoKTtcbiAgfSk7XG5cbiAgbWVudVRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNsZWFyQ29udGVudCgpO1xuICAgIGNyZWF0ZU1lbnVQYWdlKCk7XG4gIH0pO1xuXG4gIHRhYnNEaXYuYXBwZW5kQ2hpbGQoaG9tZVRhYik7XG4gIHRhYnNEaXYuYXBwZW5kQ2hpbGQoY29udGFjdFRhYik7XG4gIHRhYnNEaXYuYXBwZW5kQ2hpbGQobWVudVRhYik7XG5cbiAgcmV0dXJuIHRhYnNEaXY7XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVXZWJzaXRlKCkge1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRhYnMoKSk7XG4gIGNyZWF0ZUhvbWVQYWdlKCk7XG59XG5cbmluaXRpYWxpemVXZWJzaXRlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=