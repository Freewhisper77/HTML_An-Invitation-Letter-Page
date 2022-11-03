const inviteBtn = document.getElementById("enroll");
inviteBtn.onclick = function (e) {
    e.preventDefault();
    inviteBtn.innerText = "报名成功";
    inviteBtn.style.background = "green";
    inviteBtn.style.borderColor = "green";
}
