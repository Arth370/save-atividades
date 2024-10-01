let cadrasto=confirm("você já possui cadastro?\nrespoda com 'ok'ou 'cancelar'")
if(cadrasto==false){
    let usuario=prompt("digite seu nome de usuário")
    localStorage.setItem('usuario', usuario)
    let senha=prompt("digite sua senha")
    localStorage.setItem('senha', senha)
    alert("faça seu login")
    let usuario2=prompt("digite seu nome de usuário")
    let senha2=prompt("digite sua senha")
    if(usuario2==localStorage.getItem('usuario')&senha2==localStorage.getItem('senha')){
        alert("acesso liberado")
    }
    else{
        let count=0
        while(count==0){
            alert("acesso negado")
        }
    }
}
else{
    let usuario2=prompt("digite seu nome de usuário")
    let senha2=prompt("digite sua senha")
    if(usuario2==localStorage.getItem('usuario')&senha2==localStorage.getItem('senha')){
        alert("acesso liberado")
    }
    else{
        let count=0
        while(count==0){
            alert("acesso negado")
        }
    }
}