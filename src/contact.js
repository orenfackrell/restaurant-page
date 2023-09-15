const createContactPage = () => {
    const contentDiv = document.getElementById('content');
  
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');
  
    const contactTitle = document.createElement('h2');
    contactTitle.textContent = 'Contact Us';
    contactDiv.appendChild(contactTitle);
  
    const contactInfo = document.createElement('p');
    contactInfo.textContent = 'For reservations or inquiries, please contact us at:';
    contactDiv.appendChild(contactInfo);
  
    const contactEmail = document.createElement('p');
    contactEmail.textContent = 'Email: info@restaurant.com';
    contactDiv.appendChild(contactEmail);
  
    const contactPhone = document.createElement('p');
    contactPhone.textContent = 'Phone: 123-456-7890';
    contactDiv.appendChild(contactPhone);
  
    contentDiv.appendChild(contactDiv);
  };
  
  export { createContactPage };
  