const bottomMenu = document.querySelectorAll(".nav-item");
const text = document.designMode;
document.designMode = 'on';

bottomMenu.forEach(bottom => {
    bottom.addEventListener('click', e =>{
        console.log("dalle");
    });
});







