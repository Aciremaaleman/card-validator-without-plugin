// Declarando const y let
const form = document.querySelector("form");
// Se declara cun const para convertir el elemento form del html en un array por medio del metodo form
const formArray = Array.from(form);
// console.log(formArray); 
let evenMultiply = 0;
let numberCardSum = 0;
let newDigit= 0;
let arrayName = [];


// Funcion que le da el evento al boton
form.addEventListener("submit", e => {
  e.preventDefault();
  if (validateCardDetails(form)) {
    console.log("datos válido... enviar...");
  } else {
    console.log("datos inválidos");
  };
});


// funcion para obtener los datos de cada uno de los inputs del form
// const getValueInput = element => {
//     // se crea un let que sera igual a un arreglo nuevo vacio para ingresar los elementos de cada uno de los inputs
//   let newArrayForm = [];
// // se llama a la const formArray y se le agrega el metod for each para que itere el arreglo y obtenga los datos de cada input
//   element.forEach(e => { 
// // con el metodo push se agrega el valor de cada input dentro del nuevo arreglo 
//     newArrayForm.push(e.value); 
//   });
//   console.log(newArrayForm);
// //   se retorna el nuevo arreglo
//   return newArrayForm;
// };

// Funcion metodo luhn
const methodLuhn = luhn => {
    if(luhn < 16 || luhn == '' || luhn == ' '){ //Si el input esta vacio o es menor a 16 digitos entonces cambiar el color del input
        return borderColor = document.getElementById("cn").style.borderColor = "#f73131";
    }
    else {
       const numberCardInverse = luhn.split('').reverse(); //se declara una const que guardara los valores ingresados en el input agrgando el metodo split para crear un array separandolos con comillas y el metodo reverse para poner los elementos al reves
       const evenNumber = numberCardInverse.map((element, index) => { //Se utiliza metodo map para iterar el arreglo de elementos, obteniendo elemento e indice
        if (index %2!==0){ //Se localizan los numeros impares del arreglo ya en el arreglo se utilizo el metodo reverse
            evenMultiply = element * 2; //Se multiplican los numeros impares
            if (evenMultiply >= 10){ //Si el valor obtenido de la multiplicacion es mayor o igual a diez
                let evenSum = evenMultiply.toString(); //Entonces de transforma en string para obtener el indice de estos numeros guardandolos en otra variable
                parseInt(evenSum[0]) + parseInt(evenSum[1]); //se convierte en numero cada string para sumar 
                return evenSum; //retorna la suma
            }
            return evenMultiply; //si no cumple con la condicion anterior retorna el elemento multiplicado menor a diez
        } 
        else {
            return parseInt(element); //si no cumple con ninguna de las condiciones anteriore retorna el elemento par
        };
    });
    const sumNewDigit = evenNumber.reduce((element, initialize) => element + initialize); //se declara un const que sera igual al arreglo de elementos anterior para sumar todos lo elemenos dentro del arreglo
    if (sumNewDigit %10===0){ //si el modelo de los elementos del arreglo es igual a 0 entonces cumplir la siguiente sentencia
        return borderColor = document.getElementById("cn").style.borderColor = "#46ed3d"; //Si el residuo de dividirlo entre 10 no es 0
        // return document.write('Tu tarjeta es válida');//Si el residuo de dividirlo entre 10 es 0
    } else {
        return borderColor = document.getElementById("cn").style.borderColor = "#f73131"; //Si el residuo de dividirlo entre 10 no es 0
    };
  };
};

const dateCard = date => {
    console.log('hola soy el indice 1');

};
const securityCode = cvv => {
    console.log('hola soy el indice 3');
};

const completeName = name => {
    const fullName = name.split('');
    console.log(fullName);
    const arrayFullName = name.map((element, index) =>{
        console.log(arrayFullName);
        return arrayFullName;

    }) 
    if (name == ''){
        return borderColor = document.getElementById("name").style.borderColor = "#f73131";
    }
    else if(name.length >= 30){
        return borderColor = document.getElementById("name").style.borderColor = "#f73131";
    }
    // else (name ==  ) {
    //     return name.toUpperCase();
    // }
            

 
};


// Funcion que llamara a todas las demás funciones
const validateCardDetails = element => {
    // getValueInput(formArray);
    let luhn = formArray[0].value.trim(); //Se declara let luhn para guardar la posicion y obtener el valor del primer input
    methodLuhn(luhn)
    let date = formArray[1].value.trim();//Se declara let date para guardar la posicion y obtener el valor del segundo input
    dateCard(date)
    let cvv = formArray[2].value.trim();//Se declara let cvv para guardar la posicion y obtener el valor del tercer input
    securityCode(cvv)
    let name = formArray[3].value.trim();//Se declara let name para guardar la posicion y obtener el valor del cuarto input
    completeName(name)

    // if  (methodLuhn(luhn) && dateCard(date) && securityCode(cvv) && completeName(name)){
    //     return true;
    // } else {
    //     return false;
    // };
    


    // console.log(date);
   
    // console.log(cvv);
    // securityCode(cvv); //Se invoca la funcion que contiene la aprobacion del codigo de seguridad

    // console.log(name);
    // completeName(name); //Se invoca la funcion que contiene la aprobacion del nombre completo

};

// const form = document.querySelector("form");
// const arrayInfo=Array.from(form);
// const arrayOne=[];
// console.log(arrayInfo);

// form.addEventListener("submit", e => {
//  e.preventDefault();
//  if (validateCardDetails(form)) {
//    console.log("datos válido... enviar...");
//  } else {
//    console.log("datos inválidos");
//  }
// });


// const getArrayInfo=array=>{
//    array.forEach(e=>arrayOne.push(e.value));
//    console.log(arrayOne);
//    return arrayOne;
// }

// const cardNumber=index=>{
//    console.log(index);
//    return true;
// }

// const expire=index=>{
//    console.log(index);
//    return true
// }

// const securityCode=index=>{
//    console.log(index);
//    return true
// }

// const name=index=>{
//    console.log(index);
//    return true;
   
// }




// const validateCardDetails=array=> {
   
// getArrayInfo(arrayInfo);
   
//  if(cardNumber(arrayOne[0]) && expire(arrayOne[1])&&
//  securityCode(arrayOne[2]) &&name(arrayOne[3])) {
//    console.log(true);  
//    return true;
     
//  }else{
//      console.log(false);
//      return false;
//  }

// };
