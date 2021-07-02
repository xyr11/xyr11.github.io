// absolutely necessary hidden console message i swear
console.log('%c👀 Hello there :)', 'font-size: 2em', '\nJavascript errors will show here')

// Shorthand Functions
const id = id => document.getElementById(id)
const tag = tag => document.querySelector(tag)

// add html
const html = tag('html')
const body = tag('body')

// check if current tab
// let isCurrentTab
// document.addEventListener('visibilitychange', event => {
//   if (document.visibilityState === 'visible') isCurrentTab = true
//   else isCurrentTab = false
// })

// notifications
body.innerHTML += '<div id="notifs"></div>'
const newNotif = (text, length = 'short') => {
  if (!text || text === undefined) console.error('newNotif() text cannot be empty')
  // notif length
  const validLength = ['short', 'medium', 'long', 'longer']
  const time = [5600, 15600, 30600, 60600]
  // alert
  const alertId = 'ntf' + Math.floor(Math.random() * 10000)
  const alert = document.createElement('div')
  alert.classList.add('alert')
  if (validLength.indexOf(length) > -1) alert.classList.add(length)
  else return
  alert.setAttribute('id', alertId)
  alert.innerHTML = `<span>${text}</span><span class="x" onclick="this.parentNode.parentNode.removeChild(this.parentNode)">&times;</span>`
  document.getElementById('notifs').appendChild(alert)
  // delete element after a cetain amount of time
  setTimeout(() => {
    const alDiv = document.getElementById(alertId)
    if (alDiv !== null) alDiv.parentNode.removeChild(alDiv)
  }, time[validLength.indexOf(length)])
}

// output errors as a notif
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
const copyjs = (id = window.location.href, elm = null) => { // eslint-disable-line no-unused-vars
  // check if local file
  const urlOrigin = new URL(document.URL).origin
  if (id === window.location.href && (urlOrigin === 'null' || urlOrigin === 'file://')) id = 'https://xyr.codes/'
  // create element
  const inputTemp = document.createElement('input')
  inputTemp.value = id
  document.body.appendChild(inputTemp)
  inputTemp.select()
  document.execCommand('copy')
  document.body.removeChild(inputTemp)
  // add 'clicked' class
  if (elm) {
    if (!elm.classList.contains('clicked')) {
      elm.classList.add('clicked')
      newNotif('Copied link successfully!')
      setTimeout(() => { elm.classList.remove('clicked') }, 2500)
    }
  } else {
    newNotif('Copied successfully!')
  }
}

// change sidebar content
const path = html.getAttribute('data-loc') === 'root' ? '' : html.getAttribute('data-loc') // check if page is on root
if (tag('aside')) {
  tag('aside').innerHTML = `
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
  </div>
  <div class="feature" aria-labelledby="featured">
  <h1 id="featured">Featured Article</h1>
  <a href="${path}programming/diy/automate/creating-sites.html" class="post">
  <h2>DIY.automate(): Making a site that makes sites</h2>
  <p>A site that explains a site that makes sites</p>
  <p class="annual icon"> Annual</p>
  </a>
  </div>`
}
/*
<div><span id="loc"></span><span id="tools"></span><span id="settings"></span></div>
 */

// add link to <main> title
const mainTitle = tag('#mainTitle')
// don't add links if element has 'nolink' class
if (mainTitle && !mainTitle.classList.contains('nolink')) mainTitle.innerHTML += ` <a class="hlink" href="javascript:void(0)" title="Copy link to this part" aria-label="Copy link of this page" onclick="copyjs('${window.location.href}', this)" onkeypress="e =&gt; (e.key === 'Enter') && id('gototop').click()"></a>`
// add links to headings inside article.post
for (const h of ['h2', 'h3', 'h4']) {
  for (const i of document.getElementsByTagName(h)) {
    const id = i.getAttribute('id')
    if (i.parentElement === tag('article.post') && id) { // check if element is inside .post
      i.innerHTML += ` <a class="hlink" href="javascript:void(0)" title="Copy link to this part" aria-label="Copy link to this part" onclick="copyjs('${window.location.href}#${id}', this)" onkeypress="e =&gt; (e.key === 'Enter') && id('gototop').click()"></a>`
    }
  }
}

