/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cant, opcion, descuento, total, suma, iibb;

     cant = parseFloat(document.getElementById("Cantidad").value);
     opcion = document.getElementById("Marca").value;
/*Compra mayor a 6 lamparas*/
     if (cant >= 6)
     {
        suma= 35*cant;
        descuento = suma * 0.50;
        total= suma-descuento;
        if(total >= 120)
        {
            iibb= total*0.10;
            total= total+iibb;
            document.getElementById("precioDescuento").value = total.toFixed(2);
            alert ("Se sumo impusto IIBB de "+ iibb);
        }
        else
        {
            document.getElementById("precioDescuento").value = total.toFixed(2);
        }
     }
/* compra 5 lamparas ArgentinaLuz*/
     if(cant == 5)
     {
        if(opcion == "ArgentinaLuz")
        {
            suma= 35*cant;
            descuento = suma * 0.40;
            total= suma-descuento;
           if(total >= 120)
            {
                iibb= total*0.10;
                total= total+iibb;
                document.getElementById("precioDescuento").value = total.toFixed(2);
                alert ("Se sumo impusto IIBB de "+ iibb);
            }
            else
            {
                document.getElementById("precioDescuento").value = total.toFixed(2);
            }
        }
     
        if(opcion != "ArgentinaLuz")
            {    
            suma= 35*cant;
            descuento = suma * 0.30;
            total= suma-descuento;
                if(total >= 120)
                {
                    iibb= total*0.10;
                    total= total+iibb;
                    document.getElementById("precioDescuento").value = total.toFixed(2);
                    alert ("Se sumo impusto IIBB de "+ iibb);
                }
                else
                {
                    document.getElementById("precioDescuento").value = total.toFixed(2);
                }
            
            } 
     }
/*compra 4 lamparas ArgentinaLuz o FelipeLamparas*/
     if (cant == 4)
     {
         if (opcion=="ArgentinaLuz" || opcion == "FelipeLamparas")
        {
            suma= 35*cant;
            descuento = suma * 0.25;
            total= suma-descuento;
            if(total >= 120)
            {
                iibb= total*0.10;
                total= total+iibb;
                document.getElementById("precioDescuento").value = total.toFixed(2);
                alert ("Se sumo impusto IIBB de "+ iibb);
            }
            else
            {
                document.getElementById("precioDescuento").value = total.toFixed(2);
            }
        } 
     
        if (opcion != "ArgentinaLuz" && opcion != "FelipeLamparas")
        {
            suma= 35*cant;
            descuento = suma * 0.20;
            total= suma-descuento;
            if(total >= 120)
             {
                iibb= total*0.10;
                total= total+iibb;
                document.getElementById("precioDescuento").value = total.toFixed(2);
                alert ("Se sumo impusto IIBB de "+ iibb);
            }
            else
            {
                document.getElementById("precioDescuento").value = total.toFixed(2);
            }
         }
     }
/*compra 3 lamparas*/
     if (cant == 3)
     {
        if(opcion=="ArgentinaLuz")
        {
            suma= 35*cant;
            descuento = suma * 0.15;
            total= suma-descuento;
                if(total >= 120)
                {
                    iibb= total*0.10;
                    total= total+iibb;
                    document.getElementById("precioDescuento").value = total.toFixed(2);
                    alert ("Se sumo impusto IIBB de "+ iibb);
                }
                else
                {
                document.getElementById("precioDescuento").value = total.toFixed(2);
                }
        }
        if (opcion == "FelipeLamparas")
        {
            suma= 35*cant;
            descuento = suma * 0.10;
            total= suma-descuento;
                if(total >= 120)
                {
                    iibb= total*0.10;
                    total= total+iibb;
                    document.getElementById("precioDescuento").value = total.toFixed(2);
                    alert ("Se sumo impusto IIBB de "+ iibb);
                }
                else
                {
                    document.getElementById("precioDescuento").value = total.toFixed(2);
                }
        }
        else
        {
            suma= 35*cant;
            descuento = suma * 0.05;
            total= suma-descuento;
            if(total >= 120)
            {
                iibb= total*0.10;
                total= total+iibb;
                document.getElementById("precioDescuento").value = total.toFixed(2);
                alert ("Se sumo impusto IIBB de "+ iibb);
            }
            else
            {
                document.getElementById("precioDescuento").value = total.toFixed(2);
            }
        }
     }
}
