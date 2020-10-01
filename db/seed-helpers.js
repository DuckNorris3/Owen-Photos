const faker = require('faker');

const capitalize = (word) => {
  return `${word[0].toUpperCase()}${word.slice(1)}`
}

const generateRandomNumber = (max, min) => {
  return Math.floor(Math.random() * (max - min) + min);
}

const generateRandomPictureFileNumber = () => {
  const min = Math.ceil(0);
  const max = Math.floor(52);

  return generateRandomNumber(max, min);
}

const generateUsername = () => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  return `${capitalize(firstName)} ${lastName[0].toUpperCase()}.`;
}

const generatePostedOn = () => {
  return faker.date.past();
}

const generateCaption = () => {
  return faker.lorem.sentence();
}

const generateUserPic = () => {
  const picNum = generateRandomNumber(0, 35);
  return `https://obwfec-tenthop.s3.amazonaws.com/ICON${picNum}.jpg`;
}

const generateLocation = () => {
  const adjectives = ['beautiful', 'gorgeous', 'airy', 'expansive', 'charming', 'rustic', 'fantastic', 'huge', 'lively', 'picturesque', 'contemprary', 'unforgettable', 'divine', 'heavenly', 'tropical', 'superlative', 'breathtaking', 'amazing', 'calm', 'cosmopolitan', 'attractive', 'unspoiled', 'homey', 'enchanting', 'postcard-worthy', 'grand', 'spectacular', 'impressive', 'striking', 'scenic', 'pictorial', 'vivid', 'colorful'];

  const nouns = ['tent', 'campground', 'camp', 'glamp', 'glam-tent', 'cabin', 'bed', 'round-bed', 'cottage', 'glampground']

  let adjectiveIndexOne = generateRandomNumber(0, adjectives.length - 1);

  let adjectiveIndexTwo = generateRandomNumber(0, adjectives.length - 1);

  while (adjectiveIndexTwo === adjectiveIndexOne) {
    adjectiveIndexTwo = generateRandomNumber(0, adjectives.length - 1);
  }

  const nounIndex = generateRandomNumber(0, nouns.length - 1);

  return `${capitalize(adjectives[adjectiveIndexOne])} ${adjectives[adjectiveIndexTwo]} ${nouns[nounIndex]} in ${faker.address.state()}`;
}

const pictureObject = (pictureID) => {

  const picNum = generateRandomPictureFileNumber();
  const s3picURL = `https://obwfec-tenthop.s3.amazonaws.com/IMG${picNum}.jpg`;

  return {
    picUrl: s3picURL,
    helpful: generateRandomNumber(1, 8),
    caption: generateCaption()
  }
}

const generatePictureArray = () => {
  const picArray = [];
  const numPics = generateRandomNumber(3, 5);

  for(let i = 0; i < numPics; i++) {
    picArray.push(pictureObject(i));
  }

  return picArray;
}

const generateSeedObject = (siteID) => {
  return {
    siteID: siteID,
    userName: generateUsername(),
    userPic: generateUserPic(),
    postedOn: generatePostedOn(),
    location: generateLocation(),
    pictures: generatePictureArray()
  }
}

const generateFullSeed = () => {
  let seedArray = [];

  for (let i = 0; i < 100; i++) {
    seedArray.push(generateSeedObject(i));
  }

  return seedArray;
}

module.exports.generateFullSeed = generateFullSeed;