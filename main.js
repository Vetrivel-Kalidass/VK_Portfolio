/**HEADER WILL SHRINK AND EXPAND WHILE SCROLL DOWN */
window.addEventListener("scroll", function() {
    var header = document.querySelector("nav");
    header.classList.toggle("shrink", window.scrollY > 0);
})

/**TO TOGGLE THE RESPONSIVE MENU BUTTON */
function toggleMenu(){
    var menuToggle = document.querySelector(".toggle");
    var menu = document.querySelector(".menu");

    menuToggle.classList.toggle("active");
    menu.classList.toggle("active");
}

/**FORM TO TEXT THE AUTHOR(VETRI) 
 * 1. GET FORM VALUES
 * 2. CHECKS, FORM ATLEAST CONTAINS ANY ONE OF FIELD
 *    IF TRUE, REDIRECT TO SEND MAIL
 *    ELSE, ALERT THE VIEWER
 */
function textMe(event){
    event.preventDefault();
    const name = document.forms['textMeForm']['viewerName'].value;
    const mailId = document.forms['textMeForm']['viewerMail'].value;
    const messages = document.forms['textMeForm']['messages'].value;
    if(name != "" || mailId != "" || messages != ""){
        let url = 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=vetrivelkalidass10700@gmail.com&su='
         + name + ' viewed_portfolio&body= mail: ' + mailId + '\n messages: ' + messages +'&ui=2&tf=1&pli=1';
        window.open(url, '_blank');
        setTimeout(function(){
            alert('Vetri will text you back soon')
        }, 3000);
    }
    else{
        alert('you have no texts on form to send..!!!');
    }
}