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
jQuery(document).ready(function ($) {

  var mainHeader = $('.main-header');
  //  var l  = mainHeader.length;

  $(window).scroll(function () {
    // console.log( $(window).scrollTop());

    var scrolled = $(window).scrollTop();

    if (scrolled > 82) {
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
  function onDarkModeToggleHandler(e) {
    // e.preventDefault();
    let sections = document.querySelectorAll('.dark-mode');
    if (currentTheme === 'light') {
      sections.forEach(section => {
        section.classList.add('dark-mode-active');
      })
      currentTheme = 'dark'
    } else {
      sections.forEach(section => {
        section.classList.remove('dark-mode-active');
      })
      currentTheme = 'light'
    }
  }

  darkModeToggle.addEventListener('click', onDarkModeToggleHandler)

}

document.addEventListener("DOMContentLoaded", function () {

  toggleDarkMode()
});
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

var list = ['apple', 'banana', 'cat', 'dog', 'elephant'];



function push(item) {
 
  list.push(item);
  console.log(list);

}


function pop(){


  list.pop();
  console.log(list);
}

function unshift(item) {
  list.unshift(item);
  console.log(list);
  
}
function shift() {
  list.shift();
  console.log(list);
  
}




//using if else to find the calue exist in the array.
function find(item){


if(list.indexOf(item) !== -1)  
{  
        alert("Yes, the value exists!")  
}   
else  
{  
        alert("No, the value is absent.")  
}  

}

const array = ["one", "two", "three"]
array.forEach(function (item) {
  console.log(item);
});

