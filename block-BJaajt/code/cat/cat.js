const img = document.querySelector('img');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  let xhr = new XMLHttpRequest();
  xhr.open(
    'GET',
    'https://api.thecatapi.com/v1/images/search?limit=1&size=full'
  );
  xhr.onload = function () {
    let data = JSON.parse(xhr.response);
    console.log(data);
    displayUI(data[0]);
  };

  function displayUI(data) {
    img.src = data.url;
  }
  xhr.send();
});
