'use strict'

const assert = require('assert')
const { uuid4 } = require('../index')
const regexp = new RegExp('^[A-F\\d]{8}-[A-F\\d]{4}-4[A-F\\d]{3}-[89AB][A-F\\d]{3}-[A-F\\d]{12}$', 'i')
const testSize = 1e5

describe('uuid4 test', function () {
  it(`expect each time uuid be correct. test size = ${ testSize }`, function () {
    let x = Date.now()
    for (let i = 0; i < testSize; i++) {
      const uuid = uuid4()

      assert.equal(regexp.test(uuid), true, `invalid uuid: ${ uuid }`)
    }
    const iteration = (Date.now() - x - 2) / testSize
    console.log(`iteration time: ${ iteration }ms`)
  })
})
