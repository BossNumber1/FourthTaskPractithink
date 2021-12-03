let resultChecking = { more: "", smaller: "", equals: "" };

document.getElementById("more").onchange = function (e) {
    if (e.target.value == "1") {
        resultChecking.more = "верно";
    } else {
        resultChecking.more = "не верно";
    }
};

document.getElementById("smaller").onchange = function (e) {
    if (e.target.value == "2") {
        resultChecking.smaller = "верно";
    } else {
        resultChecking.smaller = "не верно";
    }
};

document.getElementById("equals").onchange = function (e) {
    if (e.target.value == "3") {
        resultChecking.equals = "верно";
    } else {
        resultChecking.equals = "не верно";
    }
};

document.getElementById("submit").onclick = function () {
    if (
        resultChecking.more !== "" &&
        resultChecking.smaller !== "" &&
        resultChecking.equals !== ""
    ) {
        alert(
            "первое поле - " +
                resultChecking.more +
                ", второе - " +
                resultChecking.smaller +
                ", третье - " +
                resultChecking.equals
        );
    } else {
        alert("сначала стоит заполнить все поля");
    }
};
