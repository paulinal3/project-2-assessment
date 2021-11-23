const express = require('express')
const methodOverride = require('method-override')
const app = express()
const db = require('./models')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(express.static('static'))
app.use(methodOverride('_method'))

// WRITE YOUR ROUTES HERE /////////////

// home route
app.get('/', (req, res) => {
    db.widget.findAll()
    .then(foundWidgets => {
        console.log('these are the found widgets\n', foundWidgets)
        res.render('index', {widgets: foundWidgets})
    })
})

// GET/INDEX ROUTE TO DISPLAY ALL WIDGETS

// GET/NEW ROUTE TO SHOW FORM TO ADD A NEW WIDGET

// DELETE ROUTE TO DELETE A WIDGET

// YOUR ROUTES ABOVE THIS COMMENT /////

app.listen(3000, () => {
    console.log('connected to wacky widgets 🤪😵‍💫')
})