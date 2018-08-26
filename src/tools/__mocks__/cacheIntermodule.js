const cache = require('../cache')
const key = 'intermodule-key'
const value = 'intermodule-value'

cache.set(key, value)

module.exports = {
  key,
  value
}
