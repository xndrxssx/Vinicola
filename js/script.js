let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImg();
}, 5000)

function nextImg() {
    count++;
    
    if(count > 5) {
        count = 1;
    }

    document.getElementById("radio"+ count).checked = true;

}

