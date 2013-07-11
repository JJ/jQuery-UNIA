$(function() {
    $("#refranero form").submit( function () {
	$.ajax({ 
	    url: "/refran", 
	    success: function( data ) { 
		console.log(data);
		$("#refran").text(data.refran);
            }
        }); 
	return false;
    });
})
