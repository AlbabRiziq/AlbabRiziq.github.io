const container1 = document.querySelector(".container1");
const container2 = document.querySelector(".container2");
const haiNama = document.getElementById('haiNama');

setInterval(() => {
  const jamm = document.getElementById("jam");
  const tanggall = document.getElementById("tanggal");

  const harii = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const namaBulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  let waktu = new Date();
  let jam = waktu.getHours();
  let menit = waktu.getMinutes();
  let detik = waktu.getSeconds();
  let tanggal = waktu.getDate();
  let bulan = waktu.getMonth();
  let tahun = waktu.getFullYear();
  let hari = waktu.getDay();

  if(jam < 10){
    jam = "0" + jam;
  }
  if(menit < 10){
    menit = "0" + menit;
  }
  if(detik < 10){
    detik = "0" + detik;
  }


  jamm.innerHTML = `${jam}:${menit}:${detik}`;
  tanggall.innerHTML = `${harii[hari]}, ${tanggal} ${namaBulan[bulan]} ${tahun}`;

}, 1000);

function kirim() {
  const container1 = document.querySelector(".container1");

  let nama = document.namanya.nama.value;
  let senin1 = document.senin.senin1.value;
  let senin2 = document.senin.senin2.value;
  let senin3 = document.senin.senin3.value;
  let senin4 = document.senin.senin4.value;
  let senin5 = document.senin.senin5.value;

  let selasa1 = document.selasa.selasa1.value;
  let selasa2 = document.selasa.selasa2.value;
  let selasa3 = document.selasa.selasa3.value;
  let selasa4 = document.selasa.selasa4.value;
  let selasa5 = document.selasa.selasa5.value;

  let rabu1 = document.rabu.rabu1.value;
  let rabu2 = document.rabu.rabu2.value;
  let rabu3 = document.rabu.rabu3.value;
  let rabu4 = document.rabu.rabu4.value;
  let rabu5 = document.rabu.rabu5.value;

  let kamis1 = document.kamis.kamis1.value;
  let kamis2 = document.kamis.kamis2.value;
  let kamis3 = document.kamis.kamis3.value;
  let kamis4 = document.kamis.kamis4.value;
  let kamis5 = document.kamis.kamis5.value;

  let jumat1 = document.jumat.jumat1.value;
  let jumat2 = document.jumat.jumat2.value;
  let jumat3 = document.jumat.jumat3.value;
  let jumat4 = document.jumat.jumat4.value;
  let jumat5 = document.jumat.jumat5.value;

  let sabtu1 = document.sabtu.sabtu1.value;
  let sabtu2 = document.sabtu.sabtu2.value;
  let sabtu3 = document.sabtu.sabtu3.value;
  let sabtu4 = document.sabtu.sabtu4.value;
  let sabtu5 = document.sabtu.sabtu5.value;

  let jadwalSenin = [senin1, senin2, senin3, senin4, senin5];
  let jadwalSelasa = [selasa1, selasa2, selasa3, selasa4, selasa5];
  let jadwalRabu = [rabu1, rabu2, rabu3, rabu4, rabu5];
  let jadwalKamis = [kamis1, kamis2, kamis3, kamis4, kamis5];
  let jadwalJumat = [jumat1, jumat2, jumat3, jumat4, jumat5];
  let jadwalSabtu = [sabtu1, sabtu2, sabtu3, sabtu4, sabtu5];

    localStorage.setItem("nama", nama);
    localStorage.setItem("senin", JSON.stringify(jadwalSenin));
    localStorage.setItem("selasa", JSON.stringify(jadwalSelasa));
    localStorage.setItem("rabu", JSON.stringify(jadwalRabu));
    localStorage.setItem("kamis", JSON.stringify(jadwalKamis));
    localStorage.setItem("jumat", JSON.stringify(jadwalJumat));
    localStorage.setItem("sabtu", JSON.stringify(jadwalSabtu));

  location.reload();
}
if (localStorage.getItem("senin")) {
  container1.style.display = "none";
  container2.style.display = "flex";
}

