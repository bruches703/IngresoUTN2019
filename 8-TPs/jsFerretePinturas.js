/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var tem;
    var cen;

    tem = parseFloat(document.getElementById("Temperatura").value);
    cen = (tem - 32) * (5/9);

    alert (cen);

}

function CentigradosFahrenheit () 
{
	var tem;
    var fah;

    tem = parseFloat(document.getElementById("Temperatura").value);
    fah = tem * (9/5) + 32;

    alert (fah);
}
