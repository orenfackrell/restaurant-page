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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_icons_wigglytuff_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/icons/wigglytuff-icon.png */ "./src/images/icons/wigglytuff-icon.png");
/* harmony import */ var _images_icons_chatot_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/icons/chatot-icon.png */ "./src/images/icons/chatot-icon.png");
/* harmony import */ var _images_icons_dugtrio_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/icons/dugtrio-icon.png */ "./src/images/icons/dugtrio-icon.png");




function randomNumber() {
  const randomMobile = `07${Math.random().toString().slice(2, 11)}`;
  return randomMobile;
}

const createContactPage = () => {
  const contentDiv = document.getElementById('content');

  const people = [
    {
      name: 'Wigglytuff',
      role: 'Role: Guild Leader',
      email: 'guildmaster@wigglytuffguild.pmd',
      phone: randomNumber(),
      icon: _images_icons_wigglytuff_icon_png__WEBPACK_IMPORTED_MODULE_0__,
    },
    {
      name: 'Chatot',
      role: 'Role: Guild Assistant',
      email: 'guildassistant@wigglytuffguild.pmd',
      phone: randomNumber(),
      icon: _images_icons_chatot_icon_png__WEBPACK_IMPORTED_MODULE_1__,
    },
    {
      name: 'Dugtrio',
      role: 'Role: Security',
      email: 'sentry@wigglytuffguild.pmd',
      phone: randomNumber(),
      icon: _images_icons_dugtrio_icon_png__WEBPACK_IMPORTED_MODULE_2__,
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactPage);


/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHomePage() {
  const contentDiv = document.getElementById('content');

  const homepageDiv = document.createElement('div');
  homepageDiv.classList.add('homepage');

  const headline = document.createElement('h2');
  headline.textContent = 'Welcome to The Pokémon Mystery Dungeon Café!';

  const copy = document.createElement('p');
  copy.textContent = 'Experience the finest dining in the world of PMD! Our café offers a selection of all the delicious food items found by our brave explorers and then prepared by our talented chefs. Come and enjoy a delicious snack to fill your hunger before beginning your next expedition, where ever that might take you!';

  homepageDiv.appendChild(headline);
  homepageDiv.appendChild(copy);

  contentDiv.appendChild(homepageDiv);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomePage);


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
/* harmony import */ var _images_foods_tiny_apple_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/foods/tiny-apple.png */ "./src/images/foods/tiny-apple.png");
/* harmony import */ var _images_foods_apple_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/foods/apple.png */ "./src/images/foods/apple.png");
/* harmony import */ var _images_foods_big_apple_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/foods/big-apple.png */ "./src/images/foods/big-apple.png");
/* harmony import */ var _images_foods_perfect_apple_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/foods/perfect-apple.png */ "./src/images/foods/perfect-apple.png");
/* harmony import */ var _images_foods_golden_apple_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/foods/golden-apple.png */ "./src/images/foods/golden-apple.png");
/* harmony import */ var _images_foods_chestnut_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/foods/chestnut.png */ "./src/images/foods/chestnut.png");
/* harmony import */ var _images_foods_mega_donut_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/foods/mega-donut.png */ "./src/images/foods/mega-donut.png");
/* harmony import */ var _images_foods_grimy_food_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/foods/grimy-food.png */ "./src/images/foods/grimy-food.png");
/* harmony import */ var _images_foods_four_leaf_cookie_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/foods/four-leaf-cookie.png */ "./src/images/foods/four-leaf-cookie.png");
/* harmony import */ var _images_foods_sweet_chocolate_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/foods/sweet-chocolate.png */ "./src/images/foods/sweet-chocolate.png");











