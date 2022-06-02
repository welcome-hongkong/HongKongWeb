function scrollToTop() {
    console.log('scrollToTop');
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

