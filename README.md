# APIs Rick and Morty (Required knowledge)

## setProperty
es un método en JavaScript que se utiliza para establecer o modificar el valor de una propiedad CSS en un elemento HTML. Permite cambiar dinámicamente el estilo de un elemento HTML directamente a través de JavaScript.

La sintaxis general del método `setProperty` es la siguiente:

```javascript
elemento.style.setProperty(nombrePropiedad, valor);
```

Donde:

- `elemento`: Es el elemento HTML al que se le desea aplicar el cambio de estilo.
- `nombrePropiedad`: Es una cadena que representa el nombre de la propiedad CSS que se desea modificar.
- `valor`: Es el nuevo valor que se asignará a la propiedad CSS especificada.

Por ejemplo, si tienes un elemento `<div>` y deseas cambiar su color de fondo (background-color) mediante JavaScript, puedes hacerlo de la siguiente manera:

```javascript
const miDiv = document.getElementById("miDiv");
miDiv.style.setProperty("background-color", "blue");
```

En este caso, se cambia el color de fondo del elemento `miDiv` a azul. La función `setProperty` es especialmente útil cuando necesitas cambiar estilos en respuesta a eventos o interacciones del usuario.

---

## forEach
 es una función incorporada en JavaScript que se utiliza para iterar sobre elementos de una matriz (array) o de un objeto iterable, y ejecutar una función para cada elemento. Es una forma conveniente y legible de recorrer los elementos de una colección y realizar operaciones en cada uno de ellos.

La sintaxis general de `forEach` es la siguiente:

```javascript
array.forEach(function(elemento, indice, array) {
  // Código a ejecutar para cada elemento
});
```

Donde:

- `array`: El array o el objeto iterable que se va a recorrer.
- `elemento`: El valor actual del elemento en cada iteración.
- `indice`: (Opcional) El índice del elemento actual en el array.
- `array`: (Opcional) La matriz original que se está iterando.

Por ejemplo, si tienes un array de números y deseas imprimir cada número en la consola, puedes usar `forEach` de la siguiente manera:

```javascript
const numeros = [1, 2, 3, 4, 5];

numeros.forEach(function(numero) {
  console.log(numero);
});
```

En este caso, la función dentro de `forEach` se ejecutará para cada elemento del array `numeros`, y el valor de `numero` cambiará en cada iteración.

Es importante destacar que `forEach` no modifica el array original ni devuelve un nuevo array. Su principal propósito es ejecutar una función para cada elemento de la colección. Si deseas transformar o filtrar los elementos de un array, es posible que desees considerar otras funciones de array como `map` o `filter`.

Además, es importante tener en cuenta que `forEach` no es compatible con la palabra clave `await` para operaciones asíncronas. Si necesitas iterar sobre una colección con operaciones asincrónicas, podrías considerar utilizar un bucle `for...of` o funciones como `Promise.all` junto con `map`.

---

## fetch 
es una función incorporada en JavaScript que se utiliza para realizar peticiones de red y obtener recursos (como archivos, datos o información) desde una URL. Se utiliza comúnmente para hacer solicitudes HTTP a servidores web y recuperar datos en formato JSON, HTML, XML, entre otros.

La sintaxis básica del `fetch` es la siguiente:

```javascript
fetch(url)
  .then(response => {
    // Manejo de la respuesta
    return response.json(); // Por ejemplo, convierte la respuesta en JSON
  })
  .then(data => {
    // Uso de los datos obtenidos
  })
  .catch(error => {
    // Manejo de errores
  });
```

Aquí hay una explicación de los conceptos clave:

1. **`fetch(url)`**: Esta es la llamada inicial al método `fetch`, donde `url` es la dirección del recurso que deseas obtener. Retorna una promesa que representa la respuesta de la solicitud.

2. **`.then(response => { ... })`**: Después de que la solicitud sea exitosa, se ejecutará esta función, donde `response` es el objeto de respuesta de la solicitud. Aquí es donde puedes realizar acciones en función de la respuesta recibida, como convertir la respuesta a JSON o verificar el estado de la respuesta (código de estado HTTP).

