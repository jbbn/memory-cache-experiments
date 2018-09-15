const cache = require('./cache')
const separatedcache = new cache.Cache()

test('It should exists the cache tool', () => {
  const store = cache.getStore()
  expect(typeof store).toBeTruthy()
})

test('It should NOT be possible to access the "store" directly (Security)', () => {
  expect(typeof cache.store).toBe('undefined')
})

test('It should exists a "set" function', () => {
  expect(typeof cache.set).toBe('function')
})

test('It should be possible to get the lenght of the cache "store"', () => {
  expect(cache.length).toBe(0)
})

test('It should be possible to write a new record', () => {
  const expectedStoreInitialSize = cache.length + 1
  const key = 'new-record-key'
  const value = 'new-record-value'
  cache.set(key, value)
  expect(cache.length).toBe(expectedStoreInitialSize)
})

test('It should exists a "get" function', () => {
  expect(typeof cache.get).toBe('function')
})

test('It should be possible to retrieve a record', () => {
  const key = 'retrieve-record-key'
  const value = 'retrieve-record-value'
  cache.set(key, value)
  expect(cache.get(key)).toBe(value)
})

test('It should overwrite the previous value when set a repeated key', () => {
  const key = 'key'
  const value = 'value'
  const overwriteValue = 'overwrite-value'
  cache.set(key, value)
  cache.set(key, overwriteValue)
  expect(cache.get(key)).toBe(overwriteValue)
})

test('It should be possible to create a separated cache', () => {
  expect(typeof separatedcache.getStore).toBe('function')
})

test('It should be empty a new separated cache', () => {
  expect(separatedcache.length).toBe(0)
})

test('It should NOT be possible to empty the "store" directly (Security)', () => {
  const otherCache = new cache.Cache()
  const store = otherCache.getStore()
  const key = 'key'
  const otherKey = 'other-key'
  const value = 'value'
  otherCache.set(key, value)
  otherCache.set(otherKey, value)
  otherCache.length = 0
  store.size = 0
  expect(otherCache.length).toBe(2)
})

test('It should NOT be possible to edit the "store" directly (Security)', () => {
  const otherCache = new cache.Cache()
  const store = otherCache.getStore()
  const key = 'key'
  const value = 'value'
  store.set(key, value)
  expect(otherCache.length).toBe(0)
})

test('It should be possible to use the main cache anywhere', () => {
  const { key, value } = require('./__mocks__/cacheIntermodule')
  expect(cache.get(key)).toBe(value)
})
