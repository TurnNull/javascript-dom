// // Mengambil element HTML melalui ID
// const judul = document.getElementById('judul');

// judul.style.color = 'red';
// judul.style.backgroundColor = '#ddd';
// judul.innerHTML = "Hallo World By Ali";

// // Mengambil element HTML melalui Tag 
// const p = document.getElementsByTagName('p');
// for (let i=0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'lightblue';
// }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';

// // Mengambil element HTML melalui Class
// const p1 = document.getElementsByClassName('p1')[0];
// p1.style.color = 'red';

// // Mengambil elemen HTML pertama yang cocok berdasarkan ID, kelas, tag atau atribut terdapat didalamnya
// const p4 = document.querySelector("#b p");
// p4.style.color = 'red'
// p4.style.fontSize = '25px'

// const li2 = document.querySelector("section#b ul li:nth-child(2)");
// li2.style.backgroundColor = 'yellow';

// // Mengambil seluruh elemen HTML yang cocok berdasarkan ID, kelas, tag atau atribut terdapat didalamnya dan isi nya berbentuk NodeList
// const p = document.querySelectorAll("p");
// for (let i=0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'lightblue';
// }

// Menambahkan atribut dalam element yang dipanggil
// const judul = document.querySelector("#judul");
// judul.setAttribute("class", "salmonColor");

// // Mengambil atribut dalam element yang dipanggil
// const aLink = document.querySelector("section#a a");
// aLink.getAttribute('href');

// // Manipulasi atribut nilai class
// // Menambah nilai class
// judul.classList.add('satu');
// judul.classList.add('dua');
// judul.classList.add('tiga');
// // Menghapus nilai class
// judul.classList.remove("tiga");
// // Aktif dan Non-aktif nilai atribut menggunakan toggle, akan terlihat jika digunakan pada tombol ataupun DOM event
// judul.classList.toggle('dua');
// // Mencari list class berdasarkan urutan yang dipanggil
// judul.classList.item("2");
// // Mengecek isi nilai class yang dipanggil dengan output bolean
// judul.classList.contains("dua");
// // Mengganti isi nilai class dengan yang baru
// judul.classList.replace("dua", "empat");

// Membuat element p baru
const pBaru = document.createElement('p');
// Memuat isi text 
const txtP = document.createTextNode("Paragraf 4 baru!");
// Isi pada teks baru digabungkan dengan element yang sudah dibuat
pBaru.appendChild(txtP);
// Mengambil element dari parent
const sectionA = document.getElementById('a');
// Memuat isi tag pBaru kedalam element sectionA dengan class p4
sectionA.appendChild(pBaru).classList.add('p4');

// Membuat element li baru
const liBaru = document.createElement('li');
// Membuat isi text
const txtLi = document.createTextNode("Item Baru!!");
// Isi pada text digabungkan kedalam element li
liBaru.appendChild(txtLi)
// Mengambil element dari parent yaitu ul
const ul = document.querySelector('section#b ul')
// Mengambil referensi child yang akan dimuat oleh element baru
const li = document.querySelector('section#b ul li:nth-child(2)')
// Menggabungkan li yang baru di dalam ul dengan kondisi sebelum li ke dua
ul.insertBefore(liBaru, li)