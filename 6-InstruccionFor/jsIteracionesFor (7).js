function Mostrar()
{
    var divisores, acumulador=0, num, cantidad;
    num= parseInt(prompt("Ingrese numero"));
            while(isNaN(num))
            {
            num= parseInt(prompt("Valor incorrecto, reingrese numero"));
            }
    for(i=1;i<=num;i++)
    {
        if(num%i==0)
        {
            document.write(i+"<br>");
            acumulador++;
        }

    }
    document.write("<br><br>Cantidad de divisores: "+suma);


}//FIN DE LA FUNCIÓN