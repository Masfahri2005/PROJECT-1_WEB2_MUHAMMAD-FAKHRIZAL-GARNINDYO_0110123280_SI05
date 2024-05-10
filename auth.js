function login() {
    event.preventDefault();
    var pswrd = document.getElementById("pswrd").value;
    var uname = document.getElementById("uname").value;

    if (uname === "Puskesmas" && pswrd === "0110123280") {
        window.alert("Selamat Datang Di Website Puskesmas");
        window.location = "index.php"; 
    } else {
        window.alert("Login gagal. Periksa kembali username dan password Anda.");
    }
}
