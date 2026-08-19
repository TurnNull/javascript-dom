const p2 = document.querySelector('section#a .p2');
function ubahWarnaP2() {
    p2.style.backgroundColor = 'salmon';
}

const p3 = document.querySelector('section#a .p3');
// function ubahwarnaP3() {
//     p3.style.backgroundColor = 'salmon';
// }

// p3.onclick = ubahwarnaP3
p3.addEventListener('click', function() {
    p3.style.backgroundColor = 'yellow';
})
p3.addEventListener('dblclick', function() {
    p3.style.backgroundColor = 'red';
})
p3.addEventListener('mouseenter', function() {
    p3.style.backgroundColor = 'lightgreen';
})
p3.addEventListener('mouseleave', function() {
    p3.style.backgroundColor = '#ddd';
})


const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function() {
    ul = document.querySelector('section#b ul');
    li = document.createElement('li')
    liTxt = document.createTextNode('Item Baru!!')

    li.appendChild(liTxt);
    ul.appendChild(li);
});