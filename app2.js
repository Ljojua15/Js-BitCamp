//დავალება 1
/*
let number = prompt('check number is odd or even:')


if (number % 2 === 0) {
    console.log('this Number is Even')
    alert("this Number is Even")
} else if (number % 2 > 0) {
    console.log('this is odd')
    alert("this is odd")
} else {
    console.log('please write the number')
    alert("please write the number")
}
*/

//დავალება 2
/*
let number = '';

if (number > 0) {
    console.log('დადებითია')
} else if (number < 0) {
    console.log('უარყოფითია')
} else {
    console.log('უდრის ნულს')
}
*/

//დავეალება 3


/*
let firstNumber = 8
let secondNumber = 2

if (firstNumber / firstNumber === 1 && firstNumber / 1 === firstNumber && firstNumber % secondNumber > 0) {
    console.log("მარტივი რიცხვია")
} else {
    console.log('იყოფა')
}
*/

//დავალება 4
/*
let sentence = ''

if (sentence === '') {
    console.log('ცარიელია');
} else {
    console.log(sentence);
}
*/

//დავალება 5

let sente = ''
let lookingWord = ''



//დავალება 6
/*
let numberFirst = 6;
let numberSecond = 10

alert(Math.min(numberFirst, numberSecond))*/

//დავალება7 
/*
let numberFirst = 6;
let numberSecond = 10

alert(Math.max(numberFirst, numberSecond))
*/

//დავალება8

/*
let askedAge = Number(prompt('ხარ თუ არა +18, შეიყვანე შენი ასაკი:'))


if (askedAge >= 18) {
    console.log('Adult')
} else if (askedAge < 18) {
    console.log('Minor')
} else {
    console.log('შეიყვანე ციფრები')
}
*/

//დავალება9



// let askedGrade = Number(prompt('შეიყვანეთ თქვენი ქულა :'))
/*
if (askedGrade <= 100 && askedGrade >= 91) {
    console.log('A');
} else if (askedGrade <= 90 && askedGrade >= 81) {
    console.log('B');
} else if (askedGrade <= 80 && askedGrade >= 71) {
    console.log('C');
} else if (askedGrade <= 70 && askedGrade >= 61) {
    console.log('D');
} else if (askedGrade <= 60 && askedGrade >= 51) {
    console.log('E');
} else if (askedGrade <= 50 && askedGrade >= 0) {
    console.log('F');
} else {
    console.log('ქულაააააა!');
}
*/

/*

switch (askedGrade) {
    case askedGrade <= 100 && askedGrade >= 91:
        console.log('A');
        break;
    case askedGrade <= 90 && askedGrade >= 81:
        console.log('B');
        break;
    case askedGrade <= 80 && askedGrade >= 71:
        console.log('C');
        break;
    case askedGrade <= 70 && askedGrade >= 61:
        console.log('D');
        break;
    case askedGrade <= 50 && askedGrade >= 0:
        console.log('E');
        break;
    default:
        console.log('Error');
}
*/

//დავალება 11

/*
let dayData = prompt('შეიყვანეთ თარიღი "მაგ: 2 იანვარი, 5 მარტი" : ')

let partDate = dayData.split(' ')

let onlyMonth = partDate[partDate.length - 1] //es mainteresev mere

switch (onlyMonth) {
    case 'იანვარი':
        console.log(31)
        break;
    case 'თებერვალი':
        console.log("28 ან 29")
        break;
    case 'მარტი':
        console.log(31)
        break;
    case 'აპრილი':
        console.log(30)
        break;
    case 'მაისი':
        console.log(31)
        break;
    case 'ივნისი':
        console.log(30)
        break;
    case 'ივლისი':
        console.log(31)
        break;
    case 'აგვისტო':
        console.log(31)
        break;
    case 'სექტემბერი':
        console.log(30)
        break;
    case 'ოქტომბერი':
        console.log(31)
        break;
    case 'ნოემბერი':
        console.log(30)
        break;
    case 'დეკემბერი':
        console.log(31)
        break;
    default:
        console.log('ეს თვე არ არსებობს')
}
*/