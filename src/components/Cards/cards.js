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

const scrollToSection = (sectionClassName) => {
  const section = document.querySelector(`.${sectionClassName}`)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const educationNav = document.querySelectorAll('.listnav')[1]
  const experienceNav = document.querySelectorAll('.listnav')[2]

  educationNav.addEventListener('click', function () {
    scrollToSection('divEducation')
  })

  experienceNav.addEventListener('click', function () {
    scrollToSection('divExperience')
  })
})

export const printEducation = (education) => {
  const sectionEducation = document.createElement('section')
  sectionEducation.classList = 'divEducation'
  const h3title = document.createElement('h3')
  h3title.textContent = 'Education'
  sectionEducation.appendChild(h3title)

  for (const item of education) {
    const nameEducation = document.createElement('h4')
    const placeEducation = document.createElement('p')
    const timeEducation = document.createElement('p')

    nameEducation.textContent = item.name
    placeEducation.textContent = item.place
    timeEducation.textContent = item.time
    timeEducation.classList = 'time'

    sectionEducation.appendChild(nameEducation)
    sectionEducation.appendChild(placeEducation)
    sectionEducation.appendChild(timeEducation)

    document.body.appendChild(sectionEducation)
  }
}

export const showContentEducation = () => {
  const listnav1 = document.querySelectorAll('.listnav')[1]
  const sectionEducation = document.querySelector('.divEducation')

  listnav1.addEventListener('click', function () {
    sectionEducation.style.display =
      sectionEducation.style.display === 'none' ? 'flex' : 'none'
  })
}

export const printExperience = (experience) => {
  const sectionExperience = document.createElement('section')
  sectionExperience.classList = 'divExperience'
  const h3title2 = document.createElement('h3')
  h3title2.textContent = 'Experience'
  sectionExperience.appendChild(h3title2)

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

    sectionExperience.appendChild(nameExperience)
    sectionExperience.appendChild(placeExperience)
    sectionExperience.appendChild(timeExperience)
    sectionExperience.appendChild(descriptionExperience)

    document.body.appendChild(sectionExperience)
  }
}

export const showContentExperience = () => {
  const listnav2 = document.querySelectorAll('.listnav')[2]
  const sectionExperience = document.querySelector('.divExperience')

  listnav2.addEventListener('click', function () {
    sectionExperience.style.display =
      sectionExperience.style.display === 'none' ? 'flex' : 'none'
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
  },
  {
    image: './assets/worldgameshub.png',
    name: 'World Games Hub',
    description: 'Page with three propular games with JavaScript',
    anchor: 'https://worldgameshub.netlify.app/'
  }
]

export const printprojects = (projects) => {
  const sectionProjects = document.createElement('section')
  sectionProjects.classList = 'divProject'
  const divtitle = document.createElement('div')
  const h3title3 = document.createElement('h3')
  h3title3.textContent = 'Projects'
  h3title3.classList = 'titleProject'
  divtitle.appendChild(h3title3)
  sectionProjects.appendChild(divtitle)
  const divCards = document.createElement('div')
  divCards.classList = 'divCards'

  for (const element of projects) {
    const divElement = document.createElement('div')
    divElement.classList = 'divElement'
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
    anchorProject.target = '_blank'

    sectionProjects.appendChild(divCards)
    divCards.appendChild(divElement)
    divElement.appendChild(imgProject)
    divElement.appendChild(nameProject)
    divElement.appendChild(descriptionProject)
    divElement.appendChild(anchorProject)
    document.body.appendChild(sectionProjects)
  }
  document.addEventListener('DOMContentLoaded', function () {
    const listnav3 = document.querySelectorAll('.listnav')[3]
    const sectionProjects = document.querySelector('.divProject')

    listnav3.addEventListener('click', function () {
      sectionProjects.scrollIntoView({ behavior: 'smooth' })
    })
  })
}
