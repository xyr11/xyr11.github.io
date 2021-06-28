const b = document.querySelector('body')
let link = b.getAttribute('data-link')
link = link ? `https://${link}--xyrlocal.netlify.app/` : 'err.html'
let ver = b.getAttribute('data-version')
ver = `Version: ${!ver ? '🛑 Error fetching version' : ver} |`

// add code because too lazy
b.innerHTML = `<header><div>This is an old version of XYR.codes and is NOT up-to-date. Before v1.2.1, all old versions are hosted in Netlify, which you can view in the iframe below. Or, preferably, you can go back to the <a href="../index.html">home page</a> or to the <a href="index.html">versions list</a>.</div>
<div id="info">${ver} <a href='${link}' target="_blank">External link</a></div></header><main><iframe src="${link}" style="border: 0;" width="100%">It seems like this page cannot be loaded. Please visit the link above.</iframe></main>` + b.innerHTML

// resize
const resize = () => document.querySelector('iframe').setAttribute('height', window.innerHeight - document.querySelector('header').scrollHeight + 1)
resize()
b.addEventListener('resize', resize)
