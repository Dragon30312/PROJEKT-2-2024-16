let icon1 = document.getElementById("icon1");
let icon2 = document.getElementById("icon2");
icon1.onclick = function(){
    document.body.classList.toggle("darkTheme");
    document.body.classList.remove("lightTheme");
}
icon2.onclick = function(){
    document.body.classList.toggle("lightTheme");
    document.body.classList.remove("darkTheme");
}