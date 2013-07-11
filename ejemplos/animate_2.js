$("#hembra_2").hover( function( event ){
			    $("#macho_2").animate( {marginBottom: 10, marginLeft: 10});
},function(event) {
    $("#macho_2").animate( {marginBottom: 0, marginLeft: 0}); 
});
$("#macho_2").hover( function( event ){
			    $("#hembra_2").animate( {marginBottom: 10, marginLeft: 10});
},function( event ){
			    $("#hembra_2").animate( {marginBottom: 0, marginLeft: 0});
} );


