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
  
  export { createHomePage }