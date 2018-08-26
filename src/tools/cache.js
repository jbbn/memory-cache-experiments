/**
 * Prototype strategy
 */
const CacheFactory = function () {
  const store = new Map()

  this.getStore = () => new Map(store)
  this.set = store.set.bind(store)
  this.get = store.get.bind(store)

  Object.defineProperty(this, 'length', {
    get: () => store.size,
    set: function (len) {}
  })
}

/**
 * Class strategy
 */
// class CacheFactory extends Map {
//   getStore () { return new Map(this) }
//   get length () { return this.size }
//   set length (len) {}
// }

CacheFactory.prototype.Cache = function () { return new CacheFactory.prototype.constructor }

const store = new CacheFactory()

module.exports = store
