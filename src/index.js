import { createHomePage } from './homepage';
import { createContactPage } from './contact';
import { createMenuPage } from './menu';

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
    createHomePage();
  });

  contactTab.addEventListener('click', () => {
    clearContent();
    createContactPage();
  });

  menuTab.addEventListener('click', () => {
    clearContent();
    createMenuPage();
  });

  tabsDiv.appendChild(homeTab);
  tabsDiv.appendChild(contactTab);
  tabsDiv.appendChild(menuTab);

  return tabsDiv;
}

function initializeWebsite() {
  contentDiv.appendChild(createTabs());
  createHomePage();
}

initializeWebsite();
