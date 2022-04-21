var boxes = document.querySelectorAll('.box');
window.addEventListener('scroll', addBoxes)
function addBoxes() {
    boxes.forEach((box)=>{
        let base = box.getBoundingClientRect().top;
        let height = window.innerHeight * 0.8;
        if (base < height) {
            box.classList.add("show");
        }
        else{
            box.classList.remove("show");
        }
    })
}
