'use strict'

const { strictEqual } = require('assert')
const { uuid4, uuid4Clear } = require('../index')
const regexp = new RegExp('^[A-F\\d]{8}-[A-F\\d]{4}-4[A-F\\d]{3}-[89AB][A-F\\d]{3}-[A-F\\d]{12}$', 'i')
const regexpClear = new RegExp('^[A-F\\d]{12}4[A-F\\d]{3}[89AB][A-F\\d]{15}$', 'i')
const testSize = 1e5

describe('uuid4 test', function () {
  it(`expect each time uuid be correct. test size = ${ testSize }`, function () {
    let x = Date.now()
    for (let i = 0; i < testSize; i++) {
      const uuid = uuid4()

      strictEqual(regexp.test(uuid), true, `invalid uuid: ${ uuid }`)
      strictEqual(36, uuid.length)
    }
    const iteration = (Date.now() - x - 2) / testSize
    console.log(`iteration time: ${ iteration }ms`)
  })

  it(`expect each time uuid be correct. test size = ${ testSize }`, function () {
    let x = Date.now()
    for (let i = 0; i < testSize; i++) {
      const uuid = uuid4Clear()

      strictEqual(regexpClear.test(uuid), true, `invalid uuid: ${ uuid }`)
      strictEqual(32, uuid.length)
    }
    const iteration = (Date.now() - x - 2) / testSize
    console.log(`iteration time: ${ iteration }ms`)
  })
})
