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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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

  const fragment = document.createDocumentFragment();

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

    fragment.appendChild(itemDiv);
  });

  menuContainer.appendChild(fragment);
  contentDiv.appendChild(menuContainer);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuPage);


/***/ }),

/***/ "./src/images/foods/apple.png":
/*!************************************!*\
  !*** ./src/images/foods/apple.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "98078a37adbacbe6a59f.png";

/***/ }),

/***/ "./src/images/foods/big-apple.png":
/*!****************************************!*\
  !*** ./src/images/foods/big-apple.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7ff30803e932abe841dd.png";

/***/ }),

/***/ "./src/images/foods/chestnut.png":
/*!***************************************!*\
  !*** ./src/images/foods/chestnut.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b7936a7be1dc9322b9d6.png";

/***/ }),

/***/ "./src/images/foods/four-leaf-cookie.png":
/*!***********************************************!*\
  !*** ./src/images/foods/four-leaf-cookie.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e9f4eb0cbdfadd44971a.png";

/***/ }),

/***/ "./src/images/foods/golden-apple.png":
/*!*******************************************!*\
  !*** ./src/images/foods/golden-apple.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b13b723676a80b530034.png";

/***/ }),

/***/ "./src/images/foods/grimy-food.png":
/*!*****************************************!*\
  !*** ./src/images/foods/grimy-food.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ed082eb6a97f3a678568.png";

/***/ }),

/***/ "./src/images/foods/mega-donut.png":
/*!*****************************************!*\
  !*** ./src/images/foods/mega-donut.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "46427268ed247ba74706.png";

/***/ }),

/***/ "./src/images/foods/perfect-apple.png":
/*!********************************************!*\
  !*** ./src/images/foods/perfect-apple.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6bba62746ae746c2a728.png";

/***/ }),

/***/ "./src/images/foods/sweet-chocolate.png":
/*!**********************************************!*\
  !*** ./src/images/foods/sweet-chocolate.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b158d7bae4c1c13aabbe.png";

/***/ }),

/***/ "./src/images/foods/tiny-apple.png":
/*!*****************************************!*\
  !*** ./src/images/foods/tiny-apple.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e454a6018b3adf33ba71.png";

/***/ }),

/***/ "./src/images/icons/chatot-icon.png":
/*!******************************************!*\
  !*** ./src/images/icons/chatot-icon.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "465ee90f9aac41d3c52d.png";

/***/ }),

/***/ "./src/images/icons/dugtrio-icon.png":
/*!*******************************************!*\
  !*** ./src/images/icons/dugtrio-icon.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a65e68fcda752f33dc05.png";

/***/ }),

/***/ "./src/images/icons/wigglytuff-icon.png":
/*!**********************************************!*\
  !*** ./src/images/icons/wigglytuff-icon.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9d1d73e7a92ce36434ee.png";

/***/ }),

