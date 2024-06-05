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