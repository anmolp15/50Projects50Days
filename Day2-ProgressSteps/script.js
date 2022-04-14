var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');
var progressLine = document.getElementById('progress-line');
var display = document.getElementById('display');
let progress = 0
function updateButtons() {
    if (progress != 0){
        prevButton.disabled = false;
    }
    else{
        prevButton.disabled = true;
    }
    if (progress >= 100){
        nextButton.disabled = true;
    }
    else{
        nextButton.disabled = false;
    }
}


nextButton.addEventListener('click', () =>{
    progress += 25;
    progressLine.style.width  = `${progress}%`;
    updateButtons()
    var id = progress/25 + 1;
    document.getElementById(id.toString()).classList.add('active');
    display.innerHTML = `${progress}% Progress`;
});

prevButton.addEventListener('click', () =>{
    progress -= 25;
    progressLine.style.width  = `${progress}%`;
    updateButtons()
    var id = progress/25 + 2;
    document.getElementById(id.toString()).classList.remove('active');
    display.innerHTML = `${progress}% Progress`;
});