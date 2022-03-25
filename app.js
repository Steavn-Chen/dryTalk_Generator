const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const roleData = require('./role.json')
const { getDryTalk } = require('./tools/drytalk-generator.js')
const  hbsHelpers  = require("handlebars-helpers");
const app = express()
const port = 3000

app.engine('hbs', exphbs({ defaultLayouts: 'main', extname: 'hbs', helpers: hbsHelpers() } ))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

 app.get('/', (req, res) => {
   res.render('index', { role: roleData})
 })

app.post("/", (req, res) => {
  const dryTalk = getDryTalk(req.body)
  let disMessage
    if (req.body.role === undefined) {
      disMessage = {
        message: 'error',
        hint: "請選擇職業再送出 !"
      } 
    return res.render("index", { role: roleData, disMessage: disMessage });
   }
  disMessage = {
    message: "success",
    hint: "多麼完美的幹話 !",
  }; 
  res.render("index", { role: roleData, dryTalk, tasker: req.body.role, disMessage: disMessage });
});

app.listen(port, () => {
  console.log(`The web is running on http://localhost:${port}`)
})