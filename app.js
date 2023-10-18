import data from './data.json' assert { type: 'json'}

const currents = document.querySelectorAll('.current');
const previouses = document.querySelectorAll('.previous');

const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const clickedOption = button.dataset.option
        changeTime(clickedOption, calcTime(clickedOption))
    })
})

const calcTime = (option) => {
    if (option === 'daily'){
        return 'Yesterday'
    } else if( option === 'weekly'){
        return 'Last Week'
    } else if ( option === 'monthly'){
        return 'Last Month'
    }
}

const changeTime = (time, timeFrame) =>{
    for(let i = 0 ; i < currents.length ; i++){
        currents[i].innerHTML = `${data[i].timeframes[time].current}hrs`
        previouses[i].innerHTML = `${timeFrame} - ${data[i].timeframes[time].previous}hrs`
    }
}



