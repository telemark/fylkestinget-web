const Gun = require('gun')
const os = require('os')
const micro = require('micro')
const { json } = micro
const { parse } = require('url')
const redirect = (res, location, statusCode = 302) => { res.statusCode = statusCode; res.setHeader('Location', location); res.end() }
const { JWT_SECRET, SESSION_KEY } = require('./secrets')
const session = require('micro-cookie-session')({
  name: 'session',
  keys: [SESSION_KEY],
  maxAge: 24 * 60 * 60 * 1000
})
const next = require('next')
const jwt = require('jsonwebtoken')
const { AUTH_URL } = require('./config')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const server = micro(async (req, res) => {
  if(Gun.serve(req, res)) {
    console.log('Gun req', req)
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(req)
    return
  }
  session(req, res)
  const { query, pathname } = await parse(req.url, true)
  const payload = req.method === 'POST' ? await json(req) : query
  if (pathname.includes('/api/login')) {
    const token = payload.jwt
    try {
      const { data: verifiedToken } = jwt.verify(token, JWT_SECRET)
      req.session.decodedToken = verifiedToken
      redirect(res, '/')
    } catch (error) {
      console.error(error)
      redirect(res, AUTH_URL)
    }
  } else if (pathname.includes('/api/logout')) {
    req.session = null
    redirect(res, AUTH_URL)
  } else {
    return handle(req, res)
  }
})

const gun = Gun({
  file: `${os.tmpdir()}/data.json`,
  web: server
})

// Sync everything
gun.on('out', {get: {'#': {'*': ''}}})

app.prepare().then(() => {
  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
