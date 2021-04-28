const Recipe = require('../models/Recipes')

module.exports = {
  index(req,res){
    Recipe.all(function(recipes){

      return res.render('admin/recipes/recipes', { recipes })
    })
  },
  show(req,res){
    Recipe.find(req.params.id, function(recipe) {
      if (!recipe) return res.send("Receita não encontrada")

      return res.render("admin/recipes/recipe", {recipe})
    })
  },
  edit(req,res){
    Recipe.find(req.params.id, function(recipe) {
      if (!recipe) return res.send("Receita não encontrada")

      Recipe.chefsSelectOptions(function(options){
        return res.render("admin/recipes/edit", {recipe, chefsOptions: options})
      })
      
    })
  },
  create(req,res){
    Recipe.chefsSelectOptions(function(options){
      return res.render('admin/recipes/create', { chefsOptions: options})
    })    
  },
  delete(req,res){
    Recipe.delete(req.body.id, function(){
      return res.redirect(`/admin/recipes`)
    })
  },
  post(req,res){
    const keys = Object.keys(req.body)
    //cria um array com as chaves do body
    console.log(req.body)

    Recipe.create(req.body, function(recipe) {
      return res.redirect(`/admin/recipes/${recipe.id}`)
    })    
  },
  put(req,res){
    const keys = Object.keys(req.body)

    Recipe.update(req.body, function(){
      return res.redirect(`/admin/recipes/${req.body.id}`)
    })
  }
}


