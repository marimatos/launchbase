const data = require('../data')

exports.index = function(req, res){
  return res.render('site/index', { recipes:data.recipes })
}

exports.about = function(req, res){
	return res.render('site/about');
}

exports.recipes = function(req, res){
	return res.render('site/recipes', {recipes:data.recipes});
}

exports.recipe = function(req, res){
  //req.params
  const { id } = req.params

  const foundRecipe = data.recipes.find(function(recipe){
    return recipe.id == id
  })

  if (!foundRecipe) return res.send("Receita não encontrado")
 
  return res.render("site/recipe", {recipe: foundRecipe})
}
