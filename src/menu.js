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

export { createMenuPage };
