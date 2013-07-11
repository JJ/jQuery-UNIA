$("#angel").click( function( event ){
		       $("#demonio").click();
});
$("#demonio").click(function(event){
			$("#demonio").text("♡")
			    .css({ "background-color": "white", 
				   color: "red",
				   fontSize: "4em" } );	
})

