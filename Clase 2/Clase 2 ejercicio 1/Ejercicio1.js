
/*Tengo desarrollada la siguiente función en javascript*/
function suma(a, b, callback) {
    let c = a + b;
    callback();
}
/*¿Que es el tercer parámetro recibido ?
¿En que casos es obligatorio desarrollar este tipo de funciones ?
    Realizar un llamado a la función de ejemplo*/



function suma(a, b, callback) {
    let c = a + b;
    callback();
}


/*¿Que es el tercer parámetro recibido ?
    el tercer parametro recibido es "callback", como no se le dió un argumento, no va a mostrar el resultado de la suma entre "a" y "b"


¿En que casos es obligatorio desarrollar este tipo de funciones ?
   en los casos de Asincronias, permitiendo que el codigo pueda reutilizarse mas facilmente */


    function miCallback(resultado) {
        console.log("El resultado de la suma es: " + resultado);
    }
    
    function suma(a, b, callback) {
        let c = a + b;
        callback(c);
    }
    
    suma(2, 3, miCallback);


/*haciendo esto le asigno el resultado de la suma entre A y B al callback (c), al invocarla
con el console.log, hago que aparezca el resultado*/