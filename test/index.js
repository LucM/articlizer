'use strict'

import articlizer from '../lib/index.js'
import test from 'tape'

test('awesome:test', t => {
  const message = 'everything is awesome'
  t.equals(articlizer('awesome'), message, message)
  t.end()
})

