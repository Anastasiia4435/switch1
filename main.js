//first

const selectDrink = document.querySelector('.select-drink');
const result = document.querySelector('.result');

selectDrink.addEventListener('change', () => {

    let select = selectDrink.value;
    let text;

    switch (select) {
        case 'coffee':
            text = "You choosed coffee";
        break;
        
        case 'tea':
            text = "You choosed tea";
        break;
        
        case 'juice':
            text = "You choosed juice";
        break;

        default: 
            text = "Choose a drink";
        break;
    } 

    result.textContent = text;

})

//second

const weekDay = document.querySelector('.day');
const result2 = document.querySelector('.result-2');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {

    let day = weekDay.value;

    switch (day) {
        case 'monday':
        case 'tuesday':
        case 'wednesday':
        case 'thursday':
        case 'friday':
            result2.textContent = 'work day';
        break;

        case 'saturday':
        case 'sunday':
            result2.textContent = 'weekend';
        break;

        default:
            result2.textContent = 'Enter a day';
    }
})

//third

const daySeason = document.querySelector('.season');
const btn2 = document.querySelector('.btn2');
const result3 = document.querySelector('.result-3');

btn2.addEventListener('click', () => {

    let season = daySeason.value;

    switch (season) {
        case '12':
        case '1':
        case '2':
            result3.textContent = "Winter";
        break;

        case '3':
        case '4':
        case '5':
            result3.textContent = "Spring";
        break;

        case '6':
        case '7':
        case '8':
            result3.textContent = "Summer";
        break;

        case '9':
        case '10':
        case '11':
            result3.textContent = "Autumn";
        break;

        default:
            result2.textContent = "Enter a mounth";
        break;
    }

})

//fourth

const mounthDays = document.querySelector('.days');
const btn3 = document.querySelector('.btn3');
const result4 = document.querySelector('.result-4');

btn3.addEventListener('click', () => {

    let days = mounthDays.value;

    switch (days) {
        case '1':
        case '3':
        case '5':
        case '7':
        case '8':
        case '10':
        case '12':
            result4.textContent = '31 days';
        break;

        case '4':
        case '6':
        case '9':
        case '11':
            result4.textContent = '30 days';
        break;

        case '2':
            result4.textContent = '28 days';
        break;

        default:
            result4.textContent = 'Enter a mounth';
        break;
    }

})

//fifth

const colorCommand = document.querySelector('.color');
const btn4 = document.querySelector('.btn4');
const result5 = document.querySelector('.result-5');

btn4.addEventListener('click', () => {

    let color = colorCommand.value;

    switch (color) {
        case 'green':
            result5.textContent = 'go';
        break;

        case 'yellow':
            result5.textContent = 'wait';
        break;

        case 'red':
            result5.textContent = 'stop';
        break;

        default:
            result5.textContent = 'Enter color';
    }
    
})

//sixth

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const btn5 = document.querySelector('.btn5');
const calculator = document.querySelector('.calculator');
const result6 = document.querySelector('.result6');

btn5.addEventListener('click', () => {

    let oneN = one.value;
    let twoN = two.value;
    let calc = calculator.value;

    oneN = Number(oneN);
    twoN = Number(twoN);

    switch (calc) {
        case 'plus':
            result6.textContent = oneN + twoN;
        break;

        case 'minus':
            result6.textContent = oneN - twoN;
        break;

        case 'multiplication':
            result6.textContent = oneN * twoN;
        break;

        case 'division':
            result6.textContent = oneN / twoN;
        break;

        default:
            result6.textContent = 'Enter something';
        break;
    }

})