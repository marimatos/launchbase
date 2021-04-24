const Recipe = require('../models/Recipes')

module.exports = {
  index(req,res){
    Recipe.all(function(recipes){

      return res.render('admin/recipes', { recipes })
    })
  },
  show(req,res){
    Recipe.find(req.params.id, function(recipe) {
      if (!recipe) return res.send("Receita não encontrada")

      return res.render("admin/recipe", {recipe})
    })
  },
  edit(req,res){
    Recipe.find(req.params.id, function(recipe) {
      if (!recipe) return res.send("Receita não encontrada")

      Recipe.chefsSelectOptions(function(options){
        return res.render("admin/edit", {recipe, chefsOptions: options})
      })
      
    })
  },
  create(req,res){
    Recipe.chefsSelectOptions(function(options){
      return res.render('admin/create', { chefsOptions: options})
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

    Recipe.create(req.body, function(recipe) {
      return res.redirect(`/admin/recipes/${req.body.id}`)
    })    
  },
  put(req,res){
    const keys = Object.keys(req.body)

    for(key of keys) {
      if (req.body[key] == "") {
        return res.send("Please, fill all fields!")
      }
    }

    Recipe.update(req.body, function(){
      return res.redirect(`/admin/recipes/${req.body.id}`)
    })
  }
}


