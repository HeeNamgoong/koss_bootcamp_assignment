//1번 문제


var i = 1;
var j = 2;

for(j = 2; j < 10; j++){
    console.log('==== %d단 시작 ====', j)
    for (i = 1; i < 10; i++) {
        console.log(j + ' * ' + i + ' = ' + j*i);

    }
}


//2번 문제

const date = new Date(2017, 9, 3, 18, 20, 30);
console.log('date : %s', date.toLocaleString());
console.log('LocaleDateString : %s', date.toLocaleDateString());
console.log('LocaleTimeString : %s', date.toLocaleTimeString());

console.log('year : %s', date.getFullYear());
console.log('month : %s', date.getMonth());
console.log('date : %s', date.getDate());
console.log('hours : %s', date.getHours());
console.log('minutes : %s', date.getMinutes());
console.log('seconds : %s', date.getSeconds());

//3번 문제

const maxResult = Math.max(95, 80, 88, 79, 50);
const minResult = Math.min(95, 80, 88, 79, 50);

function sum(a, b){
    sum = maxResult + minResult;
    return sum;

}

function average(a, b){
    average = sum / 2;
    return average;


}

console.log('max : ' + maxResult);
console.log('min : ' + minResult);
console.log('sum : ' + sum());
console.log('average : ' + average());

//4번 문제

const students = [
    {name: 'kyeongrok', score: 85},
    {name: 'jihyun', score: 95},
    {name: 'minsup', score: 76}
];

function getDegree(score){
    if (score >= 90){
        score = 'A';
        return score;

    }
    else if (score >= 80){
        score = 'B';
        return score;
    }
    else if (score >= 60){
        score = 'C';
        return score;
    }
    else {
        score = 'F';
        return score;
    }
}

students.forEach((students) => {
    const result = `name: ${students.name} score: ${getDegree(students.score)}`
    console.log(result);
});
