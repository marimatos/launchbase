const express = require('express')
const routes = express.Router()
const site = require('./controllers/site')
const recipes = require('./controllers/recipes')

routes.get('/', function(req, res){
	return res.redirect('/site');
})

//site
routes.get('/site', site.index )
routes.get('/site/about', site.about)
routes.get('/site/recipes', site.recipes)
routes.get("/site/recipes/:id", site.recipe)

//admin
routes.get("/admin/recipes", recipes.index ); //listagem de receitas
routes.get("/admin/recipes/create", recipes.create); // mostrar formulário de criação de receita
routes.get("/admin/recipes/:id", recipes.show); // mostrar detalhe
routes.get("/admin/recipes/:id/edit", recipes.edit); // mostrar edição de receita

routes.post("/admin/recipes", recipes.post); // Cadastrar nova receita
//routes.put("/admin/recipes", recipes.put); // Editar uma receita
routes.delete("/admin/recipes", recipes.delete); // Deletar uma receita

module.exports = routes