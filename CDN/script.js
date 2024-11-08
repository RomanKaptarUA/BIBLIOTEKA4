// IntersectionObserver(callback, options)

const option = {
    rootMargin: '50px',
    threshold: 0.25,
};
const onEntry = (entries, observer) => {
    entries.forEach(entry => {
        //   ...
    })
}

const observed = new IntersectionObserver(onEntry, option);