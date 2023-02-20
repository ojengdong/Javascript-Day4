let value = 10;
console.log(1);

function myFunc1() {
    // console.log(value);
    console.log(2);
}

value = value + 10;
console.log(3);

myFunc1();
console.log(4);
// 제일 중요 !! 런타임 실행 순서


// 리턴이 없는 함수
let x = 10;

function plus() {
    x = x + 10;
    return x; //리턴함수
}

const y = plus();

console.log(y);



// function multyply(a, b) {
//     console.log();
//     return a * b;
// }

const multiply = function (a, b) {
    return a * b;
}

console.log()
// console.log(multyply(2, 3));