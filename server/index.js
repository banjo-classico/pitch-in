import express from 'express'
import http from 'http'
import path from 'path'

const app = express()
const server = http.createServer(app)
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, '../build')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'))
})


server.listen(port, () => {
  console.log('Nick is now surfing the interwebs yo!')
})
