const fs = require('fs')
const data = require('./data.json')

//create
exports.post = function(req,res) {
  const keys = Object.keys(req.body)
  //cria um array com as chaves do body

  for(key of keys) {
    if (req.body[key] == "") {
      return res.send('Por favor, preencha todos os campos!')
    }
  }

  let {avatar_url, name, gender, birth,  services} = req.body

  birth = Date.parse(birth)
  const created_at = Date.now()
  const id = Number(data.instructors.length + 1)

  data.instructors.push({
    id,
    name,
    avatar_url,
    birth,
    gender,
    services,
    created_at
  })
  

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
    if(err) return res.send("Write file error!")

    return res.redirect("/instructors")
  })

  
}