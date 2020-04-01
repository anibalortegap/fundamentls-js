/**
 * Trabajar con fechas:
 * Con variables de tipo Date, se pueden realizar operaciones de suma y resta similares a las que se realizan con números. 
 * El resultado que se obtiene está en milisegundos, por lo que luego hay que hacer algunas operaciones adicionales 
 * para llevarlos a días, meses o años según queramos. También aplica para Horas, Minutos, Segundos y Milisegundos.
 */

 //Definimos una función para restar fechas y el retorno en milisegundos
 function diasEntreFechas(fecha1, fecha2) {
     
    //Declaramos una variable con los milisegundos que hay en un dia
    const unDiaMilisegundos = 1000 * 60 * 60 * 24;
    const diferencia = Math.abs(fecha1 - fecha2); 
    console.log(diferencia);

    return Math.floor(diferencia / unDiaMilisegundos);
 }

 const hoy = new Date();
 const fechaNacimiento = new Date(1991, 7, 12);