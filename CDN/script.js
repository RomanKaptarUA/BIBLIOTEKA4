// IntersectionObserver(callback, options)

// const option = {
//     rootMargin: '50px',
//     threshold: 0.25,
// };
// const onEntry = (entries, observer) => {
//     entries.forEach(entry => {
//         //   ...
//     })
// }

// const observed = new IntersectionObserver(onEntry, option);






////////////////////////////////////////////










const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
}

const observer = new intersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            observer.unobserve();
        }
    })
}, options);

document.querySelectorAll('.lazy-image').forEach(img => {
    observer.unobserve(img)
})