$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
}); 


// Wait for the website to finish loading
window.addEventListener('load', function() {
    const loaderWrapper = document.querySelector('.loader-wrapper');
    const content = document.querySelector('.content');
  
    // Hide the loader and show the content after the website finishes loading
    loaderWrapper.style.display = 'none'; // Hide the loader
    content.style.display = 'block'; // Show the content
  });
  
