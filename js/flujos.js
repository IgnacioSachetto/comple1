let intentos = 5;
alert("Intente encontrar la letra escondida, cuenta con: "+ intentos + " intentos.");

for (let i = 10;  i>0 ; i--){
    let letra = "W";
    
    letraIngresada = prompt("Ingrese una letra");

    if(letra == letraIngresada){
        alert("FELICITACIONES!! Encontró la letra escondida " + letra);
        break;
    } else {
        intentos--;
        alert("Incorrecto.Vuelva a intentar. Intentos Restantes: " + intentos)
    }

    if(intentos == 0){
        alert("No pudo encontrar la letra.La letra era: " + letra);
        break;
    }   
    
}


