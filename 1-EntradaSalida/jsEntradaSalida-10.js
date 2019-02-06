/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{
	var imp;
    var res;
    var descuento;

    imp = parseInt(document.getElementById("importe").value);
    res = imp*0.25;
    descuento = imp - res;
    document.getElementById("resultado").value = descuento;
}
