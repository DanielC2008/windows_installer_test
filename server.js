'use strict'

const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()

app.use(express.static('client'))


app.listen(PORT, () => console.log(`port listening on: ${PORT}`))
