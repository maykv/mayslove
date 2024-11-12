const comicContainer = document.getElementById('comic-container');
const cuts = document.querySelectorAll('.comic-cut');
let currentCut = 0;

document.getElementById('down').addEventListener('click', function() {
    if (currentCut < cuts.length - 1) {
        currentCut++;
        comicContainer.scrollTo({
            top: comicContainer.scrollHeight,
            behavior: 'smooth'
        });
    } else {
        alert('더 이상 컷이 없습니다.');
    }
});