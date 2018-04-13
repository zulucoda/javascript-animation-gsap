// DOME Ready
document.addEventListener('DOMContentLoaded', function () {
    startTween()
});

function startTween() {
    var toolBoxEl = document.getElementById('toolBox');
    TweenLite.to(toolBoxEl, 1, {x: 290, y: 225});
}