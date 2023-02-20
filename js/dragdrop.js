const box = document.querySelectorAll(".box");
const image = document.querySelector(".image");

// function callback(e) {
//     e.preventDefault();
//     box.appendChild(image);
//     image = imgecontent(e)
// }

// box[0].addEventListener('drop', function(e)  {
//     e.preventDefault();
//     console.log('drop');
// });
// box[1].addEventListener('drop', function(e) {
//     // e.preventDefault();
//     console.log('drop');
// });
// box[2].addEventListener('drop', function(e) {
//     // e.preventDefault();
//     console.log('drop');
// });
// box[3].addEventListener('drop', function(e) {
//     // e.preventDefault();
//     console.log('drop');
// });

box.forEach(function(b){
    b.addEventListener("dragover", (e) => {
        e.preventDefault();
        b.classList.add('hovered');
    })
    b.addEventListener('dragleave',(e)=> {
        b.classList.remove('hovered');
    })
    b.addEventListener("drop", () => {
        b.appendChild(image);
        b.classList.remove('hovered');
    })
})

// box[0].addEventListener("dragover", (e) => {
//   e.preventDefault();
// });

// box[0].addEventListener("drop", () => {
//   box[0].appendChild(image);
// });

// box[0].addEventListener("dragleave", (e) => {
//     e.preventDefault();
//     
//   });
  

// box[1].addEventListener("dragover", (e) => {
//   e.preventDefault();
// });

// box[1].addEventListener("drop", () => {
//   box[1].appendChild(image);
// });

// box[2].addEventListener("dragover", (e) => {
//   e.preventDefault();
// });

// box[2].addEventListener("drop", () => {
//   box[2].appendChild(image);
// });

// box[3].addEventListener("dragover", (e) => {
//   e.preventDefault();
// });

// box[3].addEventListener("drop", () => {
//   box[3].appendChild(image);
// });

const ball = document.querySelector('.ball');

ball.onmousedown = function(event){
    // (1) absolute 속성과 zIndex 프로퍼티를 수정해 공이 제일 위에서 움직이기 위한 준비를 합니다.
    ball.style.position = 'absolute';
    ball.style.zIndex = '1000';

    // 현재 위치한 body로 직접 이동하여
    // body를 기준으로 위치를 지정합니다.
    document.body.append(ball);

    // 공을 pageX pageY 좌표 중앙에 위치하게 합니다.
    function moveAt(pageX, pageY){
        ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
        ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
    }
}