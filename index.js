// doesn't work window & method that are meant for browsers

// alert("Hello World")
// document.write("Hello World")
// window.document.addEventListener('click', e => {console.log(e.target)})

let interval = global.setInterval(() => {
    console.log("Hello World")
}, 1000);

global.setTimeout(() => {
    console.log(__dirname)
    console.log(__filename)
    clearInterval(interval)
}, 5000);

document.addEventListener(e => {
    console.log(e.target.value)
})