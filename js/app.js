$(document).ready(function(){

	var buttonVar = ("<button type='button'>Set Grid</button>");
	$("body").prepend(buttonVar);
	$("body").append("<div class='gridArea'></div>");
	var divVariable = ("<div></div>");
	for (var i = 0; i< 4; i++){
		$(".gridArea").append(divVariable);
		$(".gridArea div:last").addClass("row");
		for (var j = 0; j<4; j++){
			$(".row:last").append(divVariable);
			$(".row div:last").addClass("square");
		}
		
	}
	
	$("div").css({"border-color":"#000000","width":"15px","height":"15px","border":"solid 1px"});
	$(".gridArea").css({"width":"960px","height":"960px"});
	$(".row").css({"display":"block","width":"auto","height":"17px","border":"none"});
	$(".square").css("display","inline-block"); 

	$(".square").mouseenter(function(){
		$(this).css("background-color","#9900CC");
	});
	$(".square").mouseleave(function(){
	});

	$("button").click(function(){
	
		var gridSize = prompt("Enter the size of the grid");
		$("body").prepend(gridSize*gridSize);
		if (typeof gridSize === "number"){
			$("body").prepend("It works!");
		}
	});

});