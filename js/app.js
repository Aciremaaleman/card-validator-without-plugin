// Declarando const y let
const form = document.querySelector("form");
// Se declara cun const para convertir el elemento form del html en un array por medio del metodo form
const formArray = Array.from(form);
// let borderColor = document.getElementsByClassName("forms").value;
// console.log(borderColor);
// console.log(formArray); 
let evenMultiply = 0;
let numberCardSum = 0;
let newDigit= 0;

// Funcion que le da el evento al boton
form.addEventListener("submit", e => {
  e.preventDefault();
  if (validateCardDetails(form)) {
    console.log("datos válido... enviar...");
    // colorValidate(form);
  } 
  else {
    console.log("datos inválidos");
    // colorValidate(form);
    // return borderColor = document.getElementById("allForm").style.borderColor = "red";
  };
});

// const colorValidate = form => {
//     if (formArray == true) {
//         alert('success');
//        form.style.borderColor = "green";
//     }
//     else {
//        form.className = 'error'; 
//     }

// }

// Funcion metodo luhn
// 4485715860868875 ejemplo de numero de tarjeta para prober
const methodLuhn = luhn => {
    if(luhn == ''|| luhn.length !== 16){ //Si el input esta vacio o es menor a 16 digitos entonces cambiar el color del input
        document.getElementById("cn").classList.add('error');
        return false;
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
        document.getElementById("cn").classList.add('success');
        // return borderColor = document.getElementById("cn").style.borderColor = "#46ed3d"; //Si el residuo de dividirlo entre 10 no es 0
        return true;
    } 
    else {
        document.getElementById("cn").classList.add('error');
        return false;
        // return borderColor = document.getElementById("cn").style.borderColor = "red"; //Si el residuo de dividirlo entre 10 no es 0
    };
  };
};

const dateCard = date => {
    // const arrayDate = date.split('');
    // console.log(arrayDate);
    // let indexDate = arrayDate.map((element,index) => {
    //     // if (element[0] <= 9 || element[1] <= 2 || element[2] <= 9 || element[3] <= 9){
    //     //     return borderColor = document.getElementById("exp").style.borderColor = "green";
    //     // }
        if (date.length !== 4){
            document.getElementById("exp").classList.add('error');
            return false;
            // return borderColor = document.getElementById("exp").style.borderColor = "#f73131";
        }
        if (date == ''){
            document.getElementById("exp").classList.add('error');
            return false;
            // return borderColor = document.getElementById("exp").style.borderColor = "#f73131";
        }
        else {
            document.getElementById("exp").classList.add('success');
            return true;
            // return borderColor = document.getElementById("exp").style.borderColor = "#46ed3d";
        }
    }
// )};

const securityCode = cvv => {
    cvv = parseInt(cvv);
    if (cvv == '') {
        document.getElementById("cvv").classList.add('error');
        return false;
        // return borderColor = document.getElementById("cvv").style.borderColor = "#f73131";
    }
    if (cvv < 100 || cvv > 999){
        document.getElementById("cvv").classList.add('error');
        return false;
    }
    // if (isNan(cvv)){
    //     document.getElementById("cvv").classList.add('error');
    //     return false;
    // }
    // if (cvv.length !==  3){
    //     document.getElementById("cvv").classList.add('error');
    //     return false;
    //     // return borderColor = document.getElementById("cvv").style.borderColor = "#f73131";
    // }
    else {
        document.getElementById("cvv").classList.add('success');
        return true;
        // return borderColor = document.getElementById("cvv").style.borderColor = "#46ed3d";
    }
};

const completeName = name => {
    if (name == ''){
        document.getElementById("name").classList.add('error');
        return false;
        // return borderColor = document.getElementById("name").style.borderColor = "#f73131";
    }
    if (name.length >= 30){
        document.getElementById("name").classList.add('error');
        return false;
        // return borderColor = document.getElementById("name").style.borderColor = "#f73131";
    }
    else {
        document.getElementById("name").classList.add('success');
         return true;
        // return borderColor = document.getElementById("name").style.borderColor = "#46ed3d";
    }
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

    if (methodLuhn(luhn) == ''){
        return false;
    } 
    if (dateCard(date) == ''){
        return false;
    } 
    if (securityCode(cvv) == ''){
        return false;
    } 
    if (completeName(name) == ''){
        return false;
    } 
    else {
        // colorValidate(form);
        return true;
    };
};


