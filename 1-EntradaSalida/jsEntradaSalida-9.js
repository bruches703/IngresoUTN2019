/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var sueldo;
    var res;
    var aumento;

    sueldo = parseInt(document.getElementById("sueldo").value);
    res = sueldo*10/100;
    aumento = sueldo + res;
    document.getElementById("resultado").value = aumento;
	alert("El aumento seria de $"+ res);
}
