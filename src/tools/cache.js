/**
 * Prototype strategy
 */
const CacheFactory = function () {
  const store = new Map()

  this.getStore = () => store
  this.set = store.set.bind(store)
  this.get = store.get.bind(store)
  Object.defineProperty(this, 'length', { get: () => store.size })
}

/**
 * Class strategy
 */
// class CacheFactory extends Map {
//   getStore () { return this }
//   get length () { return this.size }
// }

CacheFactory.prototype.Cache = function () { return CacheFactory.prototype.constructor }

const store = new CacheFactory()

module.exports = store
