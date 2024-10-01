let nome1="cu"
let nome2="au"
let cara={
    nome:nome1,
    vida:"10"
};
function telamorte(nome){
    console.log(`você morreu ${nome}`)
}
let dano=5
let acerto=cara.vida-10
if(acerto<=0){
    telamorte(nome2)
}