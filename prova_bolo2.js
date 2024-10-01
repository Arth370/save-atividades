let bolos=["Farinha","Ovos","Açúcar", "Leite", "Calda","sal"]
let massas=["Farinha", "Sal", "Molho", "Verduras", "Ovos","Açúcar"]
let num=bolos.indexOf('Leite')
bolos.splice(0,num)
bolos.pop()
console.log(bolos.join(", "))
