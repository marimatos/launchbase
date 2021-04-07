module.exports = {
  age: function(timestamp) {
   const today = new Date()
   const birthDate = new Date(timestamp)
 
   let age = today.getFullYear() - birthDate.getFullYear()
   const month = today.getMonth() - birthDate.getMonth()
 
   if (month < 0 || month == 0 && today.getDate() <  birthDate.getDate()) {
     age = age - 1
   }
     return age
   },
   date: function(timestamp) {
     const date = new Date(timestamp)
 
     const year = date.getUTCFullYear()
     const month = `0${date.getUTCMonth() + 1}`.slice(-2)
     const day = `0${date.getUTCDate()}`
 
     return `${year}-${month}-${day}`
   },
   degree: function(degree) {
     if (degree == "EM") {
       return "Ensino Médio Completo"
     } else if (degree == "ES") {
       return "Ensino Superior Completo"
     } else if (degree = "M") {
       return "Mestrado"
     } else {
       return "Doutorado"
     }
   }
 }