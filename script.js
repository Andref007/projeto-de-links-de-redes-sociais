function toggleMode() {
  const html = document.documentElement

html.classList.toggle("light")


//   if(html.classList.contains('light')) {
//     html.classList.remove('light')
//   } else {
//     html.classList.add('light')
//   }
// OU PODE SER FEITO DE UMA MANEIRA MAIS SIMPLES USANDO A PRÓPRIA FUÇÃO TOGGLE  DO CLASSLIST

//pegando a imagem
const img = document.querySelector('#profile img')

if(html.classList.contains('light')) {
  img.setAttribute('src', './assets/working.jpg')
  img.setAttribute('alt', 'André de óculos no carro')
} else {
  img.setAttribute("src", "./assets/darkmode.jpg")
  img.setAttribute("alt", "André tocando guitarra na praia")
}
}

