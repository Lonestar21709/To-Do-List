//check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on x to delete Todo
$("ul").on("click","span",function(event){
	//this refers to the span
	$(this).parent().fadeOut(500, function(){
		$(this).remove(); //this refers to the li which is the parent
	});

	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){ //13 = enter key
		//grabbing new todo text from input
		var todoText = $(this).val();
		//clear out input in text box
		$(this).val(""); //because this is refering to the input type = text, which just means the text box -> clears the box
		//create a new li and add to ul(which currently selects all ul's)
		//also adding the span with X
		$("ul").append("<li> <span> <i class='fa fa-trash-o'> </i> </span> " + todoText + "</li>")
	}
});


$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});