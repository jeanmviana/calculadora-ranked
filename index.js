let nickName = "zepelin"
let resultado = diminuir(130,20)

function diminuir(vitorias,derrotas){
    return vitorias - derrotas 
} 

if(resultado <= 10){
    console.log("O Herói " + nickName + " tem saldo de: "  + resultado + ", Portanto, Está no Nível de: Ferro ")
}else if(resultado >= 10 && resultado <= 20){
    console.log("O Herói " + nickName + " tem saldo de: "  + resultado + ", Portanto, Está no Nível de: Bronze ")
}else if(resultado >= 20 && resultado <= 50){
    console.log("O Herói " + nickName + " tem saldo de: "  + resultado + ", Portanto, Está no Nível de: Prata ")
}else if(resultado >= 50 && resultado <= 80){
    console.log("O Herói " + nickName + " tem saldo de: "  + resultado + ", Portanto, Está no Nível de: Ouro ")
}else if(resultado >= 80 && resultado <= 90){
    console.log("O Herói " + nickName + " tem saldo de: "  + resultado + ", Portanto, Está no Nível de: Diamante ")
}else if(resultado >= 90 && resultado <= 100){
    console.log("O Herói " + nickName + " tem saldo de: "  + resultado + ", Portanto, Está no Nível de: Lendário ")
}else{console.log("O Herói " + nickName + " tem saldo de: "  + resultado + ", Portanto, Está no Nível de: Imortal ")
}