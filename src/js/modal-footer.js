// const refs = {
//     modalFooter:document.querySelector('.modal-footer-js'),
//     devLink:document.querySelector('.goit-link'),
//     btnClose:document.querySelector('.button-close')
// }

// refs.devLink.addEventListener('click', clickOnLink);
// refs.btnClose.addEventListener('click', clickOnBtnClose);
// document.addEventListener('keydown', clickOnEsc)

// function clickOnLink () {
//     refs.modalFooter.classList.remove('is-hidden')
// }

// function clickOnBtnClose(){
//     refs.modalFooter.classList.add('is-hidden')
// }

// function clickOnEsc(){
//     if (refs.modalFooter.classList.contains('is-hidden')){
//         return;
//     } else {
//         refs.modalFooter.classList.add('is-hidden')
//     }
// }

import teamTpl from '../templates/teamTpl.hbs';

const refs = {
    devLink:document.querySelector('.goit-link'),
    modal:document.querySelector('.js-backdrop'),
}

const team = [
    {
        img: "./images/gvozdik.png",
        name: "ALEX GVOZDIK",
        position: 'Teamlead',
        githubLink: "https://github.com/AlexGvozdik",
        linkedInLink: "https://www.linkedin.com/feed/",
    },

    {
        img: "./images/yeliseeva.png",
        name: "SVITLANA YELISIEIEVA",
        position: 'Scrum master',
        githubLink: "https://github.com/yeliseyeva",
        linkedInLink: "https://www.linkedin.com/in/svetlana-yeliseeva-28237221b/",
    },

    {
        img: "./images/yeliseeva.png",
        name: "SVITLANA YELISIEIEVA",
        position: 'Scrum master',
        githubLink: "https://github.com/yeliseyeva",
        linkedInLink: "https://www.linkedin.com/in/svetlana-yeliseeva-28237221b/",
    },

    {
        img: "./images/yeliseeva.png",
        name: "SVITLANA YELISIEIEVA",
        position: 'Scrum master',
        githubLink: "https://github.com/yeliseyeva",
        linkedInLink: "https://www.linkedin.com/in/svetlana-yeliseeva-28237221b/",
    },

    {
        img: "./images/yeliseeva.png",
        name: "SVITLANA YELISIEIEVA",
        position: 'Scrum master',
        githubLink: "https://github.com/yeliseyeva",
        linkedInLink: "https://www.linkedin.com/in/svetlana-yeliseeva-28237221b/",
    },

    {
        img: "./images/yeliseeva.png",
        name: "SVITLANA YELISIEIEVA",
        position: 'Scrum master',
        githubLink: "https://github.com/yeliseyeva",
        linkedInLink: "https://www.linkedin.com/in/svetlana-yeliseeva-28237221b/",
    },

    {
        img: "./images/yeliseeva.png",
        name: "SVITLANA YELISIEIEVA",
        position: 'Scrum master',
        githubLink: "https://github.com/yeliseyeva",
        linkedInLink: "https://www.linkedin.com/in/svetlana-yeliseeva-28237221b/",
    },

    {
        img: "./images/yeliseeva.png",
        name: "SVITLANA YELISIEIEVA",
        position: 'Scrum master',
        githubLink: "https://github.com/yeliseyeva",
        linkedInLink: "https://www.linkedin.com/in/svetlana-yeliseeva-28237221b/",
    },

    {
        img: "./images/yeliseeva.png",
        name: "SVITLANA YELISIEIEVA",
        position: 'Scrum master',
        githubLink: "https://github.com/yeliseyeva",
        linkedInLink: "https://www.linkedin.com/in/svetlana-yeliseeva-28237221b/",
    },

    {
        img: "./images/yeliseeva.png",
        name: "SVITLANA YELISIEIEVA",
        position: 'Scrum master',
        githubLink: "https://github.com/yeliseyeva",
        linkedInLink: "https://www.linkedin.com/in/svetlana-yeliseeva-28237221b/",
    },
]

refs.devLink.addEventListener('click', clickOnLink)

function clickOnLink () {
    refs.modal.classList.remove('is-hidden');
    refs.modal.insertAdjacentHTML('beforeend', teamTpl(team))
}

function createTeamCard(team){
    return team.map(teamTpl).join('')
}