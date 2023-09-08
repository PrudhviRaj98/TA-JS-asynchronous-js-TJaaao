let articleBody = document.querySelector('.article-body');
let url = `https://www.anapioficeandfire.com/api/books`;

function displayUI(data) {
  let articleDiv = document.createElement('div');
  articleDiv.classList.add('article');
  let h2 = document.createElement('h2');
  h2.innerHTML = data.name;
  let h3 = document.createElement('h3');
  h3.innerHTML = data.authors;

  let button = document.createElement('button');
  button.innerText = `Show Characters : ${data.characters.length} `;

  let buttonDiv = document.createElement('div');
  buttonDiv.classList.add('dropdown-content');
  buttonDiv.id = 'myDropdown';
  buttonDiv.style.display = 'none';

  const ul = document.createElement('ul');

  buttonDiv.append(ul);

  const close = document.createElement('button');
  close.id = 'closePopup';
  close.classList.add('close');
  close.textContent = 'X';

  articleDiv.append(h2, h3, button);
  articleDiv.appendChild(buttonDiv);
  articleBody.append(articleDiv);

  button.addEventListener('click', function () {
    // const dropdown = document.getElementById('myDropdown');
    if (buttonDiv.style.display === 'block') {
      console.log('something');
      buttonDiv.style.display = 'none';
    } else {
      buttonDiv.style.display = 'block';
      ul.style.display = 'flex'; // Make the 'ul' a flex container
      ul.style.flexWrap = 'wrap';
    }

    let allcharacters = data.characters;
    allcharacters.forEach((link) => {
      fetch(link)
        .then((res) => {
          return res.json();
        })
        .then((ele) => {
          let allNames = [];
          allNames.push(ele);
          // console.log(allNames);
          allNames.forEach((singleObj) => {
            console.log(singleObj.name);
            const li1 = document.createElement('li');
            li1.textContent = singleObj.name;
            ul.appendChild(li1);
            ul.appendChild(span);
          });
        });
    });
  });
}

function beforeClick() {
  let dataObj = fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((news) => {
      news.map((obj) => {
        // afterClick(obj);
        displayUI(obj);
      });
    });
}

// function afterClick(objData, event) {

//   // allcharacters.forEach((link) => {
//   //   console.log(link);
//   //   fetch(link)
//   //     .then((res) => res.json())
//   //     .then((ex) => console.log(ex.gender));
//   // });
// }

beforeClick();
