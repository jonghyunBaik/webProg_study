window.onload = function () {
    const userid = document.getElementById("LOGIN_ID").value;
    const userpw = document.getElementById("LOGIN_PW").value;

    document.getElementById('LOGIN_BTN').addEventListener("click", function () {

        if(document.getElementById("LOGIN_ID").value == localStorage.getItem("id")) {
            if(document.getElementById("LOGIN_PW").value == localStorage.getItem("pw")) {
                alert("로그인 성공");
                location.href='diaryPage.html';
            } else {
                alert("비밀번호가 틀렸습니다.");
            }
        } else {
            alert("존재하지 않는 아이디 입니다");
        }
    });
}