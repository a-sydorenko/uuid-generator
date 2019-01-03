'use strict'

module.exports = {
  uuid4,
  uuid4Async,
  uuid4AsyncClear,
  uuid4Clear
}

/**
 * @returns {string}
 * */

function uuid4 () {
  let uuid = ''

  let i = 0
  while (i < 32) {
    uuid += standardCase(i++)
  }

  return uuid
}

/**
 * @returns {string}
 * */

function uuid4Clear () {
  let uuid = ''

  let i = 0
  while (i < 32) {
    uuid += clearCase(i++)
  }

  return uuid
}

/**
 * @returns {object} <Promise> => {string}
 * */

function uuid4Async () {
  return new Promise((resolve) => {
    iterator(standardCase, '', 0, resolve)
  })
}

/**
 * @returns {object} <Promise> => {string}
 * */

function uuid4AsyncClear () {
  return new Promise((resolve) => {
    iterator(clearCase, '', 0, resolve)
  })
}

/**
 * @returns {void}
 * @callback {string}
 * */

function iterator (handler, uuid, i, cb) {
  setImmediate(() => {
    if (i === 32) {
      return cb(uuid)
    }

    iterator(handler, uuid + handler(i), ++i, cb)
  })
}

/**
 * @param {number} i
 * @returns {string}
 * */

function standardCase (i) {
  switch (i) {
    case 12 :
      return '-4'
    case 16 :
      return '-' + (Math.random() * 4 | 8).toString(16)
    case 8 :
    case 20 :
      return '-' + Math.trunc(Math.random() * 16).toString(16)
  }
  return Math.trunc(Math.random() * 16).toString(16)
}

/**
 * @param {number} i
 * @returns {string}
 * */

function clearCase (i) {
  switch (i) {
    case 12 :
      return '4'
    case 16 :
      return (Math.random() * 4 | 8).toString(16)
  }
  return Math.trunc(Math.random() * 16).toString(16)
}
