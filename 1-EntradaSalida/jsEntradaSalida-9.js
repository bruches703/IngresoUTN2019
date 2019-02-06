/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var imp;
    var res;
    var aumento;

    imp = parseInt(document.getElementById("sueldo").value);
    res = imp*0.1;
    aumento = imp + res;
    document.getElementById("resultado").value = aumento;
	
}
