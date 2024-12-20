// buat fungsi
// nilai username
// nilai password
// cek username dan passwordnya
// benar beri alert brhasil
// salah beri alert gagal login
// username dan password kosong beri alert kosong
// username dan password salah beri alert salah
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == "admin" && password == "admin"){
        alert("berhasil login");
        window.location="index.html";
        return false;

    } 
    else if (username == "admin" && password == "amarsryass"){
        alert("username dan password harus diisi tidak boleh kosong");

    } 
    else {
        alert("username dan password salah");
    }
}