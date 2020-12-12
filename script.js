// /*TRUTHY AND FALSY VALUES */
// /* A photographer was invited to a passport photographs of various students in a class,
// he charged N200 per student, the class teacher charge N250, the principal charge N350,
// students reported the charges to be N350 to their mothers, mother told the fathers that the charges
// N500 each*/


// // function Person (job, price) {
// //     this.job = job;
// //     this.price = price;
// // };

// // const photographer = new Person ('cameraman', 200);
// // const student = new Person ('student', 350);
// // const classTeacher = new Person ('teacher', 250);
// // const principal = new Person ('principal', 350);
// // const mother = new Person ('mother', 500);

// // var photoPrice = function (role, price) {
// //     switch (role) {
// //         case 'teacher':
// //             return 'The ' + role + ' charged ' + price + ' for the photograph';
        
// //         case 'principal':
// //         case 'student':
// //             return 'The ' + role + ' charged ' + price + ' for the photograph';

// //         case 'mother': 
// //             return 'The ' + role + ' reported ' + price + ' for the photograph';

// //         default:
// //             return 'The ' + role + ' actually charged ' + price + ' for the photograph'; 
            
// //     }
// // }

// // console.log(photoPrice ('cameraman', 200));
// // var classTeacher = photoPrice ('teacher', 250);
// // console.log(classTeacher);

// // const teamJohn = (89 + 120 + 103) / 3;
// // const teamMike = (116 + 94 + 123) / 3;
// // const teamMary = (97 + 134 + 105) / 3;

// // if (teamJohn > teamMike && teamJohn > teamMary) {
// //     console.log(`John's team wins with an average score of ${teamJohn}`);
// // } else if (teamMike > teamJohn && teamMike > teamMary) {
// //     console.log(`Mike's team wins with an average score of ${teamMike}`);
// // } else if (teamMary > teamJohn && teamMary > teamMike) {
// //     console.log(`Mary's team wins with an average score of ${teamMary}`);
// // } else {
// //     console.log(`There's a drawn match`);
// // }

// // // console.log(teamJohn, teamMike, teamMary);

// const calcAge = (birthYear) => {console.log(2020 - birthYear)};
// calcAge(1990);

// const calcAgeUntilRetirement = (birthYear, firstName) => {
//     const ageLimit = 65;
//     const now = new Date().getFullYear();
//     const age = now - birthYear;
//     const retirement = ageLimit - age;

//     if (retirement > 0) {
//         console.log(`${firstName} has ${retirement} years of service left`);
//     } else {
//         console.log(`${firstName} has already left the service`);
//     }
// }


// calcAgeUntilRetirement(1990, 'John');
// calcAgeUntilRetirement(1984, 'Jude');
// calcAgeUntilRetirement(1945, 'Mary');


// const calcTip = (bills) => {
//     let percentage;
    
//     if (bills < 50) {
//         percentage = 0.2;
//     } else if (bills >= 50 && bills < 200) {
//         percentage = 0.15;
//     } else {
//         percentage = 0.1;
//     }
//     return percentage * bills;
// }

// const bills = [124, 48, 264];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const finalBill = [(bills[0] + tips[0]),
//                     (bills[1] + tips[1]),
//                     (bills[2] + tips[2])];

// console.log(tips);
// console.log(finalBill);

// const john = {
//     fullName: 'John Smith',
//     mass: 76,
//     height: 1.74,
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }

// const mark = {
//     fullName: 'Mark Loco',
//     mass: 88,
//     height: 1.94,
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }

// // john.calcBMI();
// // mark.calcBMI();

// console.log(john, mark);

// if (john.calcBMI() > mark.calcBMI()) {
//     console.log(`${john.fullName} has higher BMI of ${john.bmi}`);
// } else if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName} has higher BMI of ${mark.bmi}`);
// } else {
//     console.log(`They both have the same BMI`);
// }

