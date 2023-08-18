1. Create a promise. Have it resolve with a value of `Promise Resolved!` in resolve after a delay of 1000ms, using `setTimeout`. Print the contents of the promise after it has been resolved by passing `console.log` to `.then`

```js
function fetchData(url) {
  return new Promise((resolve, reject) => {
    xhr = XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => setTimeout(reslove(url));
    xhr.onerror = () => reject('something went wrong');
    xhr.send();
  });
}
let datapromise = fetchData('Promise Resolved!').then((res) =>
  console.log(res)
);
```

2. Create another promise. Now have it reject with a value of `Rejected Promise!` without using `setTimeout`. Print the contents of the promise after it has been rejected by passing console.log to `.catch`

```js
Promise.reject('rejected promise').catch((res) => console.log(res));
```

3. Create another promise. Now have it reject with a value of `Rejected Promise!` without using `setTimeout`. Print the contents of the promise after it has been rejected by passing console.log to `.catch` and also use `.finally` to log message `Promise Settled!`.

```js
Promise.reject('rejected promise')
  .catch((res) => console.log(res))
  .finally(console.log('promise settled'));
```

4. What will be the output of the code below.

```js
console.log('A');

// Asynchronous code finises in 0 seconds (Callback Queue)
setTimeout(() => console.log('B'), 0); // callback queue

// A promise that resolves right away (Microtask Queue)
Promise.resolve().then(() => console.log('C'));

console.log('D');
```

// output : A, D, C, B

5. Write a function named `wait` that accepts `time` in ms returns a promise. The promise gets resolved after given time.

```js
function wait(time) {
  return setTimeout(new Promise(), time);
}
```

6. Do the following:

- Create a new promise
- Resolve with 21
- Use `.then` and return adding `10` to the value you will get as parameter
- Use `.then` and return adding `100` to the value you will get as parameter
- Use `.then` and check if the value you get is greater than `100` throw new error with any message
- Catch the error using `.catch`

```js
new Promise.resolve(21).then((num)=> num+10).then((num1)=> num1+100).then((num2)=> if(num2 > 100){
    console.log("error");
}).catch((error) => console.error("catch error", error));
```

7. Do the following:

- Create a new promise
- Resolve the promise with `['A']`
- Use `.then` and concat `B` into the parameter and return
- Use `.then` and return and object like `{0: 'A', 1: 'B'}`
- Use `.then` and log the value

```js
new Promise.resolve(['A'])
  .then((res) => {
    res.push('B');
  })
  .then((res1) => {
    return res1;
  })
  .then((res2) => {
    console.log(res2);
  });
```

8. Do the following:

- Create a new promise named `first` and resolve it with `1`
- Use `.then` on `first` and return `2` also check the value you get access to by logging
- Chain `.then` on above and return `3` also check the value you get access to by logging
- Chain `.then` on above and return `4` also check the value you get access to by logging

```js
let first = new Promise.resolve(1);

first
  .then((num) => {
    return num + 1;
  })
  .then((num2) => {
    return num2 + 1;
  })
  .then((num3) => {
    return num3 + 1;
  });
```

9. Do the following:

- Create a new promise named `first` and resolve it with `1`
- Use `.then` on `first` and return `2` also check the value you get access to by logging
- Use `.then` on `first` and return `3` also check the value you get access to by logging
- Use `.then` on `first` and return `4` also check the value you get access to by logging

```js
let first = new Promise.resolve(1)
  .then((num) => {
    return num + 1;
  })
  .then((num2) => {
    return num2 + 1;
  })
  .then((num3) => {
    return num3 + 1;
  });
```

10. Try to understand the difference between the problem 8 and 9. Write your observation.

In problem 8, I have chained using varibale that is assigned to a promise where as 9, I chained directly to the promise

11. Do the following

- Create a promise and resolve it with `John`
- Use `.then` and return another promise that resolves with `Arya`
- Use `.then` log the value you get access to and return another promise that resolves after 2000ms with value `Bran`
- Use `.then` to log the value

```js
new Promise.reslove('John')
  .then((res) => {
    return new Promise.reslove('Arya');
  })
  .then((res1) => {
    console.log(res1);
    return setTimeout(new Promise.reslove('Bran')).then((res1.2)=> console.log(res1.2));
  });
```
