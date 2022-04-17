let main = document.getElementById('main');
let loading = document.getElementById('loading');

let load = 0;
let blurValue, op;


setInterval(() => {
    if (load > 99) {
        clearInterval();
    }
    else {
        blurValue = 16 - (load/100)*16;
        op = 1 - load/100;
        main.style.filter = `blur(${blurValue}px)`;
        loading.style.opacity = `${op}`;
        loading.innerText = `${load}%`
    }
    load++;
}, 50);