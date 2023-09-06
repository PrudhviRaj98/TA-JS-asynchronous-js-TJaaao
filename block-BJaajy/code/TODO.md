- Create four promises that resolve after 1, 2, 3 and 4 seconds with a random value. Using `Promise.all` log the value of each promise that it resolved with.

```js
let num = [1, 2, 3, 4];
let first = num.map((ele) => {
  new Promise((res) => {
    setTimeout(() => res(Math.random()), ele * 1000);
  });
});

let all = Promise.all([first, two, three, four]).then((ele) => {
  console.log(ele);
});
```

- Create a list of 5 Github usernames in an array and using `Promise.all` get access to the data of each user from GitHub API. Log the number of followers of each user.

```js
let allusers = ['PrudhviRaj98', 'rahul', 'rohan', 'vijay', 'ravi'];

let usernames = allusers.map((user) => {
  let github = `https://api.github.com/users/${user}`;
  return fetch(github).then((res) => res.json());
});

Promise.all(usernames).then((user) => {
  user.forEach((one) => {
    one.followers;
  });
});

const prom = Promise.all(
  allusers.map((user) => {
    fetch(`https://github.com/${user}`).then((res) => res.json());
  })
);
```

- Use `Promise.race` to see which API resolves faster from the given list of URLs. Log the object you get from the promise that is resolved faster.

  - https://random.dog/woof.json
  - https://aws.random.cat/meow

```js
let one = 'https://random.dog/woof.json';
let two = 'https://aws.random.cat/meow';

let promiseOne = fetch('https://random.dog/woof.json').then((res) => {
  res.json();
});
let promiseTwo = fetch('https://aws.random.cat/meow').then((res) => {
  res.json();
});

Promise.race([promiseOne, promiseTwo]);
```

- Use `Promise.allSettled` to log the value of each promise from the given list of promises. And also check if `Promise.all` works with `one`, `two` and `three` or not

```js
const one = new Promise((resolve, reject) =>
  setTimeout(() => resolve('Arya'), 1000)
);
const two = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error('Whoops!')), 2000)
);
const three = new Promise((resolve, reject) =>
  setTimeout(() => resolve('John'), 3000)
);

Promise.allSettled(one, two, three).then((res) => console.log(res));
```

- What will be the output of the following code snippet? How much time will it take for the promise to resolve?

```js
Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('Arya'), 1000);
  }),
  'Sam',
  { name: 'John' },
]).then(console.log); // Output: Arya, Sam, John
```
