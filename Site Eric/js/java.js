$(document).ready(function(){
    $("#relatorioo").click(function(){
        $("div#relatorio").toggle();
		$("div#artigo").hide();
       
       
    });
	  $("#vermais").click(function(){
        $("div#lermais").fadeToggle();
		$("#vermais").hide();
       
       
    });
	$("#vermenos").click(function(){
        $("div#lermais").fadeToggle();
		$("#vermais").show();
       
       
    });
	
	 $("#artigoo").click(function(){
        $("div#artigo").toggle();
		$("div#relatorio").hide();
       
       });

	   $("#mostraring").click(function(){
        $("div#ing").show();
		$("div#br").hide();
       
       });
	    $("#mostraring").click(function(){
        $("div#ing").show();
		$("div#br").hide();
       
       });
	    $("#mostrarbr").click(function(){
        $("div#br").show();
		$("div#ing").hide();
       
       });
	    $("#padrim").click(function(){
        $("div#padrimm").fadeToggle();
		$("div#steamm").hide();
		$("div#wazee").hide();
       });
	    $("#steam").click(function(){
        $("div#padrimm").hide();
		$("div#steamm").fadeToggle();
		$("div#wazee").hide();
       });
	    $("#waze").click(function(){
        $("div#padrimm").hide();
		$("div#steamm").hide();
		$("div#wazee").fadeToggle();
       });
	   
	   });
   