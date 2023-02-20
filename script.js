function ejercicio1(){
    //Pido los datos y los separo en arrays
    var nacimiento= prompt("Ingresa el día de tu nacimiento(ej: nací el primero de marzo ingreso 1)");
    nacimiento= nacimiento.split('');
    var celular= prompt("Ingresa los números de tu celular");
    celular= celular.split('');
    var direccion= prompt("Ingresa el número de tu dirección");
    direccion= direccion.split('');
    var cumpleaños= prompt("Ingresa los días que faltan para tu cumpleaños");
    cumpleaños= cumpleaños.split('');

    console.log(nacimiento, celular, direccion, cumpleaños);

    //concateno los arrays creando solo uno
    var digitos= nacimiento.concat(celular, direccion, cumpleaños);

    console.log(digitos)

    //en suma, dentro del for, voy sumando los dígitos del array 
    var suma=0;
    for(i=0; i<digitos.length; i++){

        //verifico que se ingresen solo números, si se ingresa un valor que no sea un número lo reemplazo por 0
        if(isNaN(digitos[i])){
            digitos[i]=0;
        }
        suma= suma+ parseInt(digitos[i]);
        console.log(suma);
    }

    //VERSIÓN DIVIIR POR 10

    /*//para reducir la suma a un número divido en 10
    while(suma>10){
        suma= suma/10;
        console.log(suma);
    }

    //si el trunc llega a dar 10 lo reduzco en 5 para que entregue solo un dígito
    if(Math.trunc(suma)==10){
        suma=suma-5;
    }
    
    alert("Tu número de la suerte es "+Math.trunc(suma));
    */

    //VERSIÓN SUMA INFINITA

    //declaro una nueva variable llamada suma final en la cual paso a array la var suma
    var sumafinal= suma.toString();
    sumafinal=sumafinal.split('');
    console.log(sumafinal);


    //bucle que se repite hasta que la suma final sea de un dígito
    do{
        //declaro esta variable en 0 que me ayudará a sumar y la reseteo ada vez que se reproduce el bucle
        var sumainfinita=0;
        //recorro el array de suma final y lo sumo a suma infinita
        for(i=0; i<sumafinal.length; i++){
            sumainfinita=sumainfinita+parseInt(sumafinal[i]);
            console.log(sumainfinita)
        } 
        //le vuelvo a igualar a suma inal la suma realizada para que varie el while
        sumafinal= sumainfinita.toString();
        sumafinal=sumafinal.split(''); 
    } while(sumafinal.length>1)

    alert("Tu número de la suerte es "+sumafinal);
}


function ejercicio2(){
    //pido el valor
    var numero= parseInt(prompt("Ingresa un múmero y te diremos si es divisible por 5, 3 o 2"));
    //verifico si el valor que se ingreso es un número
    while(isNaN(numero)){
        numero= parseInt(prompt("NO ingresaste un número, ingresa un múmero y te diremos si es divisible por 5, 3 o 2"));
    }
    console.log(numero);
    
    //cree estas variables para no repetir las operaciones en los if
    var dos= numero%2;
    var tres= numero%3;
    var cinco= numero%5;

    if(dos==0 && tres==0 && cinco==0){
        alert("El número "+numero+ " es divisible por 2, 3 y 5");
    } 
    if(dos==0 && tres==0 && cinco!=0){
        alert("El número "+numero+ " es divisible por 2 y 3 pero no por 5");
    }
    if(dos==0 && tres!=0 && cinco==0){
        alert("El número "+numero+ " es divisible por 2 y 5 pero no por 3");
    }
    if(dos!=0 && tres==0 && cinco==0){
        alert("El número "+numero+ " es divisible por 3 y 5 pero no por 2");
    } 
    if(dos==0 && tres!=0 && cinco!=0){
        alert("El número "+numero+ " es divisible por 2 pero no por 3 y 5");
    } 
    if(dos!=0 && tres==0 && cinco!=0){
        alert("El número "+numero+ " es divisible por 3 pero no por 2 y 5");
    } 
    if(dos!=0 && tres!=0 && cinco==0){
        alert("El número "+numero+ " es divisible por 5 pero no por 2 y 3");
    } 
    if(dos!=0 && tres!=0 && cinco!=0){
        alert("El número "+numero+ " NO es divisible por 2, 3 ni 5");
    }

}

