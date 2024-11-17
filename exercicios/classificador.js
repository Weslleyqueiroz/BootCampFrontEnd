let name = "mago";
let exp = "9999";


if(exp<1000){
    console.log('ferro');
}else if(exp>=1001 && exp<=2000){
    console.log('bronze');
}else if(exp>=2001 && exp<=5000){
    console.log('prata');
}else if(exp>=5001 && exp<=7000){
    console.log('ouro');
}else if(exp>=7001 && exp<=8000){
    console.log('platina');
}else if(exp>=8001 && exp<=9000){
    console.log('ascendente');
}else if(exp>=9001 && exp<=10000){
    console.log('imortal');
}else if(exp>=10001){
    console.log('Radiante')
}

console.log("O herói de nome  " + name + " está no nivel " + exp)

