const elBody = document.querySelector('body');
const elWrapper = document.querySelector('.wrapper');
const elColorText = document.querySelector('.color-text');

const values = ['0', '1', '2', '3', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];


// random color function
function getGradient() {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        const randomNumber = Math.floor(Math.random() * values.length);
        color += values[randomNumber];
    }
    return color;
}



// set color to function

function setGradient() {
    let color1 = getGradient();
    let color2 = getGradient();
    let randomDeg = Math.trunc(Math.random() * 360);
    const bgColor = `linear-gradient(${randomDeg}deg, ${color1}, ${color2})`
    elBody.style.background = bgColor;
    elColorText.textContent = bgColor
}

elWrapper.addEventListener('click', setGradient);