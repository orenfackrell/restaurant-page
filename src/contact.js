import wigglytuffIcon from './images/icons/wigglytuff-icon.png';
import chatotIcon from './images/icons/chatot-icon.png';
import dugtrioIcon from './images/icons/dugtrio-icon.png';

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
      icon: wigglytuffIcon,
    },
    {
      name: 'Chatot',
      role: 'Role: Guild Assistant',
      email: 'guildassistant@wigglytuffguild.pmd',
      phone: randomNumber(),
      icon: chatotIcon,
    },
    {
      name: 'Dugtrio',
      role: 'Role: Security',
      email: 'sentry@wigglytuffguild.pmd',
      phone: randomNumber(),
      icon: dugtrioIcon,
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

export { createContactPage };
