const WATCHABLE_EVENTS = ["click"]

const handler = (evt) => {
  alert(evt)
}

WATCHABLE_EVENTS.forEach((event) => {
  document.addEventListener(event, handler, true)
})

const para = document.createElement('p')
para.style.setProperty('color', 'red')
const node = document.createTextNode('Added by Chrome extension')
para.appendChild(node)

document.body.appendChild(para)
