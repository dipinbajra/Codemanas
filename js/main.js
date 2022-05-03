// scroll to top button
function openResponsive(menu) {
    menu.classList.toggle('open');
  }

  const btnScrollToTop = document.getElementById("btnScrollToTop");

btnScrollToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });

});
// End scroll to top button


//sticky menu
jQuery(document).ready(function($) {
  
   var mainHeader  = $('.main-header');
  //  var l  = mainHeader.length;
  
   $(window).scroll( function() {
      // console.log( $(window).scrollTop());

       var scrolled = $(window).scrollTop();

      if(scrolled > 82) {
        mainHeader.addClass('sticky');
      } else {
        mainHeader.removeClass('sticky');
      }
   });
});

//End sticky menu


