'use strict'

const { strictEqual } = require('assert')
const { uuid4, uuid4Async, uuid4AsyncClear, uuid4Clear } = require('../index')
const regexp = new RegExp('^[A-F\\d]{8}-[A-F\\d]{4}-4[A-F\\d]{3}-[89AB][A-F\\d]{3}-[A-F\\d]{12}$', 'i')
const regexpClear = new RegExp('^[A-F\\d]{12}4[A-F\\d]{3}[89AB][A-F\\d]{15}$', 'i')
const testSize = 1e5

describe('uuid v4 generators test', function () {

  it(`uuid4 tests`, function () {
    for (let i = 0; i < testSize; i++) {
      const uuid = uuid4()
      strictEqual(regexp.test(uuid), true, `invalid uuid: ${ uuid }`)
      strictEqual(36, uuid.length)
    }
  })

  it(`uuid4Clear tests`, function () {
    for (let i = 0; i < testSize; i++) {
      const uuid = uuid4Clear()
      strictEqual(regexpClear.test(uuid), true, `invalid uuid: ${ uuid }`)
      strictEqual(32, uuid.length)
    }
  })

  it(`uuid4Async tests`, async function () {
    for (let i = 0; i < 100; i++) {
      const uuid = await uuid4Async()

      strictEqual(regexp.test(uuid), true, `invalid uuid: ${ uuid }`)
      strictEqual(36, uuid.length)
    }
  })

  it(`uuid4AsyncClear tests`, async function () {
    for (let i = 0; i < 100; i++) {
      const uuid = await uuid4AsyncClear()

      strictEqual(regexpClear.test(uuid), true, `invalid uuid: ${ uuid }`)
      strictEqual(32, uuid.length)
    }
  })
})
