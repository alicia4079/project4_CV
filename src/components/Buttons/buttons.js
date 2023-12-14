import './buttons.css'

export const createParr = () => {
  const divAbout = document.createElement('div')
  divAbout.classList = 'divParr'
  const pAbout = document.createElement('p')
  pAbout.innerHTML =
    'I am an internationalist changing profession. Currently, I am dedicated to customer service, music and web development.'
  divAbout.appendChild(pAbout)
  document.body.appendChild(divAbout)
}

export const showContent = () => {
  const listnav = document.querySelector('.listnav')
  const divParr = document.querySelector('.divParr')

  listnav.addEventListener('click', function () {
    divParr.style.display = divParr.style.display === 'none' ? 'block' : 'none'
  })
}
