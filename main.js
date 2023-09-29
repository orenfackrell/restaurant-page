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
/* harmony import */ var _images_icons_wigglytuff_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/icons/wigglytuff-icon.png */ "./src/images/icons/wigglytuff-icon.png");
/* harmony import */ var _images_icons_chatot_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/icons/chatot-icon.png */ "./src/images/icons/chatot-icon.png");
/* harmony import */ var _images_icons_dugtrio_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/icons/dugtrio-icon.png */ "./src/images/icons/dugtrio-icon.png");




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
      icon: '../src/images/icons/wigglytuff-icon.png',
    },
    {
      name: 'Chatot',
      role: 'Role: Guild Assistant',
      email: 'guildassistant@wigglytuffguild.pmd',
      phone: randomNumber(),
      icon: '../src/images/icons/chatot-icon.png',
    },
    {
      name: 'Dugtrio',
      role: 'Role: Security',
      email: 'sentry@wigglytuffguild.pmd',
      phone: randomNumber(),
      icon: '../src/images/icons/dugtrio-icon.png',
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
      effect:
        'Restores 20 Belly. If eaten while full, maximum Belly goes up by 5.',
      image: _images_foods_tiny_apple_png__WEBPACK_IMPORTED_MODULE_0__,
    },
    {
      name: 'Apple',
      cost: '100 Poké',
      effect:
        'Restores 50 Belly. If eaten while full, maximum Belly goes up by 5',
      image: _images_foods_apple_png__WEBPACK_IMPORTED_MODULE_1__,
    },
    {
      name: 'Big Apple',
      cost: '200 Poké',
      effect:
        'Restores 100 Belly. If eaten while full, maximum Belly goes up by 10',
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
      effect:
        'Restores 50 Belly. If eaten while full, maximum Belly goes up by 5.',
      image: _images_foods_chestnut_png__WEBPACK_IMPORTED_MODULE_5__,
    },
    {
      name: 'Mega Donut',
      cost: '3000 Poké',
      effect:
        "A food item that raises a Pokémon's experience points by 5000 and randomly and permanently raises one or more of a Pokémon's stats.",
      image: _images_foods_mega_donut_png__WEBPACK_IMPORTED_MODULE_6__,
    },
    {
      name: 'Grimy Food',
      cost: '6 Poké',
      effect:
        'A food item that restores 30 Belly, also inflicts Leg Hold, poison, paralysis, or burn.',
      image: _images_foods_grimy_food_png__WEBPACK_IMPORTED_MODULE_7__,
    },
    {
      name: 'Four-Leaf Cookie',
      cost: '3000 Poké',
      effect:
        "A food item that randomly and permanently raises one or more of a Pokémon's stats.",
      image: _images_foods_four_leaf_cookie_png__WEBPACK_IMPORTED_MODULE_8__,
    },
    {
      name: 'Sweet Chocolate',
      cost: '3000 Poké',
      effect:
        "A food item that randomly and permanently raises one or more of a Pokémon's stats.",
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
/* harmony import */ var _src_images_pmd_cake_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/images/pmd-cake.jpg */ "./src/images/pmd-cake.jpg");





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
  document.documentElement.style.backgroundImage = `url(${_src_images_pmd_cake_jpg__WEBPACK_IMPORTED_MODULE_3__})`;
  document.documentElement.style.backgroundRepeat = 'no-repeat';
  document.documentElement.style.backgroundSize = 'cover';
  document.documentElement.style.backgroundPosition = 'bottom';
  (0,_homepage__WEBPACK_IMPORTED_MODULE_0__.createHomePage)();
}

