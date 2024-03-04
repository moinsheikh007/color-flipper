const colorBtn = document.getElementById('colorBtn');
const root = document.getElementById('root');

function generateRGBColor () {
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);
    return `rgb(${red}, ${green}, ${blue})`
}

colorBtn.addEventListener('click', function () {
    root.style.backgroundColor = generateRGBColor();
})
