const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
})

server.get("/", function(req, res) {
  const about = {
    avatar_url: "https://avatars2.githubusercontent.com/u/45432113?s=460&u=061a17c1eb368b06944edbab236a5780cf68df6f&v=4",
    name: "Marina Matos",
    role: "Analista de Sistemas",
    description: "Estudante de programação web",
    links: [
      {name: "Github", url: "https://github.com/marimatos"},
      {name: "Linkedin", url: "https://www.linkedin.com/in/marinamatos/"},
      {name: "FreeCodeCamp", url: "https://www.freecodecamp.org/marinamatos"}
    ]

  }

  return res.render("about", {about})
})

server.get("/portfolio", function(req,res) {
  return res.render("portfolio", {items: videos})
})

server.get("/video", function(req, res) {
  const id = req.query.id
  const video = videos.find(function(video) {
    return video.id == id
  })

  if (!video) {
    return res.send("Video not found")
  } else {
    return res.render("video", { item:video })
  }
})

server.use(function(req, res) {
  res.status(404).render("not-found");
})

server.listen(5000, function () {
  console.log("server is running")
})