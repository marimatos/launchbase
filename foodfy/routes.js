const express = require('express')
const routes = express.Router()
const site = require('./controllers/site')

routes.get('/', function(req, res){
	return res.redirect('/site');
})

//site
routes.get('/site', site.index )
routes.get('/site/about', site.about)
routes.get('/site/recipes', site.recipes)
routes.get("/site/recipes/:id", site.recipe)

module.exports = routes