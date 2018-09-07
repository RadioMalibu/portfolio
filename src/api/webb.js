const webb = [
  {
    id: 'Monty',
    title: "Monty's Glow",
    description: "Nature lies at the core of Monty's Glow's business and this should be immediately clear to the website's visitor. For Monty it was also important that the site would have an Aftican character to represent her roots, and that it would be easy for her to keep up the site herself. To achieve this I adapted a WordPress theme and included a online shop.",
    tags: "WordPress | PHP | Web Design",
    link: "www.organic-montysglow.se",
    image:[{
      url: 'webMonty.jpg',
      alt: "Monty's Glow"
    }]
  },{
    id: 'Kunst door Mario',
    title: 'Kunst door Mario',
    description: "The message this artist spreads through art, theater and other forms of performances is to dare to be different. He has a larger than life personality and expresses this in this art. Different was therefore the goal of this site where a regular layout would not fit, though without loosing sight of the website's functionality. The red ribbon symbolises how art alway has been and always will be Mario's biggest passion; the common thread in his life.",
    tags: "WordPress | PHP | Web Design",
    link: "www.prpr.nl",
    image:[{
      url: 'KDM.jpg',
      alt: 'Kunst door Mario'
    }]
  },{
    id: 'OptimaltLiv',
    title: 'OptimaltLive',
    description: "The assigment in this project was to update and modernize the website and give it a visual face lift. The wish of the client was that the site would radiate life, light and energy with a minimalist character.",
    tags: "WordPress | PHP | Web Design",
    link: "www.optimaltliv.nu",
    image:[{
      url: 'webOptimalt.jpg',
      alt: 'Optimalt Liv'
    }]
  },{
    id: 'Creative Makeup',
    title: 'Creative Make up',
    description: "The work on the site I did with very clear instructions from the client. They had found their inspiration for the layout of the site somewhere else, so here it was key to carefully listen and interpret their wishes to be able to create the thing they wanted. After the structure of the site was defines, the actual construction of the site could be done with high effienciency.",
    tags: "WordPress | PHP | Web Design",
    link: "www.creativemakeup.se",
    image:[{
      url: 'CM.jpg',
      alt: 'Website Creative Make Up'
    }]
  },{
    id: 'DreamReflect',
    title: 'DreamReflect',
    description: "For a startup I was asked to create their graphic profile. The product that they would focus on was a make-up mirror and the brief was that the graphic profile would remind of the 1920's - 1930's theater scene, but with a modern twist.",
    tags: "Wix | Webshop | Web Design",
    link: "www.dreamreflect.com",
    image:[{
      url: 'webDreamreflect.jpg',
      alt: 'DreamReflect'
    }]
  },{
    id: 'Hatice',
    title: 'Hatice Kropp & Själ',
    description: "This site for a starting entrepeneur was designed and constructed on a budget. The brief asked for a site that represented liveliness and energy with a Middle Eastern flavour. The Middle East is represented by the Turkish lilly which doubles as a logo for the company.",
    tags: "Website | HTML | CSS | Web Design",
    link: "www.hatice.se",
    image:[{
      url: 'webHatice.jpg',
      alt: 'Hatice'
    }]
  },{
    id: 'Art Tebib',
    title: 'Art Tebib',
    description: "For the artist behind Tebib's art I designed and buid a WordPress theme including a picture gallery that really shows the artistic spirit of the artist. During the work done on the site the brief tended to change with the addition of many specific wishes. This was a challenge, but the client was very happy with the final result.",
    tags: "WordPress | PHP | Web Design",
    link: "www.art-tebib.com",
    image:[{
      url: 'tebib.jpg',
      alt: 'Art Tebib'
    }]
  },{
    id: 'Tavakoly',
    title: 'Tavakoly Sjukgymnastik',
    description: "This website for a physiotherapist was made on a limited bugdet. The goal of the site was to create an easy and clear site that is visually appealing and has a clinical character.",
    tags: "WordPress | PHP | Web Design",
    link: "www.tavakolymedicaltreatment.com",
    image:[{
      url: 'webMoses.jpg',
      alt: 'Tavakoly Sjukgymnastik'
    }]
  },{
    id: 'byLO SWEDEN',
    title: 'byLO SWEDEN',
    description: "I created the graphic profile and website for this startup within the fashion industry. This site was the first website that I both designed and programmed by myself. The client was very content with the endresult.",
    tags: "WordPress | PHP | Web Design",
    link: "www.bylo.se",
    image:[{
      url: 'webBylo.jpg',
      alt: 'byLO SWEDEN'
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
