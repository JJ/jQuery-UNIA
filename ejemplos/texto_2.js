$("#clona").submit(function(){
    $("#texto_2 p").after( $("#texto_2 p").clone());
    return false;
});
$("#borra").submit(function(){
    $("#texto_2 p").remove();
    return false;
});
