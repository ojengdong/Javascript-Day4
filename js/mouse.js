// dragdrop 마우스 이벤트
const ball = document.querySelector('.ball');

// mousedown, mouseup : 요소위에서 마우스 왼쪽 버튼 누를 때, 마우스 버튼 누르고 있다가 뗄 때 발생
ball.onmousedown = function(event){
    // (1) absolute 속성과 zIndex 프로퍼티를 수정해 공이 제일 위에서 움직이기 위한 준비를 합니다.
    ball.style.position = 'absolute';
    ball.style.zIndex = '1000';

    // 현재 위치한 body로 직접 이동하여
    // body를 기준으로 위치를 지정합니다.
    document.body.append(ball);

    // 공을 pageX pageY 좌표 중앙에 위치하게 합니다.
    // offsetWidth = width + padding + border
    // offsetHeight = height + padding + border
    function moveAt(pageX, pageY){
        ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
        ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
    }

    // 포인터 아래로 공을 움직인다.
    moveAt(event.pageX, event.pageY);

    function onMouseMove(event){
        moveAt(event.pageX, event.pageY);
    }

    // 2. mousemove로 공을 움직인다.
    // mousemove: 해당요소에서 마우스가 움직일 때
    document.addEventListener('mousemove', onMouseMove);

    // 3.공을 드롭하고, 불필요한 핸들러를 제거한다.
    ball.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
    }
}