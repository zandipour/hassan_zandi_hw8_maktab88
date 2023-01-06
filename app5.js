let btn = document.querySelector(".button-78");
let userName = document.getElementById("userName");
let passtest = document.getElementById("passtest");
let pass = document.getElementById("pass");
let usermsg = document.getElementById("usermsg");
let passmsg = document.getElementById("passmsg");
let passtestmsg = document.getElementById("pastestmsg");
let testmsg = document.getElementById("testmsg");



btn.onclick = function () {
    uncheck();
    unChange();
    untest(pass, passtest, testmsg)
    test(pass, passtest, testmsg)
    chek(userName, usermsg);
    chek(pass, passmsg);
    chek(passtest, passtestmsg);
    change(userName, userName);
    change(pass, pass);
    change(passtest, passtest);

};


function chek(input, msg) {
    if (input.value === "") {
        msg.innerText = "الزامی"
    };
};
function uncheck() {
    usermsg.innerText = "";
    passmsg.innerText = "";
    passtestmsg.innerText = "";

};

function change(input, border) {
    if (input.value === "") {
        border.style.border = "2px solid red"
    };
};

function unChange() {
    userName.style.border = "none";
    pass.style.border = "none";
    passtest.style.border = "none";
};

function test(pass, testpass, msg) {
    if (pass.value !== testpass.value) {
        msg.innerText = "رمز عبور یکسان نیست"

    };
};

function untest(pass, testpass, msg) {
    if (pass.value === testpass.value) {
        msg.innerText = "";

    };
};