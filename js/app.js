const form = document.querySelector("form");
// Se declara cun const para convertir el elemento form del html en un array por medio del metodo form
const formArray = Array.from(form);
// console.log(formArray); 
let evenOdd = 0;
let numberCardSum = 0;
let newDigit=0;
let digits=[]


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
// se manda a llamar a la funcion


// Multiplicamos por 2 los dígitos que ocupan las posiciones pares empezando por el final:
// (1×2) = 2, (8×2) = 16, (3×2) = 6, (2×2) = 4, (9×2) = 18
// Sumamos los dígitos que ocupaban las posiciones impares con los dígitos de los productos obtenidos:
// 6 + (2) + 7 + (1+6) + 9 + (6) + 7 + (4) + 9 + (1+8) + 4 = 70
// Si el resto de dividir el total entre 10 es igual a cero, el número es correcto:
// 70 mod 10 = 0

// 49927398716.

const methodLuhn = luhn => {
    // console.log('hola soy el indice 0');
    if(luhn == ''){
        alert('ingresa un numero valido');
    }
    else {
       const numberCardInverse = luhn.split('').reverse();
       
       console.log(numberCardInverse);
       const evenNumber = numberCardInverse.map((element, index) => {
        if (index %2!==0){
            evenOdd = element * 2;
            console.log(evenOdd);
            if (evenOdd >= 10){
                let sumEvenOdd = evenOdd.toString(); //estan en number y lo pasamos a string para separarlos y sumar los indices
                console.log(sumEvenOdd);
                newDigit = parseInt(sumEvenOdd[0]) + parseInt(sumEvenOdd[1]); //se convierte en numero cada indice del string
                // console.log(newDigit);
                // console.log(digits);
                return newDigit;
            }
            // console.log('convertidos',evenOdd);
            return evenOdd;
        } 
        else {
            // console.log('solito',element);
            return parseInt(element);
        };
    });
    
    const sumNewDigit = evenNumber.reduce((element, initialize) => element + initialize);
    
    if (sumNewDigit %10===0){
        return document.write('Tu tarjeta es válida');//Si el residuo de dividirlo entre 10 es 0
      }else{
        return document.write('Tu tarjeta es inválida') //Si el residuo de dividirlo entre 10 no es 0
    }
    console.log(sumNewDigit);
    console.log(evenNumber);
    };
};

        // for (let i of luhn){
        //     if (i %2==0){
        //         result = i * 2;
        //         console.log(result);
        //     }
        //     // if(result >= 10){
        //     //     result = result.toString();
        //     //     console.log(result);

        //     // }
        // }

    //    let evenNumbersCard =  numberCardInverse.filter(array => {
    //        if(array %2==0){
    //            result = array * 2;
    //            console.log( result);
    //     }
    //     if(result >= 10){
    //         // result = result.toString();
    //         // console.log(result);
    //         newDigit = result + result;
    //         // newDigit = parseInt(result) + parseInt(result);
    //         // console.log(newDigit);
    //         digits.push(newDigit);
    //         // console.log(digits);
    //     } 
    //     else {
    //         newDigit = result;
    //         digits.push(newDigit);
    //         // console.log(newDigit);
    //     }   
    //    })

       


    // }

    // if (tdc.length===0){
        //       return alert("Ingresa un número válido");
        //   }else{
        //     numberCardInverse=tdc.split(''); //cortamos la cadena que nos mandaron y la metemos en un array
        //     numberCardInverse.reverse(); //colocamos en orden inverso el array
        //   //aqui pondemos ver que si esta en inverso console.log(numberCardInverse);
        //     for(i=0;i<numberCardInverse.length;i++){ //recorremos el array
        //       if(i %2!==0){ //aqui tomamos las posiciones pares para sacar el valor
        //         var result = 0;
        //         result =numberCardInverse[i]*2;
        //         if(result>=10){ //si el resultado de la multiplicación es mayor o igual a 10 sumamos sus dígitos
        //           result= result.toString();//para separarlos lo transformamos a string
        //           newDigit=parseInt(result[0])+parseInt(result[1]);//Sumamos cada digito regresamos a número
        //           digits.push(newDigit); //Metemos los digitos al array digits
        //            }else{
        //              newDigit=result //en caso de que el resultado sea menor o igual a 10 tambien entran en result
        //              digits.push(newDigit); //Tomamos los digitos y los metemos al array digits
        //           }
        //         }
        //       else
        //       {
        //        var digit=parseInt(numberCardInverse[i]); // Aqui se convierte a numero todos lo que estan en posiciones no pares
        //         digits.push(digit) //metemos al array los numeros en posiciones no pares
        //         //console.log(digits);
        //           }
        //         }
        //         for(j=0;j<digits.length;j++){
        //           numberCardSum+=digits[j]; //sumamos todos los digitos del array digits
        //     //      console.log(numberCardSum)
        //           }
        //     if (numberCardSum%10===0){
        //         return document.write('Tu tarjeta es válida');//Si el residuo de dividirlo entre 10 es 0
        //       }else{
        //         return document.write('Tu tarjeta es inválida') //Si el residuo de dividirlo entre 10 no es 0
        //         }
        //       }
        //     }


// };

// const date = arr1 => {
//     console.log('hola soy el indice 1');
// };

// const cvv = arr2 => {
//     console.log('hola soy el indice 3');
// };

// const name = arr3 => {
//     console.log('hola soy el indice 4');
// };



const validateCardDetails = element => {
    // getValueInput(formArray);

    let luhn = formArray[0].value;
   // console.log(luhn);
    methodLuhn(luhn);


    // date(formArray[1]);
    // cvv(formArray[3]);
    // name(formArray[4]);

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
