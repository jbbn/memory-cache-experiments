const app = require('./app.js')

const appInitWaiting = timeoutInMiliseconds => () =>
  Promise.race([
    app.init(),
    new Promise((resolve, reject) => setTimeout(() => resolve('TIMEOUT'), timeoutInMiliseconds))
  ]).then(result => 
    expect(result).toBe(app.GREETING)
  )

it('The app should be initializable', () => {
  expect(typeof app.init).toBe('function')
})

it('It should be presented "I did it" after 250 miliseconds', () => {
  const appInitWaitingRegular = appInitWaiting(251)
  expect.assertions(1)

  return appInitWaitingRegular()
})

it('With cache it should be presented "I did it" after less than 100 miliseconds', () => {
  const appInitWaitingWithCache = appInitWaiting(99)
  expect.assertions(1)

  return appInitWaitingWithCache()
})
