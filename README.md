# Reto Validar todos los campos de una tarjeta de credito

El reto más importante en el presente trabajo fue el de escribir todas das las funciones en ECMA 6,
y llevar una logica un poco diferente al llamar a las funciones y declarar las variables ahora con let y const.

El trabajar con diferentes validaciones en los inputs fue otro de los retos, entregando un producto minimo viable.

Se realizo un maquetado para practicar, y dentro de un modal se encuentra el foemulario para la validación de la tarjeta.


# Valida datos de tarjetas de crédito

* **Track:** _Common Core_
* **Curso:** _JS Deep Dive: Crea tu propia librería usando JavaScript_
* **Unidad:** _Producto final_

---

La función debe recibir un elemento DOM que contenga
`<input>`s con los siguientes nombres (atributo `name`):

* `cn` (Card Number): El número de la tarjeta de crédito
* `exp` (Expiry Date): Fecha de expiración
* `cvv` (Card Verification Value): Código de validación de 3 dígitos
* `name`: Nombre completo como aparece en la tarjeta

## Ejemplo

```html
<form>
  <div class="form-group">
    <label for="cn">Número de tarjeta</label>
    <input id="cn" name="cn" />
  </div>
  <div class="form-group">
    <label for="exp">Fecha de vencimiento</label>
    <input id="exp" name="exp" />
  </div>
  <div class="form-group">
    <label for="cvv">CVV</label>
    <input id="cvv" name="cvv" />
  </div>
  <div class="form-group">
    <label for="name">Nombre completo</label>
    <input id="name" name="name" />
  </div>
  <input type="submit" value="Pagar" />
</form>
```

```js
const form = document.querySelector("form");

form.addEventListener("submit", e => {
  e.preventDefault();
  if (validateCardDetails(form)) {
    console.log("datos válido... enviar...");
  } else {
    console.log("datos inválidos");
  }
});

function validateCardDetails(element) {
  //escribe tu código aqui
}
```

A la hora de hacer las validaciones, tu funcion debería de añadir la clase
`.error` a los `<input>`s que no pasen la validación, o la clase `.success`
en caso de que sí pase.

Usar el algoritmo de Luhn, el cual únicamente usa los numeros de la tarjeta de crédito. **No** usa el código de verificacion, fecha de vencimiento , el nombre, ni la dirección.

#### Cosas a considerar:

1. Necesitas usar métodos de arreglo (.forEach, .map,etc.) sin embargo, estos metodos son para **arreglos**. Si yo hago:

```javascript
const form = document.querySelector("form");
```

¿Tengo un arreglo? ¿Algo diferente? ¿Cómo le hago para implementar metodos de arreglo en otras cosas que no son arreglos?

2. La solucion se tiene que hacer **con ES6** con los temas vistos en clase.

# Validaciones por realizar
1 Fecha vencimiento (solo 3 validaciones son necesarias)
2 No string vacio
3 solo numeros
4 que sean 2 digitos de año y 2 de mes
5 los numeros no pueden ser negativos
6 el mes no puede ser mayor a 12
7 Que el numero sea futuro (no hoy ni antes)
8 Revisar el formato

# CVV (todas son necesarias)
1 No string vacio
2 Sean SOLO 3 digitos (no string ni boolean ni nada)
3 los numeros sean positivos (que numeros son positivos de 3 digitos¿)

# Nombre (3 de las 6 son necesarias)
1 No string vacio
2 SOLO Sea string
3 Cada palabra maximo tiene 30 caracteres
4 mayusculas y minusculas
5 MINIMO 2 palabras
6 No empieza con espacios
