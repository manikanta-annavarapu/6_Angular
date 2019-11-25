function GreetingHandler(){
    var msgtxt = document.getElementById("txtMessage");
    if(msgtxt.value == ""){
        alert("Text can not be empty");
    }
    var h = document.getElementById("heading");
    h.innerHTML = msgtxt.value;
}