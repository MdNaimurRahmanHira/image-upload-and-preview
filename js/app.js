const customInput = document.getElementById('customInput');
const imageWrpr = document.querySelector('.image-wrapper');
const wrpr = document.querySelector('.wrapper');
const img = document.querySelector('.wrapper img');
const closeBtn = document.querySelector('.close-btn');
const title = document.querySelector('.title');

imageWrpr.onclick = function () {
    customInput.click();
}
customInput.onchange = function () {
    let file = this.files[0];

    if (file) {
        title.textContent = file.name;
        const reader = new FileReader();

        reader.addEventListener('load', function () {
            img.src = `${this.result}`;
            wrpr.classList.add('active');
        })
        reader.readAsDataURL(file);
    }

}
closeBtn.onclick = function () {
    wrpr.classList.remove('active')
}