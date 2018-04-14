// DOME Ready
document.addEventListener('DOMContentLoaded', function () {
    startTween()
});

function startTween() {
    const toolBoxEl = document.getElementById('toolBox');
    TweenLite.to(toolBoxEl, 1, {x: 290, y: 225, scale: 1.5});

    const greenWord = document.getElementsByClassName('asapReg');
    TweenLite.to(greenWord, 1, {color: '#ff0000', fontSize: '150%'});
}