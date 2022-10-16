window.onload = function () {

    document.getElementById('SIGN_BTN').addEventListener("click", function () {
        if(document.getElementById("LOGIN_PW").value == document.getElementById("LOGIN_PW2").value) {
            localStorage.setItem("id", document.getElementById("LOGIN_ID").value);
            localStorage.setItem("pw", document.getElementById("LOGIN_PW").value);
            
            document.getElementById("LOGIN_ID").value = "";
        } else {
            alert("비밀번호가 일치하지 않습니다")
            document.getElementById("LOGIN_PW").value = "";
            document.getElementById("LOGIN_PW2").value = "";

        }
    });
}