// add attributes to code samples inside textarea
for (const e of document.getElementsByClassName('codeSample')) {
  if (e.tagName === 'TEXTAREA') {
    e.setAttribute('onfocus', 'this.select()')
    e.setAttribute('readonly', '')
    e.setAttribute('aria-label', 'Code snippet')
  }
}

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
const changeDates = () => {
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
}
changeDates()

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
const commentAdder = (comment, tagLocate) => {
  const location = document.getElementsByTagName(tagLocate)[0]
  location.parentNode.insertBefore(document.createComment(comment), location.nextSibling)
}
commentAdder(['\ndo__e __xdyq__?tea__\nl/\\r\\_\\u\\n./\\(\\)d/\\ \\\n \\ \\  __ \\ \\ \\ \\ \\ \\_\\\nsu\\s\\h\\ \\k\\ \\ \\ \\ \\/_/\n f \\ \\_\\ \\_\\ \\ \\_\\ /\\_\\\nq r \\/_/\\/_/u \\/_/ \\/_/\n', '\nj _7t6_ g4ඞfsus_  _\n | | | |f ___ | ||r|h6___\nj|k|_|ඞ|y/6_t\\|h|| | / _ \\\ne|hg_r6|| u__/|i|| ||g|_| |\ne|_| |_| \\___||_||_|r\\___/\n', '\nt __j8__y e ______5 y5__g __2 r __\n /\\ \\t\\h\\ඞl/\\5 ___\\69/\\ \\/\\ \\u /\\ \\\n \\ \\ \\_\\ \\ \\ \\ \\___  \\ \\ \\_\\f\\ \\ \\ \\\n w\\ \\ey__r\\ \\ \\u ___\\ \\ \\__a _\\ \\ \\_\\\n94d\\3\\f\\ \\ \\ \\ \\h\\____ \\/_/\\ \\/42\\/_/\nypo \\ \\_\\ \\_\\ \\ \\_____\\s b\\g\\_\\ඞ4 /\\_\\\nudvtb\\/_/\\/_/i \\/_____/neve\\/_/r g\\/_/\n', '\non__na__give_______you__\nu/\\p\\_\\ \\u /\\__ ඞ__\\ /\\4\\\n \\ \\  __ \\d\\/_/\\v\\_/ \\ \\_\\\nc \\ \\ \\n\\ \\420\\_\\ \\__n\\/_/\n 6 \\ \\_\\ \\_\\ /\\______\\ /\\_\\\nx z \\/_/\\/_/m\\/______/v\\/_/\n'][Math.floor(Math.random() * 10 % 4)].replace(/[^\\/_\n| ]/g, ' '), 'head')
commentAdder('I just wanna tell you how I\'m feeling, gotta make you understand. I\'ll never gonna give you up, never gonna let you down, never gonna run around and desert you.', 'html')

// version checking
const latestVer = (local, online) => {
  local = local.split('.')
  online = online.split('.')
  const items = Math.max(local.length, online.length)
  for (let i = 0; i < items; i++) {
    if (!local[i]) local[i] = 0
    if (!online[i]) online[i] = 0
    // if version contains not-a-number, replace it with 0
    local[i] = parseInt(isNaN(local[i]) ? 0 : local[i])
    online[i] = parseInt(isNaN(online[i]) ? 0 : online[i])
    // if online version is greater than this version, return true, otherwise the loop will still loop
    if (online > local) return false
  }
  return true
}

const thisVersion = '1.3.0' // the local version
let onlineVerExists = false
// attempt to get online version (if it exists)
try {
  if (version && version !== null) onlineVerExists = true
  else onlineVerExists = false
} catch (e) {}
if (onlineVerExists) {
  const isLatest = latestVer(thisVersion, version)
  if (!isLatest) newNotif('Hey! It seems like your local version is outdated. <a href="https://github.com/xyr11/xyr11.github.io/releases">You can download the latest version here.</a> (Don\'t ask <i>how</i> we figured it out.)', 'medium')
} else {
  console.log('Cannot check if version is latest or not')
}
