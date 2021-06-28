// absolutely necessary hidden console message i swear
console.log('%c👀 Hello there :)', 'font-size: 2em', '\nJavascript errors will show down here (if there are any)')

// Shorthand Functions
const id = id => document.getElementById(id)
const tag = tag => document.querySelector(tag)

// add html
const html = tag('html')
const body = tag('body')

// check if current tab
let isCurrentTab
document.addEventListener('visibilitychange', event => {
  if (document.visibilityState === 'visible') isCurrentTab = true
  else isCurrentTab = false
})

// notifications
body.innerHTML += '<div id="notifs-wonderland"></div>'
const newNotif = (text, length = 'short') => {
  if (!text || text === undefined) console.error('newNotif() text cannot be empty')

  // notif length
  const validLength = ['short', 'medium', 'long', 'longer']
  const time = [5600, 15600, 30600, 60600]

  const alertId = 'ntf' + Math.floor(Math.random() * 10000)
  const alert = document.createElement('div')
  alert.classList.add('alert')
  if (validLength.indexOf(length) > -1) alert.classList.add(length)
  alert.setAttribute('id', alertId)
  alert.innerHTML = text + '<span class="x" onclick="this.parentNode.parentNode.removeChild(this.parentNode)">&times;</span>'
  document.getElementById('notifs-wonderland').appendChild(alert)

  setTimeout(() => {
    const alDiv = document.getElementById(alertId)
    if (alDiv !== null) alDiv.parentNode.removeChild(alDiv)
  }, time[validLength.indexOf(length)])
}

// debug
window.addEventListener('error', e => newNotif(`${e.message} at line ${e.lineno} of ${e.filename && new URL(e.filename).pathname}`, 'medium'))

// transform search button
const changeSearchBtn = () => {
  if (!id('search')) return 0
  const isIcon = id('search').classList.contains('isIcon')
  if (window.matchMedia('(min-width: 550px)').matches) {
    if (!isIcon) {
      id('search').innerHTML = ''
      id('search').setAttribute('title', 'Search XYR.codes')
      id('search').classList.add('isIcon')
    }
  } else {
    if (isIcon) {
      id('search').innerHTML = 'Search'
      id('search').classList.remove('isIcon')
    }
  }
}
window.addEventListener('load', changeSearchBtn)
window.addEventListener('resize', changeSearchBtn)

// copy text
const copyjs = (id = window.location.href) => { // eslint-disable-line no-unused-vars
  // check if local file
  const urlOrigin = new URL(document.URL).origin
  if (urlOrigin === 'null' || urlOrigin === 'file://') id = 'https://xyr11.github.io/'
  const inputTemp = document.createElement('input')
  inputTemp.value = id
  document.body.appendChild(inputTemp)
  inputTemp.select()
  document.execCommand('copy')
  document.body.removeChild(inputTemp)

  // add 'clicked' class
  const h1 = document.querySelector('.title')
  h1.setAttribute('title', '')
  if (!h1.classList.contains('clicked')) {
    h1.classList.add('clicked')
    newNotif('Copied link successfully')
  }
}

// change sidebar content
const path = html.getAttribute('data-loc') === 'root' ? '' : '../' // check if page is on root
if (tag('aside')) {
  tag('aside').innerHTML = `
  <div><span id="loc"></span><span id="tools"></span><span id="settings"></span>
  </div>
  <div class="updates" aria-labelledby="updates">
  <h1 id="updates">Updates</h1>
  <span>
  <a href="${path}programming/iskhubslow.html" class="post">
  <h2>Introducing @IsKHubSlow</h2>
  <p>A bot that checks if KHub is slow!</p>
  <p class="new icon"> New</p>
  </a>
  <a href="https://github.com/xyr11/" class="post">
  <h2>Check my stuff at GitHub!</h2>
  <p>github.com/xyr11</p>
  <p>that's where I'll mostly spend my summer on, so yeah</p>
  <p class="promoted icon"> Promoted</p>
  </a>
  <a href="https://xyr11.github.io/simple-html-previewer/" class="post">
  <h2>A new live HTML editor: Simple HTML Previwer!</h2>
  <p>literally the simplest html previewer (that works in IE!)</p>
  <p class="new icon"> New</p>
  </a>
  </span>
  </div>`
}
/*
<div class="feature" aria-labelledby="featured">
  <h1 id="featured">Featured Article</h1>
  <a href="${path}photography/feature-photos-2020.html" class="post">
    <h2>Feature Photos of 2020 is now here!</h2>
    <p class="annual icon"> Annual</p>
  </a>
</div>
 */

// back to top
const scrollToTop = () => { // scroll to top function
  backToTop.className = ''
  const c = document.documentElement.scrollTop || document.body.scrollTop
  if (c > 0) {
    // TODO: if user starts scrolling, stop this
    window.requestAnimationFrame(scrollToTop)
    window.scrollTo(0, c - (2 + c / 80))
  }
}
// floating button
body.innerHTML += '<a id="backtotop" aria-hidden="true"></a>' // add floating button
const backToTop = id('backtotop')
window.addEventListener('scroll', () => { // check if user has scrolled 0.8x the window size and isn't on footer
  if (window.scrollY > window.screen.height * 0.8 && (window.innerHeight + window.pageYOffset) < document.body.offsetHeight - 320) {
    if (!backToTop.classList.contains('show')) backToTop.classList.add('show')
  } else {
    backToTop.classList.remove('show')
  }
})
backToTop.addEventListener('click', scrollToTop)
// go to top text
if (id('gototop')) {
  id('gototop').addEventListener('click', scrollToTop)
  id('gototop').addEventListener('keypress', e => (e.key === 'Enter') && id('gototop').click())
}

