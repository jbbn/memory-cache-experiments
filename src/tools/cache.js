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

CacheFactory.prototype.Cache = function () { return new CacheFactory }

/**
 * Class strategy
 */
// class CacheFactory extends Map {
//   getStore () { return this }
//   get length () { return this.size }
// }

// CacheFactory.prototype.Cache = function () { return new CacheFactory }

const store = new CacheFactory()

module.exports = store
