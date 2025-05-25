document.addEventListener('DOMContentLoaded',function()
{
   const click=document.getElementById('click');
   const nav= document.querySelector('nav');
   const mainicone=document.querySelector( 'mainicone');

// toggle the  nevigation menu when the  checkbox changed
click.addEventListener('change',function()
{
   if( click.checked){
      // show th nevigation menu
      nav.style.left='0' ; 
   }
   else{
      // hide the nevigation menu
      nav.style.left='-100%'; 
   }
});
// close the menu when any nevigation link is clicked (option)
nav.querySelectorAll('a').forEach(link=>{
   link.addEventListener('click',function() {
      click.checked=false;
      // hide the nevigation menu
      nav.style.left='-100%';
   });
})});