// change contents of elements with class='date'
const time = document.getElementsByClassName('time')
for (const t of time) {
  const _d = new Date(t.getAttribute('data-posted') + 'T00:00:00+08:00')
  const dSince = (Date.now() - _d.getTime()) / 86400000
  if (_d.toString() !== 'Invalid Date') {
    const text = t.getAttribute('data-text') || 'Posted'
    if (dSince < 1) t.innerHTML = `${text} today`
    else if (dSince < 2) t.innerHTML = `${text} yesterday`
    else if (dSince < 31) t.innerHTML = `${text} ${Math.floor(dSince)} days ago`
    else if (_d.getYear() === new Date().getYear()) {
      t.innerHTML = `${text} last ${_d.toLocaleString('default', { month: 'long', day: '2-digit' })}`
    } else t.innerHTML = `${text} on ${_d.toLocaleString('default', { dateStyle: 'long' })}`
  }
}

// replace <a>/contact/</a> to <a href"../contact/index.html"
for (const i of document.getElementsByTagName('a')) {
  const link = i.innerText.match(/^\/[^\n]+$/gm)
  if (link) {
    i.setAttribute('href', document.querySelector('link').getAttribute('href').replace(/((.|\/)[^\n/]*$)/gm, '') + link[0] + (link[0][link[0].length - 1] === '/' ? 'index.html' : ''))
  }
}

// add title to images with an alt value
for (const i of document.getElementsByTagName('img')) {
  const alt = i.getAttribute('alt')
  if (alt) i.setAttribute('title', alt)
}

// toolbar
id('tools')

// switch themes
const darkMode = window.matchMedia('(prefers-color-scheme: dark)')
function toggleTheme () {
  if (darkMode.matches) {
    body.classList.add('dark')
  } else {
    body.classList.remove('dark')
  }
}
toggleTheme()
darkMode.addEventListener('change', () => {
  toggleTheme()
  newNotif(`Automatically changed to ${darkMode.matches ? 'dark' : 'light'} theme`)
}) // automatic check

// ripple effect
const post = document.querySelectorAll('a.post')
for (const i of post) { // add event listeners to check for onclick
  i.addEventListener('click', e => {
    // add the element that gives the ripple effect
    const randID = 'ripple-' + Math.floor(Math.random() * 100000) // random id
    const span = document.createElement('span')
    span.setAttribute('id', randID)
    span.setAttribute('style', `left:${e.pageX - i.offsetLeft}px;top:${e.pageY - i.offsetTop}px`)
    i.appendChild(span)

    setTimeout(() => { const gnSpan = document.getElementById(randID); gnSpan.parentNode.removeChild(gnSpan) }, 1000) // delete after 1 sec
  }, false)
}

// hmm
const lmao = ['\n  __  __    __    __\n /\\ \\_\\ \\  /\\ \\  /\\ \\\n \\ \\  __ \\ \\ \\ \\ \\ \\_\\\n  \\ \\ \\ \\ \\ \\ \\ \\ \\/_/\n   \\ \\_\\ \\_\\ \\ \\_\\ /\\_\\\n    \\/_/\\/_/  \\/_/ \\/_/\n', '\n  _   _        _  _\n | | | |  ___ | || |  ___\n | |_| | / _ \\| || | / _ \\\n |  _  ||  __/| || || |_| |\n |_| |_| \\___||_||_| \\___/\n', '\n  __  __    ______    __  __    __\n /\\ \\ \\ \\  /\\  ___\\  /\\ \\/\\ \\  /\\ \\\n \\ \\ \\_\\ \\ \\ \\ \\___  \\ \\ \\_\\ \\ \\ \\ \\\n  \\ \\  __ \\ \\ \\  ___\\ \\ \\__  _\\ \\ \\_\\\n   \\ \\ \\ \\ \\ \\ \\ \\____ \\/_/\\ \\/  \\/_/\n    \\ \\_\\ \\_\\ \\ \\_____\\   \\ \\_\\   /\\_\\\n     \\/_/\\/_/  \\/_____/    \\/_/   \\/_/\n', '\n  __  __    _______   __\n /\\ \\_\\ \\  /\\__  __\\ /\\ \\\n \\ \\  __ \\ \\/_/\\ \\_/ \\ \\_\\\n  \\ \\ \\ \\ \\   \\_\\ \\__ \\/_/\n   \\ \\_\\ \\_\\ /\\______\\ /\\_\\\n    \\/_/\\/_/ \\/______/ \\/_/\n']
const commentAdder = (comment, tagLocate) => {
  const location = document.getElementsByTagName(tagLocate)[0]
  location.parentNode.insertBefore(document.createComment(comment), location.nextSibling)
}
commentAdder(lmao[Math.floor(Math.random() * 10 % 4)], 'head')
commentAdder('I just wanna tell you how I\'m feeling, gotta make you understand. I\'ll never gonna give you up, never gonna let you down, never gonna run around and desert you.', 'html')

// check version
const thisVersion = '1.3.0'
