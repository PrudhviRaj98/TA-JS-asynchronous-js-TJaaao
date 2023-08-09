const img = document.querySelector('img');
const followers = document.querySelector('.followers');
const following = document.querySelector('.following');
const working = document.querySelector('p');
const name = document.querySelector('h3');
const input = document.querySelector('input');

function handlechange(event) {
  if (event.keyCode === 13) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.github.com/users/${event.target.value}`);
    xhr.onload = function () {
      let userdata = JSON.parse(xhr.response);
      console.log(userdata);
      displayUI(userdata);
    };
    xhr.onerror = function () {
      console.log('something went wrong');
    };
    xhr.send();
    event.target.value = ' ';
  }
}

function displayUI(userdata) {
  img.src = userdata.avatar_url;
  followers.innerText = `followers: ${userdata.followers}`;
  following.innerText = `following: ${userdata.following}`;
  working.innerText = `company: ${userdata.company}`;
  name.innerText = `name: ${userdata.name}`;
}
input.addEventListener('keyup', handlechange);
