'use strict'

exports.uuid4 = uuid4

let getChar = (x, b) => (Math.random() * x | b).toString(16)

function uuid4 () {
  let uuid = ''

  for (let i = 0; i < 32; i++) {
    switch (i) {
      case 8 :
      case 12 :
        uuid += '-4'
        break
      case 16 :
        uuid += '-' + getChar(4, 8)
        break
      case 20 :
        uuid += '-' + getChar(16, 0)
        break
      default:
        uuid += getChar(16, 0)
    }
  }

  return uuid
}
