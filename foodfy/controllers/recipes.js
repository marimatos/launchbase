const data = require('../data.json')

exports.index = function(req, res){
  return res.render('admin/recipes', {recipes: data.recipes})
}