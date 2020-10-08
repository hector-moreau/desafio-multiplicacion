function app(){
    let usernumber = parseInt(prompt('¿Que número desea factorizar?'));
    if (usernumber > 20 || usernumber < 1 || isNaN(usernumber)){ // Si es mayor a 20, o menor a 1, o no es un numero valido
        console.log('Número no válido')
        return 0
    }
    for(let index = 1; index <= usernumber; index++) {
        console.log(`${index} x ${usernumber} = ${index * usernumber}`)
    }

    let resultado = 1
    for (let i = 1; i <= usernumber; i++) { 
    resultado *= i;
    console.log(`Factorial de ${i} = ${resultado}`);
    }
}
app()
