import express from 'express'

import { doStuff } from './database'

;(async function init() {
  try {
    const res = await doStuff()
    console.log(res)
  } catch (e) {
    console.log(e)
  }
})()

const app = express()

app.get('/', (req, res) => {
  res.json('hello world')
})

app.listen(4040)