// const john = {
//     fullName: 'John Smith',
//     bills: [124, 48, 268, 180, 42],
//     tips: [],
//     finalBill: [],
//     calcTip: function () {
//         for (var i = 0; i < this.bills.length; i++) {
//             var percentage;
//             var bill = this.bills[i];
//             if (bill[i] < 50) {
//                 percentage = 0.20;
//             } else if (bill[i] >= 50 && bill[i] < 200) {
//                 percentage = 0.15;
//             } else {
//                 percentage = 0.1;
//             }
//             this.tips[i] = percentage * bill;
//             this.finalBill[i] = bill + this.tips[i];
//         }
//     }
// }

// const mark = {
//     fullName: 'Mark Milo',
//     bills: [77, 375, 110, 45],
//     tips: [],
//     finalBill: [],
//     calcTip: function () {
//         for (var i = 0; i < this.bills.length; i++) {
//             var percentage;
//             var bill = this.bills[i];
//             if (bill[i] < 100) {
//                 percentage = 0.20;
//             } else if (bill[i] >= 100 && bill[i] < 300) {
//                 percentage = 0.1;
//             } else {
//                 percentage = 0.25;
//             }
//             this.tips[i] = percentage * bill;
//             this.finalBill[i] = bill + this.tips[i];
//         }
//     }
// }

// var calcAverage = function() {
    
// }

// john.calcTip();
// mark.calcTip();
// console.log(john);
// console.log(mark);

/**ELOQUENT JAVASCRIPT */
//EXECISE 1

// let hashArray = ['#', '##', '###', '####', '#####', '######', '#######'];
// for (let i = 0; i < hashArray.length; i++) {
//     console.log(hashArray[i]);
// }

// let hashArray = ['#', '##', '###', '####', '#####', '######', '#######'];
// let i = 0;
// while (i < hashArray.length) {
//     console.log(hashArray[i]);
//     i++;
// } 

// function min (a, b) {
//     return Math.min(a, b);
// }
// console.log(min(10, 20));
// 

// for (let line = '#'; line.length < 8; line = line + '#') {
//     console.log(line);
// }

// for (let i = 1; i <= 30; i++) {
//     let output = ' ';
//     let isFizz = (i % 3 == 0) ? true : false;
//     let isBuzz = (i % 5 == 0) ? true : false;
//     if (isFizz) output += 'Fizz';
//     if (isBuzz) output += 'Buzz';
//     if (isFizz && isBuzz) {
//         output = 'FizzBuzz';
//     }
//     console.log(output || i);
// }

// let size = 8;
// let board = ' ';
// for (let y = 0; y < size; y++) {
//     for (let x = 0; x < size; x++) {
//         if ((x + y) % 2 == 0) {
//             board += ' ';
//         } else {
//             board += '#';
//         }
//         board += '\n';
//     }
//     console.log(board);
// }


/**
 *33. Write a JavaScript program to check whether two numbers 
 are in range 40..60 or in the range 70..100 inclusive. 
 */

// const twoRange = (param1, param2) => {
//    const isParam1 = ((param1 >= 40 && param1 <= 60) || (param2 >= 40 && param2 <= 60)) ? true : false;
//    const isParam2 = ((param1 >= 70 && param1 <= 100) || (param2 >= 70 && param2 <= 100)) ? true : false;

//    if (isParam1 || isParam2) {
//       console.log(true);
//    } else { 
//       console.log(false);
//    }
// }

// twoRange(99, 38);



/**
 * Write a JavaScript program to find the larger number from the two given positive integers, 
 * the two numbers are in the range 40..60 inclusive.
 */

// const findLarger = (x, y) => {
//    if ((x > y) && (x >= 40 && x <= 60)) {
//       return x;
//    } else if ((y > x) && (y >= 40 && y <= 60)) {
//       return y;
//    } else {
//       return 0;
//    }
// }

// console.log(findLarger(45, 66));


