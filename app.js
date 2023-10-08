const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true })) //解析post數據

app.get('/', (req, res) => {
  res.render('index')
})


app.listen(port, (req, res) => {
  console.log(`express server is running on http://localhost:${port}`)
})