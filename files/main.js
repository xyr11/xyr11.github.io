console.log('%c👀 Hello there :)', 'font-size: 2em', '\nJavascript errors will show down here (if there are any)')

// add some extra html
// document.getElementsByTagName('body')[0].innerHTML += '<a id="backtotop"></a>\n<div id="notifs-wonderland"></div>'
const body = document.getElementsByTagName('body')[0]
body.innerHTML += '<div id="notifs-wonderland"></div>'

// change sidebar content
const path = document.getElementsByTagName('html')[0].getAttribute('data-loc') === 'root' ? '' : '../' // check if page can be found on root
const sidebar = `<div class="updates" aria-labelledby="updates">
  <h1 id="updates">Updates</h1>
  <a href="${path}programming/iskhubslow.html" class="post">
    <h2>Introducing @IsKHubSlow</h2>
    <p>A bot that checks if KHub is slow!</p>
    <p><i class="icon-drawer"></i> New</p>
  </a>
  <a href="${path}journals/math2qaa.html" class="post">
    <h2>Released Math 3 2Q Alternative Assessment</h2>
    <p>A 2nd quarter Math 3 project</p>
    <p><i class="icon-drawer"></i> New</p>
  </a>
</div>
<div class="feature" aria-labelledby="featured">
  <h1 id="featured">Featured Article</h1>
  <a href="${path}photography/feature-photos-2020.html" class="post">
    <h2>Feature Photos of 2020 is now here!</h2>
    <p><i class="icon-calendar"></i> Annual</p>
  </a>
</div>`
const aside = document.getElementsByTagName('aside')
if (typeof aside !== 'undefined') { aside[0].innerHTML = sidebar }

// back to top button
const scrollBtn = document.getElementById('backtotop')
const scrollFunc = () => {
  scrollBtn.className = ''
  if (window.scrollY > window.screen.height * 0.8 && (window.innerHeight + window.pageYOffset) < document.body.offsetHeight - 260) {
    scrollBtn.className = 'show'
  }
}
window.addEventListener('scroll', scrollFunc)
const scrollToTop = () => {
  scrollBtn.className = ''
  const c = document.documentElement.scrollTop || document.body.scrollTop
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop)
    window.scrollTo(0, c - c / 50)
  }
}
scrollBtn.onclick = e => { e.preventDefault(); scrollToTop() }

function scrollEnterKey () {
  document.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) scrollToTop()
  })
}

// create a notification bubble
function newNotif (text) {
  if (!text || text === undefined) throw 'newNotif() text cannot be empty'

  const alertId = 'ntf' + Math.floor(Math.random() * 1000)
  const alert = document.createElement('div')
  alert.setAttribute('class', 'alert')
  alert.setAttribute('id', alertId)
  alert.innerHTML = text + '<span class="x" onclick="this.parentNode.parentNode.removeChild(this.parentNode)">&times;</span>'
  document.getElementById('notifs-wonderland').appendChild(alert)

  setTimeout(() => {
    const alDiv = document.getElementById(alertId)
    if (alDiv !== null) alDiv.parentNode.removeChild(alDiv)
  }, 4800)
}

// copy text
function copyjs (id = window.location.href) {
  const inputTemp = document.createElement('input')
  inputTemp.value = id
  document.body.appendChild(inputTemp)
  inputTemp.select()
  document.execCommand('copy')
  document.body.removeChild(inputTemp)

  // if there isn't a 'clicked' class, add them
  const h1 = document.querySelector('.title')
  h1.setAttribute('title', '')
  if (!h1.classList.contains('clicked')) {
    h1.classList.add('clicked')
    newNotif('Copied link successfully')
  }
}

// change contents of elements with class='date'
const time = document.getElementsByClassName('time')
for (let i = 0; i < time.length; i++) {
  const _d = new Date(time[i].getAttribute('data-posted') + 'T00:00:00+08:00')
  const dt = _d.toLocaleString('default', { dateStyle: 'long' })
  const dSince = (Date.now() - _d.getTime()) / (1000 * 60 * 60 * 24)
  if (dt !== 'Invalid Date') {
    if (dSince < 1) {
      time[i].innerHTML = 'Posted today'
    } else if (dSince < 2) {
      time[i].innerHTML = 'Posted yesterday'
    } else if (dSince < 31) {
      time[i].innerHTML = `Posted ${Math.floor(dSince)} days ago`
    } else if (_d.getYear() === new Date().getYear()) {
      time[i].innerHTML = `Posted last ${_d.toLocaleString('default', { month: 'long', day: '2-digit' })}`
    } else {
      time[i].innerHTML = `Posted on ${dt}`
    }
  }
}

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

// lmao
const lmao = ['\n  __  __    __    __\n /\\ \\_\\ \\  /\\ \\  /\\ \\\n \\ \\  __ \\ \\ \\ \\ \\ \\_\\\n  \\ \\ \\ \\ \\ \\ \\ \\ \\/_/\n   \\ \\_\\ \\_\\ \\ \\_\\ /\\_\\\n    \\/_/\\/_/  \\/_/ \\/_/\n', '\n  _   _        _  _\n | | | |  ___ | || |  ___\n | |_| | / _ \\| || | / _ \\\n |  _  ||  __/| || || |_| |\n |_| |_| \\___||_||_| \\___/\n', '\n  __  __    ______    __  __    __\n /\\ \\ \\ \\  /\\  ___\\  /\\ \\/\\ \\  /\\ \\\n \\ \\ \\_\\ \\ \\ \\ \\___  \\ \\ \\_\\ \\ \\ \\ \\\n  \\ \\  __ \\ \\ \\  ___\\ \\ \\__  _\\ \\ \\_\\\n   \\ \\ \\ \\ \\ \\ \\ \\____ \\/_/\\ \\/  \\/_/\n    \\ \\_\\ \\_\\ \\ \\_____\\   \\ \\_\\   /\\_\\\n     \\/_/\\/_/  \\/_____/    \\/_/   \\/_/\n', '\n  __  __    _______   __\n /\\ \\_\\ \\  /\\__  __\\ /\\ \\\n \\ \\  __ \\ \\/_/\\ \\_/ \\ \\_\\\n  \\ \\ \\ \\ \\   \\_\\ \\__ \\/_/\n   \\ \\_\\ \\_\\ /\\______\\ /\\_\\\n    \\/_/\\/_/ \\/______/ \\/_/\n']
const commentAdder = (comment, tagLocate) => {
  const location = document.getElementsByTagName(tagLocate)[0]
  location.parentNode.insertBefore(document.createComment(comment), location.nextSibling)
}
commentAdder(lmao[Math.floor(Math.random() * 10 % 4)], 'head')
commentAdder('© 2021 by Xyrus Kurt Roldan. \n\nI just wanna tell you how I\'m feeling, gotta make you understand. I\'ll never gonna give you up, never gonna let you down, never gonna run around and desert you. I\'ll never gonna make you cry, never gonna say goodbye, never gonna tell a lie and hurt you. You just got rickrolled.', 'html')
