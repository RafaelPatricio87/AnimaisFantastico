// Retorne no console todas as imagens do site
const img = document.querySelectorAll('img')
console.log(img)
// Retorne no console apenas as imagens que comecaram com a palavra imagem
const imgs = document.querySelectorAll('img[src^="img/imagem"]')
console.log(imgs)
// Selecione todos os links internos(onde o href começa com#)
const links = document.querySelectorAll('a[href^="#"]')
console.log(links)
// Selecione o promeiro h2 dentro de .animais-decricao.
const h2 = document.querySelector('.animais-descricao h2')
console.log(h2)
// Selecione o ultimo p do site

const paragrafos = document.querySelectorAll('p')
// console.log(paragrafos[--paragrafos.length])
console.log(paragrafos[paragrafos.length - 1])