function ejercicio3(){
    //pido la palabra
    var palabra= prompt("Ingresa una palabra y te diremos si es es palíndromo");

    //verifico si la palabra ingresada son solo letras
    while( palabra== null || palabra.length == 0 || /^\s+$/.test(palabra) || !isNaN(palabra)) {
        palabra= prompt("Ingresa UNA PALABRA y te diremos si es es palíndromo");
    }
    var palabraf= palabra.split('');
    var letras= palabra.split('');
    letras.reverse();

    console.log(letras);
    console.log(palabraf);
    var comprobante= 0;

    //recorro los arrays de las palabras y en comprobante verifico si TODAS las letras son iguales
    for(i=0; i<palabra.length; i++){
        if(palabraf[i]==letras[i]){
            //esto se me ocurrio hacerlo con un boolean pero me resulto de esta forma
            comprobante= comprobante+1;
            console.log(comprobante)
        }
    }

    if(comprobante==palabra.length){
        alert("La palabra "+palabra+" SÍ es palíndromo");
    }else{
        alert("La palabra "+palabra+" NO es palíndromo");
    }
}

function calcularDigito() {
    var rutI= prompt('Ingresa tu rut sin sin dígito verificador (Ej: 12345678)');
    var arrayRut= rutI.split('');
    var rut= arrayRut.reverse();
  
    console.log(rut);
    var p = 0;
    var i = 2;
    var digito = 0;

    while (p < rut.length) {
        if (i == 8) {
            i = 2;
        }
        
        digito = digito + (parseInt(rut[p]) * i);
        console.log(digito, p, i, rut[p]);  
        p++;
        i++;

    }
    /*var division = Math.trunc(digito / 11);
    var multiplicacion= 11 * division;
    var resta= digito-multiplicacion;*/
    digito = 11 - (digito%11);

    console.log(digito);

    switch (digito) {
        case 11:
            digito = 0;
            break;
        case 10:
            digito = 'K';
            break;
        default:
            digito = digito;
            break;
    }
    console.log(digito);

    document.write('El código verificador de tu rut es ' + digito + '<br /> Por lo tanto tu rut completo es ' + rutI + '-' + digito + '<br /> <a href="index.html"> Volver al inicio</a>') 
}


$('#funcion-1').click(function(){
    $('.primera-cancion').css('color','#E110CD');
});

$('#funcion-2').click(function(){
    $('#titulo-primera-cancion').css('font-size','50px');
});

$('#funcion-3').click(function(){
    console.log('holi');
    $('#div-primera-cancion')
    .css('background','#FEE9FC')
    .css('border','dotted')
    .css('border-color','black')
    .css('border-radius', '30px')
    .css('border-width','5px');
});

$('#funcion-4').click(function(){
    $('#ultima-estrofa').css('color','#E110CD');
});

$('#funcion-5').click(function(){
    $('#año-segunda-cancion').css('font-family','sans-serif');
    $('#interprete-primera-cancion').css('color','#E110CD');
});

$('#funcion-extra').click(function(){
    $('#año-segunda-cancion').css('font-family','Courier, monospace');
    $('#interprete-primera-cancion').css('color','black');
    $('#ultima-estrofa').css('color','black');
    $('#div-primera-cancion')
    .css('background','#d2dcaa')
    .css('border','none');
    $('.primera-cancion').css('color','black');
    $('#titulo-primera-cancion').css('font-size','1.5em');
});

/*$('.primera-cancion').click(function(){
    $('#rojo').css('color','red').css('font-size','30px');
});*/