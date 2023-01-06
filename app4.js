function addlist(parent , contentList){
    let list = document.createElement("li");
    list.innerHTML= contentList;
    parent.appendChild(list);
}

let ul = document.createElement("ul");
addlist(ul , "login");
addlist(ul , "<s>register</s>");
addlist(ul , "logout");
ul.style.listStyleType = "circle";
let ol = document.createElement("ol");
addlist(ol , "user dashboard");
addlist(ol , "admin dashboard");
addlist(ol , `<span>authantication</span><ul>${ul.innerHTML}</ul>`);
addlist(ol , "about page");
addlist(ol , "content page");
ol.style.listStyleType = "lower-roman";
let continer = document.createElement("div");
continer.style.padding = "1rem 0.4rem";
continer.style.margin = "auto";
continer.style.width = "30%";
continer.style.border = "2px black solid"
let header = document.createElement("h1");
header.style.color = "red";
header.innerHTML = "My Tasks";
let input = document.createElement("input");
let button = document.createElement("button");
button.style.marginLeft = "10px";
button.innerHTML = "add task";
continer.appendChild(header);
continer.appendChild(ol);
continer.appendChild(input);
continer.appendChild(button);
document.body.appendChild(continer);

