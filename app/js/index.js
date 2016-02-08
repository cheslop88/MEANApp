var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");

//An image to overlay
$overlay.append($image);

//Add overlay
$("body").append($overlay);
//Capture the click event on a link to an image
$(document).on("click", "a.lightbox", function(event) {
  event.preventDefault();
  var srcVar = $(this).find("img").attr("ng-src");
  //Update overlay with the image linked in the link
  $image.attr("src", srcVar);
  $overlay.show();
  $("body").addClass("fixedBackground");
 });

//When overlay is clicked
$overlay.click(function(){
  //Hide the overlay
  $overlay.hide();
  $("body").removeClass("fixedBackground");
});

$(document).ready(function(){
  var t = setInterval(function(){
    $("#carousel ul").animate({marginLeft:-400},1000,function(){
      $(this).find("li:last").after($(this).find("li:first"));
      $(this).css({marginLeft:0});
    })
  },3000);
});


$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});

$(document).on("click", ".navbar li a", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});