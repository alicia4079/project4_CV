import './lenguages.css'

export const lenguages = ['HTML', 'CSS', 'JavaScript', 'VITE']

export const showLenguages = (lenguages) => {
  const divLenguages = document.createElement('div')
  divLenguages.className = 'divLenguages'

  const searchInput = document.createElement('input')
  searchInput.type = 'text'
  searchInput.placeholder = 'Search technology'
  searchInput.addEventListener('input', () =>
    filterLenguages(searchInput.value)
  )

  const h3titletec = document.createElement('h3')
  h3titletec.textContent = 'Technologies'
  h3titletec.classList = 'h3tec'

  const divButtons = document.createElement('div')
  divButtons.classList = 'divButtons'

  divLenguages.appendChild(h3titletec)
  divLenguages.appendChild(searchInput)
  divLenguages.appendChild(divButtons)

  document.body.appendChild(divLenguages)

  const filterLenguages = (searchTerm) => {
    divButtons.innerHTML = ''

    const filteredLenguages = lenguages.filter((lenguage) =>
      lenguage.toLowerCase().includes(searchTerm.toLowerCase())
    )

    for (const lenguage of filteredLenguages) {
      const buttonLenguage = document.createElement('button')
      const nameLenguage = document.createElement('h5')
      nameLenguage.textContent = lenguage

      buttonLenguage.appendChild(nameLenguage)
      divButtons.appendChild(buttonLenguage)
    }
  }

  filterLenguages('')
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
