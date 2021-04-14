const cards = document.querySelectorAll('.card')
  
const description = document.getElementsByClassName('recipe-description')

for (let i = 0; i < description.length; i++) {
  const span = description[i].querySelector('.span')
  const content = description[i].querySelector('.description')

  span.addEventListener('click', e => {
    if (span.innerHTML == 'ESCONDER') {
      span.innerHTML = 'MOSTRAR'
      content.classList.add('hide')
    } else {
      span.innerHTML = 'ESCONDER'
      content.classList.remove('hide')
    }
  })
}


//Admin
const addFields = {
  input: "",
  parent: "",
  container: "",

  add(event) {
    addFields.input = event.target
    addFields.parent = addFields.input.parentElement
    addFields.container = addFields.parent.querySelector('.field-container').lastElementChild

    const newField = addFields.container.cloneNode(true)

    if (newField.children[0].value === '') return;

    newField.children[0].value = '';
    addFields.parent.querySelector('.field-container').appendChild(newField);
  },
  remove(event) {
    addFields.input = event.target
    addFields.parent = addFields.input.parentElement.parentElement

    console.log(addFields.parent.parentElement.children);
    

    if (addFields.parent.parentElement.children.length > 1) {
      if (addFields.parent.querySelector('input').value == "") {
        return
      } else {
        addFields.parent.parentElement.removeChild(addFields.parent)
      }
    }
  }
}


