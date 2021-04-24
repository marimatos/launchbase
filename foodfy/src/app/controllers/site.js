const Site = require('../models/Site')

module.exports = {
  index(req,res) {
    Site.all(function(recipes){
      return res.render('site/index', { recipes })
    })    
  },
  about(req,res) {
    return res.render('site/about');
  },
  recipes(req,res) {
    Site.all(function(recipes){
      return res.render('site/recipes', { recipes })
    })
  },
  recipe(req,res) {
    Site.find(req.params.id, function(recipe) {
      if (!recipe) return res.send("Receita não encontrada")

      return res.render("site/recipe", {recipe})
    })    
  }
}

