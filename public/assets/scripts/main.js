$.get("_header.html", contentToInject => {
    $("#header-placeholder").replaceWith(contentToInject);
});
$.get("_footer.html", contentToInject => {
    $("#footer-placeholder").replaceWith(contentToInject);
});
var inputs=document.getElementsByClassName('formulario__input');
for (var i=0; i< inputs.length;i++) {
    inputs[i].addEventListener('keyup',function(){
        if(this.value.length>=1){
            this.nextElementSibling.classList.add('fijar');
        }
        else{
            this.nextElementSibling.classList.remove('fijar');
        }
        }
    );

}