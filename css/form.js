
'use strict';

const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
const customTxt = document.getElementById("custom-text");

customBtn.addEventListener("click", function () {
    realFileBtn.click();
});
realFileBtn.addEventListener("change", function () {
    if (realFileBtn.value) {
        customTxt.innerHTML = realFileBtn.value;
    } else {
        customTxt.innerHTML = "No file chosen, yet.";
    }
});

function validation() {
    var name = document.simpleForm.name.value;
    var x = document.simpleForm.email.value;
    var atposition = x.indexOf("@");
    var dotposition = x.lastIndexOf(".");

    if (name == null || name == "") {
        alert("Name cant be blank");
        return false;
    }
    else if (name.length < 3) {
        alert("Name must be at least 3 characters long");
        return false;
    }
    else if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
        alert("Please enter a valid e-mail address");
        return false;
    }
    else {
        return true;
    }
};





