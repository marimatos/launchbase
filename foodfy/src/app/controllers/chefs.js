const Chef = require('../models/Chefs')

module.exports = {
  index(req,res){
    Chef.all(function(chefs){

      return res.render('admin/chefs/chefs', { chefs })
    })
  },
  show(req,res){
    Chef.find(req.params.id, function(chef) {
      if (!chef) return res.send("Receita não encontrada")

      Chef.queryRecipes(req.params.id,function(recipes) {
        return res.render("admin/chefs/chef", {chef, recipesList: recipes})
      })
      
    })
  },
  edit(req,res){
    Chef.find(req.params.id, function(chef) {
      if (!chef) return res.send("Chef não encontrada")

      return res.render('admin/chefs/edit', {chef})

      //Chef.chefsSelectOptions(function(options){
      //  return res.render("admin/chefs/edit", {chef, chefsOptions: options})
     // })
      
    })
  },
  create(req,res){
    return res.render('admin/chefs/create')    
  },
  delete(req,res){
    Chef.delete(req.body.id, function(){
      return res.redirect(`/admin/chefs`)
    })
  },
  post(req,res){
    Chef.create(req.body, function(chef) {
      return res.redirect(`/admin/chefs/${chef.id}`)
    })    
  },
  put(req,res){
    Chef.update(req.body, function(){
      return res.redirect(`/admin/chefs/${req.body.id}`)
    })
  }
}


