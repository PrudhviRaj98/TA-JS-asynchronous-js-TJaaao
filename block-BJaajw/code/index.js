let url = 'https://api.spaceflightnewsapi.net/v3/articles?_limit=30';
const root = document.querySelector('.old');
const body = document.querySelector('.body');
const select = document.querySelector('select');

function createUI(data, status = false) {
  //   loader(true);
  let newsCreate = document.createElement('div');
  newsCreate.classList.add('News');

  //   if (status) {
  //     newsCreate.innerHTML = `<div class="donut"></div>`;
  //   }

  let imageDiv = document.createElement('div');
  imageDiv.classList.add('imageDiv');
  let image = document.createElement('img');
  image.src = data.imageUrl;
  let innerDiv = document.createElement('div');
  innerDiv.classList.add('article-body');
  let thirdDiv = document.createElement('div');
  thirdDiv.classList.add('h2');
  let para = document.createElement('p');
  para.innerText = data.summary;
  let h2 = document.createElement('h2');
  h2.innerText = data.title;
  let button = document.createElement('button');
  button.classList.add('btn');
  button.innerText = 'Read More';
  button.addEventListener('click', () => {
    window.open(data.url);
  });
  root.classList.add('old');
  body.append(root);
  root.append(newsCreate);
  newsCreate.append(image);
  newsCreate.append(innerDiv);
  innerDiv.append(thirdDiv);
  thirdDiv.append(h2);
  innerDiv.append(para);
  innerDiv.append(button);
  newsCreate.append(imageDiv);
  imageDiv.append(image);
}

function loader(status = false) {
  console.log(status);
  if (status === true) {
    root.innerHTML = `<div class="donut"></div>`;
    //   } else {
    //     donut.style.display = `none`;
    //   }
  }
}

function init() {
  loader(true);
  data = fetch(url)
    .then((user) => {
      if (!user.ok) {
        body.innerHTML = '';
        throw new Error(`Error happened ${user.status}`);
      }
      return user.json();
    })
    .then((data) => {
      const uniqueValues = new Set();
      data.forEach((ele) => {
        uniqueValues.add(ele.newsSite);
      });

      uniqueValues.forEach((ele) => {
        console.log(ele);
        dropDown(ele);
      });

      data.forEach((ele) => {
        createUI(ele);
      });

      select.addEventListener('change', () => {
        let value = select.value;

        root.innerHTML = '';

        loader();

        data.forEach((ele) => {
          if (value === ele.newsSite) {
            createUI(ele);
          }
        });
      });
    })
    .catch((err) => {
      handleError();
    });
  // .finally(() => {
  //   loader();
  // });
}

function dropDown(options) {
  let option = document.createElement('option');
  option.innerText = options;
  select.append(option);
}

function handleError(
  message = 'An error occurred due to no internet connection. Please try again later.'
) {
  root.innerHTML = message;
}

if (navigator.onLine) {
  init();
} else {
  handleError();
}
