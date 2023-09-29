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
function createMenuPage() {
  const contentDiv = document.getElementById('content');

  const menuItems = [
    {
      name: 'Tiny Apple',
      cost: '45 Poké',
      effect:
        'Restores 20 Belly. If eaten while full, maximum Belly goes up by 5.',
      image: '../src/images/foods/tiny-apple.png',
    },
    {
      name: 'Apple',
      cost: '100 Poké',
      effect:
        'Restores 50 Belly. If eaten while full, maximum Belly goes up by 5',
      image: '../src/images/foods/apple.png',
    },
    {
      name: 'Big Apple',
      cost: '200 Poké',
      effect:
        'Restores 100 Belly. If eaten while full, maximum Belly goes up by 10',
      image: '../src/images/foods/big-apple.png',
    },
    {
      name: 'Perfect Apple',
      cost: '1000 Poké',
      effect: 'Fully restores the Belly and increases maximum Belly by 50.',
      image: '../src/images/foods/perfect-apple.png',
    },
    {
      name: 'Golden Apple',
      cost: '1600 Poké',
      effect: 'Fully restores the Belly and increases maximum Belly by 50.',
      image: '../src/images/foods/golden-apple.png',
    },
    {
      name: 'Chestnut',
      cost: '1000 Poké',
      effect:
        'Restores 50 Belly. If eaten while full, maximum Belly goes up by 5.',
      image: '../src/images/foods/chestnut.png',
    },
    {
      name: 'Mega Donut',
      cost: '3000 Poké',
      effect:
        "A food item that raises a Pokémon's experience points by 5000 and randomly and permanently raises one or more of a Pokémon's stats.",
      image: '../src/images/foods/mega-donut.png',
    },
    {
      name: 'Grimy Food',
      cost: '6 Poké',
      effect:
        'A food item that restores 30 Belly, also inflicts Leg Hold, poison, paralysis, or burn.',
      image: '../src/images/foods/grimy-food.png',
    },
    {
      name: 'Four-Leaf Cookie',
      cost: '3000 Poké',
      effect:
        "A food item that randomly and permanently raises one or more of a Pokémon's stats.",
      image: '../src/images/foods/four-leaf-cookie.png',
    },
    {
      name: 'Sweet Chocolate',
      cost: '3000 Poké',
      effect:
        "A food item that randomly and permanently raises one or more of a Pokémon's stats.",
      image: '../src/images/foods/sweet-chocolate.png',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Li9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9zcmMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHJhbmRvbU51bWJlcigpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgbGV0IHJhbmRvbU1vYmlsZSA9ICcwNycgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCkuc2xpY2UoMiwgMTEpO1xuICAgIHJldHVybiByYW5kb21Nb2JpbGU7XG4gIH1cbn1cblxuY29uc3QgY3JlYXRlQ29udGFjdFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gIGNvbnN0IHBlb3BsZSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnV2lnZ2x5dHVmZicsXG4gICAgICByb2xlOiAnUm9sZTogR3VpbGQgTGVhZGVyJyxcbiAgICAgIGVtYWlsOiAnZ3VpbGRtYXN0ZXJAd2lnZ2x5dHVmZmd1aWxkLnBtZCcsXG4gICAgICBwaG9uZTogcmFuZG9tTnVtYmVyKCksXG4gICAgICBpY29uOiAnLi4vc3JjL2ltYWdlcy9pY29ucy93aWdnbHl0dWZmLWljb24ucG5nJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdDaGF0b3QnLFxuICAgICAgcm9sZTogJ1JvbGU6IEd1aWxkIEFzc2lzdGFudCcsXG4gICAgICBlbWFpbDogJ2d1aWxkYXNzaXN0YW50QHdpZ2dseXR1ZmZndWlsZC5wbWQnLFxuICAgICAgcGhvbmU6IHJhbmRvbU51bWJlcigpLFxuICAgICAgaWNvbjogJy4uL3NyYy9pbWFnZXMvaWNvbnMvY2hhdG90LWljb24ucG5nJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdEdWd0cmlvJyxcbiAgICAgIHJvbGU6ICdSb2xlOiBTZWN1cml0eScsXG4gICAgICBlbWFpbDogJ3NlbnRyeUB3aWdnbHl0dWZmZ3VpbGQucG1kJyxcbiAgICAgIHBob25lOiByYW5kb21OdW1iZXIoKSxcbiAgICAgIGljb246ICcuLi9zcmMvaW1hZ2VzL2ljb25zL2R1Z3RyaW8taWNvbi5wbmcnLFxuICAgIH0sXG4gIF07XG5cbiAgcGVvcGxlLmZvckVhY2goKHBlcnNvbikgPT4ge1xuICAgIGNvbnN0IHBlcnNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBlcnNvbkRpdi5jbGFzc0xpc3QuYWRkKCdwZXJzb24nKTtcblxuICAgIGNvbnN0IGluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvRGl2LmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcblxuICAgIGNvbnN0IHRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZXh0RGl2LmNsYXNzTGlzdC5hZGQoJ3RleHQnKTtcblxuICAgIGNvbnN0IHBlcnNvbk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHBlcnNvbk5hbWUudGV4dENvbnRlbnQgPSBwZXJzb24ubmFtZTtcbiAgICB0ZXh0RGl2LmFwcGVuZENoaWxkKHBlcnNvbk5hbWUpO1xuXG4gICAgY29uc3QgcGVyc29uUm9sZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwZXJzb25Sb2xlLnRleHRDb250ZW50ID0gcGVyc29uLnJvbGU7XG4gICAgdGV4dERpdi5hcHBlbmRDaGlsZChwZXJzb25Sb2xlKTtcblxuICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQodGV4dERpdik7XG5cbiAgICBjb25zdCBpY29uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaWNvbkRpdi5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XG5cbiAgICBjb25zdCBwZXJzb25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgcGVyc29uSWNvbi5zcmMgPSBwZXJzb24uaWNvbjtcbiAgICBwZXJzb25JY29uLmFsdCA9IGAke3BlcnNvbi5uYW1lfSdzIGljb25gO1xuICAgIGljb25EaXYuYXBwZW5kQ2hpbGQocGVyc29uSWNvbik7XG5cbiAgICBpbmZvRGl2LmFwcGVuZENoaWxkKGljb25EaXYpO1xuXG4gICAgcGVyc29uRGl2LmFwcGVuZENoaWxkKGluZm9EaXYpO1xuXG4gICAgY29uc3QgY29udGFjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gICAgY29uc3QgZW1haWxJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBlbWFpbEl0ZW0udGV4dENvbnRlbnQgPSBgRW1haWw6ICR7cGVyc29uLmVtYWlsfWA7XG4gICAgY29udGFjdExpc3QuYXBwZW5kQ2hpbGQoZW1haWxJdGVtKTtcblxuICAgIGNvbnN0IHBob25lSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgcGhvbmVJdGVtLnRleHRDb250ZW50ID0gYFBob25lOiAke3BlcnNvbi5waG9uZX1gO1xuICAgIGNvbnRhY3RMaXN0LmFwcGVuZENoaWxkKHBob25lSXRlbSk7XG5cbiAgICBwZXJzb25EaXYuYXBwZW5kQ2hpbGQoY29udGFjdExpc3QpO1xuXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChwZXJzb25EaXYpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUNvbnRhY3RQYWdlIH07XG4iLCJmdW5jdGlvbiBjcmVhdGVIb21lUGFnZSgpIHtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICBjb25zdCBob21lcGFnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvbWVwYWdlRGl2LmNsYXNzTGlzdC5hZGQoXCJob21lcGFnZVwiKTtcblxuICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgaGVhZGxpbmUudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gVGhlIFBva8OpbW9uIE15c3RlcnkgRHVuZ2VvbiBDYWbDqSFcIjtcblxuICBjb25zdCBjb3B5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvcHkudGV4dENvbnRlbnQgPVxuICAgIFwiRXhwZXJpZW5jZSB0aGUgZmluZXN0IGRpbmluZyBpbiB0aGUgd29ybGQgb2YgUE1EISBPdXIgY2Fmw6kgb2ZmZXJzIGEgc2VsZWN0aW9uIG9mIGFsbCB0aGUgZGVsaWNpb3VzIGZvb2QgaXRlbXMgZm91bmQgYnkgb3VyIGJyYXZlIGV4cGxvcmVycyBhbmQgdGhlbiBwcmVwYXJlZCBieSBvdXIgdGFsZW50ZWQgY2hlZnMuIENvbWUgYW5kIGVuam95IGEgZGVsaWNpb3VzIHNuYWNrIHRvIGZpbGwgeW91ciBodW5nZXIgYmVmb3JlIGJlZ2lubmluZyB5b3VyIG5leHQgZXhwZWRpdGlvbiwgd2hlcmUgZXZlciB0aGF0IG1pZ2h0IHRha2UgeW91IVwiO1xuXG4gIGhvbWVwYWdlRGl2LmFwcGVuZENoaWxkKGhlYWRsaW5lKTtcbiAgaG9tZXBhZ2VEaXYuYXBwZW5kQ2hpbGQoY29weSk7XG5cbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChob21lcGFnZURpdik7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUhvbWVQYWdlIH07XG4iLCJmdW5jdGlvbiBjcmVhdGVNZW51UGFnZSgpIHtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgY29uc3QgbWVudUl0ZW1zID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdUaW55IEFwcGxlJyxcbiAgICAgIGNvc3Q6ICc0NSBQb2vDqScsXG4gICAgICBlZmZlY3Q6XG4gICAgICAgICdSZXN0b3JlcyAyMCBCZWxseS4gSWYgZWF0ZW4gd2hpbGUgZnVsbCwgbWF4aW11bSBCZWxseSBnb2VzIHVwIGJ5IDUuJyxcbiAgICAgIGltYWdlOiAnLi4vc3JjL2ltYWdlcy9mb29kcy90aW55LWFwcGxlLnBuZycsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQXBwbGUnLFxuICAgICAgY29zdDogJzEwMCBQb2vDqScsXG4gICAgICBlZmZlY3Q6XG4gICAgICAgICdSZXN0b3JlcyA1MCBCZWxseS4gSWYgZWF0ZW4gd2hpbGUgZnVsbCwgbWF4aW11bSBCZWxseSBnb2VzIHVwIGJ5IDUnLFxuICAgICAgaW1hZ2U6ICcuLi9zcmMvaW1hZ2VzL2Zvb2RzL2FwcGxlLnBuZycsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQmlnIEFwcGxlJyxcbiAgICAgIGNvc3Q6ICcyMDAgUG9rw6knLFxuICAgICAgZWZmZWN0OlxuICAgICAgICAnUmVzdG9yZXMgMTAwIEJlbGx5LiBJZiBlYXRlbiB3aGlsZSBmdWxsLCBtYXhpbXVtIEJlbGx5IGdvZXMgdXAgYnkgMTAnLFxuICAgICAgaW1hZ2U6ICcuLi9zcmMvaW1hZ2VzL2Zvb2RzL2JpZy1hcHBsZS5wbmcnLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1BlcmZlY3QgQXBwbGUnLFxuICAgICAgY29zdDogJzEwMDAgUG9rw6knLFxuICAgICAgZWZmZWN0OiAnRnVsbHkgcmVzdG9yZXMgdGhlIEJlbGx5IGFuZCBpbmNyZWFzZXMgbWF4aW11bSBCZWxseSBieSA1MC4nLFxuICAgICAgaW1hZ2U6ICcuLi9zcmMvaW1hZ2VzL2Zvb2RzL3BlcmZlY3QtYXBwbGUucG5nJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdHb2xkZW4gQXBwbGUnLFxuICAgICAgY29zdDogJzE2MDAgUG9rw6knLFxuICAgICAgZWZmZWN0OiAnRnVsbHkgcmVzdG9yZXMgdGhlIEJlbGx5IGFuZCBpbmNyZWFzZXMgbWF4aW11bSBCZWxseSBieSA1MC4nLFxuICAgICAgaW1hZ2U6ICcuLi9zcmMvaW1hZ2VzL2Zvb2RzL2dvbGRlbi1hcHBsZS5wbmcnLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0NoZXN0bnV0JyxcbiAgICAgIGNvc3Q6ICcxMDAwIFBva8OpJyxcbiAgICAgIGVmZmVjdDpcbiAgICAgICAgJ1Jlc3RvcmVzIDUwIEJlbGx5LiBJZiBlYXRlbiB3aGlsZSBmdWxsLCBtYXhpbXVtIEJlbGx5IGdvZXMgdXAgYnkgNS4nLFxuICAgICAgaW1hZ2U6ICcuLi9zcmMvaW1hZ2VzL2Zvb2RzL2NoZXN0bnV0LnBuZycsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnTWVnYSBEb251dCcsXG4gICAgICBjb3N0OiAnMzAwMCBQb2vDqScsXG4gICAgICBlZmZlY3Q6XG4gICAgICAgIFwiQSBmb29kIGl0ZW0gdGhhdCByYWlzZXMgYSBQb2vDqW1vbidzIGV4cGVyaWVuY2UgcG9pbnRzIGJ5IDUwMDAgYW5kIHJhbmRvbWx5IGFuZCBwZXJtYW5lbnRseSByYWlzZXMgb25lIG9yIG1vcmUgb2YgYSBQb2vDqW1vbidzIHN0YXRzLlwiLFxuICAgICAgaW1hZ2U6ICcuLi9zcmMvaW1hZ2VzL2Zvb2RzL21lZ2EtZG9udXQucG5nJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdHcmlteSBGb29kJyxcbiAgICAgIGNvc3Q6ICc2IFBva8OpJyxcbiAgICAgIGVmZmVjdDpcbiAgICAgICAgJ0EgZm9vZCBpdGVtIHRoYXQgcmVzdG9yZXMgMzAgQmVsbHksIGFsc28gaW5mbGljdHMgTGVnIEhvbGQsIHBvaXNvbiwgcGFyYWx5c2lzLCBvciBidXJuLicsXG4gICAgICBpbWFnZTogJy4uL3NyYy9pbWFnZXMvZm9vZHMvZ3JpbXktZm9vZC5wbmcnLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0ZvdXItTGVhZiBDb29raWUnLFxuICAgICAgY29zdDogJzMwMDAgUG9rw6knLFxuICAgICAgZWZmZWN0OlxuICAgICAgICBcIkEgZm9vZCBpdGVtIHRoYXQgcmFuZG9tbHkgYW5kIHBlcm1hbmVudGx5IHJhaXNlcyBvbmUgb3IgbW9yZSBvZiBhIFBva8OpbW9uJ3Mgc3RhdHMuXCIsXG4gICAgICBpbWFnZTogJy4uL3NyYy9pbWFnZXMvZm9vZHMvZm91ci1sZWFmLWNvb2tpZS5wbmcnLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1N3ZWV0IENob2NvbGF0ZScsXG4gICAgICBjb3N0OiAnMzAwMCBQb2vDqScsXG4gICAgICBlZmZlY3Q6XG4gICAgICAgIFwiQSBmb29kIGl0ZW0gdGhhdCByYW5kb21seSBhbmQgcGVybWFuZW50bHkgcmFpc2VzIG9uZSBvciBtb3JlIG9mIGEgUG9rw6ltb24ncyBzdGF0cy5cIixcbiAgICAgIGltYWdlOiAnLi4vc3JjL2ltYWdlcy9mb29kcy9zd2VldC1jaG9jb2xhdGUucG5nJyxcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRhaW5lcicpO1xuXG4gIG1lbnVJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgaXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1EaXYuY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuXG4gICAgY29uc3QgaW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZm9EaXYuY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xuXG4gICAgY29uc3QgdGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRleHREaXYuY2xhc3NMaXN0LmFkZCgndGV4dCcpO1xuXG4gICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xuICAgIHRleHREaXYuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuXG4gICAgY29uc3QgaXRlbUNvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaXRlbUNvc3QudGV4dENvbnRlbnQgPSBpdGVtLmNvc3Q7XG4gICAgdGV4dERpdi5hcHBlbmRDaGlsZChpdGVtQ29zdCk7XG5cbiAgICBpbmZvRGl2LmFwcGVuZENoaWxkKHRleHREaXYpO1xuXG4gICAgY29uc3QgaWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGljb25EaXYuY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuXG4gICAgY29uc3QgaXRlbUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaXRlbUltYWdlLnNyYyA9IGl0ZW0uaW1hZ2U7XG4gICAgaXRlbUltYWdlLmFsdCA9IGAke2l0ZW0ubmFtZX0ncyBpbWFnZWA7XG4gICAgaWNvbkRpdi5hcHBlbmRDaGlsZChpdGVtSW1hZ2UpO1xuXG4gICAgaW5mb0Rpdi5hcHBlbmRDaGlsZChpY29uRGl2KTtcblxuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoaW5mb0Rpdik7XG5cbiAgICBjb25zdCBlZmZlY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZWZmZWN0RGl2LnRleHRDb250ZW50ID0gaXRlbS5lZmZlY3Q7XG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZChlZmZlY3REaXYpO1xuXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRGl2KTtcbiAgfSk7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZU1lbnVQYWdlIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZUhvbWVQYWdlIH0gZnJvbSBcIi4vaG9tZXBhZ2VcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRhY3RQYWdlIH0gZnJvbSBcIi4vY29udGFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlTWVudVBhZ2UgfSBmcm9tIFwiLi9tZW51XCI7XG5cbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbmZ1bmN0aW9uIGNsZWFyQ29udGVudCgpIHtcbiAgY29uc3QgY29udGVudENoaWxkcmVuID0gQXJyYXkuZnJvbShjb250ZW50RGl2LmNoaWxkcmVuKTtcbiAgY29udGVudENoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgaWYgKCFjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YWJzXCIpKSB7XG4gICAgICBjb250ZW50RGl2LnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYWIodGFiTmFtZSkge1xuICBjb25zdCB0YWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YWIuY2xhc3NMaXN0LmFkZChcInRhYlwiKTtcbiAgdGFiLnRleHRDb250ZW50ID0gdGFiTmFtZTtcbiAgcmV0dXJuIHRhYjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFicygpIHtcbiAgY29uc3QgdGFic0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhYnNEaXYuY2xhc3NMaXN0LmFkZChcInRhYnNcIik7XG5cbiAgY29uc3QgaG9tZVRhYiA9IGNyZWF0ZVRhYihcIkhvbWVcIik7XG4gIGNvbnN0IGNvbnRhY3RUYWIgPSBjcmVhdGVUYWIoXCJDb250YWN0XCIpO1xuICBjb25zdCBtZW51VGFiID0gY3JlYXRlVGFiKFwiTWVudVwiKTtcblxuICBob21lVGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgY3JlYXRlSG9tZVBhZ2UoKTtcbiAgfSk7XG5cbiAgY29udGFjdFRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNsZWFyQ29udGVudCgpO1xuICAgIGNyZWF0ZUNvbnRhY3RQYWdlKCk7XG4gIH0pO1xuXG4gIG1lbnVUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhckNvbnRlbnQoKTtcbiAgICBjcmVhdGVNZW51UGFnZSgpO1xuICB9KTtcblxuICB0YWJzRGl2LmFwcGVuZENoaWxkKGhvbWVUYWIpO1xuICB0YWJzRGl2LmFwcGVuZENoaWxkKGNvbnRhY3RUYWIpO1xuICB0YWJzRGl2LmFwcGVuZENoaWxkKG1lbnVUYWIpO1xuXG4gIHJldHVybiB0YWJzRGl2O1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplV2Vic2l0ZSgpIHtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChjcmVhdGVUYWJzKCkpO1xuICBjcmVhdGVIb21lUGFnZSgpO1xufVxuXG5pbml0aWFsaXplV2Vic2l0ZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9