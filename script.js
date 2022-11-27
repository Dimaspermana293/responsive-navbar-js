// ambil class selector
hamburger = document.querySelector('.hamburger');
// buat method onclik dan function
hamburger.onclick = function(){
  navBar = document.querySelector('.navbar');
  navBar.classList.toggle('active');
}