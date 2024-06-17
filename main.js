const myButton = document.querySelector("#counter")
let counter = 0

function onButtonClick() {
    counter = counter + 1
    myButton.innerHTML = `count is ${counter}`
}

myButton.addEventListener("click", onButtonClick)

