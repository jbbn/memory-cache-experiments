const cache = require('./tools/cache.js')
const GREETING = 'I did it'
const lazyFunction = () => new Promise(
  resolve =>
    setTimeout(() => resolve(GREETING), 250)
)

const init = () => {

  // Drop some cache layer
  const cachedGreetingKey = 'gretting'
  const cachedGreeting = cache.get(cachedGreetingKey)
  if (cachedGreeting) return cachedGreeting
  else cache.set(cachedGreetingKey, GREETING)

  // regular lazy return
  return lazyFunction()
    .then(result => result)
}

module.exports = {
  GREETING,
  init
}
