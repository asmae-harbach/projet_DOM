change_btn = document.getElementById('change-color-btn');
box = document.getElementById('color-box');


window.onload = function (){
    change_btn.addEventListener('click', function(){
        v1 = Math.floor(Math.random() * 256);
        v2 = Math.floor(Math.random() * 256);
        v3 = Math.floor(Math.random() * 256);
        box.style.backgroundColor = "rgb(" + v1 + "," + v2 + "," + v3 + ")";
    })
}