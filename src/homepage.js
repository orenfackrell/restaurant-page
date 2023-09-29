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

export default createHomePage;
