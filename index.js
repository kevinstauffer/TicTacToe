let zähler = 0
let XorO11 = document.getElementById('r1');
let XorO22 = document.getElementById('r2');
let XorO33 = document.getElementById('r3');
let XorO44 = document.getElementById('r4');
let XorO55 = document.getElementById('r5');
let XorO66 = document.getElementById('r6');
let XorO77 = document.getElementById('r7');
let XorO88 = document.getElementById('r8');
let XorO99 = document.getElementById('r9');

function winner(XorO) {
    if (XorO == 'x') {
        alert('X hat gewonnen')
    } else {
        alert('O hat gewonnen')
    }
    location.reload()
}

function dreiInEinerLinie(par) {
    // 3x 'X oder O' in einer Reihe werden sie grün eingefärbt //
    if (XorO11.innerHTML == par && XorO22.innerHTML == par && XorO33.innerHTML == par) {
        r1.style.color = "green";
        r2.style.color = "green";
        r3.style.color = "green";
        setTimeout(function() { winner(par) }, 1000)

    } else if (XorO44.innerHTML === par && XorO55.innerHTML === par && XorO66.innerHTML === par) {
        r4.style.color = "green";
        r5.style.color = "green";
        r6.style.color = "green";
        setTimeout(function() { winner(par) }, 1000)

    } else if (XorO77.innerHTML === par && XorO88.innerHTML === par && XorO99.innerHTML === par) {
        r7.style.color = "green";
        r8.style.color = "green";
        r9.style.color = "green";
        setTimeout(function() { winner(par) }, 1000)

    } else if (XorO11.innerHTML === par && XorO44.innerHTML === par && XorO77.innerHTML === par) {
        r1.style.color = "green";
        r4.style.color = "green";
        r7.style.color = "green";
        setTimeout(function() { winner(par) }, 1000)

    } else if (XorO22.innerHTML === par && XorO55.innerHTML === par && XorO88.innerHTML === par) {
        r2.style.color = "green";
        r5.style.color = "green";
        r8.style.color = "green";
        setTimeout(function() { winner(par) }, 1000)

    } else if (XorO33.innerHTML === par && XorO66.innerHTML === par && XorO99.innerHTML === par) {
        r3.style.color = "green";
        r6.style.color = "green";
        r9.style.color = "green";
        setTimeout(function() { winner(par) }, 1000)

    } else if (XorO11.innerHTML === par && XorO55.innerHTML === par && XorO99.innerHTML === par) {
        r1.style.color = "green";
        r5.style.color = "green";
        r9.style.color = "green";
        setTimeout(function() { winner(par) }, 1000)

    } else if (XorO33.innerHTML === par && XorO55.innerHTML === par && XorO77.innerHTML === par) {
        r3.style.color = "green";
        r5.style.color = "green";
        r7.style.color = "green";
        setTimeout(function() { winner(par) }, 1000)

    }
}
// Button 
function schreiben(id) {
    let zelle;
    zelle = document.getElementById(id)
    if (zelle.innerHTML == '') {
        zähler += 1
        if (zähler % 2 == 0) {
            zelle.innerHTML = 'x'

        } else {
            zelle.innerHTML = 'o'
        }
    }
    dreiInEinerLinie('x');
    dreiInEinerLinie('o');
}