
let parentBtn = document.querySelector(".pbtn");
let childBtn = document.querySelector(".cbtn");
let mian = document.querySelector(".main");
let child = document.querySelector(".child");
let parent = document.querySelector(".parent");

parentBtn.onclick= function(){
    mian.innerHTML=`${parent.innerText} ${mian.innerHTML}`;

};

childBtn.onclick= function(){
    mian.innerHTML = `${child.innerText} ${mian.innerHTML}` ;
};