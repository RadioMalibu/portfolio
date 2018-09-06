const webb = [
  {
    id: 'Mocinno',
    title: 'Mocinno Int.',
    description: 'Dit is een hele mooie foto Tralala',
    image:[{
      url: 'web1.jpg',
      alt: 'foto'
    }]
  },
  {
    id: 'Miroir',
    title: 'Le Miroir',
    description: 'Dit is een hele mooie foto HGJVKGV',
    image:[{
      url: 'web2.jpg',
      alt: 'foto'
    }]
  },
  {
    id: 'Alex',
    title: 'Alexander',
    description: 'Dit is een hele mooie foto LEVE DE KONING',
    image:[{
      url: 'web3.jpg',
      alt: 'foto'
    }]
  },
  {
    id: 'Gym',
    title: 'Gym',
    description: 'Dit is een hele mooie foto',
    image:[{
      url: 'web4.jpg',
      alt: 'foto'
    }]
  },
  {
    id: 'byLO',
    title: 'byLO Sweden',
    description: 'Dit is een hele mooie foto',
    image:[{
      url: 'web5.jpg',
      alt: 'foto'
    }]
  },
];

export const getAll = () => {
  return webb;
};

export const getById = id => {
  const webbItem = webb.find(webbItem => webbItem.id === id);
  if (!webbItem) {
    return null;
  }
  return Object.assign({}, webbItem);
};

export default { webb, getAll, getById };
