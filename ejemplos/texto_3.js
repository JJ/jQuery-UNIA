$("#clona_2").submit(function(){
    $("#texto_3 p").after( $("#texto_2 p").clone()
			   .addClass("nuevo").css("color","green"));
    return false;
});
$("#borra_2").submit(function(){
    $("#texto_3 p.nuevo").remove();
    return false;
});
