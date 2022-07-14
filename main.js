var cro = 0; //estado inicial del cronómetro.

// Botones Iniciales
$('#btnStart').toggle();
$('#btnStop').toggle();

function hideAllButons(){
    $('#btnStart').css("display", "none");
    $('#btnRestart').css("display", "none");
    $('#btnStop').css("display", "none");
    $('#btnContinue').css("display", "none");
}

$(document).ready(function(){

    $('#btnStart').click( function(){
        emp = new Date() //fecha inicial (en el momento de pulsar)
        elcrono = setInterval(tiempo, 10);
        hideAllButons();
        $('#btnRestart').toggle();
        $('#btnStop').toggle();
        $('#btnStop').removeAttr("disabled");
    });

    $('#btnRestart').click( function(){
        clearInterval(elcrono); //stop el crono
        //en cualquier caso volvemos a los valores iniciales
        cro = 0; //tiempo transcurrido a cero
        $('#pantalla').html("0 00 00 00"); //display a cero
        hideAllButons();
        $('#btnStart').toggle();
        $('#btnStop').toggle();
        $("#btnStop").prop( "disabled", true ); // Deshabilitamos el boton Stop        
    });

    $('#btnStop').click( function(){
        clearInterval(elcrono);                 //stop el crono
        hideAllButons();
        $('#btnRestart').toggle();
        $('#btnContinue').toggle();
    });

    $('#btnContinue').click( function(){
        emp2 = new Date(); //fecha actual
        emp2 = emp2.getTime(); //pasar a tiempo Unix
        emp3 = emp2 - cro; //restar tiempo anterior
        emp = new Date(); //nueva fecha inicial para pasar al temporizador 
        emp.setTime(emp3); //datos para nueva fecha inicial.
        elcrono = setInterval(tiempo, 10); //activar temporizador
        hideAllButons();
        $('#btnRestart').toggle();
        $('#btnStop').toggle();
        $('#btnStop').removeAttr("disabled");
    });
});

function tiempo() {
    actual = new Date(); //fecha a cada instante
    //tiempo del crono (cro) = fecha instante (actual) - fecha inicial (emp)
    cro = actual - emp; //milisegundos transcurridos.
    cr = new Date(); //pasamos el num. de milisegundos a objeto fecha.
    cr.setTime(cro);
    //obtener los distintos formatos de la fecha:
    cs = cr.getMilliseconds(); //milisegundos 
    cs = cs / 10; //paso a centésimas de segundo.
    cs = Math.round(cs); //redondear las centésimas
    sg = cr.getSeconds(); //segundos 
    mn = cr.getMinutes(); //minutos 
    ho = cr.getHours() - 1; //horas 
    //poner siempre 2 cifras en los números		 
    if (cs < 10) { cs = "0" + cs; }
    if (sg < 10) { sg = "0" + sg; }
    if (mn < 10) { mn = "0" + mn; }
    //llevar resultado al display.		 
    $('#pantalla').html(ho + " " + mn + " " + sg + " " + cs);
}