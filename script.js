// console.log(_);
// console.log(_.sum([4, 10, 2, 6, 8]));

// const arr = [4, 10, 2, 6, 8];
// const one = arr.reduce((acc, num) => {
//     acc += num;
//     return acc;
// }, 0);
// console.log(one);
// let total = 0;
// for (let i = 0; i < arr.length; i++){
//     total += arr[i]
// }
// console.log(total);






// window.addEventListener(
//     'scroll', _.throttle(() => {
//         console.log('Scroll 300ms');
//     }, 3000),
// );

// const output = document.querySelector('.output');
// let scrollCouner = 0;

// document.addEventListener('scroll', () => {
//     scrollCouner += 1;
//     output.textContent = scrollCouner;
// })

// const vanilaOutput = document.querySelector('.output.vanilla');
// const throttleOutput = document.querySelector('.output.throttle');
// const debounceOutput = document.querySelector('.output.debounce');
// const eventCounter = {
//     vanilla: 0,
//     throttle: 0,
//     debounce: 0,
// }

// document.addEventListener('scroll', () => {
//     eventCounter.vanilla += 1;
//     vanilaOutput.textContent = eventCounter.vanilla;
// });

// document.addEventListener('scroll',
//     _.throttle(() => {
//     eventCounter.throttle += 1;
//     throttleOutput.textContent = eventCounter.throttle;
//    })
// )

// document.addEventListener('scroll',
//     _.debounce(() => {
//     eventCounter.debounce += 1;
//     debounceOutput.textContent = eventCounter.debounce;
//    })
// )





// Потрібно затримати виконання функції при введенні тексту в поле input,
//  щоб не перевантажувати сервер. Використовуйте метод throttle з бібліотеки lodash.
//   Встановіть час затримки в мілісекундах, наприклад 500мс, і передайте функцію,
//    яку потрібно виконати при введенні тексту.






// const input = document.querySelector('#input');
// document.addEventListener('input', _.throttle((event) => {
// const text = event.target.value;

// }));





// function candleInput(event){
// const text = event.target.value;
// console.log('Відправка на сервер:', text);
// }
// const throttleInput = _.throttle(candleInput, 500);
// const input = document.querySelector('#input');
// input.addEventListener('input', throttleInput);



const text = document.getElementById('text');
const input = document.getElementById('input');

function handleInput(ev){
const handleText = ev.target.value;
text.textContent = handletext;
}

const debounceInput = _.debounce(handleInput, 500);
