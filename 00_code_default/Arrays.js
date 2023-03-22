//ESTUDANDO UM POUCO SOBRE ARRAY VAMOS EXPLORAR AS ATRIBUIÇÕES DE ALGUMAS FUNCTION.

//.MAP()

//em uma variavel dinamica que contem os valores [1, 2, 3, 4, 5] elevar ao quadrado todos os valores com .map()

// const valor =[1, 2, 3, 4, 5]

// const novo_valor = valor.map(function(num){return num * num})

// console.log(valor)

// console.log(novo_valor)

//AGORA VAMOS ENTENDER AS STRINGS O DESAFIO É COLOCAR A PRIMEIRA LETRA COMO MAIUSCULA DE CADA ELEMENTODA ARRAY.

// const nome = ["alice", "bob", "saulo", "cleuza"]

// const novo_nome = nome.map(function(x) {

//         const minusc = x.toLowerCase()
//         const pri_minusc = minusc[0]
//         const final = minusc.slice(1)
//         const pri_maiuscula = pri_minusc.toUpperCase()
//         return pri_maiuscula + final
//     }
// )

// const uppercase = nome.map((nomes) =>{return nomes[0].toUpperCase() + nomes.slice(1)})
// console.log(novo_nome)
// console.log(uppercase)


//AGORA VAMOS TRABALHAR COM A ADIÃO DE UM ELEMENTO ANTES E DEPOIS DO ITEM DE UMA ARRAY

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]

const new_pokemon = pokemon.map((nome) =>{return `<p>${nome}</p>`}) 
console.log(new_pokemon)