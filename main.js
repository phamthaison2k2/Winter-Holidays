
//Slider auto
const sliders = document.querySelectorAll('.js-slider');

var sliderIndex = 0;

function showSlider() {
    for (var i = 0; i < sliders.length; i++) {
        sliders[i].style.display = 'none';
    } 
    sliderIndex++;
    if(sliderIndex > sliders.length) {
        sliderIndex = 1
    }
    sliders[sliderIndex - 1].style.display = 'block';
    setTimeout(showSlider, 5000)
}

showSlider();



// Slider next / prev
function arrowSlider() {
    for (var i = 0; i < sliders.length; i++) {
        sliders[i].style.display = 'none';
    } 
    sliderIndex++;
    if(sliderIndex > sliders.length) {
        sliderIndex = 1
    }
    sliders[sliderIndex - 1].style.display = 'block';
}

arrowSlider();


function sliderPrev() {
    arrowSlider()
}

function sliderNext() {
    arrowSlider()
}
