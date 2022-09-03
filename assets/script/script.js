"use strict"

// Дата

document.getElementById('showDate').onclick = function () {
    
    alert( formatDate(new Date(new Date - 1)) ); // "Сейчас"

    alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

    alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

    alert( formatDate(new Date(new Date - 86400* 4 * 1000)) ); // Вчерашняя дата 
}

function formatDate(date) {
    let currentDate = new Date();
    let differenceInMs = currentDate - date;

    if (differenceInMs < 1000) {
        return "right now";
    } else if (differenceInMs > 1000 && differenceInMs < 60000) {
        return `${differenceInMs/1000} seconds ago`;
    } else if (differenceInMs > 60000 && differenceInMs < 3600000) {
        return `${differenceInMs/60000} minutes ago`;
    } else {
        let dateOld = changeDate(date.getDate());
        let monthOld = changeDate(date.getMonth() + 1);
        let yearOld = String(date.getFullYear()).slice(2, 4);
        let hoursOld = changeDate(date.getHours());
        let minutesOld = changeDate(date.getMinutes());

        let changeDate = (numberToCheck) => {
            return (numberToCheck < 10) ? "0" + numberToCheck : numberToCheck;
        }

        return `${dateOld}.${monthOld}.${yearOld} ${hoursOld}:${minutesOld}`;
    }

}

// Генератор чисел

document.getElementById('btnCount').onclick = function() {
    let numbers = [];
    for (let i=0; i < 10; i++) {
        let randomNumber = (Math.round(Math.random() * 20) - 10);
        numbers.push(randomNumber);
    }

    document.querySelector('.generated').innerHTML = `Generated: ${numbers.join(' ')}`;

    let max = Math.max(...numbers);
    document.querySelector('.max').innerHTML = `Max: ${max}`;

    let min = Math.min(...numbers);
    document.querySelector('.min').innerHTML = `Min: ${min}`;

    let sum = numbers.reduce((a, b) => a + b, 0);
    document.querySelector('.sum').innerHTML = `Sum: ${sum}`;

    let average = sum/10;
    document.querySelector('.average').innerHTML = `Average: ${average}`;

    let product = numbers.reduce( (a, b) => a * b );
    document.querySelector('.product').innerHTML = `Product: ${product}`;
}