3. **`.then(data => { ... })`**: Aquí, puedes utilizar los datos obtenidos de la respuesta anterior, después de haberlos procesado. Por ejemplo, si obtuviste datos JSON, aquí podrías trabajar con ellos.

4. **`.catch(error => { ... })`**: Si ocurre un error en cualquiera de las etapas anteriores (por ejemplo, la solicitud falla o hay un error al analizar los datos), se ejecutará esta función para manejar el error.

Un ejemplo completo podría verse así:

```javascript
fetch("https://api.example.com/data")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    // Trabajar con los datos
    console.log(data);
  })
  .catch(error => {
    // Manejo de errores
    console.error("Fetch error:", error);
  });
```

---

# ¿Qué es un objeto en JavaScript?

Un objeto es una estructura de datos que permite almacenar y organizar múltiples valores relacionados en una sola entidad. En lugar de tener muchas variables independientes, los objetos te permiten agrupar propiedades y métodos que están relacionados en un solo contenedor.

En JavaScript, los objetos pueden contener tanto propiedades como métodos:

- **Propiedades**: Son pares clave-valor donde la clave es una cadena (nombre de la propiedad) y el valor puede ser cualquier tipo de dato, incluyendo otros objetos. Las propiedades pueden contener datos como números, cadenas, arreglos, funciones, etc.

- **Métodos**: Son funciones que están asociadas con un objeto en particular. Pueden acceder y manipular las propiedades del objeto y realizar acciones específicas.

### Creación de Objetos

Hay varias formas de crear objetos en JavaScript:

1. **Objetos Literales**: La forma más simple de crear un objeto.

```javascript
const persona = {
  nombre: "Juan",
  edad: 30,
  saludar: function() {
    console.log("¡Hola!");
  }
};
```

2. **Constructor de Objeto**: Usar una función constructora para crear objetos.

```javascript
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.saludar = function() {
    console.log("¡Hola!");
  };
}

const persona = new Persona("Juan", 30);
```

3. **Clases**: Introducidas en ES6, las clases son una forma más moderna y clara de definir objetos y sus métodos.

```javascript
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log("¡Hola!");
  }
}

const persona = new Persona("Juan", 30);
```

### Acceso a Propiedades y Métodos

Puedes acceder a las propiedades y métodos de un objeto utilizando la notación de punto (`objeto.propiedad`) o la notación de corchetes (`objeto["propiedad"]`).

```javascript
console.log(persona.nombre); // Juan
persona.saludar(); // ¡Hola!
```

### Métodos y Propiedades Predefinidas

JavaScript proporciona métodos y propiedades predefinidos para trabajar con objetos. Algunos de ellos son:

- `Object.keys(objeto)`: Devuelve un arreglo con las claves/propiedades del objeto.
- `Object.values(objeto)`: Devuelve un arreglo con los valores de las propiedades del objeto.
- `Object.entries(objeto)`: Devuelve un arreglo de arreglos con las claves y valores del objeto.
- `hasOwnProperty(propiedad)`: Comprueba si el objeto tiene una propiedad específica.

### Clonación y Copia de Objetos

La clonación y copia de objetos puede ser compleja debido a cómo JavaScript maneja las referencias. Puedes hacer una copia superficial utilizando `Object.assign()` o la sintaxis del operador de propagación (`...`), pero si los objetos son anidados, es posible que solo se copien las referencias.

### Prototipos y Herencia

JavaScript utiliza un sistema de prototipos para permitir la herencia entre objetos. Cada objeto tiene un prototipo que puede contener propiedades y métodos que pueden ser heredados por otros objetos.

### JSON y Objetos

JavaScript Object Notation (JSON) es un formato de intercambio de datos muy común. Los objetos en JavaScript son compatibles con JSON, lo que facilita la conversión entre los dos formatos.

