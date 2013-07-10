$("#texto form").submit(function(){
    $("#texto p").prepend( "Mira: ").append(" - ¡Qué feliz!").after('<p>Este no: |-)</p>');
    return false;
});