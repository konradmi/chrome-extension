const WATCHABLE_EVENTS = ["click"]

const handler = (evt) => {
  alert(evt)
}

WATCHABLE_EVENTS.forEach((event) => {
  document.addEventListener(event, handler, true)
})
