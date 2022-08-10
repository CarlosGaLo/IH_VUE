/*Declaracion de variables
Usamos camelCase para escribir las cosas. 
las variablesSeEscribenAsi y las FuncionesSeEscribenAsi*/

/*Variables booleanas -> De verdadero o falso*/
let mayorDeEdad = false;
let mirarMayorEdad = false;

/*Variable numérica*/
let edad = 0;

//Variables de texto
let textoParaPruebas = "Me gusta mucho escuchar Música"
//Esta variable se la pedimos al usuario
let years = prompt("¿Qué edad tienes?", 15);

//Si lo que nos ha puesto el usuario no es en número, se lo decimos. Si es un número lo metemos en la variable edad. 
if(!isNaN(years)){
    edad = parseFloat(years);
    mirarMayorEdad = true;
} else {
    //Else se lee como "en cualquier otro caso"
    document.write("Oye! Eso no es una edad!" +"<br/>");
}

//Comprobamos la edad que nos han pasado, si ya es mayor de edad hacemos que mayorDeEdad sea true (verdadero).
if(mirarMayorEdad && edad>=18){
    mayorDeEdad=true;
    document.write("Ya es mayor de edad!" +"<br/>");
}

//Mientras no sea mayor de edad y nos haya metido un número en el prompt, empezamos a sumarle años y a imprimirlos por pantalla.
//¡Ojo! Si ya es mayor de edad, no se escribirá nada de esto en pantalla. 
while(!mayorDeEdad && mirarMayorEdad){
    document.write("La edad es: " + edad + "<br/>");
    if(edad >= 18){
        mayorDeEdad = true;
        document.write("Ya es mayor de edad!" +"<br/>");
    } else if (edad >= 100){
        document.write("ups, algo ha salido mal" +"<br/>");
    } else {
        let edadRestante = 18-edad;
        document.write(`Aun no es mayor de edad, le faltan ${edadRestante} años` + "<br/>");
        document.write("Aun no es mayor de edad, le faltan " + edadRestante + " años" + "<br/>")
    }
    edad = edad+1;
    //Es lo mismo que escribir edad += 1;
}

for(let i=0; i<5; i++){
    //i++ significa que sumes 1 a i. Lo que hay donde está el i++ se ejecuta al finalizar cada ciclo. 
    //Para bucles for se usa el i, j, k... como contadores, es lo tradicional, pero no es lo obligatorio. Podría llamar al contador "contador" o algo similar. 
    //Actualmente el ciclo for está siendo reutilizado con for each. 
    document.write(i + "<br/>");
}

console.log(textoParaPruebas.lastIndexOf("música"));

//Ejercicio 1. ¿Cómo introducirías el primer if dentro del while para tener que escribir menos código?
//Ejercicio 2. ¿Por que aunque pongas que la edad es 200, nunca te llega a escribir en pantalla "ups, algo ha salido mal"? Arréglalo

/*Resumen:
Los códigos en programación, cuando están bien hechos, deben poder leerse con relativa facilidad. 
Si leyésemos este código desde arriba hasta abajo sería: 
Oye, ordenador. Que sepas que vamos a tener una variable que se llamará mayorDeEdad, otra que se llamará mirarMayorEdad, otra que se llamará Edad y otra que se llamará años. 
La variable mayor de edad será falsa. 
La variable mayor de edad será falsa. 
La edad inicial será 0
La variable year pregúntasela al usuario por pantalla, a ver qué te dice. 

Si lo que te ha dicho es un número, haz que la edad se convierta en el número que te ha pasado y haz que mirarMayorEdad sea verdadero. 
Si lo que te ha dicho no es un número, dile "oye, que eso no es una edad"

Luego, si mirarMayorEdad es verdadero y la edad es mayor que 18, dile que ya es mayor de edad y convierte mayorDeEdad en verdadero. 

Luego, mientras mayor de edad sea falso y mirarMayorDeEdad sea verdadero:
- Escribe la edad por pantalla. 
- Si la edad es 18 o más haz que mayorDeEdad sea verdadero y ponle un mensaje por pantalla que diga "ya es mayor de edad"
- En otro caso, si la edad es mayor que cien, dile "ups, algo ha salido mal"
- en cualquier otro caso calcula cuánto le falta para ser mayor de edad e imprímelo por pantalla dos veces. 
Finalmente, suba uno a la edad que tiene el sujeto. 

Finalmente, empieza a contar desde 0 hasta 4, cuenta de uno en uno y por cada vez que cuentes, escribe en pantalla el número por el que vas.
*/

//Como véis, escribir todo eso puede ser largo y engorroso, pero al final todo tiene una traducción al castellano. ¡Por eso se llaman lenguajes! Porque te permiten escribir y expresarte, aunque con una sintáxis propia. Es como aprender inglés, chino o cualquier otro idioma. Con la ventaja de que este idioma ya está hecho para parecerse mucho al inglés, lo diseñaron así. ¡Por eso recomendamos trabajar siempre en inglés!

//Un saludo chicos, para cualquier duda, preguntadme :) 


/*
=======================ANOTACIONES
Tipo de declaración débil -> Una variable es del tipo del dato que contiene. 
Las variables se pueden declarar, inicializar y modificar
Las constantes son datos que no van a variar durante la ejecución del programa
Las variables solo existen en el entorno en el que son declaradas -> No puedes acceder a una variable desde fuera de su bloque
Finaliza las sentencias con ; -> Es opcional finalizar las funciones con ; ({};)
El código se ejecuta de arriba-abajo -> No se puede acceder a una variable antes de declararla

El = se usa para hacer que lo que hay a su izquierda sea igual a lo que hay a su derecha. 
< es menor que. 
> es mayor que. 
<= menor o igual que. 
>= mayor o igual que. 
== Mira si el valor de las cosas que hay a ambos lados es igual
=== Mira si ambas cosas a ambos lados son exáctamente iguales
!= Mira si las cosas son desiguales
|| si se cumple la condición a la izquierda o la condición a la derecha
&& si se cumple la condición a la izquierda y la condición a la derecha
=======================DECLARACIONES Y PALABRAS RESERVADAS
let -> Declara una variable
var -> Declara una variable (obsoleto)
const -> Declara una constante (inicialízala!)
let num = 5; -> Inicializa
num = 3; -> Modifica
const PI = 3,14 -> Las constantes solo se pueden crear e iniciar en una única sentencia. No se pueden modificar.
Tipos de datos:
	- Primitivos -> Tipos de datos que el lenguaje trae por defecto. Todos se declaran con let. 
		- Números -> JS no distingue entre tipos de números (int, float, double...). Los valores decimales se ponen con punto, no con coma. 
		- String -> Cadena de caracteres o simplemente cadenas. Se declara con comillas simples o dobles Y NO DEBES MEZCLAR LAS COMILLAS, si una variable empieza con simples, debe continuar con simples. Ej: let nombre = "Carlos"
		- Booleanos -> Verdadero o falso con palabras reservadas true y false respectivamente. 
		- Undefined -> Indefinido
		- Null -> Nulo
		- Symbol -> Símbolo
	- 
	- 


=======================Funciones
console.log(PRINT) 
document.write(PRINT)
${text} -> Añade como texto lo que haya en el interior dentro de un string. ej: "Your favourite character is from the house ${house}"
parseInt(x) -> convierte lo que haya entre paréntesis en un número entero (si se puede)
parseFloat(x) -> convierte lo que haya entre paréntesis en un número real (con decimales si es que tiene) (si se puede)
*/
