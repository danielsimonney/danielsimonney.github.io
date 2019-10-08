
var menu=document.querySelector('.menu-burger')
var topNav=document.querySelector('.top-nav')
menu.addEventListener("click", function(){
    menu.classList.toggle("open");
    topNav.classList.toggle("open")
  });
  var up=document.querySelector('#up')
  var body=document.querySelector('body')
  up.addEventListener("click", function(){
    window.scrollTo(0, 0);
  });

  
AOS.init({
  easing:'ease',
  duration:'1800'
})
if(window.innerWidth<700){
  table=(document.getElementsByTagName("div"));
console.log(table)
console.log(table.length)
for (var i = 0; i < table.length; i++) {
  document.getElementsByTagName("div")[i].removeAttribute("data-aos"); 
}

}
