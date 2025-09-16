let form = document.querySelector('.main-container')

let userName = document.getElementById('user-name').value;
let userClass = document.getElementById('user-class').value;
let userRoll = document.getElementById('user-roll').value;
let btn = document.getElementById('btn')

let marksheet = document.querySelector('.marksheet')

let name = document.getElementById('name');
let clas = document.getElementById('clas');
let roll = document.getElementById('roll');

let sub1 = document.getElementById('sub1');
let sub2 = document.getElementById('sub2');
let sub3 = document.getElementById('sub3');

let mark1 = document.getElementById('mark1');
let mark2 = document.getElementById('mark2');
let mark3 = document.getElementById('mark3');

let total = document.getElementById('total');
let percent = document.getElementById('percent');
let grade = document.getElementById('grade');

btn.addEventListener('click', (e) => {
    e.preventDefault()
    
    let userName = document.getElementById('user-name').value;
    let userClass = document.getElementById('user-class').value;
    let userRoll = document.getElementById('user-roll').value;

    name.innerText = `Name: ${userName}`;
    clas.innerText = `Class: ${userClass}`;
    roll.innerText = `Roll no: ${userRoll}`;

    const subjects = ['English', 'Urdu', 'Math']

    sub1.innerText = subjects[0];
    sub2.innerText = subjects[1];
    sub3.innerText = subjects[2];

    mark1.innerText = Math.floor(Math.random() * (101 - 35)) + 35;
    mark2.innerText = Math.floor(Math.random() * (101 - 35)) + 35;
    mark3.innerText = Math.floor(Math.random() * (101 - 35)) + 35;
    
    let totalMarks = Number(mark1.innerText) + Number(mark2.innerText) + Number(mark3.innerText);
    total.innerText = `Total: ${totalMarks}`;

    let percentage = (totalMarks * 100 / 300);
    percent.innerText = `Percent: ${percentage.toFixed(2)}%`

    if(percentage >= 90){
        grade.innerText = 'Grade: A+'

    }else if(percentage >= 80){
        grade.innerText = 'Grade: A'

    }else if(percentage >= 70){
        grade.innerText = 'Grade: B'

    }else if(percentage >= 60){
        grade.innerText = 'Grade: C'

    }else if(percentage >= 50){
        grade.innerText = 'Grade: D'

    }else{
        grade.innerText = 'Grade: Fail'

    }

    marksheet.style.display = 'flex'
    form.style.display = 'none'

})