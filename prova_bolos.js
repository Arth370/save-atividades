//primeira questão
let bolos=["Farinha","Ovos","Açúcar", "Leite", "Calda", "sal"]
let massas=["Farinha", "Sal", "Molho", "Verduras", "Ovos","Açúcar"]
bolos.pop()
massas.shift()
massas.pop()
massas.pop()
let juncao=bolos.concat(massas)
console.log(juncao.join(", "))
