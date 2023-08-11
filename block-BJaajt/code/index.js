const img = document.querySelector('img');
const working = document.querySelector('p');
const name = document.querySelector('h3');
const input = document.querySelector('input');
const followers = document.querySelector('.followers');
const following = document.querySelector('.following');

const catImage = document.querySelector('.cat-image');
const button = document.querySelector('.btn');

function fetch(url, cb) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = () => {
    cb(JSON.parse(xhr.response));
  };
  xhr.onerror = function () {
    console.log('something went wrong');
  };
  xhr.send();
}

function handlechange(event) {
  if (event.keyCode === 13 && input.value) {
    let url = 'https://api.github.com/users/';
    let username = input.value;
    fetch(url + username, displayUI);
    input.value = '';
  }
}

function displayExtra(url, roolElm) {
  rootElm.innerHTML = '';
  fetch(url, function (followersList) {
    let topFive = followersList.slice(0, 5);
    topFive.forEach((follower) => {
      let li = document.createElement('li');
      let img = document.createElement('img');
      img.src = follower.avatar_url;
      li.append(img);
      rootElm.append(li);
    });
  });
}

function displayUI(userdata) {
  console.log(userdata);
  img.src = userdata.avatar_url;
  followers.innerText = `followers: ${userdata.followers}`;
  following.innerText = `following: ${userdata.following}`;
  working.innerText = `company: ${userdata.company}`;
  name.innerText = `name: @${userdata.login}`;
  displayExtra(
    `https://api.github.com/users/${userdata.login}/followers`,
    followers
  );
  displayExtra(
    `https://api.github.com/users/${userdata.login}/following`,
    following
  );
}
input.addEventListener('keyup', handlechange);

function handleClick() {
  fetch('https://api.thecatapi.com/v1/images/search', function (data) {
    catImage.src = data[0].url;
  });
}
button.addEventListener('click', handleClick);
