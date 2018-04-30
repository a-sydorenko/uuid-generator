'use strict'

exports.uuid4 = uuid4

function uuid4 () {
  let uuid = ''

  for (let i = 0; i < 32; i++) {
    switch (i) {
      case 8 :
      case 12 :
        uuid += '-4'
        break
      case 16 :
        uuid += '-' + (Math.random() * 4 | 8).toString(16)
        break
      case 20 :
        uuid += '-' + Math.trunc(Math.random() * 16).toString(16)

        break
      default:
        uuid += Math.trunc(Math.random() * 16).toString(16)
    }
  }

  return uuid
}
