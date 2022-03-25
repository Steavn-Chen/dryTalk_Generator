const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const roleData = require('./role.json')
const { getDryTalk } = require('./tools/drytalk-generator.js')
const app = express()
const port = 3000

app.engine('hbs', exphbs({ defaultLayouts: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

 app.get('/', (req, res) => {
   res.render('index', { role: roleData})
 })

app.post("/", (req, res) => {
  console.log(req.body)
  const tasker = req.body.role;
  console.log(tasker)
  const dryTalk = getDryTalk(req.body)
  console.log(dryTalk)
  res.render("index", { role: roleData, dryTalk , tasker: req.body});
});

app.listen(port, () => {
  console.log(`The web is running on http://localhost:${port}`)
})