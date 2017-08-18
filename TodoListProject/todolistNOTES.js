
//---------------------------------------------------------------

//check off specific todos by clicking
$("li").click(function(){

	// $(this).css("color", "gray");
	// $(this).css("text-decoration", "line-through");
	//if li is gray 
	if($(this).css("color") === "rgb(128, 128, 128)"){
		//turn black
		$(this).css({
		color: "black",
		textDecoration: "none"
		});
	}
	//else turn gray
	else{
		$(this).css({
		color: "gray",
		textDecoration: "line-through"
		});
	}
});

//THIS IS OPTION 2, way less code

$("li").click(function(){
	$(this).toggleClass("completed");
});





//---------------------------------------------------------------



//bubble events are not good
//click on x to delete Todo
$("span").click(function(){
	alert("clicked on span");
});
//solved problem - pass event that calls stopPropagation
//click on x to delete Todo
$("span").click(function(event){
	alert("clicked on span");
	event.stopPropagation();
});

//this part was about deleting the to-do completely, which requires using remove.
//fadeout does not delete the element

//click on x to delete Todo
$("span").click(function(event){
	// $(this).parent().remove();
	//element becomes hidden with fadeout
	// $(this).parent().fadeOut();
	//fadeout then remove completely
	//this refers to the span
	$(this).parent().fadeOut(500, function(){
		$(this).remove(); //this refers to the li which is the parent
	});

	event.stopPropagation();
});


//---------------------------------------------------------------
//this part was about entering in data, saving it to a variable then outputting it with all the proper shit, and resetting the box
$("input[type='text']").keypress(function(event){
	if(event.which === 13){ //13 = enter key
		//grabbing new todo text from input
		var todoText = $(this).val();
		//clear out input in text box
		$(this).val(""); //because this is refering to the input type = text, which just means the text box -> clears the box
		//create a new li and add to ul(which currently selects all ul's)
		//also adding the span with X
		$("ul").append("<li><span>X </span>" + todoText + "</li>")
	}
});
//NOW WE HAVE TO USE ON SO WE CAN DELETE THE NEW LI'S - todo's
//check off specific todos by clicking

$("li").click(function(){
	$(this).toggleClass("completed");
});

//new verison
//we can only add listeners using jquery on elements that exist when this code is runned the first time, we don't have all the LI's, so we need to add listeners to the entire ul(parent), except we add the li WHICH is saying that when a li is clicked inside of a ul, run this code!!  SO we are lisening to li's that are clicked inside of ul
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});


//HAD to change how we delete li's as well




//click on x to delete Todo
$("span").click(function(event){
	//this refers to the span
	$(this).parent().fadeOut(500, function(){
		$(this).remove(); //this refers to the li which is the parent
	});

	event.stopPropagation();
});

//NEW VERSION
//click on x to delete Todo
//so this is saying when we click a span inside of a ul run the code, which removes the span and it's parent which is the li. Once again we having to use ul because we have to attach the listener to existing code
$("ul").on("click","span",function(event){
	//this refers to the span
	$(this).parent().fadeOut(500, function(){
		$(this).remove(); //this refers to the li which is the parent
	});

	event.stopPropagation();
});














//---------------------------------------------------------------
















