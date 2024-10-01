let Bolos=["Farinha","Ovos","Açúcar","Leite","Calda"]
let BolosQ=[400,250,4,500,200]
let num=4
let contar=0
for (let i = 0; i < Bolos.length; i++) {
    num--
    let element = Bolos[i];
    if(i<4){
    console.log(element,":\n", BolosQ[num])}
    if(i==4){

        console.log(element,":\n", BolosQ[4])
    }}
let Farinha=BolosQ[3]
for(let u=150;u<Farinha;u=u){
Farinha=Farinha-150
contar++
}
console.log(`só é possivel fazer a receita ${contar} vezes`)