if(!localStorage.getItem("senin")){
  container2.style.display = "none";
  container1.style.display = "flex";  
  haiNama.style.display = "none";
}


  const jadwalHariSenin = JSON.parse(localStorage.getItem('senin'));
  const jadwalHariSelasa = JSON.parse(localStorage.getItem('selasa'));
  const jadwalHariRabu = JSON.parse(localStorage.getItem('rabu'));
  const jadwalHariKamis = JSON.parse(localStorage.getItem('kamis'));
  const jadwalHariJumat = JSON.parse(localStorage.getItem('jumat'));
  const jadwalHariSabtu = JSON.parse(localStorage.getItem('sabtu'));
  const namanya = localStorage.getItem('nama');

  let seninn1 = document.getElementById('seninn1');
  let seninn2 = document.getElementById('seninn2');
  let seninn3 = document.getElementById('seninn3');
  let seninn4 = document.getElementById('seninn4');
  let seninn5 = document.getElementById('seninn5');

  let selasaa1 = document.getElementById('selasaa1');
  let selasaa2 = document.getElementById('selasaa2');
  let selasaa3 = document.getElementById('selasaa3');
  let selasaa4 = document.getElementById('selasaa4');
  let selasaa5 = document.getElementById('selasaa5');

  let rabuu1 = document.getElementById('rabuu1');
  let rabuu2 = document.getElementById('rabuu2');
  let rabuu3 = document.getElementById('rabuu3');
  let rabuu4 = document.getElementById('rabuu4');
  let rabuu5 = document.getElementById('rabuu5');

  let kamiss1 = document.getElementById('kamiss1');
  let kamiss2 = document.getElementById('kamiss2');
  let kamiss3 = document.getElementById('kamiss3');
  let kamiss4 = document.getElementById('kamiss4');
  let kamiss5 = document.getElementById('kamiss5');

  let jumatt1 = document.getElementById('jumatt1');
  let jumatt2 = document.getElementById('jumatt2');
  let jumatt3 = document.getElementById('jumatt3');
  let jumatt4 = document.getElementById('jumatt4');
  let jumatt5 = document.getElementById('jumatt5');

  let sabtuu1 = document.getElementById('sabtuu1');
  let sabtuu2 = document.getElementById('sabtuu2');
  let sabtuu3 = document.getElementById('sabtuu3');
  let sabtuu4 = document.getElementById('sabtuu4');
  let sabtuu5 = document.getElementById('sabtuu5');

  haiNama.innerHTML = `HAI ${namanya.toUpperCase()}`;

  seninn1.innerHTML = jadwalHariSenin[0];
  seninn2.innerHTML = jadwalHariSenin[1];
  seninn3.innerHTML = jadwalHariSenin[2];
  seninn4.innerHTML = jadwalHariSenin[3];
  seninn5.innerHTML = jadwalHariSenin[4];

  selasaa1.innerHTML = jadwalHariSelasa[0];
  selasaa2.innerHTML = jadwalHariSelasa[1];
  selasaa3.innerHTML = jadwalHariSelasa[2];
  selasaa4.innerHTML = jadwalHariSelasa[3];
  selasaa5.innerHTML = jadwalHariSelasa[4];

  rabuu1.innerHTML = jadwalHariRabu[0];
  rabuu2.innerHTML = jadwalHariRabu[1];
  rabuu3.innerHTML = jadwalHariRabu[2];
  rabuu4.innerHTML = jadwalHariRabu[3];
  rabuu5.innerHTML = jadwalHariRabu[4];

  kamiss1.innerHTML = jadwalHariKamis[0];
  kamiss2.innerHTML = jadwalHariKamis[1];
  kamiss3.innerHTML = jadwalHariKamis[2];
  kamiss4.innerHTML = jadwalHariKamis[3];
  kamiss5.innerHTML = jadwalHariKamis[4];

  jumatt1.innerHTML = jadwalHariJumat[0];
  jumatt2.innerHTML = jadwalHariJumat[1];
  jumatt3.innerHTML = jadwalHariJumat[2];
  jumatt4.innerHTML = jadwalHariJumat[3];
  jumatt5.innerHTML = jadwalHariJumat[4];

  sabtuu1.innerHTML = jadwalHariSabtu[0];
  sabtuu2.innerHTML = jadwalHariSabtu[1];
  sabtuu3.innerHTML = jadwalHariSabtu[2];
  sabtuu4.innerHTML = jadwalHariSabtu[3];
  sabtuu5.innerHTML = jadwalHariSabtu[4];

  // jadwal hari ini
  let hariIni1 = document.getElementById('hariIni1');
  let hariIni2 = document.getElementById('hariIni2');
  let hariIni3 = document.getElementById('hariIni3');
  let hariIni4 = document.getElementById('hariIni4');
  let hariIni5 = document.getElementById('hariIni5');


const harii = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
let waktu = new Date();
let hari = waktu.getDay();

if(hari === 1){
  hariIni1.innerHTML = jadwalHariSenin[0];
  hariIni2.innerHTML = jadwalHariSenin[1];
  hariIni3.innerHTML = jadwalHariSenin[2];
  hariIni4.innerHTML = jadwalHariSenin[3];
  hariIni5.innerHTML = jadwalHariSenin[4];
} else if(hari === 2){
  hariIni1.innerHTML = jadwalHariSelasa[0];
  hariIni2.innerHTML = jadwalHariSelasa[1];
  hariIni3.innerHTML = jadwalHariSelasa[2];
  hariIni4.innerHTML = jadwalHariSelasa[3];
  hariIni5.innerHTML = jadwalHariSelasa[4];
} else if(hari === 3){
  hariIni1.innerHTML = jadwalHariRabu[0];
  hariIni2.innerHTML = jadwalHariRabu[1];
  hariIni3.innerHTML = jadwalHariRabu[2];
  hariIni4.innerHTML = jadwalHariRabu[3];
  hariIni5.innerHTML = jadwalHariRabu[4];
} else if(hari === 4){
  hariIni1.innerHTML = jadwalHariKamis[0];
  hariIni2.innerHTML = jadwalHariKamis[1];
  hariIni3.innerHTML = jadwalHariKamis[2];
  hariIni4.innerHTML = jadwalHariKamis[3];
  hariIni5.innerHTML = jadwalHariKamis[4];
} else if(hari === 5){
  hariIni1.innerHTML = jadwalHariJumat[0];
  hariIni2.innerHTML = jadwalHariJumat[1];
  hariIni3.innerHTML = jadwalHariJumat[2];
  hariIni4.innerHTML = jadwalHariJumat[3];
  hariIni5.innerHTML = jadwalHariJumat[4];
}


function aturUlang(){
  localStorage.removeItem('nama');
  localStorage.removeItem('senin');
  localStorage.removeItem('selasa');
  localStorage.removeItem('rabu');
  localStorage.removeItem('kamis');
  localStorage.removeItem('jumat');
  localStorage.removeItem('sabtu');
  location.reload();
}