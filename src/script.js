const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

let painting = false;
let currentColor = 'black';
let isEraserActive = false;

// 각 버튼 클릭 이벤트 리스너
document.getElementById('black').addEventListener('click', () => {
    isEraserActive = false;
    currentColor = 'black';
    console.log('Color changed to black');
});

document.getElementById('red').addEventListener('click', () => {
    currentColor = 'red';
    console.log('Color changed to red');
});

document.getElementById('blue').addEventListener('click', () => {
    currentColor = 'blue';
    console.log('Color changed to blue');
});

document.getElementById('yellow').addEventListener('click', () => {
    currentColor = 'yellow';
    console.log('Color changed to yellow');
});

document.getElementById('eraser').addEventListener('click', () => {
    isEraserActive = true;
    currentColor = 'white';
    console.log('Eraser activated');
});

document.getElementById('save').addEventListener('click', () => {
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'drawing.png';
    link.click();
    console.log('Drawing saved as PNG');
});

document.getElementById('export').addEventListener('click', () => {
    alert('Export 기능 준비 중입니다!');
    console.log('Export feature is under development');
});

// 마우스 이벤트
canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', draw);

// 터치 이벤트
canvas.addEventListener('touchstart', startPosition);
canvas.addEventListener('touchend', endPosition);
canvas.addEventListener('touchmove', draw);

// 그리기 시작
function startPosition(e) {
    e.preventDefault(); // 터치 시 스크롤 방지
    painting = true;
    console.log('Started drawing');
    draw(e);
}

// 그리기 끝
function endPosition() {
    painting = false;
    ctx.beginPath();
    console.log('Stopped drawing');
}

// 그리기 동작
function draw(e) {
    e.preventDefault(); // 기본 동작인 스크롤 방지
    
    if (!painting) return;

    // 터치 이벤트일 경우 좌표 계산
    let x, y;
    if (e.type.startsWith('touch')) {
        x = e.touches[0].clientX - canvas.offsetLeft;
        y = e.touches[0].clientY - canvas.offsetTop;
        console.log(`Touch at: x=${x}, y=${y}`);
    } else {
        // 마우스 이벤트일 경우 좌표 계산
        x = e.offsetX;
        y = e.offsetY;
        console.log(`Mouse at: x=${x}, y=${y}`);
    }

    // 선 스타일 설정
    ctx.lineWidth = isEraserActive ? 10 : 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = isEraserActive ? 'white' : currentColor;

    // 드로잉
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}
