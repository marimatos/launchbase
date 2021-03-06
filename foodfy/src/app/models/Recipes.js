const { date } = require('../../lib/utils')
const Intl = require('intl')
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
      if(err) throw `Database error! ${err}`

      callback(results.rows[0])
    })
  },
  create(data,callback) {
    const query = `
      INSERT INTO recipes (
        image,
        title,
        ingredients,
        preparation,
        information,
        created_at,
        chef_id
      ) VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id
    `
    const values = [
      data.image,
      data.title,
      data.ingredients,
      data.preparation,
      data.information,
      date(Date.now()).iso,
      data.chef
    ]

    db.query(query, values, function(err, results){
      if(err) throw `Database error! ${err}`
      
      callback(results.rows[0])
    })
  },
  update(data,callback) {
    const query = `
      UPDATE recipes SET
        image=($1),
        title=($2),
        ingredients=($3),
        preparation=($4),
        information=($5)
      WHERE id = $6
    `
    const values = [
      data.image,
      data.title,
      data.ingredients,
      data.preparation,
      data.information,
      data.id
    ]

    db.query(query, values, function(err, results) {
      if(err) throw `Database error! ${err}`
      callback()
    })
  },
  delete(id, callback) {
    db.query(`DELETE FROM recipes WHERE id = $1`, [id], function(err, results) {
      if(err) throw `Database error! ${err}`

      return callback()
    })
  },
  chefsSelectOptions(callback) {
    db.query(`SELECT name, id FROM chefs`, function(err, results) {
      if(err) throw `Database error!`

      callback(results.rows)
    })
  }
}