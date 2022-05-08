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
// End sticky menu


let currentTheme = 'light';
// darkmode theme toggle
function toggleDarkMode() {
 let darkModeToggle = document.querySelector('.toggle-dark-mode');

 //arrow function const onDarkModeToggleHandler = (params) => {}
 function onDarkModeToggleHandler(e){
  // e.preventDefault();
  // let sections = 
  // if(currentTheme === 'light'){
  
  // }else{

  // }
  console.log('clicked')
 }
 
 darkModeToggle.addEventListener('click',onDarkModeToggleHandler)

}
//End darkmode theme toggle

//after dom is ready
// 3

// let test = [
//   {
//     id: 1,
//     firstname : "Malcom", 
//     lastname: "Reynolds"
//   },
//   {
//     id: 2,
//     firstname : "Kaylee", 
//     lastname: "Frye"  
//   },
//   {
//     id: 3,
//     firstname : "Jayne",
//     lastname: "Cobb"
//   }
// ];

 // test.map( (res) => {
  //   console.log(res.firstname + ' ' + res.lastname);
  // })

// getUserList();

// function getUserList() {
//   test = {
//       id: 1
//     }

//   console.log(test);

  // for(var key in test){
  //   let user = test[key];
  //   console.log(user.firstname + ' ' + user.lastname);
  // }
}

