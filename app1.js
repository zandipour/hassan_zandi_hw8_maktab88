let paragraph = document.querySelector(".change");

paragraph.style.backgroundColor="green";
paragraph.style.width= "450px";
paragraph.style.height= "250px";
paragraph.style.color = "white";
paragraph.style.padding = "20px";

paragraph.onclick = function(){
    paragraph.innerHTML += "Click here and wach the text change!!";
};

