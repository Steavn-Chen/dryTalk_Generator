const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./routes')
const bodyParser = require('body-parser')
const  hbsHelpers  = require("handlebars-helpers");
const app = express()
const port = 3000

app.engine('hbs', exphbs({ defaultLayouts: 'main', extname: 'hbs', helpers: hbsHelpers() } ))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use(routes)

app.listen(port, () => {
  console.log(`The web is running on http://localhost:${port}`)
})