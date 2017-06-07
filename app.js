import http from 'http'
import render from './lib/render'
import HelloWorld from './HelloWorld'

const app = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'})
  render(res, HelloWorld, { name: 'Jack' })
})

export default app