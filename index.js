'use strict'

module.exports = {
  uuid4,
  uuid4Async,
  uuid4Clear
}

function uuid4 () {
  let uuid = ''

  let i = 0
  while (i < 32) {
    switch (i) {
      case 12 :
        uuid += '-4'
        break
      case 16 :
        uuid += '-' + (Math.random() * 4 | 8).toString(16)
        break
      case 8 :
      case 20 :
        uuid += '-' + Math.trunc(Math.random() * 16).toString(16)

        break
      default:
        uuid += Math.trunc(Math.random() * 16).toString(16)
    }
    i++
  }

  return uuid
}

function uuid4Clear () {
  let uuid = ''

  let i = 0
  while (i < 32) {
    switch (i) {
      case 12 :
        uuid += '4'
        break
      case 8 :
      case 16 :
        uuid += (Math.random() * 4 | 8).toString(16)
        break
      default:
        uuid += Math.trunc(Math.random() * 16).toString(16)
    }
    i++
  }

  return uuid
}

function uuid4Async () {
  return new Promise((resolve) => {
    iterator('', 0, resolve)
  })
}

function iterator (uuid, i, cb) {
  setImmediate(() => {
    switch (i) {
      case 12 :
        uuid += '-4'
        break
      case 16 :
        uuid += '-' + (Math.random() * 4 | 8).toString(16)
        break
      case 8 :
      case 20 :
        uuid += '-' + Math.trunc(Math.random() * 16).toString(16)
        break
      case 32 :
        return cb(uuid)
      default:
        uuid += Math.trunc(Math.random() * 16).toString(16)
    }
    iterator(uuid, ++i, cb)
  })
}
