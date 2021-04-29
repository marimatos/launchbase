const db = require('../../config/db')

module.exports = {
  all(callback) {
    db.query(`SELECT recipes.*, chefs.name AS chef_name FROM recipes
    LEFT JOIN chefs ON (recipes.chef_id = chefs.id)`, function(err,results){
      if(err) throw `Database error! ${err}`

      callback(results.rows)
    })
  },
  
  find(id, callback) {
    db.query(`SELECT recipes.*, chefs.name AS chef_name FROM recipes
    LEFT JOIN chefs ON (recipes.chef_id = chefs.id)
    WHERE recipes.id = $1`, [id],function(err,results){
      if(err) return res.send("Database error!")

      callback(results.rows[0])
    })
  },
  findby(filter, callback){
    const query = `
    SELECT recipes.*, chefs.name AS chef_name FROM recipes
    LEFT JOIN chefs ON (recipes.chef_id = chefs.id)
    WHERE recipes.title ILIKE '%${filter}%'`

    db.query(query, function(err,results){
      if(err) throw `Database error! ${err}`

      callback(results.rows)
    })
  },
  queryRecipes(callback) {
    db.query(`
    SELECT chefs.*, count(recipes) AS total_recipes FROM chefs
    LEFT JOIN recipes ON (chefs.id = recipes.chef_id)
    GROUP BY chefs.id
    `, function(err,results) {
      if(err) return res.send("Database error!")

      callback(results.rows)
    })
  }
}