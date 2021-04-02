const cards = document.querySelectorAll('.card')
  
const description = document.getElementsByClassName('recipe-description')

for (let i = 0; i < cards.length; i++){
  let recipeId = i;
  cards[i].addEventListener('click', function() {
    window.location.href=`/recipes/${recipeId}`;
  })
}

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





