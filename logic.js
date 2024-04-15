const showmore = document.getElementsByClassName("psecond")[0];
const btninsideText = document.getElementsByClassName("re")[0];
function see(){
    if(showmore.style.visibility=="hidden"){
        showmore.style.visibility = "visible";
        showmore.style.position = "static";
        btninsideText.innerHTML="...read less";
    }
    else{
        showmore.style.visibility = "hidden";
        showmore.style.position = "absolute";
        btninsideText.innerHTML = "...read more";

    }
}
