let bolos=["Farinha","Ovos","Açúcar", "Leite", "Calda", "sal"]
let massas=["Farinha", "Sal", "Molho", "Verduras", "Ovos","Açúcar"]
let num=bolos.indexOf("Leite")

bolos.splice(num,2)
console.log(bolos.join(", "))