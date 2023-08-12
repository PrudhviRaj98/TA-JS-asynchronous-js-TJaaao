const input = document.querySelector('.input');
const parent = document.querySelector('.image-ul');

function handleInput(event) {
  let value = event.target.value;
  console.log(value);
  fetch(
    `https://api.unsplash.com/photos/random/?client_id=A-aavSD688OhvwomhFCsQv114U_oAWuTWeYr5l09CDU`,
    displayUI
  );
}

function displayUI(data) {
  console.log(data);
  let child = document.createElement('li');
  let image = document.createElement('img');
  child.appendChild(image);
  parent.appendChild(child);

  image.src = data.urls.small;
}

function fetch(url, display) {
  xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = function () {
    display(JSON.parse(xhr.response));
  };
  xhr.send();
}

input.addEventListener('keyup', handleInput);

// https://api.unsplash.com/photos/random/?client_id=A-aavSD688OhvwomhFCsQv114U_oAWuTWeYr5l09CDU
