import './lenguages.css'

export const lenguages = ['HTML', 'CSS', 'JavaScript', 'VITE']

export const showLenguages = (lenguages) => {
  const divlenguages = document.createElement('div')
  divlenguages.className = 'divLenguages'
  document.body.appendChild(divlenguages)

  for (const lenguage of lenguages) {
    const buttonLenguage = document.createElement('button')
    const nameLenguage = document.createElement('h5')
    nameLenguage.classList = 'lenguages'
    nameLenguage.textContent = lenguage
    buttonLenguage.appendChild(nameLenguage)
    divlenguages.appendChild(buttonLenguage)
  }
}

export const showPages = () => {
  const divContainer = document.createElement('div')
  divContainer.className = 'divContainer'
  const h3Pages = document.createElement('h3')
  h3Pages.textContent = 'To see more projects, visit the pages below:'
  const divPages = document.createElement('div')
  divPages.className = 'divPages'
  divContainer.appendChild(h3Pages)
  divContainer.appendChild(divPages)

  const netlify = document.createElement('a')
  netlify.textContent = 'Netlify'
  netlify.href = 'https://app.netlify.com/teams/alicia4079/overview'
  netlify.target = '_blank'
  const vercel = document.createElement('a')
  vercel.textContent = 'Vercel'
  vercel.href = 'https://vercel.com/alicia4079s-projects'
  vercel.target = '_blank'
  divPages.appendChild(netlify)
  divPages.appendChild(vercel)

  document.body.appendChild(divContainer)
}
