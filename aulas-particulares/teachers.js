const fs = require('fs')
const data = require('./data.json')
const Intl = require('intl')
const { age, degree, date } = require('./utils')

//show
exports.show = function(req,res){
  const { id } = req.params

  const foundTeacher = data.teachers.find(function(teacher){
    return teacher.id == id
  })

  if (!foundTeacher) return res.send('Professor não encontrado!')

  const teacher = {
    ...foundTeacher,
    age: age(foundTeacher.birth),
    areas: foundTeacher.areas.split(","),
    degree: degree(foundTeacher.degree),
    created_at: new Intl.DateTimeFormat("pt-BR").format(foundTeacher.created_at)
  }
  
  return res.render("teachers/show", {teacher})
}

//edit
exports.edit = function(req,res){
  const { id } = req.params

  const foundTeacher = data.teachers.find(function(teacher){
    return teacher.id == id
  })

  if (!foundTeacher) return res.send('Professor não encontrado!')

  const teacher = {
    ...foundTeacher,
    birth: date(foundTeacher.birth)
  }

  return res.render("teachers/edit", {teacher})
}

//create
exports.post = function(req,res){
  const keys = Object.keys(req.body)

  for(key of keys) {
    if(req.body[key] == "") {
      return res.send("Preencha todos os campos")
    } 
  }

  let { avatar_url, name, birth, degree, class_type, areas } = req.body

  birth = Date.parse(birth)
  const created_at = Date.now()
  const id = Number(data.teachers.length + 1)

  data.teachers.push({
    id,
    avatar_url,
    name,
    birth,
    degree,
    class_type,
    areas,
    created_at
  })

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
    if(err) return res.send("Write file error!")
  })

  return res.redirect("/teachers")
}