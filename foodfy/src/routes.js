const express = require('express')
const routes = express.Router()
const site = require('./app/controllers/site')
const recipes = require('./app/controllers/recipes')
const chefs = require('./app/controllers/chefs')

routes.get('/', function(req, res){
	return res.redirect('/site');
})

//site
routes.get('/site', site.index )
routes.get('/site/about', site.about)
routes.get('/site/recipes', site.recipes)
routes.get("/site/recipes/:id", site.recipe)

//admin - recipes
routes.get("/admin/recipes", recipes.index ); //listagem de receitas
routes.get("/admin/recipes/create", recipes.create); // mostrar formulário de criação de receita
routes.get("/admin/recipes/:id", recipes.show); // mostrar detalhe
routes.get("/admin/recipes/:id/edit", recipes.edit); // mostrar edição de receita
routes.post("/admin/recipes", recipes.post); // Cadastrar nova receita
routes.put("/admin/recipes", recipes.put); // Editar uma receita
routes.delete("/admin/recipes", recipes.delete); // Deletar uma receita

//admin - chefs
routes.get("/admin/chefs", chefs.index ); //listagem de chefs
routes.get("/admin/chefs/create", chefs.create); // mostrar formulário de criação de chef
routes.get("/admin/chefs/:id", chefs.show); // mostrar detalhe do chef
routes.get("/admin/chefs/:id/edit", chefs.edit); // mostrar edição de chef
routes.post("/admin/chefs", chefs.post); // Cadastrar novo chef
routes.put("/admin/chefs", chefs.put); // Editar um chef
routes.delete("/admin/chefs", chefs.delete); // Deletar um chef

module.exports = routes