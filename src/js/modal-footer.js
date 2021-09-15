import teamTpl from '../templates/teamTpl.hbs';

const refs = {
  devLink: document.querySelector('.goit-link'),
  modalBackdrop: document.querySelector('.js-backdrop'),
  modalConteiner: document.querySelector('.card-container'),
  closeBtn: document.querySelector('.js-close-btn'),
};

const team = [
  {
    img: 'https://picua.org/images/2021/09/06/6cc514bb53e6c4bdc56f26141d3e778c.jpg',
    name: 'ALEX GVOZDIK',
    position: 'Teamlead',
    githubLink: 'https://github.com/AlexGvozdik',
    linkedInLink: 'https://www.linkedin.com/feed/',
  },

  {
    img: 'https://picua.org/images/2021/09/06/e8c0150bf2702a92c2139de99d2cc71c.jpg',
    name: 'SVITLANA YELISIEIEVA',
    position: 'Scrum master',
    githubLink: 'https://github.com/yeliseyeva',
    linkedInLink: 'https://www.linkedin.com/in/svetlana-yeliseeva-28237221b/',
  },

  {
    img: 'https://picua.org/images/2021/09/06/f201d2812a76f2449b09aa32d60668e1.jpg',
    name: 'JULIA PUTROVA',
    position: 'Developer',
    githubLink: 'https://github.com/JuliaPutrova',
    linkedInLink: 'https://www.linkedin.com/',
  },

  {
    img: 'https://picua.org/images/2021/09/06/52ff6df08b3f337b765b29e862bf365b.jpg',
    name: 'VLADYSLAV YANKO',
    position: 'Developer',
    githubLink: 'https://github.com/vladyslav-yanko',
    linkedInLink: 'https://www.linkedin.com/in/vladyslav-yanko-2b7386217',
  },

  {
    img: 'https://picua.org/images/2021/09/06/85d0892c44d77ad9b836e76f01105ed0.jpg',
    name: 'IVAN FARYGA',
    position: 'Developer',
    githubLink: 'https://github.com/Ivan-Faryga',
    linkedInLink: 'https://www.linkedin.com/',
  },

  {
    img: 'https://picua.org/images/2021/09/06/e7358be857263efbba1438d7d95f7735.jpg',
    name: 'ANATOLII SEVERYN',
    position: 'Developer',
    githubLink: 'hhttps://github.com/AnatoliiSeveryn',
    linkedInLink: 'https://www.linkedin.com/',
  },

  {
    img: 'https://picua.org/images/2021/09/06/79fd3016aadfbbee93809e662e729c6a.jpg',
    name: 'DMITRIY GLEBOV',
    position: 'Developer',
    githubLink: 'https://github.com/CommanderCoolDev',
    linkedInLink: 'https://www.linkedin.com/in/dmitriy-glebov-9aa614210',
  },

  {
    img: 'https://picua.org/images/2021/09/06/575590eb3b7a0588f7b08d1e9374a382.jpg',
    name: 'ALEKSANDRA RUDNYK',
    position: 'Developer',
    githubLink: 'https://github.com/Aleksandra-Rud',
    linkedInLink: 'https://www.linkedin.com/',
  },

  {
    img: 'https://picua.org/images/2021/09/06/598927825e09239f6d3813e93c03b13f.jpg',
    name: 'VLADYSLAV MAKHNYK',
    position: 'Developer',
    githubLink: 'https://github.com/',
    linkedInLink: 'https://www.linkedin.com/',
  },
];

refs.devLink.addEventListener('click', clickOnLink);
refs.closeBtn.addEventListener('click', closeBtn);
refs.modalBackdrop.addEventListener('click', closeModalBackdrop);
document.addEventListener('keydown', closeModalEsc);

function clickOnLink() {
  refs.modalBackdrop.classList.remove('is-hidden');
    // document.body.classList.add('modal-open');
  refs.modalConteiner.insertAdjacentHTML('beforeend', teamTpl(team));
  document.body.classList.add('modal-open');
}

function closeBtn() {
  refs.modalBackdrop.classList.add('is-hidden');
  refs.modalConteiner.innerHTML = '';
  document.body.classList.remove('modal-open');
}

function closeModalBackdrop(e) {
  if (e.target === refs.modalBackdrop) {
    refs.modalBackdrop.classList.add('is-hidden');
    refs.modalConteiner.innerHTML = '';
    document.body.classList.remove('modal-open');
  }
}

function closeModalEsc(e) {
  if (e.key === 'Escape') {
    refs.modalBackdrop.classList.add('is-hidden');
    refs.modalConteiner.innerHTML = '';
    document.body.classList.remove('modal-open');
  }
}