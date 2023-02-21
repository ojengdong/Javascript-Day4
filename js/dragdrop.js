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
