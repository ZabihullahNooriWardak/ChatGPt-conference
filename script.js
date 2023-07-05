// js for burger Menu
// for showing popUp using burgerMenu
const burgerMenuX = document.querySelector('header .bx');
burgerMenuX.addEventListener('click', () => {
  document.querySelector('.burger-menue').style.display = 'inline';
  // for hiding the speakers images while burgerMenu is opened
  const arrImages = document.getElementsByClassName('images');
  for (let i = 0; i < arrImages.length; i += 1) {
    arrImages[i].style.display = 'none';
  }
});
// for hiding popUp using X.
const burgerMenu = document.querySelector('.burger-menue .bx');
burgerMenu.addEventListener('click', () => {
  document.querySelector('.burger-menue').style.display = 'none';
  const arrImages = document.getElementsByClassName('images');
  for (let i = 0; i < arrImages.length; i += 1) {
    arrImages[i].style.display = 'inline';
  }
});

// for hiding burgerMenu when clicking popUp
const menuArray = document.getElementsByClassName('menue');
for (let i = 0; i < menuArray.length; i += 1) {
  menuArray[i].addEventListener('click', () => {
    document.querySelector('.burger-menue').style.display = 'none';
    const arrImages = document.getElementsByClassName('images');
    for (let i = 0; i < arrImages.length; i += 1) {
      arrImages[i].style.display = 'inline';
    }
  });
}
// object for creating dynamic cards
const ArraySpeakers = [
  {
    path: 'images/OpenAI-Sam-Altman-h_15241239-final.webp',
    name: 'Sam Altman',
    job: 'Founder of ChatGPT',
    description: `  Sam Altman is an entrepreneur and computer scientist who has played
  a key role in the development of OpenAI. He served as the president
  of Y Combinator, a well-known startup accelerator, and later became
  the CEO of OpenAI.`,
  },
  {
    path: 'images/1_bmlZwr3rhfqMDGVnQR2BXA.jpg',
    name: 'Ilya Sutskever',
    job: 'Software Engineer at Open AI',
    description: `        is a Russian-born Israeli-Canadian computer scientist working in
  machine learning,[1] who co-founded and serves as Chief Scientist of
  OpenAI`,
  },
  {
    path: 'images/download.jpeg',
    name: 'Greg Brockman',
    job: 'AI developer',
    description: ` Greg Brockman is a computer scientist and the former CTO (Chief
    Technology Officer) of OpenAI. He has been involved in the technical
    aspects of OpenAI's projects and has played a significant role in
    the development of GPT and other AI technologies. Brockman has a
    strong background in software engineering and has contributed to the
    advancement of AI research and applications`,
  },
  {
    path: 'images/fff.jpeg',
    name: 'Samy Bengio',
    job: 'Reasearcher at OpenAI',
    description: `  Samy Bengio is a research scientist at OpenAI and has contributed to the
    development of GPT. He has expertise in deep learning and has worked
    on various research projects in the field of artificial
    intelligence.`,
  },
  {
    path: 'images/EI0F2beM_400x400.jpeg',
    name: 'Alec Radford',
    job: 'Software Engineer',
    description: `Alec Radford is a research scientist and one of the original authors
    of the GPT model. He has made significant contributions to natural
    language processing and deep learning research.`,
  },
  {
    path: 'images/me_new.jpg',
    name: 'Karpathy',
    job: 'Researcher at OpenAI',
    description: `Andrej Karpathy is a research scientist and the Director of AI at
    Tesla. He was previously a research scientist at OpenAI and has made
    significant contributions to the field of deep learning, including
    work on recurrent neural networks and natural language processing.`,
  },
];

// card creating started
window.onload = () => {
  const containerSpeaker = document.querySelector('.container-speaker');
  for (let i = 0; i < 6; i += 1) {
    const speakerImage = document.createElement('img');
    speakerImage.src = 'images/speaker.jpg';
    speakerImage.className = 'speaker';
    const speaker = document.createElement('div');
    speaker.className = 'speaker';
    const images = document.createElement('div');
    images.className = 'images';
    const personImage = document.createElement('img');
    personImage.className = 'man';
    const detail = document.createElement('div');
    detail.className = 'details';
    const nam = document.createElement('h4');
    const job = document.createElement('h5');
    const hr = document.createElement('hr');
    const description = document.createElement('p');
    speaker.appendChild(images);
    images.appendChild(speakerImage);
    images.appendChild(personImage);
    detail.appendChild(nam);
    detail.appendChild(job);
    detail.append(hr, description);
    speaker.appendChild(detail);
    personImage.src = ArraySpeakers[i].path;
    nam.textContent = ArraySpeakers[i].name;
    job.textContent = ArraySpeakers[i].job;
    description.textContent = ArraySpeakers[i].description;
    containerSpeaker.appendChild(speaker);
  }
};