/***/ "./src/images/pmd-cake.jpg":
/*!*********************************!*\
  !*** ./src/images/pmd-cake.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d0545aec14ee5be904b0.jpg";

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
    (0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEJ3QztBQUNFO0FBQ047QUFDZ0I7O0FBRXBEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxxREFBYztBQUNsQixHQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFJLG9EQUFpQjtBQUNyQixHQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFJLGlEQUFjO0FBQ2xCLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBEQUEwRCxpREFBZSxDQUFDO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLEVBQUUscURBQWM7QUFDaEI7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9zcmMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2lnZ2x5dHVmZkljb24gZnJvbSAnLi9pbWFnZXMvaWNvbnMvd2lnZ2x5dHVmZi1pY29uLnBuZyc7XG5pbXBvcnQgY2hhdG90SWNvbiBmcm9tICcuL2ltYWdlcy9pY29ucy9jaGF0b3QtaWNvbi5wbmcnO1xuaW1wb3J0IGR1Z3RyaW9JY29uIGZyb20gJy4vaW1hZ2VzL2ljb25zL2R1Z3RyaW8taWNvbi5wbmcnO1xuXG5mdW5jdGlvbiByYW5kb21OdW1iZXIoKSB7XG4gIGNvbnN0IHJhbmRvbU1vYmlsZSA9IGAwNyR7TWF0aC5yYW5kb20oKS50b1N0cmluZygpLnNsaWNlKDIsIDExKX1gO1xuICByZXR1cm4gcmFuZG9tTW9iaWxlO1xufVxuXG5jb25zdCBjcmVhdGVDb250YWN0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgY29uc3QgcGVvcGxlID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdXaWdnbHl0dWZmJyxcbiAgICAgIHJvbGU6ICdSb2xlOiBHdWlsZCBMZWFkZXInLFxuICAgICAgZW1haWw6ICdndWlsZG1hc3RlckB3aWdnbHl0dWZmZ3VpbGQucG1kJyxcbiAgICAgIHBob25lOiByYW5kb21OdW1iZXIoKSxcbiAgICAgIGljb246IHdpZ2dseXR1ZmZJY29uLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0NoYXRvdCcsXG4gICAgICByb2xlOiAnUm9sZTogR3VpbGQgQXNzaXN0YW50JyxcbiAgICAgIGVtYWlsOiAnZ3VpbGRhc3Npc3RhbnRAd2lnZ2x5dHVmZmd1aWxkLnBtZCcsXG4gICAgICBwaG9uZTogcmFuZG9tTnVtYmVyKCksXG4gICAgICBpY29uOiBjaGF0b3RJY29uLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0R1Z3RyaW8nLFxuICAgICAgcm9sZTogJ1JvbGU6IFNlY3VyaXR5JyxcbiAgICAgIGVtYWlsOiAnc2VudHJ5QHdpZ2dseXR1ZmZndWlsZC5wbWQnLFxuICAgICAgcGhvbmU6IHJhbmRvbU51bWJlcigpLFxuICAgICAgaWNvbjogZHVndHJpb0ljb24sXG4gICAgfSxcbiAgXTtcblxuICBwZW9wbGUuZm9yRWFjaCgocGVyc29uKSA9PiB7XG4gICAgY29uc3QgcGVyc29uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGVyc29uRGl2LmNsYXNzTGlzdC5hZGQoJ3BlcnNvbicpO1xuXG4gICAgY29uc3QgaW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZm9EaXYuY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xuXG4gICAgY29uc3QgdGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRleHREaXYuY2xhc3NMaXN0LmFkZCgndGV4dCcpO1xuXG4gICAgY29uc3QgcGVyc29uTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgcGVyc29uTmFtZS50ZXh0Q29udGVudCA9IHBlcnNvbi5uYW1lO1xuICAgIHRleHREaXYuYXBwZW5kQ2hpbGQocGVyc29uTmFtZSk7XG5cbiAgICBjb25zdCBwZXJzb25Sb2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBlcnNvblJvbGUudGV4dENvbnRlbnQgPSBwZXJzb24ucm9sZTtcbiAgICB0ZXh0RGl2LmFwcGVuZENoaWxkKHBlcnNvblJvbGUpO1xuXG4gICAgaW5mb0Rpdi5hcHBlbmRDaGlsZCh0ZXh0RGl2KTtcblxuICAgIGNvbnN0IGljb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpY29uRGl2LmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcblxuICAgIGNvbnN0IHBlcnNvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBwZXJzb25JY29uLnNyYyA9IHBlcnNvbi5pY29uO1xuICAgIHBlcnNvbkljb24uYWx0ID0gYCR7cGVyc29uLm5hbWV9J3MgaWNvbmA7XG4gICAgaWNvbkRpdi5hcHBlbmRDaGlsZChwZXJzb25JY29uKTtcblxuICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQoaWNvbkRpdik7XG5cbiAgICBwZXJzb25EaXYuYXBwZW5kQ2hpbGQoaW5mb0Rpdik7XG5cbiAgICBjb25zdCBjb250YWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICBjb25zdCBlbWFpbEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGVtYWlsSXRlbS50ZXh0Q29udGVudCA9IGBFbWFpbDogJHtwZXJzb24uZW1haWx9YDtcbiAgICBjb250YWN0TGlzdC5hcHBlbmRDaGlsZChlbWFpbEl0ZW0pO1xuXG4gICAgY29uc3QgcGhvbmVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBwaG9uZUl0ZW0udGV4dENvbnRlbnQgPSBgUGhvbmU6ICR7cGVyc29uLnBob25lfWA7XG4gICAgY29udGFjdExpc3QuYXBwZW5kQ2hpbGQocGhvbmVJdGVtKTtcblxuICAgIHBlcnNvbkRpdi5hcHBlbmRDaGlsZChjb250YWN0TGlzdCk7XG5cbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHBlcnNvbkRpdik7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFjdFBhZ2U7XG4iLCJmdW5jdGlvbiBjcmVhdGVIb21lUGFnZSgpIHtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgY29uc3QgaG9tZXBhZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaG9tZXBhZ2VEaXYuY2xhc3NMaXN0LmFkZCgnaG9tZXBhZ2UnKTtcblxuICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGhlYWRsaW5lLnRleHRDb250ZW50ID0gJ1dlbGNvbWUgdG8gVGhlIFBva8OpbW9uIE15c3RlcnkgRHVuZ2VvbiBDYWbDqSEnO1xuXG4gIGNvbnN0IGNvcHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvcHkudGV4dENvbnRlbnQgPSAnRXhwZXJpZW5jZSB0aGUgZmluZXN0IGRpbmluZyBpbiB0aGUgd29ybGQgb2YgUE1EISBPdXIgY2Fmw6kgb2ZmZXJzIGEgc2VsZWN0aW9uIG9mIGFsbCB0aGUgZGVsaWNpb3VzIGZvb2QgaXRlbXMgZm91bmQgYnkgb3VyIGJyYXZlIGV4cGxvcmVycyBhbmQgdGhlbiBwcmVwYXJlZCBieSBvdXIgdGFsZW50ZWQgY2hlZnMuIENvbWUgYW5kIGVuam95IGEgZGVsaWNpb3VzIHNuYWNrIHRvIGZpbGwgeW91ciBodW5nZXIgYmVmb3JlIGJlZ2lubmluZyB5b3VyIG5leHQgZXhwZWRpdGlvbiwgd2hlcmUgZXZlciB0aGF0IG1pZ2h0IHRha2UgeW91ISc7XG5cbiAgaG9tZXBhZ2VEaXYuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuICBob21lcGFnZURpdi5hcHBlbmRDaGlsZChjb3B5KTtcblxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhvbWVwYWdlRGl2KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9tZVBhZ2U7XG4iLCJpbXBvcnQgdGlueUFwcGxlIGZyb20gJy4vaW1hZ2VzL2Zvb2RzL3RpbnktYXBwbGUucG5nJztcbmltcG9ydCBhcHBsZSBmcm9tICcuL2ltYWdlcy9mb29kcy9hcHBsZS5wbmcnO1xuaW1wb3J0IGJpZ0FwcGxlIGZyb20gJy4vaW1hZ2VzL2Zvb2RzL2JpZy1hcHBsZS5wbmcnO1xuaW1wb3J0IHBlcmZlY3RBcHBsZSBmcm9tICcuL2ltYWdlcy9mb29kcy9wZXJmZWN0LWFwcGxlLnBuZyc7XG5pbXBvcnQgZ29sZGVuQXBwbGUgZnJvbSAnLi9pbWFnZXMvZm9vZHMvZ29sZGVuLWFwcGxlLnBuZyc7XG5pbXBvcnQgY2hlc3RudXQgZnJvbSAnLi9pbWFnZXMvZm9vZHMvY2hlc3RudXQucG5nJztcbmltcG9ydCBtZWdhRG9udXQgZnJvbSAnLi9pbWFnZXMvZm9vZHMvbWVnYS1kb251dC5wbmcnO1xuaW1wb3J0IGdyaW15Rm9vZCBmcm9tICcuL2ltYWdlcy9mb29kcy9ncmlteS1mb29kLnBuZyc7XG5pbXBvcnQgZm91ckxlYWZDb29raWUgZnJvbSAnLi9pbWFnZXMvZm9vZHMvZm91ci1sZWFmLWNvb2tpZS5wbmcnO1xuaW1wb3J0IHN3ZWV0Q2hvY29sYXRlIGZyb20gJy4vaW1hZ2VzL2Zvb2RzL3N3ZWV0LWNob2NvbGF0ZS5wbmcnO1xuXG5mdW5jdGlvbiBjcmVhdGVNZW51UGFnZSgpIHtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgY29uc3QgbWVudUl0ZW1zID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdUaW55IEFwcGxlJyxcbiAgICAgIGNvc3Q6ICc0NSBQb2vDqScsXG4gICAgICBlZmZlY3Q6ICdSZXN0b3JlcyAyMCBCZWxseS4gSWYgZWF0ZW4gd2hpbGUgZnVsbCwgbWF4aW11bSBCZWxseSBnb2VzIHVwIGJ5IDUuJyxcbiAgICAgIGltYWdlOiB0aW55QXBwbGUsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQXBwbGUnLFxuICAgICAgY29zdDogJzEwMCBQb2vDqScsXG4gICAgICBlZmZlY3Q6ICdSZXN0b3JlcyA1MCBCZWxseS4gSWYgZWF0ZW4gd2hpbGUgZnVsbCwgbWF4aW11bSBCZWxseSBnb2VzIHVwIGJ5IDUnLFxuICAgICAgaW1hZ2U6IGFwcGxlLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0JpZyBBcHBsZScsXG4gICAgICBjb3N0OiAnMjAwIFBva8OpJyxcbiAgICAgIGVmZmVjdDogJ1Jlc3RvcmVzIDEwMCBCZWxseS4gSWYgZWF0ZW4gd2hpbGUgZnVsbCwgbWF4aW11bSBCZWxseSBnb2VzIHVwIGJ5IDEwJyxcbiAgICAgIGltYWdlOiBiaWdBcHBsZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdQZXJmZWN0IEFwcGxlJyxcbiAgICAgIGNvc3Q6ICcxMDAwIFBva8OpJyxcbiAgICAgIGVmZmVjdDogJ0Z1bGx5IHJlc3RvcmVzIHRoZSBCZWxseSBhbmQgaW5jcmVhc2VzIG1heGltdW0gQmVsbHkgYnkgNTAuJyxcbiAgICAgIGltYWdlOiBwZXJmZWN0QXBwbGUsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnR29sZGVuIEFwcGxlJyxcbiAgICAgIGNvc3Q6ICcxNjAwIFBva8OpJyxcbiAgICAgIGVmZmVjdDogJ0Z1bGx5IHJlc3RvcmVzIHRoZSBCZWxseSBhbmQgaW5jcmVhc2VzIG1heGltdW0gQmVsbHkgYnkgNTAuJyxcbiAgICAgIGltYWdlOiBnb2xkZW5BcHBsZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdDaGVzdG51dCcsXG4gICAgICBjb3N0OiAnMTAwMCBQb2vDqScsXG4gICAgICBlZmZlY3Q6ICdSZXN0b3JlcyA1MCBCZWxseS4gSWYgZWF0ZW4gd2hpbGUgZnVsbCwgbWF4aW11bSBCZWxseSBnb2VzIHVwIGJ5IDUuJyxcbiAgICAgIGltYWdlOiBjaGVzdG51dCxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdNZWdhIERvbnV0JyxcbiAgICAgIGNvc3Q6ICczMDAwIFBva8OpJyxcbiAgICAgIGVmZmVjdDogXCJBIGZvb2QgaXRlbSB0aGF0IHJhaXNlcyBhIFBva8OpbW9uJ3MgZXhwZXJpZW5jZSBwb2ludHMgYnkgNTAwMCBhbmQgcmFuZG9tbHkgYW5kIHBlcm1hbmVudGx5IHJhaXNlcyBvbmUgb3IgbW9yZSBvZiBhIFBva8OpbW9uJ3Mgc3RhdHMuXCIsXG4gICAgICBpbWFnZTogbWVnYURvbnV0LFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0dyaW15IEZvb2QnLFxuICAgICAgY29zdDogJzYgUG9rw6knLFxuICAgICAgZWZmZWN0OiAnQSBmb29kIGl0ZW0gdGhhdCByZXN0b3JlcyAzMCBCZWxseSwgYWxzbyBpbmZsaWN0cyBMZWcgSG9sZCwgcG9pc29uLCBwYXJhbHlzaXMsIG9yIGJ1cm4uJyxcbiAgICAgIGltYWdlOiBncmlteUZvb2QsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnRm91ci1MZWFmIENvb2tpZScsXG4gICAgICBjb3N0OiAnMzAwMCBQb2vDqScsXG4gICAgICBlZmZlY3Q6IFwiQSBmb29kIGl0ZW0gdGhhdCByYW5kb21seSBhbmQgcGVybWFuZW50bHkgcmFpc2VzIG9uZSBvciBtb3JlIG9mIGEgUG9rw6ltb24ncyBzdGF0cy5cIixcbiAgICAgIGltYWdlOiBmb3VyTGVhZkNvb2tpZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdTd2VldCBDaG9jb2xhdGUnLFxuICAgICAgY29zdDogJzMwMDAgUG9rw6knLFxuICAgICAgZWZmZWN0OiBcIkEgZm9vZCBpdGVtIHRoYXQgcmFuZG9tbHkgYW5kIHBlcm1hbmVudGx5IHJhaXNlcyBvbmUgb3IgbW9yZSBvZiBhIFBva8OpbW9uJ3Mgc3RhdHMuXCIsXG4gICAgICBpbWFnZTogc3dlZXRDaG9jb2xhdGUsXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1jb250YWluZXInKTtcblxuICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICBtZW51SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtRGl2LmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcblxuICAgIGNvbnN0IGluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvRGl2LmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcblxuICAgIGNvbnN0IHRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZXh0RGl2LmNsYXNzTGlzdC5hZGQoJ3RleHQnKTtcblxuICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcbiAgICB0ZXh0RGl2LmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcblxuICAgIGNvbnN0IGl0ZW1Db3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGl0ZW1Db3N0LnRleHRDb250ZW50ID0gaXRlbS5jb3N0O1xuICAgIHRleHREaXYuYXBwZW5kQ2hpbGQoaXRlbUNvc3QpO1xuXG4gICAgaW5mb0Rpdi5hcHBlbmRDaGlsZCh0ZXh0RGl2KTtcblxuICAgIGNvbnN0IGljb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpY29uRGl2LmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcblxuICAgIGNvbnN0IGl0ZW1JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGl0ZW1JbWFnZS5zcmMgPSBpdGVtLmltYWdlO1xuICAgIGl0ZW1JbWFnZS5hbHQgPSBgJHtpdGVtLm5hbWV9J3MgaW1hZ2VgO1xuICAgIGljb25EaXYuYXBwZW5kQ2hpbGQoaXRlbUltYWdlKTtcblxuICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQoaWNvbkRpdik7XG5cbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGluZm9EaXYpO1xuXG4gICAgY29uc3QgZWZmZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGVmZmVjdERpdi50ZXh0Q29udGVudCA9IGl0ZW0uZWZmZWN0O1xuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoZWZmZWN0RGl2KTtcblxuICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGl0ZW1EaXYpO1xuICB9KTtcblxuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWVudVBhZ2U7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGNyZWF0ZUhvbWVQYWdlIGZyb20gJy4vaG9tZXBhZ2UnO1xuaW1wb3J0IGNyZWF0ZUNvbnRhY3RQYWdlIGZyb20gJy4vY29udGFjdCc7XG5pbXBvcnQgY3JlYXRlTWVudVBhZ2UgZnJvbSAnLi9tZW51JztcbmltcG9ydCBiYWNrZ3JvdW5kSW1hZ2UgZnJvbSAnLi9pbWFnZXMvcG1kLWNha2UuanBnJztcblxuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbmZ1bmN0aW9uIGNsZWFyQ29udGVudCgpIHtcbiAgY29uc3QgY29udGVudENoaWxkcmVuID0gQXJyYXkuZnJvbShjb250ZW50RGl2LmNoaWxkcmVuKTtcbiAgY29udGVudENoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgaWYgKCFjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoJ3RhYnMnKSkge1xuICAgICAgY29udGVudERpdi5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFiKHRhYk5hbWUpIHtcbiAgY29uc3QgdGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhYi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcbiAgdGFiLnRleHRDb250ZW50ID0gdGFiTmFtZTtcbiAgcmV0dXJuIHRhYjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFicygpIHtcbiAgY29uc3QgdGFic0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YWJzRGl2LmNsYXNzTGlzdC5hZGQoJ3RhYnMnKTtcblxuICBjb25zdCBob21lVGFiID0gY3JlYXRlVGFiKCdIb21lJyk7XG4gIGNvbnN0IGNvbnRhY3RUYWIgPSBjcmVhdGVUYWIoJ0NvbnRhY3QnKTtcbiAgY29uc3QgbWVudVRhYiA9IGNyZWF0ZVRhYignTWVudScpO1xuXG4gIGhvbWVUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgY3JlYXRlSG9tZVBhZ2UoKTtcbiAgfSk7XG5cbiAgY29udGFjdFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhckNvbnRlbnQoKTtcbiAgICBjcmVhdGVDb250YWN0UGFnZSgpO1xuICB9KTtcblxuICBtZW51VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsZWFyQ29udGVudCgpO1xuICAgIGNyZWF0ZU1lbnVQYWdlKCk7XG4gIH0pO1xuXG4gIHRhYnNEaXYuYXBwZW5kQ2hpbGQoaG9tZVRhYik7XG4gIHRhYnNEaXYuYXBwZW5kQ2hpbGQoY29udGFjdFRhYik7XG4gIHRhYnNEaXYuYXBwZW5kQ2hpbGQobWVudVRhYik7XG5cbiAgcmV0dXJuIHRhYnNEaXY7XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVXZWJzaXRlKCkge1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRhYnMoKSk7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7YmFja2dyb3VuZEltYWdlfSlgO1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFJlcGVhdCA9ICduby1yZXBlYXQnO1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY292ZXInO1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gJ2JvdHRvbSc7XG4gIGNyZWF0ZUhvbWVQYWdlKCk7XG59XG5cbmluaXRpYWxpemVXZWJzaXRlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=