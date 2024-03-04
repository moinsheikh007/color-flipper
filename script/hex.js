const root = document.getElementById('root');
const colorBtn = document.getElementById('colorBtn');
const colorInput = document.getElementById('colorInput');
const copyColor = document.getElementById('copyColor');
const toast = document.querySelector('.hidden');
// console.log(toast)

function generateHEXColor () {
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255)
    const blue = Math.floor(Math.random()*255)
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

copyColor.addEventListener('click', function () {
    colorInput.select()
    navigator.clipboard.writeText(colorInput.value);
    displayToastMsg()
})

function displayToastMsg () {
    toast.classList.remove('hidden')
}

colorBtn.addEventListener('click', function () {
    const hexColor = generateHEXColor();
    root.style.backgroundColor = hexColor;
    colorInput.value = hexColor;
}) 
// #2ea218 #2d5851