// Solution by w3resources (my own way)


// const findLarger = (x, y) => {

//    if ((x >= 40 && x <= 60) || (y >= 40 && y <= 60)) {
//       if (x === y) {
//          console.log('Numbers are the same')
//       } else if (x > y) {
//          console.log(x);
//       } else {
//          console.log(y);
//       }
//    } else {
//       console.log('Numbers doesnt fit in range');
//    }
// }
// findLarger(59, 45);


/**
 * Write a program to check whether a specified character exists within 
 * the 2nd to 4th position in a given string.  
 */
// const realMatch = (text) => {
//    if (text.length) {

//       if (text.substring(1, 4) === 'ath') {
//          console.log('Perfect match ;)');
//       } else {
//          console.log('Try again...oops');
//       }

//    } else {
//       console.log('Input not long enough');
//    }
   
// }
// realMatch('mathematics');


/**
 * Write a JavaScript program to divide two positive numbers and return a string with properly formatted commas.
 */

// const divNums = (x, y) => {
//    if (x !== y) {

//       if ((x % y == 0) || (y % x == 0)) {
//          console.log(`I think I garrit :)`);
//       } else {
//          console.log(`Numbers are not divisible`);
//       }

//    } else {
//       console.log(`The numbers are the same. Unable to calculate`);
//    }
// }
// divNums(10, 10);


/**
 *  Write a JavaScript program to concatenate two strings except their first character
 */

//  var concatStrings = function (str1, str2) {
//     var minusStr1 = str1.substring(1, str1.length);
//     var minusStr2 = str2.substring(1, str2.length);
//     return minusStr1.concat(minusStr2);
//  }

// console.log(concatStrings('always', 'ready'));
// var aboutTechMania = concatStrings('aTech', 'oMania');
// console.log(aboutTechMania);

/**
 * Write a JavaScript program to concatenate two strings and return the result. 
 * If the length of the strings are not same then remove the characters from the longer string.
 */

// var concatStrings = function (str1, str2) {
//    var strsize_1 = str1.length;
//    var strSize_2 = str2.length;
   
//    if ((strsize_1 >= 5) && (strSize_2 >= 5)) {

//       if (strsize_1 > strSize_2) {
//          return (str1.substring(2, strsize_1).concat(str2));
//       } else if (strSize_2 > strsize_1) {
//          return (str1.concat(str2.substring(0, strSize_2)));
//       } else {
//          return str1.concat(str2);
//       }
//    } else {
//       return 'Strings are not long enough';
//    }
// }
// console.log(concatStrings('President', 'Jim'));

/**
 * Write a JavaScript program to convert a given number to hours and minutes.
 */

const submitDate = document.getElementById('submitDate')
const setStartDate = document.getElementById('startDate')
const setEndDate = document.getElementById('endDate')
const dateResult = document.getElementById('dateResult')

submitDate.addEventListener('click', () => {

    // START-DATE
    const start = setStartDate.value.split('-')
    const startYear = parseInt(start[0])
    const startMonth = parseInt(start[1] -1)
    const startDay = parseInt(start[2])

    //END-DATE
    const end = setEndDate.value.split('-')
    const endYear = parseInt(end[0])
    const endMonth = parseInt(end[1] -1)
    const endDay = parseInt(end[2])

    // DEFINE DATE
    const d = new Date()
    const beginDate = new Date(d.getFullYear(startYear), startMonth, startDay)
    const finalDate = new Date (d.getFullYear(endYear), endMonth, endDay)

    // DATE CALCULATIONS
    if (d.getMonth() == endMonth && d.getDate() > endDay) {
        finalDate.setFullYear(finalDate.getFullYear())
    }
    const one_day = 1000*60*60*24

    dateResult.textContent = `${Math.ceil((finalDate.getTime() - beginDate.getTime()) / (one_day))}`

    console.log(beginDate.getTime())
    console.log(finalDate.getTime())
})
