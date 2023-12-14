import './cards.css'

export const education = [
  {
    name: 'Degree in International Relations',
    place: 'Complutense University (Madrid)',
    time: '2013 - 2017'
  },
  {
    name: 'Full Stack Developer',
    place: 'Rock the Code',
    time: '2023 - present '
  }
]

export const experience = [
  {
    name: 'Customer service agent',
    place: 'Ocaso',
    time: '04/2022-present',
    description:
      'Specialized customer service with administrative tasks and conflict resolution.'
  },
  {
    name: 'Customer service agent',
    place: 'Canal de Isabel II',
    time: '08/2021-01/2022',
    description:
      'Customer service with database management especially in data updating.'
  }
]

export const printEducation = (education) => {
  const divEducation = document.createElement('div')
  divEducation.classList = 'divEducation'
  const h3title = document.createElement('h3')
  h3title.textContent = 'Education'
  divEducation.appendChild(h3title)

  for (const item of education) {
    const nameEducation = document.createElement('h4')
    const placeEducation = document.createElement('p')
    const timeEducation = document.createElement('p')

    nameEducation.textContent = item.name
    placeEducation.textContent = item.place
    timeEducation.textContent = item.time
    timeEducation.classList = 'time'

    divEducation.appendChild(nameEducation)
    divEducation.appendChild(placeEducation)
    divEducation.appendChild(timeEducation)

    document.body.appendChild(divEducation)
  }
}

export const showContentEducation = () => {
  const listnav1 = document.querySelectorAll('.listnav')[1]
  const divEducation = document.querySelector('.divEducation')

  listnav1.addEventListener('click', function () {
    divEducation.style.display =
      divEducation.style.display === 'none' ? 'flex' : 'none'
  })
}

export const printExperience = (experience) => {
  const divExperience = document.createElement('div')
  divExperience.classList = 'divExperience'
  const h3title2 = document.createElement('h3')
  h3title2.textContent = 'Experience'
  divExperience.appendChild(h3title2)

  for (const item of experience) {
    const nameExperience = document.createElement('h4')
    const placeExperience = document.createElement('p')
    const timeExperience = document.createElement('p')
    const descriptionExperience = document.createElement('p')

    nameExperience.textContent = item.name
    placeExperience.textContent = item.place
    timeExperience.textContent = item.time
    descriptionExperience.textContent = item.description
    descriptionExperience.classList = 'description'

    divExperience.appendChild(nameExperience)
    divExperience.appendChild(placeExperience)
    divExperience.appendChild(timeExperience)
    divExperience.appendChild(descriptionExperience)

    document.body.appendChild(divExperience)
  }
}

export const showContentExperience = () => {
  const listnav2 = document.querySelectorAll('.listnav')[2]
  const divExperience = document.querySelector('.divExperience')

  listnav2.addEventListener('click', function () {
    divExperience.style.display =
      divExperience.style.display === 'none' ? 'flex' : 'none'
  })
}

export const projects = [
  {
    image: './assets/phonehouse.png',
    name: 'Phonehouse',
    description: 'Page with HTML and CSS',
    anchor: 'https://phonehouse-html-css-project.netlify.app/'
  },
  {
    image: './assets/Shein.png',
    name: 'Shein',
    description:
      'This page have a filter to choose differents styles, sellers and price with JavaScript',
    anchor: 'https://sheinwithfilters.netlify.app/'
  },
  {
    image: './assets/pinterest.png',
    name: 'Pinterest',
    description: 'Page with a search that requests data from an API',
    anchor: 'https://asyncwebvitepint.netlify.app/'
  }
]

export const printprojects = (projects) => {
  const divProject = document.createElement('div')
  divProject.classList = 'divProject'
  const h3title3 = document.createElement('h3')
  h3title3.textContent = 'Projects'
  h3title3.classList = 'titleProject'
  document.body.appendChild(h3title3)

  for (const element of projects) {
    const divCards = document.createElement('div')
    divCards.className = 'divCards'
    const imgProject = document.createElement('img')
    imgProject.src = element.image
    imgProject.classList = 'imgProjects'
    const nameProject = document.createElement('h3')
    nameProject.textContent = element.name
    const descriptionProject = document.createElement('p')
    descriptionProject.textContent = element.description
    const anchorProject = document.createElement('a')
    anchorProject.href = element.anchor
    anchorProject.textContent = 'To see more'

    divProject.appendChild(divCards)
    divCards.appendChild(imgProject)
    divCards.appendChild(nameProject)
    divCards.appendChild(descriptionProject)
    divCards.appendChild(anchorProject)
    document.body.appendChild(divProject)
  }
  document.addEventListener('DOMContentLoaded', function () {
    const listnav3 = document.querySelectorAll('.listnav')[3]
    const divProject = document.querySelector('.divProject')

    listnav3.addEventListener('click', function () {
      divProject.scrollIntoView({ behavior: 'smooth' })
    })
  })
}
