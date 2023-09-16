//Node modules.
let ps = require("prompt-sync");
let prompt = ps();
//Instrucciones del programa.
const INSTRUCTIONS = `Las funcionalidades que tiene son las siguientes:
1 - Suma.
2 - Resta.
3 - Multiplicación.
4 - División.
5 - Modulo.
6 - Exponente.
7 - Salir.`;
//Bandera y variables para hacer las operaciones.
let flag = true;
let numberOne;
let numberTwo;

//Función expresada.
const calculator = () => {
    console.log(INSTRUCTIONS);//Imprime en consola las instrucciones.
    //Pide al usuario que ingrese el número de la opeación que desea realizar.
    let userInput = parseFloat(prompt(" Para usar cualquiera de ellas digite el número correspondiente a la función: "));
    if(userInput < 7) {//Si la operación es menor a 7 pide los datos para realizar las operaciones.
        numberOne = prompt("Digite el valor del primer número: ");
        numberTwo = prompt("Digite el valor del segundo número: ");
    }
    switch(userInput) {//Switch que evalúa si el número coincide con alguno de los casos.
        case 1:
            console.log(`La suma es: ${parseFloat(numberOne) + parseFloat(numberTwo)}`);
            break;
        case 2:
            console.log(`La resta es: ${parseFloat(numberOne) - parseFloat(numberTwo)}`);
        break;
        case 3:
            console.log(`La multiplicación es: ${parseFloat(numberOne) * parseFloat(numberTwo)}`);
        break;
        case 4:    
        console.log(`La división es: ${parseFloat(numberOne) / parseFloat(numberTwo)}`);
        break;
        case 5:
            console.log(`El residuo es: ${parseFloat(numberOne) % parseFloat(numberTwo)}`);
        break;
        case 6:
            console.log(`La exponencial es: ${parseFloat(numberOne) ** parseFloat(numberTwo)}`);
        break;
        case 7://En caso de ser 7 cambia la bandera a falso y termina el programa.
            flag = false;
            console.log("Se acabó el programa c;");
        break;
        default://Si el valor no coincide con ninguno pasa a este apartado.
            console.log(`El valor ingresado no es valido, por favor digite uno de los valores de las instrucciones.`);
            break;
    }
}


console.log("Bienvenido a la calculadora de node JS.");
calculator();//Se ejecuta una vez el método y si la bandera no cambia en el caso 7 a falso entonces entra al bucle.
while(flag) {
        //Si la respuesta es sí entonces se sobrescribe la bandera por la cadena de texto si/no en lowercase.
        flag = prompt("Deseas hacer otro calculo? si/no: ").toLowerCase();
        if(flag === "si") {//Si la respuesta es sí entonces se ejecuta el método nuevamente.
            calculator();
        }else if(flag === "no") {//Si la respuesta es no entonces la bandera se sobrescribe por false y se termina el programa.
            flag = false;
            console.log("Se acabó el programa c;");
        }else {//Si el input no es ni sí, ni no, entonces se manda este mensaje de alerta.
            console.log("Solo puedes ingresar si o no.");
        }
}    


