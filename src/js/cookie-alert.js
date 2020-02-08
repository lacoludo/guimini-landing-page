const cookieAlert = document.querySelector('.cookie-alert')
const cookieAccept = document.querySelector('.cookie-accept')
const cookieDecline = document.querySelector('.cookie-decline')

cookieAlert.offsetHeight

const getCookie = cname => {
  const name = cname + '='
  const decodedCookie = decodeURIComponent(document.cookie)
  const ca = decodedCookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    const c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1)
    if (c.indexOf(name) === 0) return c.substring(name.length, c.length)
  }
  return ''
}

const setCookie = (cname, cvalue, exdays) => {
  const d = new Date()
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
  const expires = 'expires=' + d.toUTCString()
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
}

if (!getCookie('cookieAccept')) cookieAlert.classList.add('show')

cookieAccept.addEventListener('click', () => {
  setCookie('cookieAccept', true, 395)
  cookieAlert.classList.remove('show')
})

cookieDecline.addEventListener('click', () =>
  cookieAlert.classList.remove('show')
)