function createMenuPage() {
  const contentDiv = document.getElementById('content');

  const menuItems = [
    {
      name: 'Tiny Apple',
      cost: '45 Poké',
      effect: 'Restores 20 Belly. If eaten while full, maximum Belly goes up by 5.',
      image: _images_foods_tiny_apple_png__WEBPACK_IMPORTED_MODULE_0__,
    },
    {
      name: 'Apple',
      cost: '100 Poké',
      effect: 'Restores 50 Belly. If eaten while full, maximum Belly goes up by 5',
      image: _images_foods_apple_png__WEBPACK_IMPORTED_MODULE_1__,
    },
    {
      name: 'Big Apple',
      cost: '200 Poké',
      effect: 'Restores 100 Belly. If eaten while full, maximum Belly goes up by 10',
      image: _images_foods_big_apple_png__WEBPACK_IMPORTED_MODULE_2__,
    },
    {
      name: 'Perfect Apple',
      cost: '1000 Poké',
      effect: 'Fully restores the Belly and increases maximum Belly by 50.',
      image: _images_foods_perfect_apple_png__WEBPACK_IMPORTED_MODULE_3__,
    },
    {
      name: 'Golden Apple',
      cost: '1600 Poké',
      effect: 'Fully restores the Belly and increases maximum Belly by 50.',
      image: _images_foods_golden_apple_png__WEBPACK_IMPORTED_MODULE_4__,
    },
    {
      name: 'Chestnut',
      cost: '1000 Poké',
      effect: 'Restores 50 Belly. If eaten while full, maximum Belly goes up by 5.',
      image: _images_foods_chestnut_png__WEBPACK_IMPORTED_MODULE_5__,
    },
    {
      name: 'Mega Donut',
      cost: '3000 Poké',
      effect: "A food item that raises a Pokémon's experience points by 5000 and randomly and permanently raises one or more of a Pokémon's stats.",
      image: _images_foods_mega_donut_png__WEBPACK_IMPORTED_MODULE_6__,
    },
    {
      name: 'Grimy Food',
      cost: '6 Poké',
      effect: 'A food item that restores 30 Belly, also inflicts Leg Hold, poison, paralysis, or burn.',
      image: _images_foods_grimy_food_png__WEBPACK_IMPORTED_MODULE_7__,
    },
    {
      name: 'Four-Leaf Cookie',
      cost: '3000 Poké',
      effect: "A food item that randomly and permanently raises one or more of a Pokémon's stats.",
      image: _images_foods_four_leaf_cookie_png__WEBPACK_IMPORTED_MODULE_8__,
    },
    {
      name: 'Sweet Chocolate',
      cost: '3000 Poké',
      effect: "A food item that randomly and permanently raises one or more of a Pokémon's stats.",
      image: _images_foods_sweet_chocolate_png__WEBPACK_IMPORTED_MODULE_9__,
    },
  ];

  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');

  menuItems.forEach((item) => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('info');

    const textDiv = document.createElement('div');
    textDiv.classList.add('text');

    const itemName = document.createElement('h2');
    itemName.textContent = item.name;
    textDiv.appendChild(itemName);

    const itemCost = document.createElement('p');
    itemCost.textContent = item.cost;
    textDiv.appendChild(itemCost);

    infoDiv.appendChild(textDiv);

    const iconDiv = document.createElement('div');
    iconDiv.classList.add('icon');

    const itemImage = document.createElement('img');
    itemImage.src = item.image;
    itemImage.alt = `${item.name}'s image`;
    iconDiv.appendChild(itemImage);

    infoDiv.appendChild(iconDiv);

    itemDiv.appendChild(infoDiv);

    const effectDiv = document.createElement('p');
    effectDiv.textContent = item.effect;
    itemDiv.appendChild(effectDiv);

    menuContainer.appendChild(itemDiv);
  });
  contentDiv.appendChild(menuContainer);
}




/***/ }),

/***/ "./src/images/foods/apple.png":
/*!************************************!*\
  !*** ./src/images/foods/apple.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6af549e2a0cac8d9a311.png";

/***/ }),

/***/ "./src/images/foods/big-apple.png":
/*!****************************************!*\
  !*** ./src/images/foods/big-apple.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8455119df73988f32291.png";

/***/ }),

/***/ "./src/images/foods/chestnut.png":
/*!***************************************!*\
  !*** ./src/images/foods/chestnut.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b3830c97a5a323cef99f.png";

/***/ }),

/***/ "./src/images/foods/four-leaf-cookie.png":
/*!***********************************************!*\
  !*** ./src/images/foods/four-leaf-cookie.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "255c003a63a6487ef386.png";

/***/ }),

/***/ "./src/images/foods/golden-apple.png":
/*!*******************************************!*\
  !*** ./src/images/foods/golden-apple.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fa4c1da87d5dfa6be60d.png";

/***/ }),

/***/ "./src/images/foods/grimy-food.png":
/*!*****************************************!*\
  !*** ./src/images/foods/grimy-food.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "840e274d2d81a3b6c50e.png";

/***/ }),

/***/ "./src/images/foods/mega-donut.png":
/*!*****************************************!*\
  !*** ./src/images/foods/mega-donut.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c056a5777f2c4fcb33ea.png";

/***/ }),

