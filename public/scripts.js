const currentPage = window.location.pathname;
const menuItems = document.querySelectorAll('header a');

for (item of menuItems) {
    if (currentPage === item.getAttribute('href')) {
        item.classList.add('active');
    }
}


// const form = document.querySelector('form');
// const name = document.getElementById('name');

// function checkInputs() {
//     const nameValue = name.value.trim();

//     if(nameValue === "") {
//         setError(username)
//     } else {
//         setSucess(username);
//     }
// }

// function setError(input) {
//     const item = name.parentElement;

//     item.className = 'item error'
// }

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     checkInputs();
// })