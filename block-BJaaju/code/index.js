const input = document.querySelector('.input');
const parent = document.querySelector('.image-ul');

const searchUrl = (query) => {
  `https://api.unsplash.com/search/photos?query=${query}&?client_id=A-aavSD688OhvwomhFCsQv114U_oAWuTWeYr5l09CDU`;
};

function fetch(url, displayUI) {
  xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = () => {
    displayUI(JSON.parse(xhr.response));
  };
  xhr.send();
}

function displayUI(data) {
  parent.innerHTML = '';
  console.log(data.urls.small);
  data.forEach((photo) => {
    let child = document.createElement('li');
    let image = document.createElement('img');
    child.appendChild(image);
    parent.appendChild(child);
    image.src = data.urls.small;
  });
}

function handleInput(event) {
  if (event.keyCode === 13 && input.value) {
    let value = event.target.value;
    fetch(searchUrl(input.value, displayUI));
  }
}

input.addEventListener('keyup', handleInput);

// https://api.unsplash.com/photos/random/?client_id=A-aavSD688OhvwomhFCsQv114U_oAWuTWeYr5l09CDU

// https://api.unsplash.com/photos/random/?client_id=A-aavSD688OhvwomhFCsQv114U_oAWuTWeYr5l09CDU
