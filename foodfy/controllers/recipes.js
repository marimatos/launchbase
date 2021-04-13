const data = require('../data.json')

exports.index = function(req, res){
  return res.render('admin/recipes', {recipes: data.recipes})
}

exports.show = function(req,res) {
  const { id } = req.params

  const foundRecipe = data.recipes.find(function(recipe){
    return recipe.id == id
  })

  if (!foundRecipe) return res.send("Receita não encontrado")
 
  return res.render("admin/recipe", {recipe: foundRecipe})
}

exports.edit = function(req,res) {
  const { id } = req.params

  const foundRecipe = data.recipes.find(function(recipe){
    return recipe.id == id
  })

  if (!foundRecipe) return res.send("Receita não encontrado")  

  return res.render("admin/edit", {recipe: foundRecipe})
}