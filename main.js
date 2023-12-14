import { createParr, showContent } from './src/components/Buttons/buttons'
import {
  education,
  experience,
  printEducation,
  printExperience,
  printprojects,
  projects,
  showContentEducation,
  showContentExperience
} from './src/components/Cards/cards'
import {
  lenguages,
  showLenguages,
  showPages
} from './src/components/lenguages/lenguages'
import './style.css'

const header = document.createElement('header')
const imgAlicia = document.createElement('img')
imgAlicia.src = './assets/photo.jpg'
const titleName = document.createElement('h1')
titleName.textContent = 'Alicia Gálvez Rodríguez'
const nav = document.createElement('nav')
const ulnav = document.createElement('ul')
const elementsList = ['About me', 'Education', 'Experience', 'Projects']

for (const element of elementsList) {
  const listnav = document.createElement('li')
  listnav.textContent = element
  listnav.className = 'listnav'
  ulnav.appendChild(listnav)
}

header.appendChild(imgAlicia)
header.appendChild(titleName)
header.appendChild(nav)
nav.appendChild(ulnav)
document.body.appendChild(header)

createParr()
showContent()

const divdirection = document.createElement('div')
divdirection.className = 'direction'
const h3direct = document.createElement('h3')
h3direct.textContent = 'Calle del Rey, 62 Aranjuez (Madrid)'
const buttonContact = document.createElement('button')
const aButton = document.createElement('a')
aButton.textContent = 'Contact me'
aButton.href = 'mailto:alicia4079@gmail.com'
buttonContact.appendChild(aButton)
divdirection.appendChild(h3direct)
divdirection.appendChild(buttonContact)
document.body.appendChild(divdirection)

printEducation(education)
printExperience(experience)
showContentEducation(education)
showContentExperience(experience)
printprojects(projects)
showLenguages(lenguages)
showPages()

const footer = document.createElement('footer')
const pFooter = document.createElement('p')
pFooter.textContent = '©️ Created by Alicia Gálvez Rodríguez 2023'
footer.appendChild(pFooter)

document.body.appendChild(footer)