initializeWebsite();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEI0QztBQUNFO0FBQ047QUFDaUI7O0FBRXpEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSx5REFBYztBQUNsQixHQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFJLDJEQUFpQjtBQUNyQixHQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFJLHFEQUFjO0FBQ2xCLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBEQUEwRCxxREFBZSxDQUFDO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLEVBQUUseURBQWM7QUFDaEI7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9zcmMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2lnZ2x5dHVmZkljb24gZnJvbSAnLi9pbWFnZXMvaWNvbnMvd2lnZ2x5dHVmZi1pY29uLnBuZyc7XG5pbXBvcnQgY2hhdG90SWNvbiBmcm9tICcuL2ltYWdlcy9pY29ucy9jaGF0b3QtaWNvbi5wbmcnO1xuaW1wb3J0IGR1Z3RyaW9JY29uIGZyb20gJy4vaW1hZ2VzL2ljb25zL2R1Z3RyaW8taWNvbi5wbmcnO1xuXG5mdW5jdGlvbiByYW5kb21OdW1iZXIoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGxldCByYW5kb21Nb2JpbGUgPSAnMDcnICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygpLnNsaWNlKDIsIDExKTtcbiAgICByZXR1cm4gcmFuZG9tTW9iaWxlO1xuICB9XG59XG5cbmNvbnN0IGNyZWF0ZUNvbnRhY3RQYWdlID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICBjb25zdCBwZW9wbGUgPSBbXG4gICAge1xuICAgICAgbmFtZTogJ1dpZ2dseXR1ZmYnLFxuICAgICAgcm9sZTogJ1JvbGU6IEd1aWxkIExlYWRlcicsXG4gICAgICBlbWFpbDogJ2d1aWxkbWFzdGVyQHdpZ2dseXR1ZmZndWlsZC5wbWQnLFxuICAgICAgcGhvbmU6IHJhbmRvbU51bWJlcigpLFxuICAgICAgaWNvbjogJy4uL3NyYy9pbWFnZXMvaWNvbnMvd2lnZ2x5dHVmZi1pY29uLnBuZycsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQ2hhdG90JyxcbiAgICAgIHJvbGU6ICdSb2xlOiBHdWlsZCBBc3Npc3RhbnQnLFxuICAgICAgZW1haWw6ICdndWlsZGFzc2lzdGFudEB3aWdnbHl0dWZmZ3VpbGQucG1kJyxcbiAgICAgIHBob25lOiByYW5kb21OdW1iZXIoKSxcbiAgICAgIGljb246ICcuLi9zcmMvaW1hZ2VzL2ljb25zL2NoYXRvdC1pY29uLnBuZycsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnRHVndHJpbycsXG4gICAgICByb2xlOiAnUm9sZTogU2VjdXJpdHknLFxuICAgICAgZW1haWw6ICdzZW50cnlAd2lnZ2x5dHVmZmd1aWxkLnBtZCcsXG4gICAgICBwaG9uZTogcmFuZG9tTnVtYmVyKCksXG4gICAgICBpY29uOiAnLi4vc3JjL2ltYWdlcy9pY29ucy9kdWd0cmlvLWljb24ucG5nJyxcbiAgICB9LFxuICBdO1xuXG4gIHBlb3BsZS5mb3JFYWNoKChwZXJzb24pID0+IHtcbiAgICBjb25zdCBwZXJzb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwZXJzb25EaXYuY2xhc3NMaXN0LmFkZCgncGVyc29uJyk7XG5cbiAgICBjb25zdCBpbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mb0Rpdi5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XG5cbiAgICBjb25zdCB0ZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGV4dERpdi5jbGFzc0xpc3QuYWRkKCd0ZXh0Jyk7XG5cbiAgICBjb25zdCBwZXJzb25OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBwZXJzb25OYW1lLnRleHRDb250ZW50ID0gcGVyc29uLm5hbWU7XG4gICAgdGV4dERpdi5hcHBlbmRDaGlsZChwZXJzb25OYW1lKTtcblxuICAgIGNvbnN0IHBlcnNvblJvbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGVyc29uUm9sZS50ZXh0Q29udGVudCA9IHBlcnNvbi5yb2xlO1xuICAgIHRleHREaXYuYXBwZW5kQ2hpbGQocGVyc29uUm9sZSk7XG5cbiAgICBpbmZvRGl2LmFwcGVuZENoaWxkKHRleHREaXYpO1xuXG4gICAgY29uc3QgaWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGljb25EaXYuY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuXG4gICAgY29uc3QgcGVyc29uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHBlcnNvbkljb24uc3JjID0gcGVyc29uLmljb247XG4gICAgcGVyc29uSWNvbi5hbHQgPSBgJHtwZXJzb24ubmFtZX0ncyBpY29uYDtcbiAgICBpY29uRGl2LmFwcGVuZENoaWxkKHBlcnNvbkljb24pO1xuXG4gICAgaW5mb0Rpdi5hcHBlbmRDaGlsZChpY29uRGl2KTtcblxuICAgIHBlcnNvbkRpdi5hcHBlbmRDaGlsZChpbmZvRGl2KTtcblxuICAgIGNvbnN0IGNvbnRhY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgIGNvbnN0IGVtYWlsSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgZW1haWxJdGVtLnRleHRDb250ZW50ID0gYEVtYWlsOiAke3BlcnNvbi5lbWFpbH1gO1xuICAgIGNvbnRhY3RMaXN0LmFwcGVuZENoaWxkKGVtYWlsSXRlbSk7XG5cbiAgICBjb25zdCBwaG9uZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIHBob25lSXRlbS50ZXh0Q29udGVudCA9IGBQaG9uZTogJHtwZXJzb24ucGhvbmV9YDtcbiAgICBjb250YWN0TGlzdC5hcHBlbmRDaGlsZChwaG9uZUl0ZW0pO1xuXG4gICAgcGVyc29uRGl2LmFwcGVuZENoaWxkKGNvbnRhY3RMaXN0KTtcblxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocGVyc29uRGl2KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVDb250YWN0UGFnZSB9O1xuIiwiZnVuY3Rpb24gY3JlYXRlSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgY29uc3QgaG9tZXBhZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob21lcGFnZURpdi5jbGFzc0xpc3QuYWRkKFwiaG9tZXBhZ2VcIik7XG5cbiAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGhlYWRsaW5lLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIFRoZSBQb2vDqW1vbiBNeXN0ZXJ5IER1bmdlb24gQ2Fmw6khXCI7XG5cbiAgY29uc3QgY29weSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb3B5LnRleHRDb250ZW50ID1cbiAgICBcIkV4cGVyaWVuY2UgdGhlIGZpbmVzdCBkaW5pbmcgaW4gdGhlIHdvcmxkIG9mIFBNRCEgT3VyIGNhZsOpIG9mZmVycyBhIHNlbGVjdGlvbiBvZiBhbGwgdGhlIGRlbGljaW91cyBmb29kIGl0ZW1zIGZvdW5kIGJ5IG91ciBicmF2ZSBleHBsb3JlcnMgYW5kIHRoZW4gcHJlcGFyZWQgYnkgb3VyIHRhbGVudGVkIGNoZWZzLiBDb21lIGFuZCBlbmpveSBhIGRlbGljaW91cyBzbmFjayB0byBmaWxsIHlvdXIgaHVuZ2VyIGJlZm9yZSBiZWdpbm5pbmcgeW91ciBuZXh0IGV4cGVkaXRpb24sIHdoZXJlIGV2ZXIgdGhhdCBtaWdodCB0YWtlIHlvdSFcIjtcblxuICBob21lcGFnZURpdi5hcHBlbmRDaGlsZChoZWFkbGluZSk7XG4gIGhvbWVwYWdlRGl2LmFwcGVuZENoaWxkKGNvcHkpO1xuXG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaG9tZXBhZ2VEaXYpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVIb21lUGFnZSB9O1xuIiwiaW1wb3J0IHRpbnlBcHBsZSBmcm9tICcuL2ltYWdlcy9mb29kcy90aW55LWFwcGxlLnBuZyc7XG5pbXBvcnQgYXBwbGUgZnJvbSAnLi9pbWFnZXMvZm9vZHMvYXBwbGUucG5nJztcbmltcG9ydCBiaWdBcHBsZSBmcm9tICcuL2ltYWdlcy9mb29kcy9iaWctYXBwbGUucG5nJztcbmltcG9ydCBwZXJmZWN0QXBwbGUgZnJvbSAnLi9pbWFnZXMvZm9vZHMvcGVyZmVjdC1hcHBsZS5wbmcnO1xuaW1wb3J0IGdvbGRlbkFwcGxlIGZyb20gJy4vaW1hZ2VzL2Zvb2RzL2dvbGRlbi1hcHBsZS5wbmcnO1xuaW1wb3J0IGNoZXN0bnV0IGZyb20gJy4vaW1hZ2VzL2Zvb2RzL2NoZXN0bnV0LnBuZyc7XG5pbXBvcnQgbWVnYURvbnV0IGZyb20gJy4vaW1hZ2VzL2Zvb2RzL21lZ2EtZG9udXQucG5nJztcbmltcG9ydCBncmlteUZvb2QgZnJvbSAnLi9pbWFnZXMvZm9vZHMvZ3JpbXktZm9vZC5wbmcnO1xuaW1wb3J0IGZvdXJMZWFmQ29va2llIGZyb20gJy4vaW1hZ2VzL2Zvb2RzL2ZvdXItbGVhZi1jb29raWUucG5nJztcbmltcG9ydCBzd2VldENob2NvbGF0ZSBmcm9tICcuL2ltYWdlcy9mb29kcy9zd2VldC1jaG9jb2xhdGUucG5nJztcblxuZnVuY3Rpb24gY3JlYXRlTWVudVBhZ2UoKSB7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gIGNvbnN0IG1lbnVJdGVtcyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnVGlueSBBcHBsZScsXG4gICAgICBjb3N0OiAnNDUgUG9rw6knLFxuICAgICAgZWZmZWN0OlxuICAgICAgICAnUmVzdG9yZXMgMjAgQmVsbHkuIElmIGVhdGVuIHdoaWxlIGZ1bGwsIG1heGltdW0gQmVsbHkgZ29lcyB1cCBieSA1LicsXG4gICAgICBpbWFnZTogdGlueUFwcGxlLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0FwcGxlJyxcbiAgICAgIGNvc3Q6ICcxMDAgUG9rw6knLFxuICAgICAgZWZmZWN0OlxuICAgICAgICAnUmVzdG9yZXMgNTAgQmVsbHkuIElmIGVhdGVuIHdoaWxlIGZ1bGwsIG1heGltdW0gQmVsbHkgZ29lcyB1cCBieSA1JyxcbiAgICAgIGltYWdlOiBhcHBsZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdCaWcgQXBwbGUnLFxuICAgICAgY29zdDogJzIwMCBQb2vDqScsXG4gICAgICBlZmZlY3Q6XG4gICAgICAgICdSZXN0b3JlcyAxMDAgQmVsbHkuIElmIGVhdGVuIHdoaWxlIGZ1bGwsIG1heGltdW0gQmVsbHkgZ29lcyB1cCBieSAxMCcsXG4gICAgICBpbWFnZTogYmlnQXBwbGUsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnUGVyZmVjdCBBcHBsZScsXG4gICAgICBjb3N0OiAnMTAwMCBQb2vDqScsXG4gICAgICBlZmZlY3Q6ICdGdWxseSByZXN0b3JlcyB0aGUgQmVsbHkgYW5kIGluY3JlYXNlcyBtYXhpbXVtIEJlbGx5IGJ5IDUwLicsXG4gICAgICBpbWFnZTogcGVyZmVjdEFwcGxlLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0dvbGRlbiBBcHBsZScsXG4gICAgICBjb3N0OiAnMTYwMCBQb2vDqScsXG4gICAgICBlZmZlY3Q6ICdGdWxseSByZXN0b3JlcyB0aGUgQmVsbHkgYW5kIGluY3JlYXNlcyBtYXhpbXVtIEJlbGx5IGJ5IDUwLicsXG4gICAgICBpbWFnZTogZ29sZGVuQXBwbGUsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQ2hlc3RudXQnLFxuICAgICAgY29zdDogJzEwMDAgUG9rw6knLFxuICAgICAgZWZmZWN0OlxuICAgICAgICAnUmVzdG9yZXMgNTAgQmVsbHkuIElmIGVhdGVuIHdoaWxlIGZ1bGwsIG1heGltdW0gQmVsbHkgZ29lcyB1cCBieSA1LicsXG4gICAgICBpbWFnZTogY2hlc3RudXQsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnTWVnYSBEb251dCcsXG4gICAgICBjb3N0OiAnMzAwMCBQb2vDqScsXG4gICAgICBlZmZlY3Q6XG4gICAgICAgIFwiQSBmb29kIGl0ZW0gdGhhdCByYWlzZXMgYSBQb2vDqW1vbidzIGV4cGVyaWVuY2UgcG9pbnRzIGJ5IDUwMDAgYW5kIHJhbmRvbWx5IGFuZCBwZXJtYW5lbnRseSByYWlzZXMgb25lIG9yIG1vcmUgb2YgYSBQb2vDqW1vbidzIHN0YXRzLlwiLFxuICAgICAgaW1hZ2U6IG1lZ2FEb251dCxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdHcmlteSBGb29kJyxcbiAgICAgIGNvc3Q6ICc2IFBva8OpJyxcbiAgICAgIGVmZmVjdDpcbiAgICAgICAgJ0EgZm9vZCBpdGVtIHRoYXQgcmVzdG9yZXMgMzAgQmVsbHksIGFsc28gaW5mbGljdHMgTGVnIEhvbGQsIHBvaXNvbiwgcGFyYWx5c2lzLCBvciBidXJuLicsXG4gICAgICBpbWFnZTogZ3JpbXlGb29kLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0ZvdXItTGVhZiBDb29raWUnLFxuICAgICAgY29zdDogJzMwMDAgUG9rw6knLFxuICAgICAgZWZmZWN0OlxuICAgICAgICBcIkEgZm9vZCBpdGVtIHRoYXQgcmFuZG9tbHkgYW5kIHBlcm1hbmVudGx5IHJhaXNlcyBvbmUgb3IgbW9yZSBvZiBhIFBva8OpbW9uJ3Mgc3RhdHMuXCIsXG4gICAgICBpbWFnZTogZm91ckxlYWZDb29raWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnU3dlZXQgQ2hvY29sYXRlJyxcbiAgICAgIGNvc3Q6ICczMDAwIFBva8OpJyxcbiAgICAgIGVmZmVjdDpcbiAgICAgICAgXCJBIGZvb2QgaXRlbSB0aGF0IHJhbmRvbWx5IGFuZCBwZXJtYW5lbnRseSByYWlzZXMgb25lIG9yIG1vcmUgb2YgYSBQb2vDqW1vbidzIHN0YXRzLlwiLFxuICAgICAgaW1hZ2U6IHN3ZWV0Q2hvY29sYXRlLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtY29udGFpbmVyJyk7XG5cbiAgbWVudUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBpdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbURpdi5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG5cbiAgICBjb25zdCBpbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mb0Rpdi5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XG5cbiAgICBjb25zdCB0ZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGV4dERpdi5jbGFzc0xpc3QuYWRkKCd0ZXh0Jyk7XG5cbiAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XG4gICAgdGV4dERpdi5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG5cbiAgICBjb25zdCBpdGVtQ29zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpdGVtQ29zdC50ZXh0Q29udGVudCA9IGl0ZW0uY29zdDtcbiAgICB0ZXh0RGl2LmFwcGVuZENoaWxkKGl0ZW1Db3N0KTtcblxuICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQodGV4dERpdik7XG5cbiAgICBjb25zdCBpY29uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaWNvbkRpdi5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XG5cbiAgICBjb25zdCBpdGVtSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpdGVtSW1hZ2Uuc3JjID0gaXRlbS5pbWFnZTtcbiAgICBpdGVtSW1hZ2UuYWx0ID0gYCR7aXRlbS5uYW1lfSdzIGltYWdlYDtcbiAgICBpY29uRGl2LmFwcGVuZENoaWxkKGl0ZW1JbWFnZSk7XG5cbiAgICBpbmZvRGl2LmFwcGVuZENoaWxkKGljb25EaXYpO1xuXG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZChpbmZvRGl2KTtcblxuICAgIGNvbnN0IGVmZmVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBlZmZlY3REaXYudGV4dENvbnRlbnQgPSBpdGVtLmVmZmVjdDtcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGVmZmVjdERpdik7XG5cbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EaXYpO1xuICB9KTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlTWVudVBhZ2UgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgeyBjcmVhdGVIb21lUGFnZSB9IGZyb20gJy4vaG9tZXBhZ2UnO1xuaW1wb3J0IHsgY3JlYXRlQ29udGFjdFBhZ2UgfSBmcm9tICcuL2NvbnRhY3QnO1xuaW1wb3J0IHsgY3JlYXRlTWVudVBhZ2UgfSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IGJhY2tncm91bmRJbWFnZSBmcm9tICcuLi9zcmMvaW1hZ2VzL3BtZC1jYWtlLmpwZyc7XG5cbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5mdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XG4gIGNvbnN0IGNvbnRlbnRDaGlsZHJlbiA9IEFycmF5LmZyb20oY29udGVudERpdi5jaGlsZHJlbik7XG4gIGNvbnRlbnRDaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgIGlmICghY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YWJzJykpIHtcbiAgICAgIGNvbnRlbnREaXYucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhYih0YWJOYW1lKSB7XG4gIGNvbnN0IHRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG4gIHRhYi50ZXh0Q29udGVudCA9IHRhYk5hbWU7XG4gIHJldHVybiB0YWI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhYnMoKSB7XG4gIGNvbnN0IHRhYnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFic0Rpdi5jbGFzc0xpc3QuYWRkKCd0YWJzJyk7XG5cbiAgY29uc3QgaG9tZVRhYiA9IGNyZWF0ZVRhYignSG9tZScpO1xuICBjb25zdCBjb250YWN0VGFiID0gY3JlYXRlVGFiKCdDb250YWN0Jyk7XG4gIGNvbnN0IG1lbnVUYWIgPSBjcmVhdGVUYWIoJ01lbnUnKTtcblxuICBob21lVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsZWFyQ29udGVudCgpO1xuICAgIGNyZWF0ZUhvbWVQYWdlKCk7XG4gIH0pO1xuXG4gIGNvbnRhY3RUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgY3JlYXRlQ29udGFjdFBhZ2UoKTtcbiAgfSk7XG5cbiAgbWVudVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhckNvbnRlbnQoKTtcbiAgICBjcmVhdGVNZW51UGFnZSgpO1xuICB9KTtcblxuICB0YWJzRGl2LmFwcGVuZENoaWxkKGhvbWVUYWIpO1xuICB0YWJzRGl2LmFwcGVuZENoaWxkKGNvbnRhY3RUYWIpO1xuICB0YWJzRGl2LmFwcGVuZENoaWxkKG1lbnVUYWIpO1xuXG4gIHJldHVybiB0YWJzRGl2O1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplV2Vic2l0ZSgpIHtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChjcmVhdGVUYWJzKCkpO1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2JhY2tncm91bmRJbWFnZX0pYDtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRSZXBlYXQgPSAnbm8tcmVwZWF0JztcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvdmVyJztcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9ICdib3R0b20nO1xuICBjcmVhdGVIb21lUGFnZSgpO1xufVxuXG5pbml0aWFsaXplV2Vic2l0ZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9