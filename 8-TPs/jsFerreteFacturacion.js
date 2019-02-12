/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
    {
	var precio1;
    var precio2;
    var precio3;
    var resultado;
    precio1 = parseFloat(document.getElementById("PrecioUno").value);
    precio2 = parseFloat(document.getElementById("PrecioDos").value);
    precio3 = parseFloat(document.getElementById("PrecioTres").value);
    resultado= precio1 + precio2 + precio3;
    alert ("La suma es " + resultado.toFixed(2));
    
    }

function Promedio () 
    {
    var precio1;
    var precio2;
    var precio3;
    var resultado;

    precio1 = parseFloat(document.getElementById("PrecioUno").value);
    precio2 = parseFloat(document.getElementById("PrecioDos").value);
    precio3 = parseFloat(document.getElementById("PrecioTres").value);
    
    resultado= (precio1 + precio2 + precio3)/3;
     alert ("el promedio es " + resultado.toFixed(2));
    }

function PrecioFinal () 
    {
    var precio1;
    var precio2;
    var precio3;
    var resultado;
    var iva;
    var total;

    precio1 = parseFloat(document.getElementById("PrecioUno").value);
    precio2 = parseFloat(document.getElementById("PrecioDos").value);
    precio3 = parseFloat(document.getElementById("PrecioTres").value);
    
    resultado= (precio1 + precio2 + precio3);
    iva = resultado * 21 / 100;
    total = iva + resultado;
    alert ("El precio total es de " + total.toFixed(2));
    }