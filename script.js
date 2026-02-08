// document.addEventListener('DOMContentLoaded', _ => {
//     alert("Welcome to my CV! Thanks for visiting.");
// });

const year1 = document.getElementById('year1');
const year2 = document.getElementById('year2');

const info = document.getElementById("contact-info");

year1.textContent = new Date().getFullYear();
year2.textContent = new Date().getFullYear();

info.addEventListener('click', _ => {
    if (info.style.display === 'none') {
        info.style.display = 'block';
        this.textContent = 'Hide Contact';
    } else {
        info.style.display = 'none';
        this.textContent = 'Contact Me';
    }
});