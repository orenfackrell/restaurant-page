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
      role: 'Guild Leader',
      email: 'guildmaster@wigglytuffguild.pmd',
      phone: randomNumber(),
      icon: './src/images/wigglytuff-icon.png',
    },
    {
      name: 'Chatot',
      role: 'Guild Assistant',
      email: 'guildassistant@wigglytuffguild.pmd',
      phone: randomNumber(),
      icon: './src/chatot-icon.png',
    },
    {
      name: 'Dugtrio',
      role: 'Security',
      email: 'sentry@wigglytuffguild.pmd',
      phone: randomNumber(),
      icon: './src/dugtrio-icon.png',
    },
  ];

  people.forEach((person) => {
    const personDiv = document.createElement('div');
    personDiv.classList.add('person');

    const personName = document.createElement('h2');
    personName.textContent = person.name;
    personDiv.appendChild(personName);

    const personRole = document.createElement('p');
    personRole.textContent = person.role;
    personDiv.appendChild(personRole);

    const personIcon = document.createElement('img');
    personIcon.src = person.icon;
    personIcon.alt = `${person.name}'s icon`;
    personDiv.appendChild(personIcon);

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

export { createContactPage };
