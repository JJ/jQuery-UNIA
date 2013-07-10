$("#clona_3").submit(function(){
    $("#texto_4 p")
	.after( $("#texto_4 p").clone()
		.attr("class","nuevo").css( { "color" : "DarkBlue",
					      "font-weight": "Bold" }));
    return false;
});
$("#borra_3").submit(function(){
    $("#texto_4 p.nuevo").remove();
    return false;
});
