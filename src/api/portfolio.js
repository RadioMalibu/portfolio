const portfolio = [
  {
    id: 'DHCS',
    title: 'De Hollandse Club Stockholm',
    description: 'Dit is een hele mooie foto Tralala',
    image:{
      url: 'image1.jpg',
      alt: 'foto'
    }
  },
  {
    id: 'Humanstrategi',
    title: 'Humanstrategi',
    description: 'Dit is een hele mooie foto HGJVKGV',
    image:{
      url: 'image2.jpg',
      alt: 'foto'
    }
  },
  {
    id: 'Monty',
    title: "Monty's Glow",
    description: 'Dit is een hele mooie foto LEVE DE KONING',
    image:{
      url: 'image3.jpg',
      alt: 'foto'
    }
  },
  {
    id: 'Strangers',
    title: 'Strangers when we meet',
    description: 'Dit is een hele mooie foto',
    image:{
      url: 'image4.jpg',
      alt: 'foto'
    }
  },
  {
    id: 'Concinnity',
    title: 'The Concinnity',
    description: 'Dit is een hele mooie foto',
    image:{
      url: 'image5.jpg',
      alt: 'foto'
    }
  },
  {
    id: 'NordicBed',
    title: 'The Nordic Bed Co.',
    description: 'Dit is een hele mooie foto',
    image:{
      url: 'image6.jpg',
      alt: 'foto'
    }
  },
  {
    id: 'Mocinno',
    title: 'Mocinno Int.',
    description: 'Dit is een hele mooie foto Tralala',
    image:{
      url: 'image1.jpg',
      alt: 'foto'
    }
  },
  {
    id: 'Miroir',
    title: 'Le Miroir',
    description: 'Dit is een hele mooie foto HGJVKGV',
    image:{
      url: 'image2.jpg',
      alt: 'foto'
    }
  },
  {
    id: 'Alex',
    title: 'Högskolestudent',
    description: 'Dit is een hele mooie foto LEVE DE KONING',
    image:{
      url: 'image3.jpg',
      alt: 'foto'
    }
  },
  {
    id: 'Gym',
    title: 'Gym',
    description: 'Dit is een hele mooie foto',
    image:{
      url: 'image4.jpg',
      alt: 'foto'
    }
  },
  {
    id: 'byLO',
    title: 'byLO Sweden',
    description: 'Dit is een hele mooie foto',
    image:{
      url: 'image5.jpg',
      alt: 'foto'
    }
  },
  {
    id: 'Tarantula',
    title: 'Gilde Tarantula',
    description: 'Dit is een hele mooie foto',
    image:{
      url: 'image6.jpg',
      alt: 'foto'
    }
  },
];

export const getAll = () => {
  return portfolio;
};

export const getById = id => {
  const portfolioItem = portfolio.find(portfolioItem => portfolioItem.id === id);
  if (!portfolioItem) {
    return null;
  }
  return Object.assign({}, portfolioItem);
};

export default { portfolio, getAll, getById };
