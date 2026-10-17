const divs = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// when pressed down
for(let i = 0; i <= divs.length; i++) {
    if(i >= 1) {
    divs[i - 1].classList.remove('highlight'); // removed the one before
    };
    divs[i].classList.add('highlight');// adds to the next one
};




//for pressed up
for(let i = 0; i <= divs.length; i++) {
    if(i >= 1) {
    divs[i - 1].classList.remove('highlight'); // removed the one before
    };
    divs[i].classList.add('highlight');// adds to the next one
};