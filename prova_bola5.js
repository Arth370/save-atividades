let Massas=["Farinha", "Sal", "Molho", "Verduras", "Ovos"]
let MassasQ= [180,3,300,100,15]
let count=2
console.log(Massas.length)
for (let i = 0; i < Massas.length; i++) {
    const element = Massas[i];
    if(i==0){
        const element = Massas[i];
    console.log(element,":\n",MassasQ[count])}
    if(i==1){
        count=count+2
        console.log(element,":\n",MassasQ[count])
    }
    if(i==2){
    count=0
    console.log(element,":\n",MassasQ[count])
    }
    if(i==3){
        count=3
        console.log(element,":\n",MassasQ[count])
        }
    if(i==4){
        count=1
        console.log(element,":\n",MassasQ[count])
    }
        
}
let Ovos=MassasQ[1]
let u=0
for(;u<Ovos;u=u){
u++
}
console.log(`só é possivel fazer a receita ${u} vezes`)