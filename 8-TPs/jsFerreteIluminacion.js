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
 	var cant, opcion, descuento, total, suma, iibb, precio=35, flag=false;

     cant = parseInt(document.getElementById("Cantidad").value);
     opcion = document.getElementById("Marca").value;
/*Compra mayor a 6 lamparas*/
     if (cant >= 6)
     {
        descuento = precio * 50/100;
     }
/* compra 5 lamparas ArgentinaLuz*/
     else if(cant == 5)
     {
        if(opcion == "ArgentinaLuz")
        {
            descuento = precio * 40/100;
        }
     
        else 
        {    
            descuento = precio * 30/100;
        } 
     }
/*compra 4 lamparas ArgentinaLuz o FelipeLamparas*/
     else if (cant == 4)
     {
         if (opcion=="ArgentinaLuz" || opcion == "FelipeLamparas")
        {
            sdescuento = precio * 25/100;

        } 
     
        else
        {
            descuento = precio * 20/100;
         }
     }
/*compra 3 lamparas*/
     else if (cant == 3)
     {
        if(opcion=="ArgentinaLuz")
        {
           descuento = precio * 15/100;
        }
        else if (opcion == "FelipeLamparas")
        {
            descuento = precio * 10/100;     
        }
        else
        {
            descuento = precio * 50/100;
        }
     }
     else if (cant <= 2)
     {
            descuento=0;
     }

     preciodes= precio - descuento;
     total= preciodes * cant; 
/* Impuesto IIBB sumado si el total es de 120 o superior*/
     if(total >= 120)
        {
            iibb= total*0.10;
            total= total+iibb;
            flag=true;
        }     
     document.getElementById("precioDescuento").value = total.toFixed(2);
}
