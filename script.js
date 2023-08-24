const priceSlider = document.querySelector('.priceslider');
const priceValue = document.querySelector('.price-value');
const pageviews = document.querySelector('.pageviews-h');
const modeButton = document.querySelector('.mode-button');
const circle = document.querySelector('.circle');
let isYearlyMode = false;

priceSlider.addEventListener('input', ()=> {
    const selectedPrice = priceSlider.value;
    const yearlyPrice = (selectedPrice*12);
    priceValue.textContent = `$${selectedPrice}.00`;
    if (selectedPrice == 10) {
        pageviews.textContent = "100K PAGEVIEWS"
        if (isYearlyMode == true) {
            priceValue.textContent = `$${yearlyPrice-(yearlyPrice*0.25)}.00`;
        }
    } else if (selectedPrice == 20) {
        pageviews.textContent = "500K PAGEVIEWS"
        if (isYearlyMode == true) {
            priceValue.textContent = `$${yearlyPrice-(yearlyPrice*0.25)}.00`;
        }
    } else if (selectedPrice == 30) {
        pageviews.textContent = "1M PAGEVIEWS"
        if (isYearlyMode == true) {
            priceValue.textContent = `$${yearlyPrice-(yearlyPrice*0.25)}.00`;
        }
    } else if (selectedPrice == 40) {
        pageviews.textContent = "5M PAGEVIEWS"
        if (isYearlyMode == true) {
            priceValue.textContent = `$${yearlyPrice-(yearlyPrice*0.25)}.00`;
        }
    } else if (selectedPrice == 50) {
        pageviews.textContent = "15M PAGEVIEWS"
        if (isYearlyMode == true) {
            priceValue.textContent = `$${yearlyPrice-(yearlyPrice*0.25)}.00`;
        }
    } 
});

modeButton.addEventListener('click', ()=> {
    isYearlyMode =!isYearlyMode;
    const circleNewPosition = isYearlyMode ? "20px" : "0";
    circle.style.transform = `translateX(${circleNewPosition})`;
    modeButton.classList.toggle('mode-button-toggle');
});







  