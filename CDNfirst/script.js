// function updateCoordinats(event) {
//     const graph = document.getElementById('graph');
//     const point = document.getElementById('point');
//     const coordDisplay = document.getElementById('coord');

//     const rect = graph.getBoundingClientRect();
//     const x = event.clientX - rect.left;
//     const y = event.clientY - rect.top;

//     point.setAttribute('cx', x);
//     point.setAttribute('cy', y);

//     coordDisplay.textContent = `X: ${x.toFixed(0)}, Y: ${y.toFixed(0)}`;
// };

// const throttleUpdate = _.throttle(updateCoordinats, 500);

// const graphEl = document.getElementById('graph');
// graphEl.addEventListener('mousemove', throttleUpdate);




const text = document.querySelector('.text');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');

function updateText(change) {
   const curerntTextSize = parseInt(window.getComputedStyle(text).fontSize);
   text.style.fontSize = `${curerntTextSize + change}px`; 
}
plus.addEventListener('click', () => {
    updateText(2);
});
minus.addEventListener('click', () => {
    updateText(-2);
})