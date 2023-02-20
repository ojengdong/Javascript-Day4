const func1 = function () {
    console.log("Time Out");
}

const func2 = function () {
    console.log('interval');
}

const myTimeout1 = setTimeout(func1, 2000);
const myTimeout2 = setTimeout(func1, 5000);
const myInterval = setInterval(func2, 1000);