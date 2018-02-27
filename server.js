if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const Gun = require('gun')
const os = require('os')
const micro = require('micro')
const { parse: urlParse } = require('url')
const { setup, login, callback, logout } = require('./api')
const redirect = (res, location, statusCode = 302) => { res.statusCode = statusCode; res.setHeader('Location', location); res.end() }
const { SESSION_KEY } = require('./secrets')
const session = require('micro-cookie-session')({
  name: 'session',
  keys: [SESSION_KEY],
  maxAge: 24 * 60 * 60 * 1000
})
const next = require('next')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const parseAgenda = require('./lib/parse-agenda')
const dataFilePath = `${os.tmpdir()}/data.json`

const server = micro(async (req, res) => {
  if (Gun.serve(req, res)) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(req)
    return
  }
  session(req, res)
  const { pathname } = await urlParse(req.url, true)
  if (pathname === '/api/login') {
    return login(req, res)
  } else if (pathname === '/api/logout') {
    req.session = null
    return logout(req, res)
  } else if (pathname === '/api/callback') {
    try {
      const callbackData = await callback(req, res)
      req.session.data = callbackData.userProfile[0]
      redirect(res, '/')
    } catch (error) {
      throw error
    }
  } else if (pathname.includes('/api/agenda')) {
    const urlSplit = pathname.split('/')
    const meetingId = urlSplit[urlSplit.length - 1]
    const data = await parseAgenda(meetingId)
    return data
  } else {
    return handle(req, res)
  }
})

const gun = Gun({
  file: dataFilePath,
  web: server
})

// Sync everything
gun.on('out', {get: {'#': {'*': ''}}})

app.prepare().then(() => {
  server.listen(port, err => {
    if (err) throw err
    setup()
    console.log(`> Ready on http://localhost:${port}`)
    console.log(`> data filePath: ${dataFilePath}`)
  })
})
