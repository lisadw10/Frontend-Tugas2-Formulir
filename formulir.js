function tampil(){
    event.preventDefault();
    let nama = document.form.nama.value;
    let email = document.form.email.value;
    let jenisKelamin = document.form.jenisKelamin.value;
    let agama = document.form.agama.value;
    let alamat = document.form.alamat.value

    document.getElementById("tampil").innerHTML = (
        "Nama Lengkap : " + nama + "<br>" + 
        "Email : " + email + "<br>" +
        "Jenis Kelamin : " + jenisKelamin + "<br>" +
        "Agama : " + agama + "<br>" +
        "Alamat : " + alamat + "<br>"
    )

}