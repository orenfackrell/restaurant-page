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
  
  export {createMenuPage};