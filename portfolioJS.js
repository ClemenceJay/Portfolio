// Afficher le pop-up Contact
let boutonContact = document.getElementById('contact');
let displayContact = function(){
    document.getElementById('modal').style.display = 'block';
}
boutonContact.onclick = displayContact;

// Fermer le pop-up Contact
let boutonClose = document.getElementById('modal-close');
let closeContact = function(){
    document.getElementById('modal').style.display = 'none';
}
boutonClose.onclick = closeContact;

//Switcher entre Dark Mode - Light Mode
let boutonStyle = document.getElementById('styleButton');
let changeStyle = function(){
    document.body.classList.toggle("darkMode");
    if (document.getElementById('styleButton').innerHTML === "Mode sombre") {
        document.getElementById('styleButton').innerHTML = "Mode clair";
    } else {
        document.getElementById('styleButton').innerHTML = "Mode sombre";
    };
}
boutonStyle.onclick = changeStyle;
 


