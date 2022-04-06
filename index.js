window.addEventListener("load", init);
function ID(elem){
    return document.getElementById(elem);
}
function $(elem){
    return document.querySelector(elem);
}
function ß(elem){
    return document.querySelectorAll(elem);
}
function init(){
     var piros= $(".piros");
     var sarga = $(".sarga");
     var zold = $(".zold");

     sarga.style.opacity="20%";
     zold.style.opacity="20%";
     setInterval(() => {
         if(!allapot){
             sarga.style.opacity="100%";
         }
     }, 1000);

     setInterval(() => {
         if(allapot){
             piros.style.opacity="100%";
             zold.style.opacity="20%";
             console.log(piros.style.opacity);
         }else{
             piros.style.opacity="20%";
             sarga.style.opacity="20%";
             zold.style.opacity="100%";
             autoElm.classList.add("balroljobbra")
         }
         allapot = !allapot;
     },2000);
}
