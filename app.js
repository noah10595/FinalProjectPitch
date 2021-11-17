var toggle=false;

document.body.querySelector(".menuIcon").addEventListener("click" , function(){

    toggle=!toggle;

    if(toggle){
        document.body.querySelector(".menu").style.top="0";
    }else{
        document.body.querySelector(".menu").style.top="-250px";
    }

})