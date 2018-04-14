// DOME Ready
document.addEventListener('DOMContentLoaded', function () {
    startTween()
});

function startTween() {
    const toolBoxEl = '#toolBox';
    TweenLite.to(toolBoxEl, 1, {x: 290, y: 225, scale: 1.5, onComplete: returnToNormal, onCompleteParams: ['#toolBox'] });

    const greenWord = document.getElementsByClassName('asapReg');
    TweenLite.to(greenWord, 1, {color: '#ff0000', fontSize: '+=65', onComplete: returnTextToNormal});
}

function returnToNormal(elementLabel) {
    if (elementLabel) {
        TweenLite.to(elementLabel, 1, {x:0, y:0, scale: 1});
    }
}

function returnTextToNormal() {
    TweenLite.to('.asapReg', 1, {color: '#fff', fontSize: '-=65'});
}