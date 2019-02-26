function Mostrar()
{
    var contador=0;
    var num=parseInt(prompt("Ingrese numero"));
            while(isNaN(num))
            {
            num=parseInt(prompt("Valor incorrecto, reingrese numero"));
            }

    for(i=1;i<=num;i++)
    {
        if(num%i==0)
        {
            contador++;
        }
    }
    if(contador<3)
    {
        alert("es numero primo");
    }
    else
    {
        alert("no es numero primo");
    }

}//FIN DE LA FUNCIÓN