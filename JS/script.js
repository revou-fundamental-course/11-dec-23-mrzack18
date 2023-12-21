function kirim() {
    var nama = document.getElementById('nama').value;
    var ttl = document.getElementById('ttl').value;
    var psn = document.getElementById('psn').value;
    var output = document.getElementById('output').innerHTML = `Nama: ` + nama + `<br>TTL: ` + ttl + `<br> Pesan: ` + psn;
}