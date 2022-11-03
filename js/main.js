const inviteBtn = document.getElementById("enroll");
inviteBtn.onclick = function (e) {
    e.preventDefault();
    inviteBtn.innerText = "报名成功";
    inviteBtn.style.background = "#2e9930";
    inviteBtn.style.borderColor = "#2e9930";
}
