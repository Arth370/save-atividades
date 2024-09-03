let mat=["Açúcar","Margarina","Leite"]
let quant=["400g","500g","100g"]
let mat1=mat.indexOf("Açúcar")
let mat2=mat.indexOf("Margarina")
let mat3=mat.indexOf("Leite")
if(mat1==0){
    console.log(`${mat[mat1]}: ${quant[0]}`)
}
if(mat2==1){
    console.log(`${mat[mat2]}: ${quant[1]}`)
}
if(mat3==2){
    console.log(`${mat[mat3]}: ${quant[2]}`)
}