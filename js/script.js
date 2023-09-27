function Factorial(number) {
    // VALIDACIONES
    //Que sea un numero
    if (typeof number !== "number") {
        console.error("Lo sientimos para esta funcion no admite datos que no sean numeros. Intente de nuevo con otrso valores.");
        return;
    }
    //Que sea un entero
    if (Number.isInteger(number) === false) {
        console.warn("No podemos ejecutar esta funcion con numeros que no sean enteros. Intente de nuevo con otrso valores.")
        return;
    }
    //Que sea positivo
    if (number < 0) {
        console.warn("No podemos ejecutar esta funcion con numeros negativos. Intente de nuevo con otrso valores.")
        return;
    }
    //Que sea mayor a 0
    if (number === 0) {
        console.warn("No podemos ejecutar esta funcion con el 0. Intente de nuevo con otrso valores.")
        return;
    }
    // CODIGO DE LA FUNCION
    let result = number;
    for (let i = number - 1; i > 1; i--) {
      result = result * i;
    }
    console.log(`el facorial de ${number} es ${result}`)
}
  //PRUEVAS DE LA FUNCION
Factorial("3");
Factorial(true);
Factorial({ 0: 0 });
Factorial(5.8);
Factorial(-8);
Factorial(0);
Factorial(1);
Factorial(2);
Factorial(3);
Factorial(4);
Factorial(5);
Factorial(8);