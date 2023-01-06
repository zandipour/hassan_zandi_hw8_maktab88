let hover = document.querySelector(".hover");

hover.style.backgroundColor = "blue";
hover.style.width= "350px";
hover.style.height= "150px";
hover.style.color = "white";
hover.style.padding = "20px";

hover.onmouseover = function(){
    hover.style.backgroundColor = "red";
    hover.style.color = "blue";
};

hover.onmouseleave = function(){
    hover.style.backgroundColor = "blue";
    hover.style.color = "white";
};
