/*

Program Name: Recipe Display Application
Author: Brianna Barreto
Date: 6 April 2016
Filename: script.js

*/



//displays the next element after the current target
function display (event) {
    
    $(event.currentTarget).next().fadeIn("slow");
    
}// end of display


//attach event listener to  h3 elements to invoke display function when clicked
//$("h3").click(display);  


function display2 () {
    //alert("hello");
    $("h3").after("<center>Enjoy!</center>");
    
}

$("img").click(display2);

$("h2").hover(function() {
    $(this).css("background-color", "pink");
    })