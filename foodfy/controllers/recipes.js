const data = require('../data.json')
const fs = require('fs')

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

exports.create = function(req,res) {
  return res.render('admin/create')
}

exports.delete = function(req,res) {
  const {id} = req.body

  const filteredRecipes = data.recipes.filter(function(recipe){
    return recipe.id != id
  })

  data.recipes = filteredRecipes
  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
    if (err) return res.send('Write file error')

    res.redirect('/admin/recipes')
  })
}

exports.post = function(req,res) {
  const keys = Object.keys(req.body)
  //cria um array com as chaves do body

    req.body.id = Number(data.recipes.length + 1)
  
    data.recipes.push(req.body)
    
  
    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
      if(err) return res.send("Write file error!")
  
      return res.redirect("/admin/recipes")
    })
  
    
}
  
  
