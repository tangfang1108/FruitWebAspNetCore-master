// JavaScript Document

//function hide(){
//	var a=$("div").css("background-color","red");
//	alert(a);
//}
$(document).ready(function(){
	$("#nav-left-dl-1").mouseout(function(){
		$("#nav-hide-1").hide();
		$("#ad").show();
	});
//	alert("aa");
	$("#nav-left-dl-1").mouseover(function(){
		$("#nav-hide-1").show();
		$("#ad").hide();
	});
	$("#nav-left-dl-2").mouseout(function(){
		$("#nav-hide-2").hide();
		$("#ad").show();
	});
//	alert("aa");
	$("#nav-left-dl-2").mouseover(function(){
		$("#nav-hide-2").show();
		$("#ad").hide();
	});
	$("#nav-hide-1").mouseout(function(){
		$("#nav-hide-1").hide();
		$("#ad").show();
	});
	$("#nav-hide-2").mouseover(function(){
		$("#nav-hide-2").show();
		$("#ad").hide();
	});
//	alert("aa");
	$("#nav-hide-2").mouseout(function(){
		$("#nav-hide-2").hide();
		$("#ad").show();
	});
	$("#nav-hide-1").mouseover(function(){
		$("#nav-hide-1").show();
		$("#ad").hide();
	});
	
//	$(".sp-commodity").mouseover(function(){
////		alert("66");
//		$(".sp-commodity img").css("box-shadow","0px 0px 2px black");
//	});
//	$(".sp-commodity").mouseout(function(){
////		alert("66");
//		$(".sp-commodity img").css("box-shadow","none");
//	});
});
