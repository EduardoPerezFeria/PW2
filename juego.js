let numeroRan = Math.floor(Math.random() * (1,10) +1);
console.log(numeroRan);
let numUsuario = parseInt(prompt("Elije un numero para tratar de adivinar: "));
let vidas = 3;
while(numUsuario !== numeroRan && vidas > 1){
    console.log("Lo siento, fallaste");
    vidas --;
    console.log("uyyyy, ahora tus vidas son " + vidas + ", Ten cuidado!");
    numUsuario = parseInt(prompt("Intenalo de nuevo, ingresa otro numero: "));
}


if( numUsuario === numeroRan){
    console.log("Ganasteeeeeeee");
}else{
    console.log("Perdiste, ni modo, intentalo de nuevo!");
    console.log("El numero incognito era: " + numeroRan);
}


