const buttonMenu = document.querySelectorAll(".buttonElements");
format.document.designMode = "on"; //Faz com que o ducomento possa ser editado.

buttonMenu.forEach(button => {
    let fB = true;
    button.addEventListener('click', e =>{
        switch (button.dataset.cod){ //O DataSet do button
            case "formatBlock":
            if(fB){
                format.document.execCommand("formatBlock", false, 'h1');
            }else if(!fB){
                format.document.execCommand("undo", false, null);//Os efeitos para serem aplicados    
            }
            fB = !fB;
            break;
            case "bold":
            format.document.execCommand("bold", false, null);
            break;
            case "italic":
            format.document.execCommand("italic", false, null);
            break;
            case "strikeThrough":
            format.document.execCommand("strikeThrough", false, null);
            break;
            case "underline":
            format.document.execCommand("underline", false, null);
            break;
            case "link":
            let linkURL = prompt('To insert the URL:' , 'https://');    
            format.document.execCommand("createLink", false, linkURL);
            break;
            case "UnorderedList":
            format.document.execCommand("insertUnorderedList", false, null);
            break;
            case "OrderedList":
            format.document.execCommand("insertOrderedList", false, null);
            break;   
        };//END SWITCH
        
    });//END ADDLISTENEREVENT
});//END FOREACH

