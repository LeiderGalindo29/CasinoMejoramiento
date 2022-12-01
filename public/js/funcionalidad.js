let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let img4 = document.getElementById('img4');
let img5 = document.getElementById('img5');
let img6 = document.getElementById('img6');
let img7 = document.getElementById('img7');
let img8 = document.getElementById('img8');
let img9 = document.getElementById('img9');
let item211Start = img1.style.top;
let button = document.getElementById('bottom').offsetTop;
 
let times1 = 20;
let times2 = 35;
let times3 = 55;
let maximoTimes = 0;
let maximoTimes2 = 0;
let maximoTimes3 = 0;

let sumaTiempos = 0;
let againSuma = 0;

let columna1 = 0;
let columna2 = 0;
let columna3 = 0;

let intervalo1;
let intervalo2;
let intervalo3;

let it1;
let it2;
let it3;
// Score
let score = 0;

function start() {
    document.getElementById('start').style.display = 'none';
    document.getElementById('win').style.display = 'none';
    // Number of extra spins
    add = Math.floor((Math.random() * 10) + 1);
    maximoTimes = times1 + add;
    intervalo1 = setInterval(function() {
        scrollCol1(maximoTimes);
    }, 15);
    add = Math.floor((Math.random() * 10) + 1);
    maximoTimes2 = times2 + add;
    intervalo2 = setInterval(function() {
        scrollCol2(maximoTimes2);
    }, 15);
    add = Math.floor((Math.random() * 10) + 1);
    maximoTimes3 = times3 + add;
    intervalo3 = setInterval(function() {
        scrollCol3(maximoTimes3);
    }, 15);
    sumaTiempos = maximoTimes + maximoTimes2 + maximoTimes3;
}

function scrollCol1() {
    let i1 = parseInt((img1.style.top).replace('px', ''));
    let i2 = parseInt((img2.style.top).replace('px', ''));
    let i3 = parseInt((img3.style.top).replace('px', ''));
    img1.style.top = (i1 + 15) + 'px';            
    img2.style.top = (i2 + 15) + 'px';
    img3.style.top = (i3 + 15) + 'px';
    let offset = 55;
    if(parseInt(img1.style.top) > parseInt(button + offset)) {
        img1.style.top = item211Start;
       columna1++;
       againSuma++;
       it1 = "2";
    }
    if(parseInt(img2.style.top) > parseInt(button + offset)) {
        img2.style.top = item211Start;
       columna1++;
       againSuma++;
       it1 = "3";
    }
    if(parseInt(img3.style.top) > parseInt(button + offset)) {
        img3.style.top = item211Start;
       columna1++;
       againSuma++;
       it1 = "1";
    }
    if(columna1 == maximoTimes) {
        clearInterval(intervalo1);
    }
    checkResult();
}

function scrollCol2() {
    let i4 = parseInt((img4.style.top).replace('px', ''));
    let i5 = parseInt((img5.style.top).replace('px', ''));
    let i6 = parseInt((img6.style.top).replace('px', ''));
    img4.style.top = (i4 + 15) + 'px';            
    img5.style.top = (i5 + 15) + 'px';
    img6.style.top = (i6 + 15) + 'px';
    let offset = 55;
    if(parseInt(img4.style.top) > parseInt(button + offset)) {
        img4.style.top = item211Start;
       columna2++;
       againSuma++;
       it2 = "2";
    }
    if(parseInt(img5.style.top) > parseInt(button + offset)) {
        img5.style.top = item211Start;
       columna2++;
       againSuma++;
       it2 = "3";
    }
    if(parseInt(img6.style.top) > parseInt(button + offset)) {
        img6.style.top = item211Start;
       columna2++;
       againSuma++;
       it2 = "1";
    }
    if(columna2 == maximoTimes2) {
        clearInterval(intervalo2);
    }
    checkResult();
}

function scrollCol3() {
    let i7 = parseInt((img7.style.top).replace('px', ''));
    let i8 = parseInt((img8.style.top).replace('px', ''));
    let i9 = parseInt((img9.style.top).replace('px', ''));
    img7.style.top = (i7 + 15) + 'px';            
    img8.style.top = (i8 + 15) + 'px';
    img9.style.top = (i9 + 15) + 'px';
    let offset = 55;
    if(parseInt(img7.style.top) > parseInt(button + offset)) {
        img7.style.top = item211Start;
       columna3++;
       againSuma++;
       it3 = "2";
    }
    if(parseInt(img8.style.top) > parseInt(button + offset)) {
        img8.style.top = item211Start;
       columna3++;
       againSuma++;
       it3 = "3";
    }
    if(parseInt(img9.style.top) > parseInt(button + offset)) {
        img9.style.top = item211Start;
       columna3++;
       againSuma++;
       it3 = "1";
    }
    if(columna3 == maximoTimes3) {
        clearInterval(intervalo3);
    }
    checkResult();
}

function checkResult() {
    if(sumaTiempos == againSuma) {
        // Stopped spinning
        document.getElementById('start').style.display = 'block';
        maximoTimes = 0;
        maximoTimes2 = 0;
        maximoTimes3 = 0;
        sumaTiempos = 0;
        againSuma = 0;                
        columna1 = 0;
        columna2 = 0;
        columna3 = 0;
        // Check for combinations
        if(it1 == it2 && it2 == it3) {
            score += 100;
            document.getElementById('win').style.display = 'block';
        }
        else {                    
            if(score > 0) {
                score -= 100;
            }
        }
        document.getElementById('score').innerHTML = "SCORE: " + (score > 0 ? score : '000') ;
    }
}