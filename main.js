const hideScrollBar = document.querySelector('body');
const menuToggle = document.getElementById('menu-toggle');
const hamburger = document.querySelector('.hamburger');
const headerContainerTwo = document.querySelector('.head-container-two');

menuToggle.addEventListener('click', () => {
  headerContainerTwo.classList.toggle('open');
  hamburger.classList.toggle('open')
  hideScrollBar.classList.toggle('hide-scrollbar');
})

const featuredSpeakersData = [
  {
    nameOfSpeaker: 'Yochai Benkler',
    pictureOfFeatureSpeaker: './assets/images/image-1.png',
    altTeaxt: 'Featured speaker image',
    occupation: 'Director at Nvidia Corp',
    briefDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat aliquam consectetur expedita esse error.',
  },
  {
    nameOfSpeaker: 'SohYeong Noh',
    pictureOfFeatureSpeaker: './assets/images/image-3.png',
    altTeaxt: 'Featured speaker image',
    occupation: 'Director at Nvidia Corp',
    briefDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat aliquam consectetur expedita esse error.',
  },
  {
    nameOfSpeaker: 'Lila Tretikkov',
    pictureOfFeatureSpeaker: './assets/images/image-5.png',
    altTeaxt: 'Featured speaker image',
    occupation: 'Director at Nvidia Corp',
    briefDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat aliquam consectetur expedita esse error.',
  },
  {
    nameOfSpeaker: 'Julia Lenda',
    pictureOfFeatureSpeaker: './assets/images/image-4.png',
    altTeaxt: 'Featured speaker image',
    occupation: 'Director at Nvidia Corp, Lorem ipsum dolor sit amet consectetur, adipisicing',
    briefDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat aliquam consectetur expedita esse error.',
  },
  {
    nameOfSpeaker: 'Ryan Merkley',
    pictureOfFeatureSpeaker: './assets/images/image-6.png',
    altTeaxt: 'Featured speaker image',
    occupation: 'Director at Nvidia Corp',
    briefDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat aliquam consectetur expedita esse error.',
  },
  {
    nameOfSpeaker: 'Kilnam Chon',
    pictureOfFeatureSpeaker: './assets/images/image-2.png',
    altTeaxt: 'Featured speaker image',
    occupation: 'Director at Nvidia Corp',
    briefDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat aliquam consectetur expedita esse error.',
  },
];

for (let i = 0; i < featuredSpeakersData.length; i++) {
  const featuredSpeakersDataTemp = `
  <div class="featured-speaker">
    <img src="${featuredSpeakersData[i].pictureOfFeatureSpeaker}" alt="${featuredSpeakersData[i].altTeaxt}">
    <div class="txt-content">
      <h3>${featuredSpeakersData[i].nameOfSpeaker}</h3>
      <p class="italic-txt"><em>${featuredSpeakersData[i].occupation}</em></p>
      <hr>
      <p>${featuredSpeakersData[i].briefDescription}</p>
    </div>
  </div>
  `;
 const featuredSpeaker =  document.querySelector('.featured-speakers');
 featuredSpeaker.innerHTML += featuredSpeakersDataTemp;
}