let kursRupiah = 15831;

function hitungKursRupiah(){
    let rupiah = document.getElementById('rupiah').value;
    document.getElementById('dollar').innerHTML = rupiah / kursRupiah;
}

function hitungKursDollar(){
    let rupiah = document.getElementById('dollarnumber').value;
    document.getElementById('rupiahnumber').innerHTML = rupiah * kursRupiah;
}    

function hitungBil() {
    let bil1 = document.getElementById('bil1').value;
    let bil2 = document.getElementById('bil2').value;
    console.log(bil1 + bil2);
    document.getElementById('hasil').value = parseInt(bil1) + parseInt(bil2);
}