/***/ "./src/images/foods/perfect-apple.png":
/*!********************************************!*\
  !*** ./src/images/foods/perfect-apple.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "abea133549373ae11339.png";

/***/ }),

/***/ "./src/images/foods/sweet-chocolate.png":
/*!**********************************************!*\
  !*** ./src/images/foods/sweet-chocolate.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f2e09c3dc6e364b84cc0.png";

/***/ }),

/***/ "./src/images/foods/tiny-apple.png":
/*!*****************************************!*\
  !*** ./src/images/foods/tiny-apple.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "32905ceaccfa20b6889c.png";

/***/ }),

/***/ "./src/images/icons/chatot-icon.png":
/*!******************************************!*\
  !*** ./src/images/icons/chatot-icon.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2a041b96e3e1eb971ac7.png";

/***/ }),

/***/ "./src/images/icons/dugtrio-icon.png":
/*!*******************************************!*\
  !*** ./src/images/icons/dugtrio-icon.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c28e4d358c608b59ac64.png";

/***/ }),

/***/ "./src/images/icons/wigglytuff-icon.png":
/*!**********************************************!*\
  !*** ./src/images/icons/wigglytuff-icon.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dd08e66a8068d6795806.png";

/***/ }),

/***/ "./src/images/pmd-cake.jpg":
/*!*********************************!*\
  !*** ./src/images/pmd-cake.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d2f7c14aea82c21bc9e3.jpg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _images_pmd_cake_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/pmd-cake.jpg */ "./src/images/pmd-cake.jpg");





const contentDiv = document.getElementById('content');

