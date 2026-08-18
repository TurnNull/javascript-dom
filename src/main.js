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


const p4 = document.querySelector("#b p");
p4.style.color = 'red'
p4.style.fontSize = '25px'

const li2 = document.querySelector("section#b ul li:nth-child(2)");
li2.style.backgroundColor = 'yellow';

const p = document.querySelectorAll("p");
for (let i=0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
}