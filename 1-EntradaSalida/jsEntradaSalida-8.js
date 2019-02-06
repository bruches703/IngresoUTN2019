/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var num1;
    var num2;
    var res;

    num1 = document.getElementById("numeroDividendo").value;
    num2 = document.getElementById("numeroDivisor").value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);
    
    res = num1%num2;
    res  = parseInt(res);
    
    alert ("El resto es " + res);
}
