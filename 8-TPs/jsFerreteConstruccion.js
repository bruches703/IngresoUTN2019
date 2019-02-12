/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var largo;
var ancho;
var total;
var alambre;

largo = parseFloat(document.getElementById("Largo").value);
ancho = parseFloat(document.getElementById("Ancho").value);

total = largo*2 + ancho*2;
alambre = total*3;

alert ("total de alambre a comprar " + alambre.toFixed(2) + " mtrs");
}



function Circulo () 
{
 var rad;
 var perimetro;
 var alambre;

 rad = parseFloat(document.getElementById("Radio").value);
 perimetro = 2*Math.PI*rad;
 alambre = perimetro*3;

 alert ("total de alambre a comprar " + alambre.toFixed(2) + "mtrs");
}



function Materiales () 
{
var largo;
var ancho;
var total;
var cemento;
var cal;

largo = parseFloat(document.getElementById("Largo").value);
ancho = parseFloat(document.getElementById("Ancho").value);

total = largo * ancho;
cemento = 2*total;
cal = 3*total;

alert ("Se necesitan " + cemento + " bolsas de cemento y se necesitan " + cal + " bolsas de cal");


}