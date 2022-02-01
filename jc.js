/*$("h1").hide();   //hides the h1
$('#paragraph').hide(); //hides id

//target
$('ul.list li:first').hide() //hides the first li in the list class
$('ul.list li:last').css("color","green") //gives green color to the first list
$('ul.list li:even').css("background-color","yellow") //gives even list yellow colour
$('ul.list li:nth-child(2n)').css("list-style","none") //removes list styl efor second element


// to grab all the same types
$(":button").hide()

// to acess attribute
$('[href]').css('color','red')//to change attributes of all elements
$('[href="http://youtube.com"]').css('color','green')

//to add in to all elements
$("*").hide()// hides the whole page * refers to the whole elements*/



//events
/* $("#reset").click(reset)
function reset(){
    console.log("button clicked")
} */
/* $("#reset").on('click',reset)                       //.on takes an event and event handler
function reset(){
    console.log("button clicked")
}
 */

 /* $("#reset").on('click',hides)                     
function hides(){
    $('p').hide()
} 

$("#show").on('click',shows)                     
function shows(){
    $('p').show()}
 */

   /*  $("#reset").on('click',hides)                     
function hides(){
    $('p').toggle()} */

//dom manipulation

/* $(".container").text("hello world")     //to add text 
$(".container").html(<h3>hi</h3>)     //to add html */

/* $('ul').append('<li>Append list item</li>') //to get as last item
$('ul').prepend('<li>Append list item</li>') //to get as first item */

/* $('ul').before('<h4>hello</hello>')  //before ul tag
$('ul').after('<h4>hello</hello>')     //after ul tag
$('a').attr("target","_blank")  //adding attribute
$('a').removeAttr("target","_blank")//removing attribute*/

/* $('p').wrap('<h1>')  //wraps first p to h1
$('p').wrapAll('<h1>') //wraps all p to h1
 */
/* $('#hey').keyup(function(e){
e.keyUp="arrow right"               //keyup
keyRight()
})
 */

//effects and animation
/* $('#btnFadeOut') .click(out)
function out(){
    $('p').fadeOut();        //fadeout
}
$('#btnFadeIn') .click(In)
function In(){
    $('p').fadeIn();        //fadein
} 
$('#btnFadeToggle') .click(toggle)
function toggle(){
    $('p').fadeToggle(2000);        //fadetoggle
}*/
/* $('#btnSlideUp') .click(up)
function up(){
    $('p').slideUp();        //slideup
}
$('#btnSlideDown') .click(down)
function down(){
    $('p').slideDown();        //slidedown
}
$('#btnSlideToggle') .click(toggle)
function toggle(){
    $('p').slideToggle();        //slidetoggle
} 

$('#btnstop') .click(stop)
function stop(){                 //stop
    $('#box').stop();
}*/
 /* $('#btnmoveLeft') .click(lefts)
function lefts(){               //moveleft
    $('#box').animate({
        right:100
    });
    
}
$('#btnmoveRight') .click(rights)
function rights(){              //moveright
    $('#box').animate({
        left:0
    });
}
$('#btnmove Around') .click(arounds)
function arounds(){               //movearound
    $('#box').animate();
}
 */