function clearContent() {
  const contentChildren = Array.from(contentDiv.children);
  contentChildren.forEach((child) => {
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
    (0,_homepage__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });

  contactTab.addEventListener('click', () => {
    clearContent();
    (0,_contact__WEBPACK_IMPORTED_MODULE_1__["default"])();
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
  document.documentElement.style.backgroundImage = `url(${_images_pmd_cake_jpg__WEBPACK_IMPORTED_MODULE_3__})`;
  document.documentElement.style.backgroundRepeat = 'no-repeat';
  document.documentElement.style.backgroundSize = 'cover';
  document.documentElement.style.backgroundPosition = 'bottom';
  (0,_homepage__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

initializeWebsite();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEJ3QztBQUNFO0FBQ0Y7QUFDWTs7QUFFcEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHFEQUFjO0FBQ2xCLEdBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUksb0RBQWlCO0FBQ3JCLEdBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUkscURBQWM7QUFDbEIsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMERBQTBELGlEQUFlLENBQUM7QUFDMUU7QUFDQTtBQUNBO0FBQ0EsRUFBRSxxREFBYztBQUNoQjs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL3NyYy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3aWdnbHl0dWZmSWNvbiBmcm9tICcuL2ltYWdlcy9pY29ucy93aWdnbHl0dWZmLWljb24ucG5nJztcbmltcG9ydCBjaGF0b3RJY29uIGZyb20gJy4vaW1hZ2VzL2ljb25zL2NoYXRvdC1pY29uLnBuZyc7XG5pbXBvcnQgZHVndHJpb0ljb24gZnJvbSAnLi9pbWFnZXMvaWNvbnMvZHVndHJpby1pY29uLnBuZyc7XG5cbmZ1bmN0aW9uIHJhbmRvbU51bWJlcigpIHtcbiAgY29uc3QgcmFuZG9tTW9iaWxlID0gYDA3JHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCkuc2xpY2UoMiwgMTEpfWA7XG4gIHJldHVybiByYW5kb21Nb2JpbGU7XG59XG5cbmNvbnN0IGNyZWF0ZUNvbnRhY3RQYWdlID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICBjb25zdCBwZW9wbGUgPSBbXG4gICAge1xuICAgICAgbmFtZTogJ1dpZ2dseXR1ZmYnLFxuICAgICAgcm9sZTogJ1JvbGU6IEd1aWxkIExlYWRlcicsXG4gICAgICBlbWFpbDogJ2d1aWxkbWFzdGVyQHdpZ2dseXR1ZmZndWlsZC5wbWQnLFxuICAgICAgcGhvbmU6IHJhbmRvbU51bWJlcigpLFxuICAgICAgaWNvbjogd2lnZ2x5dHVmZkljb24sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQ2hhdG90JyxcbiAgICAgIHJvbGU6ICdSb2xlOiBHdWlsZCBBc3Npc3RhbnQnLFxuICAgICAgZW1haWw6ICdndWlsZGFzc2lzdGFudEB3aWdnbHl0dWZmZ3VpbGQucG1kJyxcbiAgICAgIHBob25lOiByYW5kb21OdW1iZXIoKSxcbiAgICAgIGljb246IGNoYXRvdEljb24sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnRHVndHJpbycsXG4gICAgICByb2xlOiAnUm9sZTogU2VjdXJpdHknLFxuICAgICAgZW1haWw6ICdzZW50cnlAd2lnZ2x5dHVmZmd1aWxkLnBtZCcsXG4gICAgICBwaG9uZTogcmFuZG9tTnVtYmVyKCksXG4gICAgICBpY29uOiBkdWd0cmlvSWNvbixcbiAgICB9LFxuICBdO1xuXG4gIHBlb3BsZS5mb3JFYWNoKChwZXJzb24pID0+IHtcbiAgICBjb25zdCBwZXJzb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwZXJzb25EaXYuY2xhc3NMaXN0LmFkZCgncGVyc29uJyk7XG5cbiAgICBjb25zdCBpbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mb0Rpdi5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XG5cbiAgICBjb25zdCB0ZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGV4dERpdi5jbGFzc0xpc3QuYWRkKCd0ZXh0Jyk7XG5cbiAgICBjb25zdCBwZXJzb25OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBwZXJzb25OYW1lLnRleHRDb250ZW50ID0gcGVyc29uLm5hbWU7XG4gICAgdGV4dERpdi5hcHBlbmRDaGlsZChwZXJzb25OYW1lKTtcblxuICAgIGNvbnN0IHBlcnNvblJvbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGVyc29uUm9sZS50ZXh0Q29udGVudCA9IHBlcnNvbi5yb2xlO1xuICAgIHRleHREaXYuYXBwZW5kQ2hpbGQocGVyc29uUm9sZSk7XG5cbiAgICBpbmZvRGl2LmFwcGVuZENoaWxkKHRleHREaXYpO1xuXG4gICAgY29uc3QgaWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGljb25EaXYuY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuXG4gICAgY29uc3QgcGVyc29uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHBlcnNvbkljb24uc3JjID0gcGVyc29uLmljb247XG4gICAgcGVyc29uSWNvbi5hbHQgPSBgJHtwZXJzb24ubmFtZX0ncyBpY29uYDtcbiAgICBpY29uRGl2LmFwcGVuZENoaWxkKHBlcnNvbkljb24pO1xuXG4gICAgaW5mb0Rpdi5hcHBlbmRDaGlsZChpY29uRGl2KTtcblxuICAgIHBlcnNvbkRpdi5hcHBlbmRDaGlsZChpbmZvRGl2KTtcblxuICAgIGNvbnN0IGNvbnRhY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgIGNvbnN0IGVtYWlsSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgZW1haWxJdGVtLnRleHRDb250ZW50ID0gYEVtYWlsOiAke3BlcnNvbi5lbWFpbH1gO1xuICAgIGNvbnRhY3RMaXN0LmFwcGVuZENoaWxkKGVtYWlsSXRlbSk7XG5cbiAgICBjb25zdCBwaG9uZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIHBob25lSXRlbS50ZXh0Q29udGVudCA9IGBQaG9uZTogJHtwZXJzb24ucGhvbmV9YDtcbiAgICBjb250YWN0TGlzdC5hcHBlbmRDaGlsZChwaG9uZUl0ZW0pO1xuXG4gICAgcGVyc29uRGl2LmFwcGVuZENoaWxkKGNvbnRhY3RMaXN0KTtcblxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocGVyc29uRGl2KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250YWN0UGFnZTtcbiIsImZ1bmN0aW9uIGNyZWF0ZUhvbWVQYWdlKCkge1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICBjb25zdCBob21lcGFnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBob21lcGFnZURpdi5jbGFzc0xpc3QuYWRkKCdob21lcGFnZScpO1xuXG4gIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaGVhZGxpbmUudGV4dENvbnRlbnQgPSAnV2VsY29tZSB0byBUaGUgUG9rw6ltb24gTXlzdGVyeSBEdW5nZW9uIENhZsOpISc7XG5cbiAgY29uc3QgY29weSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29weS50ZXh0Q29udGVudCA9ICdFeHBlcmllbmNlIHRoZSBmaW5lc3QgZGluaW5nIGluIHRoZSB3b3JsZCBvZiBQTUQhIE91ciBjYWbDqSBvZmZlcnMgYSBzZWxlY3Rpb24gb2YgYWxsIHRoZSBkZWxpY2lvdXMgZm9vZCBpdGVtcyBmb3VuZCBieSBvdXIgYnJhdmUgZXhwbG9yZXJzIGFuZCB0aGVuIHByZXBhcmVkIGJ5IG91ciB0YWxlbnRlZCBjaGVmcy4gQ29tZSBhbmQgZW5qb3kgYSBkZWxpY2lvdXMgc25hY2sgdG8gZmlsbCB5b3VyIGh1bmdlciBiZWZvcmUgYmVnaW5uaW5nIHlvdXIgbmV4dCBleHBlZGl0aW9uLCB3aGVyZSBldmVyIHRoYXQgbWlnaHQgdGFrZSB5b3UhJztcblxuICBob21lcGFnZURpdi5hcHBlbmRDaGlsZChoZWFkbGluZSk7XG4gIGhvbWVwYWdlRGl2LmFwcGVuZENoaWxkKGNvcHkpO1xuXG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaG9tZXBhZ2VEaXYpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb21lUGFnZTtcbiIsImltcG9ydCB0aW55QXBwbGUgZnJvbSAnLi9pbWFnZXMvZm9vZHMvdGlueS1hcHBsZS5wbmcnO1xuaW1wb3J0IGFwcGxlIGZyb20gJy4vaW1hZ2VzL2Zvb2RzL2FwcGxlLnBuZyc7XG5pbXBvcnQgYmlnQXBwbGUgZnJvbSAnLi9pbWFnZXMvZm9vZHMvYmlnLWFwcGxlLnBuZyc7XG5pbXBvcnQgcGVyZmVjdEFwcGxlIGZyb20gJy4vaW1hZ2VzL2Zvb2RzL3BlcmZlY3QtYXBwbGUucG5nJztcbmltcG9ydCBnb2xkZW5BcHBsZSBmcm9tICcuL2ltYWdlcy9mb29kcy9nb2xkZW4tYXBwbGUucG5nJztcbmltcG9ydCBjaGVzdG51dCBmcm9tICcuL2ltYWdlcy9mb29kcy9jaGVzdG51dC5wbmcnO1xuaW1wb3J0IG1lZ2FEb251dCBmcm9tICcuL2ltYWdlcy9mb29kcy9tZWdhLWRvbnV0LnBuZyc7XG5pbXBvcnQgZ3JpbXlGb29kIGZyb20gJy4vaW1hZ2VzL2Zvb2RzL2dyaW15LWZvb2QucG5nJztcbmltcG9ydCBmb3VyTGVhZkNvb2tpZSBmcm9tICcuL2ltYWdlcy9mb29kcy9mb3VyLWxlYWYtY29va2llLnBuZyc7XG5pbXBvcnQgc3dlZXRDaG9jb2xhdGUgZnJvbSAnLi9pbWFnZXMvZm9vZHMvc3dlZXQtY2hvY29sYXRlLnBuZyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVQYWdlKCkge1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICBjb25zdCBtZW51SXRlbXMgPSBbXG4gICAge1xuICAgICAgbmFtZTogJ1RpbnkgQXBwbGUnLFxuICAgICAgY29zdDogJzQ1IFBva8OpJyxcbiAgICAgIGVmZmVjdDogJ1Jlc3RvcmVzIDIwIEJlbGx5LiBJZiBlYXRlbiB3aGlsZSBmdWxsLCBtYXhpbXVtIEJlbGx5IGdvZXMgdXAgYnkgNS4nLFxuICAgICAgaW1hZ2U6IHRpbnlBcHBsZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdBcHBsZScsXG4gICAgICBjb3N0OiAnMTAwIFBva8OpJyxcbiAgICAgIGVmZmVjdDogJ1Jlc3RvcmVzIDUwIEJlbGx5LiBJZiBlYXRlbiB3aGlsZSBmdWxsLCBtYXhpbXVtIEJlbGx5IGdvZXMgdXAgYnkgNScsXG4gICAgICBpbWFnZTogYXBwbGUsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQmlnIEFwcGxlJyxcbiAgICAgIGNvc3Q6ICcyMDAgUG9rw6knLFxuICAgICAgZWZmZWN0OiAnUmVzdG9yZXMgMTAwIEJlbGx5LiBJZiBlYXRlbiB3aGlsZSBmdWxsLCBtYXhpbXVtIEJlbGx5IGdvZXMgdXAgYnkgMTAnLFxuICAgICAgaW1hZ2U6IGJpZ0FwcGxlLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1BlcmZlY3QgQXBwbGUnLFxuICAgICAgY29zdDogJzEwMDAgUG9rw6knLFxuICAgICAgZWZmZWN0OiAnRnVsbHkgcmVzdG9yZXMgdGhlIEJlbGx5IGFuZCBpbmNyZWFzZXMgbWF4aW11bSBCZWxseSBieSA1MC4nLFxuICAgICAgaW1hZ2U6IHBlcmZlY3RBcHBsZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdHb2xkZW4gQXBwbGUnLFxuICAgICAgY29zdDogJzE2MDAgUG9rw6knLFxuICAgICAgZWZmZWN0OiAnRnVsbHkgcmVzdG9yZXMgdGhlIEJlbGx5IGFuZCBpbmNyZWFzZXMgbWF4aW11bSBCZWxseSBieSA1MC4nLFxuICAgICAgaW1hZ2U6IGdvbGRlbkFwcGxlLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0NoZXN0bnV0JyxcbiAgICAgIGNvc3Q6ICcxMDAwIFBva8OpJyxcbiAgICAgIGVmZmVjdDogJ1Jlc3RvcmVzIDUwIEJlbGx5LiBJZiBlYXRlbiB3aGlsZSBmdWxsLCBtYXhpbXVtIEJlbGx5IGdvZXMgdXAgYnkgNS4nLFxuICAgICAgaW1hZ2U6IGNoZXN0bnV0LFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ01lZ2EgRG9udXQnLFxuICAgICAgY29zdDogJzMwMDAgUG9rw6knLFxuICAgICAgZWZmZWN0OiBcIkEgZm9vZCBpdGVtIHRoYXQgcmFpc2VzIGEgUG9rw6ltb24ncyBleHBlcmllbmNlIHBvaW50cyBieSA1MDAwIGFuZCByYW5kb21seSBhbmQgcGVybWFuZW50bHkgcmFpc2VzIG9uZSBvciBtb3JlIG9mIGEgUG9rw6ltb24ncyBzdGF0cy5cIixcbiAgICAgIGltYWdlOiBtZWdhRG9udXQsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnR3JpbXkgRm9vZCcsXG4gICAgICBjb3N0OiAnNiBQb2vDqScsXG4gICAgICBlZmZlY3Q6ICdBIGZvb2QgaXRlbSB0aGF0IHJlc3RvcmVzIDMwIEJlbGx5LCBhbHNvIGluZmxpY3RzIExlZyBIb2xkLCBwb2lzb24sIHBhcmFseXNpcywgb3IgYnVybi4nLFxuICAgICAgaW1hZ2U6IGdyaW15Rm9vZCxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdGb3VyLUxlYWYgQ29va2llJyxcbiAgICAgIGNvc3Q6ICczMDAwIFBva8OpJyxcbiAgICAgIGVmZmVjdDogXCJBIGZvb2QgaXRlbSB0aGF0IHJhbmRvbWx5IGFuZCBwZXJtYW5lbnRseSByYWlzZXMgb25lIG9yIG1vcmUgb2YgYSBQb2vDqW1vbidzIHN0YXRzLlwiLFxuICAgICAgaW1hZ2U6IGZvdXJMZWFmQ29va2llLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1N3ZWV0IENob2NvbGF0ZScsXG4gICAgICBjb3N0OiAnMzAwMCBQb2vDqScsXG4gICAgICBlZmZlY3Q6IFwiQSBmb29kIGl0ZW0gdGhhdCByYW5kb21seSBhbmQgcGVybWFuZW50bHkgcmFpc2VzIG9uZSBvciBtb3JlIG9mIGEgUG9rw6ltb24ncyBzdGF0cy5cIixcbiAgICAgIGltYWdlOiBzd2VldENob2NvbGF0ZSxcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRhaW5lcicpO1xuXG4gIG1lbnVJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgaXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1EaXYuY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuXG4gICAgY29uc3QgaW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZm9EaXYuY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xuXG4gICAgY29uc3QgdGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRleHREaXYuY2xhc3NMaXN0LmFkZCgndGV4dCcpO1xuXG4gICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xuICAgIHRleHREaXYuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuXG4gICAgY29uc3QgaXRlbUNvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaXRlbUNvc3QudGV4dENvbnRlbnQgPSBpdGVtLmNvc3Q7XG4gICAgdGV4dERpdi5hcHBlbmRDaGlsZChpdGVtQ29zdCk7XG5cbiAgICBpbmZvRGl2LmFwcGVuZENoaWxkKHRleHREaXYpO1xuXG4gICAgY29uc3QgaWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGljb25EaXYuY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuXG4gICAgY29uc3QgaXRlbUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaXRlbUltYWdlLnNyYyA9IGl0ZW0uaW1hZ2U7XG4gICAgaXRlbUltYWdlLmFsdCA9IGAke2l0ZW0ubmFtZX0ncyBpbWFnZWA7XG4gICAgaWNvbkRpdi5hcHBlbmRDaGlsZChpdGVtSW1hZ2UpO1xuXG4gICAgaW5mb0Rpdi5hcHBlbmRDaGlsZChpY29uRGl2KTtcblxuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoaW5mb0Rpdik7XG5cbiAgICBjb25zdCBlZmZlY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZWZmZWN0RGl2LnRleHRDb250ZW50ID0gaXRlbS5lZmZlY3Q7XG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZChlZmZlY3REaXYpO1xuXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRGl2KTtcbiAgfSk7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZU1lbnVQYWdlIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGNyZWF0ZUhvbWVQYWdlIGZyb20gJy4vaG9tZXBhZ2UnO1xuaW1wb3J0IGNyZWF0ZUNvbnRhY3RQYWdlIGZyb20gJy4vY29udGFjdCc7XG5pbXBvcnQgeyBjcmVhdGVNZW51UGFnZSB9IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgYmFja2dyb3VuZEltYWdlIGZyb20gJy4vaW1hZ2VzL3BtZC1jYWtlLmpwZyc7XG5cbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5mdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XG4gIGNvbnN0IGNvbnRlbnRDaGlsZHJlbiA9IEFycmF5LmZyb20oY29udGVudERpdi5jaGlsZHJlbik7XG4gIGNvbnRlbnRDaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgIGlmICghY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YWJzJykpIHtcbiAgICAgIGNvbnRlbnREaXYucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhYih0YWJOYW1lKSB7XG4gIGNvbnN0IHRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG4gIHRhYi50ZXh0Q29udGVudCA9IHRhYk5hbWU7XG4gIHJldHVybiB0YWI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhYnMoKSB7XG4gIGNvbnN0IHRhYnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFic0Rpdi5jbGFzc0xpc3QuYWRkKCd0YWJzJyk7XG5cbiAgY29uc3QgaG9tZVRhYiA9IGNyZWF0ZVRhYignSG9tZScpO1xuICBjb25zdCBjb250YWN0VGFiID0gY3JlYXRlVGFiKCdDb250YWN0Jyk7XG4gIGNvbnN0IG1lbnVUYWIgPSBjcmVhdGVUYWIoJ01lbnUnKTtcblxuICBob21lVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsZWFyQ29udGVudCgpO1xuICAgIGNyZWF0ZUhvbWVQYWdlKCk7XG4gIH0pO1xuXG4gIGNvbnRhY3RUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgY3JlYXRlQ29udGFjdFBhZ2UoKTtcbiAgfSk7XG5cbiAgbWVudVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhckNvbnRlbnQoKTtcbiAgICBjcmVhdGVNZW51UGFnZSgpO1xuICB9KTtcblxuICB0YWJzRGl2LmFwcGVuZENoaWxkKGhvbWVUYWIpO1xuICB0YWJzRGl2LmFwcGVuZENoaWxkKGNvbnRhY3RUYWIpO1xuICB0YWJzRGl2LmFwcGVuZENoaWxkKG1lbnVUYWIpO1xuXG4gIHJldHVybiB0YWJzRGl2O1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplV2Vic2l0ZSgpIHtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChjcmVhdGVUYWJzKCkpO1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2JhY2tncm91bmRJbWFnZX0pYDtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRSZXBlYXQgPSAnbm8tcmVwZWF0JztcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvdmVyJztcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9ICdib3R0b20nO1xuICBjcmVhdGVIb21lUGFnZSgpO1xufVxuXG5pbml0aWFsaXplV2Vic2l0ZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9