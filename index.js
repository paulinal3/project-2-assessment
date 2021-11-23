const express = require('express')
const methodOverride = require('method-override')
const app = express()
const db = require('./models')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(express.static('static'))
app.use(methodOverride('_method'))

// WRITE YOUR ROUTES HERE /////////////

// HOME ROUTE/INDEX ROUTE DISPLAYING ALL WIDGETS
app.get('/', (req, res) => {
    db.widget.findAll()
    .then(foundWidgets => {
        console.log('these are the found widgets\n', foundWidgets)
        res.render('index', {widgets: foundWidgets})
    })
    .catch(error => {
        console.error
    })
})

// POST/CREATE ROUTE TO ADD A NEW WIDGET
app.post('/', (req, res) => {
    console.log('these are the widget details\n', req.body)
    db.widget.create({
        description: req.body.description,
        quantity: req.body.quantity
    })
    .then(createdWidget => {
        console.log('this is the created widget\n', createdWidget)
        res.redirect('/')
    })
    .catch(error => {
        console.error
    })
})

// DELETE ROUTE TO DELETE A WIDGET
app.delete('/', (req, res) => {
    db.widget.destroy({
        where: {
            description: req.body.description,
            quantity: req.body.quantity
        }
    })
    .then(deletedWidgeted => {
        console.log('this was the deleted widget\n', deletedWidgeted)
        res.redirect('/')
    })
})

// YOUR ROUTES ABOVE THIS COMMENT /////

app.listen(process.env.PORT || 3000, () => {
    console.log('connected to wacky widgets 🤪😵‍💫')
})