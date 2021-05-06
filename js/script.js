const bottomMenu = document.querySelectorAll(".nav-item");
formatar.document.designMode = "on";


bottomMenu.forEach(bottom => {
    bottom.addEventListener('click', e =>{
        formatar.document.execCommand("bold", false, null);
    });
});







