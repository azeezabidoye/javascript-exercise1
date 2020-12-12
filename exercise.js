/**THE VARIOUS EXERCISES IN THIS DOCUMENT ARE FOR PERSONAL DEVELOPMENT. MY SOLUTIONS ARE TAGGED //USER */

/**W3RESOURCE // JAVASCRIPT BASIC EXERCISES, PRACTICE AND SOLUTIONS */

/**
 * 1. Write a JavaScript program to display the current day and time in the following format. 
 * Sample Output : Today is : Tuesday. Current time is : 10 PM : 30 : 38
 */

// USER

// let today = new Date();
// let date = today.getDate();
// let monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// let month = today.getMonth();
// let year = today.getFullYear();
// let daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// let day = today.getDay();
// let hour = today.getHours();
// let minute = today.getMinutes();
// let seconds = today.getSeconds();
// let prepand = hour < 12 ? 'AM' : 'PM';
// let currentHour = (hour > 12) ? '0' + (hour - 12) : hour;
// let currentMinute = (minute < 10) ? '0' + minute : minute;

// console.log(`Today is: ${daysArray[day]}, ${monthArray[month]} ${date}, ${year}.\n
// Current time: ${currentHour} ${prepand} :${currentMinute} :${seconds}`);

/**
 * 2. Write a JavaScript program to print the contents of the current window.
 * This solution is attached to a button element in html.
 */

//USER

// document.getElementById('print-window').addEventListener('click', printWindow = () => {
//     window.print();
// });

/**
 * 3. Write a JavaScript program to get the current date.
 * Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
 */

//USER

// const today = new Date();
// const date = today.getDate();
// const month = today.getMonth();
// const year = today.getFullYear();

// console.log(`Today is: ${date}-${month + 1}-${year}`);
// console.log(`Today's date is: ${month + 1}/${date}/${year}`);

/**
 * 4. Write a JavaScript program to find the area of a triangle 
 * where lengths of the three of its sides are 5, 6, 7.
 */

 // USER : user cant find solution.

// W3RESOURCE 

// var side1 = 5; 
// var side2 = 6; 
// var side3 = 7; 
// var s = (side1 + side2 + side3)/2;
// var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));

// console.log(area);


/**
 * 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
 */

// USER

// const readLeapYear = (year) => {
//     const d = new Date (year, 1, 29);
//     const thisYear = d.getFullYear();

//     if (d.getDate() === 29) {
//         console.log(`${thisYear} is a LEAP year ;)`);
//     } else {
//         console.log(`${thisYear} is not a leap year...lol`);
//     }
// }
// readLeapYear(1989);
// readLeapYear(2000);

// W3RESOURCE

// function leapyear(year) {
//     return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
//   }
//   console.log(leapyear(1989));
//   console.log(leapyear(2000));

/**
 * 7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.
 */

// W3RESOURCE X USER

    // for (let year = 2014; year <= 2050; year++) {       // Loops through the years i.e 2014 to 2050
    //     const d = new Date (year, 0, 1);                // sets a date, with all years in the loop.
    
    //     if (d.getDay() === 0) {
    //         console.log(`1st day of ${year} being a Sunday`);
    //     }
    // }

/**
 * 8. Write a JavaScript program where the program takes a random integer between 1 to 10,
 * the user is then prompted to input a guess number. If the user input matches with guess number, 
 * the program will display a message "Good Work" otherwise display a message "Not matched".
 */

// USER

// const brainTizzle = () => {
//     const integer = Math.ceil(Math.random() * 10);
//     console.log(integer);

//     const input = prompt('Input a number between 1 and 10');

//     if ( integer == input) {
//         alert(`Good work`);
//     } else {
//         alert(`Not matched. Try again`);
//     }
// }
// brainTizzle();

/**
 * 9. Write a JavaScript program to calculate days left until next Christmas. 
 */

//W3RESOURCE

// const today = new Date();
// const cmas = new Date(today.getFullYear(), 11, 25);

//     if (today.getMonth() == 11 && today.getDate() > 25) {
//     cmas.setFullYear(cmas.getFullYear() + 1); 
//   }  
// const one_day = 1000*60*60*24;
// console.log(`${Math.ceil((cmas.getTime() - today.getTime()) / (one_day))} days left until Christmas!`);


/**
 * 10. Write a JavaScript program to calculate multiplication and division of two numbers (input from user). 
 */

// W3RESOURCE This solution is attached to a form element in html

// const multiplyBy = () => {
//    num1 = document.getElementById('first-number').value;
//    num2 = document.getElementById('second-number').value;
//    result = document.getElementById('result').innerHTML = num1 * num2;
// }

// const divideBy = () => {
//     num1 = document.getElementById('first-number').value;
//     num2 = document.getElementById('second-number').value;
//     result = document.getElementById('result').innerHTML = num1 / num2;
//  }


/**
 * 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
 */

 // W3RESOURCE

//  function cToF(celsius) 
// {
//   const cTemp = celsius;
//   const cToFahr = cTemp * 9 / 5 + 32;
//   const message = `${cTemp}\xB0C is ${cToFahr} \xB0F.`;
//     console.log(message);
// }

// function fToC(fahrenheit) 
// {
//   const fTemp = fahrenheit;
//   const fToCel = (fTemp - 32) * 5 / 9;
//   const message = `${fTemp}\xB0F is ${fToCel}\xB0C.`;
//     console.log(message);
// } 
// cToF(60);
// fToC(45);


/**
 * 12. Write a JavaScript program to get the website URL (loading page).
 */

//USER

// console.log(document.URL);

/**
 * 13. Write a JavaScript exercise to create a variable using a user-defined name
 */

// W3RESOURCE

// const var_name = 'abcd';
// const n = 120;
// this[var_name] = n;
// console.log(this[var_name]);


/**
 * 14. Write a JavaScript exercise to get the extension of a filename.
 */

// W3RESOURCE

// filename = "system.php"
// console.log(filename.split('.').pop());
// filename = "abc.js"
// console.log(filename.split('.').pop());


/**
 * 15. Write a JavaScript program to get the difference between a given number and 13, 
 * if the number is greater than 13 return double the absolute difference.
 */

// USER

// const thirteen = (num) => {
//     const thirteen = 13;

//     if (num <= thirteen) {
//         console.log(thirteen - num);
//     } else {
//         console.log((num - thirteen) * 2);
//     }
// }

// thirteen(24);
// thirteen(9);

/**
 * 16. Write a JavaScript program to compute the sum of the two given integers. 
 * If the two values are same, then returns triple their sum
 */

 // USER

//  const sum_of_two = (x, y) => {
//     const sum = x + y;
//     if (x !== y) {
//         return sum;
//     } else {
//         return sum * 3;
//     }
//  }

// console.log(sum_of_two(4, 7));          // 11
// console.log(sum_of_two(12, 12));        // 72


// USER

// const sumOfTwo = (a, b) => {
//   const sum = (a === b) ? ((a + b) * 3) : (a + b);
//   return sum;
// }

// console.log(sumOfTwo(20, 70));
// console.log(sumOfTwo(40, 40));


// USER

// const twoSum = (p, q) => {
//   const arg = (p !== q) ? (p + q) : ((p + q) * 3);
//   console.log(arg);
// }

// twoSum(12, 12);
// twoSum(47, 33); 


/**
 * 17. Write a JavaScript program to compute the absolute difference between a specified number and 19.
 * Returns triple their absolute difference if the specified number is greater than 19
 */

// USER

// const useNineteen = (num) => {
//     const _19 = 19;

//     if (num <= _19) {
//         console.log(_19 - num);
//     } else {
//         console.log((num - _19) * 3);
//     }
// }

// useNineteen(16);        // 3
// useNineteen(25);        // 18


// USER

// const calc_19 = (n) => {
//   const $19 = 19;
//   const sum = (n > $19) ? ((n - $19) * 3) : ($19 - n);
//   return sum;
// }
// console.log(calc_19(15));
// console.log(calc_19(29));



/**
 * 18. Write a JavaScript program to check two given numbers and return true 
 * if one of the number is 50 or if their sum is 50.
 */

// USER

// const useFifty = (a, b) => {
//     const fifty = 50;

//     if ( a == fifty || b == fifty || (a + b) == (fifty) ) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }
// useFifty(23, 27);   // true
// useFifty(45, 19);   // false
// useFifty(16, 50);   // true

/**
 * 19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.
 */

//W3RESOURCE

// function differFrom20 (x) {
//     if ((Math.abs(100 - x) <= 20) || (Math.abs(400 - x) <= 20)) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(differFrom20(308));

/**
 * 20. Write a JavaScript program to check from two given integers,
 *  whether one is positive and another one is negative.
 */

// USER

// const notPositive = (a, b) => {

//    if ((a < 0 && b >= 0) || (a >= 0 && b < 0)) {
//       console.log(true);
//    } else {
//       console.log(false);
//    }
// }
// notPositive(54, -67);   //true
// notPositive(3, 2);  //false

// USER

// const notNegative = (x, y) => {
//   return ((x < 0 && y >= 0) || (x >= 0 && y < 0)) ? true : false;
// }
// console.log(notNegative(2, 9));     //false
// console.log(notNegative(-9, 0));    //true

/**
 * 21. Write a JavaScript program to create a new string adding "Py" in front of a given string. 
 * If the given string begins with "Py" then return the original string.
 */

// USER

// const addPy = (str) => {
    
//     if (str.substring(0, 2) === 'Py') {
//         return str;
//     } else {
//         return 'Py' + str;
//     }
// }

// console.log(addPy('Pythagoras'));
// console.log(addPy('ramid'));

// USER

// const seePy = (text) => {
//   return text.startsWith('Py') ? text : 'Py' + text;
// } 
// console.log(seePy('thon learning'));
// console.log(seePy('Pyramid hut'));

/**
 * 22. Write a JavaScript program to remove a character at the 
 * specified position of a given string and return the new string.
 */

// W3RESOURCE

// function remove_character(str, char_pos) 
//  {
//   part1 = str.substring(0, char_pos);
//   part2 = str.substring(char_pos + 1, str.length);
//   return (part1 + part2);
//  }

// console.log(remove_character("Python",0));
// console.log(remove_character("Python",3));
// console.log(remove_character("Python",5));


/**
 * 23. Write a JavaScript program to create a new string from a given 
 * string changing the position of first and last characters. 
 * The string length must be greater than or equal to 1.
 */


// W3RESOURCE

// function first_last(str1) 
//   {
//   if (str1.length <= 1)
//   {
//     return str1;
//   }
//   mid_char = str1.substring(1, str1.length - 1);
//   return (str1.charAt(str1.length - 1)) + mid_char + str1.charAt(0);
// }
// console.log(first_last('a'));
// console.log(first_last('ab'));
// console.log(first_last('abc'));


/**
 * 24. Write a JavaScript program to create a new string from a given string with the first 
 * character of the given string added at the front and back.
 */
// W3RESOURCE

// function front_back(str)
// {
//   first = str.substring(0,1);
//   return first + str + first;
// }
// console.log(front_back('a'));
// console.log(front_back('ab'));
// console.log(front_back('abc'));
// console.log(front_back('mallam'));

// // USER

// const newString = (str) => {
//     const alpha  = str.substring(0, 1);
//     return alpha + str + alpha
// }
// console.log(newString('mallam'));


/**
 * 25. Write a JavaScript program to check whether a given 
 * positive number is a multiple of 3 or a multiple of 7
 */

 // USER

//  const multiple = (x) => {
//      return (x % 3 == 0 || x % 7 == 0 ? true : false);
//  }

// console.log(multiple(5));   //false
// console.log(multiple(49));  //true
// console.log(multiple(39));  //true

/**
 * 26. Write a JavaScript program to create a new string from a given string 
 * taking the last 3 characters and added at both the front and back. 
 * The string length must be 3 or more. 
 */

 // USER

// const frontBack = (str) => {
//     if (str.length >= 3) {
//         const omega = str.substring(str.length -3);
//         console.log(`${omega}${str}${omega}`);
//     } else {
//         console.log(`${str} is not up to three characters`);
//     }
// }

// frontBack('lammal');
// frontBack('ft');
// frontBack('cat');


/**
 * 27. Write a JavaScript program to check whether a string starts with 'Java' and false otherwise.
 */

// USER

// const checkAlpha = (str) => {
//     const alpha = str.substring(0, 4);

//     if (alpha === 'Java') {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(checkAlpha('Java-jantis'));     //true
// console.log(checkAlpha('javascript'));      //false
// console.log(checkAlpha('allawee'));     //false
// console.log(checkAlpha('JavaScript'));      //true


// USER

// const stringStart = (text) => {
//   return text.startsWith('Java');
// }
// console.log(stringStart('JavaScript'));
// console.log(stringStart('general'));


/**
 * 28. Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive).
 * Return true if either of them are in the said range.
 */

//  USER

// const integerRange = (x, y) => {
//     return ((x >= 50 && x <= 99) || (y >= 50 && y <= 99)) ? true : false;
// }
// console.log(integerRange(34, 65));  //true
// console.log(integerRange(48, 107));     //false


/**
 * 29. Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). 
 * Return true if one or more of them are in the said range. 
 */

 // USER

//  const threeIntegers = (p, q, r) => {
//      const p1 = (p >= 50 && p <= 99) ? true : false;
//      const q1 = (q >= 50 && q <= 99) ? true : false;
//      const r1 = (r >= 50 && r <= 99) ? true : false;

//      if (p1 || r1 || q1) {
//          return true;
//      } else {
//          return false;
//      }
//  }
// console.log(threeIntegers(15, 35, 87)); // true
// console.log(threeIntegers(100, 18, 12)); // false


/**
 * 30. Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) 
 * position in a given string, if "Script" presents in the string 
 * return the string without "Script" otherwise return the original one.
 */

// USER

// const searchScript = (str) => {
//     const script = 'Script';
//     const index = str.substring(4, 10);
//     const isScript = (index == script) ? true : false;

//     if (isScript === true) {
//         return str.substring(0, 4) + str.substring(10, str.length);
//     } else {
//         return str;
//     }
// }
// console.log(searchScript('javaScriptology'));
// console.log(searchScript('imbalance'));
// console.log(searchScript('JavaScript'));


/**
 * 31. Write a JavaScript program to find the largest of three given integers.
 */

// USER

// const isHigher = (x, y, z) => {

//     if ((x > y) && (x > z)) {
//         console.log (`${x} is the greatest of the numbers`);
//     } else if ((y > x) && (y > z)) {
//         console.log (`${y} is the greatest of all numbers`);
//     } else {
//         console.log (`${z} is the greatest of these numbers`);
//     }
// }
// isHigher(32, 49, 81);
// isHigher(28, 400, 19);
// isHigher(10, 7, 0);


/**
 * 32. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values. 
 */

// USER

// const closeTo100 = (a, b) => {
//     const sum = 100;
//     if (a !== b ) {
//         if ((sum - a) < (sum - b)) {
//             return a;
//         } else {
//             return b;
//         }
//     } else {
//     return 0;
//     }
// }
// console.log(closeTo100(45, 64));    // 64
// console.log(closeTo100(55, 55));
// console.log(closeTo100(23, 0));


/**
 *33. Write a JavaScript program to check whether two numbers 
 are in range 40..60 or in the range 70..100 inclusive. 
 */

// USER 

// const twoDiffRange = (x, y) => {
//     return ((x >= 40 & x <= 60 || x >= 70 && x <= 100) && 
//     (y >= 40 && y <= 60 || y >= 70 && y <= 100)) ? true : false;
// }
// console.log(twoDiffRange(21, 78)); // false
// console.log(twoDiffRange(47, 90)); // true


/**
 * 35. Write a program to check whether a specified character 
 * exists within the 2nd to 4th position in a given string.
 */

// W3RESOURCE

// function check_char(str, char)
//  {
//   ctr = 0;
//   for (let i = 0; i < str.length; i++)
//   {
//     if (str.charAt(i) == char) {
//       ctr++;
//     }
//   }
//   return (ctr >= 2 && ctr <= 4);
// }

// console.log(check_char("Python", "y"));
// console.log(check_char("JavaScript", "a"));
// console.log(check_char("Console", "o"));


/**
 * 36. Write a JavaScript program to check whether the 
 * last digit of the three given positive integers is same.
 */


// W3RESOURCE

// function last_digit(x, y, z)
// {
//   if ((x > 0) && y > 0 && z > 0)
//     {
//      return (x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z % 10);
//    }
//   else
//     return false;
// }

// console.log(last_digit(20, 30, 400));
// console.log(last_digit(-20, 30, 400));
// console.log(last_digit(20, -30, 400));


/**
 * 37. Write a JavaScript program to create new string with first 3 characters are in lower case from a given string. 
 * If the string length is less than 3 convert all the characters in upper case.
 */


// USER

// const lowerCaseStr = (str) => {
//     const strIndex = str.substring(0, 3).toLowerCase();
//     const strFull = str.substring(3, str.length).toUpperCase();
//     if (str.length >= 3) {
//         console.log(`${strIndex}${strFull}`);
//     } else {
//         console.log(`${str.toUpperCase()}`);
//     }
// }

// lowerCaseStr('disobey');
// lowerCaseStr('ho');

/**
 * 38. Write a JavaScript program to check the total marks of a student in various examinations. The student 
 * will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam." 
 * the student will get A+ grade and total marks must be greater than or equal to 90.
 *  Return true if the student get A+ grade or false otherwise.
 */

 // W3RESOURCE

//  function exam_status(totmarks, is_exam)
//   {
//   if (is_exam) {
//     return totmarks >= 90;
//   }
//  return (totmarks >= 89 && totmarks <= 100);
//  }

// console.log(exam_status("78", " "));
// console.log(exam_status("89", "true "));
// console.log(exam_status("99", "true "));


/**
 * 39. Write a JavaScript program to compute the sum of the two given integers,
 *  If the sum is in the range 50..80 return 65 otherwise return 80.
 */

 // USER

//  const sumNum = (x, y) => {
//     const sum = x + y;

//     if (sum >= 50 && sum <= 80) {
//          return 65;
//    } else {
//       return 80;
//    }
//  }

// console.log(sumNum(37, 25));
// console.log(sumNum(65, 28));


/**
 * 40. Write a JavaScript program to check from two given integers
 *  whether one of them is 8 or their sum or difference is 8.
 */

 // USER

// const about_8 = (x, y) => {
//     const x1 = Math.abs(x);
//     const y1 = Math.abs(y);
//     const sumDiff = ((x1 == 8 || x1 - y1 == 8) || (y1 == 8 || y1 - x1 == 8) || (x1 + y1 == 8)) ? true : false;

//    if (x1 !== y1) {
//         if (sumDiff) {
//             return true;
//         } else {
//             return false;
//         }
//    } else {
//        return 'numbers are the same';
//    }
// }

// console.log(about_8(18, 90));
// console.log(about_8(3, 5));
// console.log(about_8(0, 8)); 
// console.log(about_8(8, 0));
// console.log(about_8(0, 0));
// console.log(about_8(4, 4));



/**
 * 41. Write a JavaScript program to check three given numbers, if the three numbers are same return 
 * 30 otherwise return 20 and if two numbers are same return 40. 
 */

 // USER

// const calc_3_nums = (x, y, z) => {
//    const sameNum = ((x == y && x == z) && (y == x && y == z) && (z == x && z == y)) ? true : false;
//    const twoSame = ((x == y || x == z) || (y == x || y == z) || (z == x || z == y)) ? true : false;

//    if (sameNum) {
//        console.log(30);
//    } else if (twoSame) {
//        console.log(40);
//    } else {
//        console.log(20);
//    }
// }
// calc_3_nums(0, 8, 0); // 40
// calc_3_nums(5, 7, 9); // 20
// calc_3_nums(2, 2, 2); // 30



// const calc_3_nums = (x, y, z) => {
//     const sameNum = ((x == y && x == z) && (y == x && y == z)) ? true : false;
//     const twoSame = ((x == y || x == z) || (y == x || y == z)) ? true : false;
 
//     if (sameNum) {
//         console.log(30);
//     } else if (twoSame) {
//         console.log(40);
//     } else {
//         console.log(20);
//     }
//  }
//  calc_3_nums(0, 8, 0); // 40
//  calc_3_nums(5, 7, 9); // 20
//  calc_3_nums(2, 2, 2); // 30


// const threeNums = (a, b, c) => {
//     const same = (a == b && b == c & c == a) ? true : false;
//     const twoSame = (a == b || b == c || c == a) ? true : false;

//     if (same) {
//         return 30;
//     } else if (twoSame) {
//         return 40;
//     } else {
//         return 20;
//     }
// }
// console.log(threeNums(5, 5, 5)); // 30
// console.log(threeNums(6, 7, 6)); // 40
// console.log(threeNums(1, 2, 3)); // 20


/**
 * 42. Write a JavaScript program to check whether three given 
 * numbers are increasing in strict mode or in soft mode.
 */

 //W3RESOURCE

//  function number_order(x, y, z ) {
//     if ( y > x && z > y) 
//     {
//       return "strict mode";    
//     }
//     else if(z > y) 
//      return "Soft mode";
//     else
//       return "Undefinded";
//   }
  
//   console.log(number_order(10,15,31));
//   console.log(number_order(24,22,31));
//   console.log(number_order(50,21,15));


/**
 * 43. Write a JavaScript program to check from three given numbers (non negative integers)
 * that two or all of them have the same rightmost digit.
 */

 // W3RESOURCE

//  function same_last_digit(p, q, r) {
//     return (p % 10 === q % 10) ||
//            (p % 10 === r % 10) ||
//            (q % 10 === r % 10);
           
// }

// console.log(same_last_digit(22,32,42));
// console.log(same_last_digit(102,302,2));
// console.log(same_last_digit(20,22,45));


/**
 * 44. Write a JavaScript program to check from three given integers that whether a number is 
 * greater than or equal to 20 and less than one of the others.
 */

// USER

// const greaterThan20 = (x, y, z) => {
//     const x1 = ((x >= 20) && (x < y || x < z)) ? true : false;
//     const y1 = ((y >= 20) && (y < x || y < z)) ? true : false;
//     const z1 = ((z >= 20) && (z < x || z < y)) ? true : false;

//     if (x != y && y != z && z != x) {
//         if (x1 || y1 || z1) {
//             return true;
//         } else {
//             return false;
//         }
//     } else {
//         return 'numbers are the same';
//     }
// }
// console.log(greaterThan20(209, 114, 30));
// console.log(greaterThan20(5, 47, 5));
// console.log(greaterThan20(4, 17, 23));


/**
 * 45. Write a JavaScript program to check two given integer values and return true 
 * if one of the number is 15 or if their sum or difference is 15.
 */

 // USER

// See Exercise 40;

/**
 * 46. Write a JavaScript program to check two given non-negative integers that 
 * whether one of the number (not both) is multiple of 7 or 11. 
 */

 // USER

// const multipleOfTwo = (x, y) => {
//    if (x !== y) {
//       const divX = ((x % 7 == 0) || (x % 11 == 0)) ? true : false;
//       const divY = ((y % 7 == 0) || (x % 11 == 0)) ? true : false;
//       if (divX || divY) {
//          console.log(true);
//       } else {
//          console.log(false);
//       }
//    } else {
//       console.log(`numbers are similar`);
//    }
// }
// multipleOfTwo(63, 63);
// multipleOfTwo(49, 23);
// multipleOfTwo(-77, 0);


/**
 * 47. Write a JavaScript program to check whether a given number is present in the range 40..10000.
 */

// W3RESOURCE

// function test_digit(x, y, n) 
//   {    
//     if (n < 40 || n > 10000)
//       return false;
//     else
//       if (n >= x && n <= y)
//         return true;
//       else
//         return false;
//   }
// console.log(test_digit(40, 4000, 45));  
// console.log(test_digit(80, 320, 79));  
// console.log(test_digit(89, 4000, 30));


/**
 * 48. Write a JavaScript program to reverse a given string. 
 */

// W3RESOURCE

// function string_reverse(str) 
// {
//     return str.split("").reverse().join("");
// }

// console.log(string_reverse("w3resource"));
// console.log(string_reverse("www"));
// console.log(string_reverse("JavaScript"));


/**
 * 49. Write a JavaScript program to replace every character in a given string 
 * with the character following it in the alphabet. 
 */

// W3RESOURCE

// function string_reverse(str) 
// function LetterChanges(text) {
// //https://goo.gl/R8gn7u
// var s = text.split('');
// for (var i = 0; i < s.length; i++) {
// // Caesar cipher
// switch(s[i]) {
// case ' ':
// break;
// case 'z':
// s[i] = 'a';
// break;
// case 'Z': 
// s[i] = 'A';
// break;
// default:
// s[i] = String.fromCharCode(1 + s[i].charCodeAt(0));
// }

// // Upper-case vowels
// switch(s[i]) {
// case 'a': case 'e': case 'i': case 'o': case 'u':
// s[i] = s[i].toUpperCase();
// }
// }
// return s.join('');
// }
// console.log(LetterChanges("PYTHON"));
// console.log(LetterChanges("W3R"));
// console.log(LetterChanges("php"));


/**
 * 50. Write a JavaScript program to capitalize the first letter of each word of a given string.
 */

 // W3RESOURCE

//  function capital_letter(str) 
// {
//     str = str.split(" ");

//     for (var i = 0, x = str.length; i < x; i++) {
//         str[i] = str[i][0].toUpperCase() + str[i].substr(1);
//     }

//     return str.join(" ");
// }
// console.log(capital_letter("JavaScript program to capitalize the first letter of each word."));


/////////////////

/**
 * 
 const capitalize = ([firstletter, ...rest]) => {
 return firstletter.toUpperCase() + rest.join('');
}
console.log(capitalize('Marcelo'));
console.log(capitalize('this is javascript destructuring for capitalize'));
 */

/////////////////////

/**
 * 51. Write a JavaScript program to convert a given number to hours and minutes. 
 */

 // W3RESOURCE

//  function time_convert(num)
//  { 
//   var hours = Math.floor(num / 60);  
//   var minutes = num % 60;
//   var zeroHours = (hours < 10) ? '0' + hours : hours;       // USER
//   var zeroMin = (minutes < 10) ? '0' + minutes : minutes;       // USER
 
//   return zeroHours + ":" + zeroMin;         
// }

// console.log(time_convert(1000));
// console.log(time_convert(450));
// console.log(time_convert(1441));


// USER

// const hourMinute = (n) => {
//   const hours = Math.floor(n / 60);
//   const minutes = n % 60;

//   return (`${hours}:${minutes}`);
// }
// console.log(hourMinute(435));


/**
 * 52. Write a JavaScript program to convert the letters of a given string in alphabetical order. 
 */

// W3RESOURCE

// function alphabet_Soup(str) { 

//     return str.split("").sort().join("");
         
// }

// console.log(alphabet_Soup("Python"));

// console.log(alphabet_Soup("Exercises"));


/**
 * 53. Write a JavaScript program to check whether the characters a and b 
 * are separated by exactly 3 places anywhere (at least once) in a given string.
 */

 // W3RESOURCE

// function ab_Check(str)
//  {
//     return (/a...b/).test(str) || (/b...a/).test(str);
//  }

// console.log(ab_Check("Chainsbreak"));
// console.log(ab_Check("pane borrowed"));
// console.log(ab_Check("abCheck"));


/**
 * 54. Write a JavaScript program to count the number of vowels in a given string.
 */

// W3RESOURCE

// function vowel_Count(str)
// { 
//   // To get the vowels
//   // return str.replace(/[^aeiou]/g, "");

//   // To get accurate NUMBERS of vowels
//   return str.replace(/[^aeiou]/g, "").length;
// }

// console.log(vowel_Count("Python"));
// console.log(vowel_Count("w3resource.com"));


/**
 * 55. Write a JavaScript program to check whether a given string contains equal number of p's and t's.
 */

// W3RESOURCE

// function equal_pt(str)
// { 
//   const str_p = str.replace(/[^p]/g, "");

//   const str_t = str.replace(/[^t]/g, "");

//   const p_num = str_p.length;
//   const t_num = str_t.length;

//   console.log(`The number of Ps is ${p_num}\nThe number of Ts is ${t_num}`);    // USER

//   return p_num === t_num;
         
// }
// console.log(equal_pt("paatpss"));
// console.log(equal_pt("paatps"));
// console.log(equal_pt('patapata'));


/**
 * 56. Write a JavaScript program to divide two positive numbers 
 * and return a string with properly formatted commas. 
 */

 // W3RESOURCE

//  function division_string(n1, n2) {
  
//     n1 = 80;
//     n2 = 6;
    
//     var div = Math.round(n1 / n2).toString(),
//     result_array = div.split("");
    
//     if (div >= 1000)
//     {
//     for (var i = div.length - 3; i > 0; i -= 3) 
//     {
//     result_array.splice(i, 0, ",");
//     }
//     result_array;
//     }
// }
//     console.log(result_array);


/**
 * 57. Write a JavaScript program to create a new string of 
 * specified copies (positive number) of a given string.
 */

 // W3RESOURCE

//  function string_copies (str, n) 
// {
//   if (n <= 0)
//     return false;
//   else
//   return str.repeat(n);
// }
// console.log(string_copies("abc", 5));
// console.log(string_copies("abc", 0));
// console.log(string_copies("abc", -2));

// // USER
// const strCopy = (strg, num) => {
//   return (strg <= 0) ? false : strg.repeat(num);
// }
// console.log(strCopy('Olamide', 3));


/**
 * 58. Write a JavaScript program to create a new string of 4 copies of 
 * the last 3 characters of a given original string. 
 * The length of the given string must be 3 and above.
 */

 // USER

// const lastThree = (str) => {
//     const omega = str.substring(str.length -3);

//     if (str.length < 3) {
//         return 'not long enough';
//     } else {
//         return omega.repeat(4);
//     }
// }

// console.log(lastThree('rancho'));
// console.log(lastThree('cat'));


/**
 * 59. Write a JavaScript program to extract the first half of a string of even length.
 */

 // USER

// const firstHalf = (str) => {
//     const alpha = str.substring(0, (str.length) / 2);

//     if (str.length % 2 === 0) {
//         return alpha;
//     } else {
//         return str;
//     }
// }
// console.log(firstHalf('abidoye'));
// console.log(firstHalf('abdulazeez'));
// console.log(firstHalf('ford'));


// // W3RESOURCE

// function first_half (str) {
//     if (str.length % 2 == 0) {
//       return str.slice(0, str.length / 2);
//     }
//     return str;
//   }
//   console.log(first_half("Python"));  
//   console.log(first_half("JavaScript")); 
//   console.log(first_half("PHP"));
  

/**
 * 60. Write a JavaScript program to create a new string without 
 * the first and last character of a given string. 
 */

// USER

// const newString = (str) => {
//     const newStr = str.substring(1, str.length -1);

//     if (str.length < 3) {
//         return 'string not long enough';
//     } else {
//         return newStr;
//     }
// }
// console.log(newString('abass'));
// console.log(newString('at'));
// console.log(newString('rat'));


/**
 * 61. Write a JavaScript program to concatenate two strings except their first character.
 */

 // USER

// const twoStrings = (a, b) => {
//     const a1 = a.substring(1, a.length);
//     const b1 = b.substring(1, b.length);
//     return a1.concat(b1);
// }
// console.log(twoStrings('holy', 'wood'));


/**
 * 62. Write a JavaScript program to move last three characters to the start of a given string. 
 * The string length must be greater or equal to three.
 */

// USER

//  const lastThree = (str) => {
//      const omega = str.slice(-3)
//      const alpha = str.slice(0, -3);

//      if (str.length < 3) {
//          return false;
//      } else {
//          return omega + alpha;
//      }
//  }

// console.log(lastThree('console'));
// console.log(lastThree('allawee'));


/**
 * 63. Write a JavaScript program to create a string using the middle three 
 * characters of a given string of odd length. 
 * The string length must be greater or equal to three.  
 */

// W3RESOURCE

// function middle_three(str) {
//     if (str.length % 2 != 0) {
    
//      mid = (str.length + 1)/2;  //str.length + 1 = abcdefg(h) //mid = abcd 
//      return str.slice(mid - 2, mid + 1);  // slice = c...e
//      }
//    return str;
//  }
//  console.log(middle_three('abcdefg'));  
//  console.log(middle_three('Python'));
//  console.log(middle_three('PHP'));
 

/**
 * 64. Write a JavaScript program to concatenate two strings and 
 * return the result. If the length of the strings are 
 * not same then remove the characters from the longer string.
 */

// USER

// const plusTwo = (a, b) => {
//     const a1 = (a.length > b.length) ? a.slice(0, b.length) : a;
//     const b1 = (b.length > a.length) ? b.slice(0, a.length) : b;

//     return a1.concat(b1);

// }
// console.log(plusTwo('abidoye', 'azeez'));
// console.log(plusTwo('Benz', 'Ford'));
// console.log(plusTwo('java', 'javascript'));


/**
 * 65. Write a JavaScript program to test whether a string end with "Script".
 *  The string length must be greater or equal to 6.
 */

 // USER

//  const testScript = (str) => {
//     const omega = str.endsWith('Script') ? true : false;

//      if (str.length < 6) {
//         return false;
//      }
//      if (omega == true) {
//          return true;
//      } else {
//          return false;
//      }
//  }
 
// console.log(testScript('JavaScript'));
// console.log(testScript('Javascript'));
// console.log(testScript('java'));


// USER

// const scriptTest = (text) => {

//     if (text.length < 6) {
//         return false;
//     } else {
//         // return  (text.slice(-6) == 'Script') ? true : false;
//         return text.endsWith('Script') ? true : false;
//     }
// }
// console.log(scriptTest('manuscript'));
// console.log(scriptTest('TypeScript'));
// console.log(scriptTest('Script'));


/**
 * 66. Write a JavaScript program to display the city name if the string begins 
 * with "Los" or "New" otherwise return blank.
 */

 // USER

//  const displayCity = (city) => {
//      const alpha1 = city.startsWith('Los') ? true : false;
//      const alpha2 = city.startsWith('New') ? true : false;

//      if (city.length < 3) {
//          return false;
//      } else {
//          if (alpha1 || alpha2) {
//              return city;
//          } else {
//              return ' ';
//          }
//      }
//  }
//  console.log(displayCity('kw'));
//  console.log(displayCity('Lake Merser'));
//  console.log(displayCity('New York'));
//  console.log(displayCity('Los Angeles'));


/**
 * 67. Write a JavaScript program to create a new string from a given string, 
 * removing the first and last characters of the string if the first or last character are 'P'. 
 * Return the original string if the condition is not satisfied.
 */

//W3RESOURCE

// function nop(str) {
//     let start_pos = 0;    // new string START position specified
//     let end_pos = str.length;   // new string END position specified
  
//     if (str.length > 0 && str.charAt(0) == 'P') 
//       { 
//         start_pos = 1;  // new string START position returned
//       }
  
//     if (str.length > 1 && str.charAt(str.length - 1) == 'P') 
//     {
//       end_pos--;  // // new string END position returned
//     }
  
//     return str.substring(start_pos, end_pos);
//   }
  
//   console.log(nop("PythonP"));
//   console.log(nop("Python"));
//   console.log(nop("JavaScript"));


// USER

// const startEnd = (str) => {
//   const start = (str.startsWith('P') || str.startsWith('p')) ? true : false;
//   const end = (str.endsWith('P') || str.endsWith('p')) ? true : false;

//   if (start == true) {
//     return str.slice(1);
//   } else if (end == true) {
//     return str.slice(0, -1);
//   } else {
//     return str;
//   }
// }
// console.log(startEnd('Paraguay')); //araguay
// console.log(startEnd('javalap')); //javala
// console.log(startEnd('craP')); //Cra
// console.log(startEnd('lonely')); //lonely
// console.log(startEnd('palava')); //alava


/**
 * 68. Write a JavaScript program to create a new string using the first and last n characters 
 * from a given string. The string length must be greater or equal to n.
 */

// USER

// const stringN = (str, n) => {
//     const alpha = str.slice(0, n);
//     const omega = str.slice(-n);

//     if (str.length < n) {
//       return false;
//     } else {
//       return alpha + omega;
//     }
// }
// console.log(stringN('julius', 2)); //juus
// console.log(stringN('badmitton', 3)); //badton
// console.log(stringN('la', 3)); //false
// console.log(stringN('bo', 2)); //bobo


/**
 * 69. Write a JavaScript program to compute the sum of 
 * three elements of a given array of integers of length 3.
 */

 //W3RESOURCE

//  function sum_three(nums)
// {
//   return nums[0] + nums[1] + nums[2];
// }

// console.log(sum_three([10, 32, 20]));  
// console.log(sum_three([5, 7, 9])); 
// console.log(sum_three([0, 8, -11]));


 // USER

// const addArray = (arr) => {

//     if (arr.length === 3) {
//         return arr[0] + arr[1] + arr[2];
//     } else {
//       return 'Array is less or more than three';
//     }
//   }
// console.log(addArray([2, 5, 7])); //14
// console.log(addArray(2, 4)); //str


/**
 * 70. Write a JavaScript program to rotate the elements left of a given array of integers of length 3.
 */

 // W3RESOURCE

//  function rotate_elements_left(array)
// {
//     return [array[1], array[2], array[0]];
// }
// console.log(rotate_elements_left([3, 4, 5]));  
// console.log(rotate_elements_left([0, -1, 2]));  
// console.log(rotate_elements_left([7, 6, 5])); 


/**
 * 71. Write a JavaScript program to check whether 1 appears in first or last position of a given 
 * array of integers. The array length must be greater or equal to 1. 
 */

// USER

// const findOne = (arr) => {
//   const alphaOmega = (arr[0] == 1 || arr[arr.length -1] == 1) ? true : false;
//   if (arr.length >= 1) {
//     return alphaOmega;
//   } else {
//     return false;
//   }
// }
// console.log(findOne([2, 3, 1, 7])); //false
// console.log(findOne([9, 1, 1])); // true
// console.log(findOne([])); // false
// console.log(findOne([1, 2,])); // true


/**
 * 72. Write a JavaScript program to check whether the first and last 
 * elements are equal of a given array of integers length 3
 */

// USER

// const firstLastEqual = (arr) => {
//   const alphaOmega = (arr[0] === arr[arr.length -1]) ? true : false;

//   if (arr.length !== 3) {
//     return false;
//   } else {
//     return alphaOmega;
//   }
// }
// console.log(firstLastEqual([2, 4])); //false
// console.log(firstLastEqual([5, 8, 5])); //true
// console.log(firstLastEqual([3, 6, 9])); //false


/**
 * 73. Write a JavaScript program to reverse the elements of a given array of integers length 3.
 */

// USER

// const reverseArray = (arr) => {

//     if (arr.length !== 3) {
//       return false;
//     } else {
//       return arr.reverse();
//     }
    
// }
// console.log(reverseArray([2, 4])); //false
// console.log(reverseArray([1, 8, 5])); //array
// console.log(reverseArray([1, 2, 3])); //array


// // W3RESOURCE

// function reverse3(array) {
//   return array.map((element, idx, arr) => arr[(arr.length - 1) - idx]);
// }

// console.log(reverse3([5, 4, 3])); 
// console.log(reverse3([1, 0, -1]));  
// console.log(reverse3([2, 3, 1]));


/**
 * 74. Write a JavaScript program to find the larger value between the first or last 
 * and set all the other elements with that value. 
 * Display the new array.
 */

 // W3RESOURCE COMMENTS

// function test(arr){
//   // The arr.fill function replaces all the elements in the array with the specified value
//   return arr.fill(Math.max(...arr));  // In this case the specified value is the maximum value
//   }
//   console.log(test([2,3,4]));
//   console.log(test([7, 3, 0]));

/**
 * 75. Write a JavaScript program to create a new array taking the 
 * middle elements of the two arrays of integer and each length 3.
 */

// USER

// const twoArray = (a, b) => {
//     if (a.length === 3 && b.length === 3) {
//       let newArr = [];
//       newArr.push(a[1], b[1]);
//       return newArr;
//     } else {
//       return false;
//     }
// }

// console.log(twoArray([7, 5, 3], [6, 0, 9]));  //5, 0
// console.log(twoArray([3, 4], [1, 7, 9]));   //false


/**
 * 76. Write a JavaScript program to create a new array taking the first and last elements from a 
 * given array of integers and length must be greater or equal to 1.
 */

// USER

// const firstLastEl = (a) => {
//   if (a.length < 1) {
//       return false;
//   } else {
//     const newArr = [];
//     newArr.push(a[0], a[a.length -1]);
//     return newArr;
//   }
// }
// console.log(firstLastEl([3, 2, 6, 7]));
// console.log(firstLastEl([6, 0, 1]));
// console.log(firstLastEl([7]));


/**
 * 77. Write a JavaScript program to test whether an array of integers of length 2 contains 1 or a 3.
 */

// USER

// const fnArray = (a) => {
//     const arg = (a.includes(1) || a.includes(3)) ? true : false;

//     if (a.length !== 2) {
//       return false;
//     } else {
//       return arg;
//     }
// }
// console.log(fnArray([1, 2, 3])); //false
// console.log(fnArray([6, 1])); //true
// console.log(fnArray([9, 3])); //true
// console.log(fnArray([4, 5])); //false

// USER

// const funArray = (b) => {
//     const q = ((b[0] === 1 || b[1] === 3) || (b[0] === 3 || b[1] === 1)) ? true : false;

//     if (b.length !== 2) {
//       return false;
//     } else {
//       return q; 
//     }
// }
// console.log(funArray([2, 3, 6, 7])); //false
// console.log(funArray([1, 2])); // true
// console.log(funArray([3, 0])); // true
// console.log(funArray([17, 2])); //false


/**
 * 78. Write a JavaScript program to test whether an array of integers of length 2 does NOT contain 1 or a 3.
 */

// USER

//  const notArray = (arr) => {
//    const arg = ((arr.includes(1) || arr.includes(3))) ? false : true;

//    if (arr.length !== 2) {
//      return false;
//    } else {
//      return arg;
//    }
//  }
//  console.log(notArray([7, 9, 1])); // false
//  console.log(notArray([1, 3])); // false
//  console.log(notArray([4, 6])); // true
//  console.log(notArray([3, 17])); //false


/**
 * 79. Write a JavaScript program to test whether a given array of integers contains 30 and 40 twice. 
 * The array length should be 0, 1, or 2.
 */

// USER

// const arr30_40 = (arr) => {
//         let a = arr[0];
//         let b = arr[1];
//         let arg = ((a == 30 && b == 30) || (a == 40 && b == 40)) ? true : false;

//         if (arr.length <= 2) {
//           return arg;
//         } else {
//           return false;
//         }
//       }
// console.log(arr30_40([40, 30, 20])); // false
// console.log(arr30_40([30, 60]))   // false
// console.log(arr30_40([30, 30]));    // true
// console.log(arr30_40([40, 40]));    // true


/**
 * 80. Write a JavaScript program to swap 
 * the first and last elements of a given array of integers. The array length should be at least 1.  
 */

// W3RESOURCE

// function swap(arra) {
//   [arra[0], arra[arra.length - 1]] = [arra[arra.length - 1], arra[0]];
//   return arra;
// }
// console.log(swap([1, 2, 3, 4]));  
// console.log(swap([0, 2, 1]));  
// console.log(swap([3])); 


/**
 * 81. Write a JavaScript program to add two digits of a given positive integer of length two.
 */

// W3RESOURCES

// function add_two_digits(n)
//    {
//       return n % 10 + Math.floor(n / 10);
//    }
// console.log(add_two_digits(25))
// console.log(add_two_digits(50))


/**
 * 82. Write a JavaScript to add two positive integers without carry.
 */

 //W3RESOURCE

//  function add_two_int_without_carrying(n1, n2) {
//   let result = 0;
//   let x = 1;
//   while (n1 > 0 && n2 > 0) {
//       result += x * ((n1 + n2) % 10);
//       n1 = Math.floor(n1 / 10);
//       n2 = Math.floor(n2 / 10);
//       x*= 10;
//   }
//   return result;
// }
// console.log(add_two_int_without_carrying(222, 911))
// console.log(add_two_int_without_carrying(290, 998))


/**
 * 83. Write a JavaScript program to find the longest string from a given array of strings.
 */

 // W3RESOURCE

//  function longest_string(str_ara) {
//   let max = str_ara[0].length;
//   str_ara.map(v => max = Math.max(max, v.length));
//   result = str_ara.filter(v => v.length == max);
//   return result;
// }

// console.log(longest_string(['a', 'aa', 'aaa', 'aaaaa','aaaa']));


// W3RESOURCE COMMENT

// const arr = ['Matthew','Marissa Tenebaumfd', 'Kelvin Paplovitch'];

// function longestStrings(stringArray){
// let longest = '';
// stringArray.forEach((value)=>(value.length > longest.length) ? longest = value : longest = longest);
// return longest;
// }

// console.log(longestStrings(arr));


/**
 * 84. Write a JavaScript to replace each character of a given string by the next one in the English alphabet
 * Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.
 */

// W3RESOURCE COMMENTS

// function nextCharecter(str)
// {
// let strArr = []

// for (let i = 0; i < str.length; i++)
// {
// if (str[i] === 'z') strArr.push('a')
// else if (str[i] === 'Z') strArr.push('A')
// else strArr.push(String.fromCharCode(str.charCodeAt(i) + 1))
// }

// return strArr.join('')
// }

// console.log(nextCharecter('abcdxyz')) // bcdeyza
// console.log(nextCharecter('MallAm')); // NbmmBn


// W3RESOURCE

// function alphabet_char_Shift(str) {
//   const all_chars = str.split("");
//   for(let i = 0; i < all_chars.length; i++) {
//     let n = all_chars[i].charCodeAt() - 'a'.charCodeAt();
//     n = (n + 1) % 26; 
//     all_chars[i] = String.fromCharCode(n + 'a'.charCodeAt());
//   }
//   return all_chars.join("");
// }

// console.log(alphabet_char_Shift("abcdxyz"));
// console.log(alphabet_char_Shift('maDiZa'));  //nbEjaZ


/**
 * 85. Write a JavaScript code to divide a given array of positive integers into two parts. 
 * First element goes to first part, second element goes to second part, 
 * and third element goes to first part and so on. 
 * Now compute the sum of two parts and store into an array of size two.
 */

 //W3RESOURCE

// function alternate_Sums(arr) {
//   var result = [0, 0];
//   for(var i = 0; i < arr.length; i++) 
//   {
//     if(i % 2) result[1] += arr[i];
//     else
//       result[0] += arr[i];
//   }
//   return result
// }

// console.log(alternate_Sums([1, 3, 6, 2, 5, 10]))


//W3RESOURCE COMMENTS

// function sepTwoPart(arr) {
//   if (arr.length % 2 !== 0 ) return arr
//   let fstArr = []
//   let secArr =[]
//   for (let i = 1; i <= arr.length/2; i++) {
//   fstArr.push(arr[2*i-1])
//   secArr.push(arr[2*i-2])
//   }
  
//   let arr1 = fstArr.reduce((acc, val) => acc + val)
//   let arr2 = secArr.reduce((acc1, val1) => acc1 + val1)
//   return [arr1].concat([arr2])
//   }
//   console.log(sepTwoPart([1,3,6,2,5,10]));


// Add up the elements in an array

// const arrayAddUp = (arr) => {
//     if (arr.length > 1) {
//       return arr.reduce((acc, cur) => acc + cur);
//     } else {
//       return false;
//     }
// }
// console.log(arrayAddUp([2, 3, 4]));


/**
 * 86. Write a JavaScript program to find the types of a given angle. 
 * Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: A 90 degree angle.
    Obtuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
 */

// USER 

// const angleType = (angleN) => {
//     if (angleN > 180) {
//       return false;
//     } else {
//       if (angleN < 90) {
//         return 'Acute angle'; 
//       } else if (angleN == 90) {
//         return 'Right angle';
//       } else if (angleN > 90 && angleN < 180) {
//         return 'Obtuse angle';
//       } else {
//         return 'Straight angle';
//       }
//     }
// }
// console.log(angleType(200));  // false
// console.log(angleType(90));   // Right angle
// console.log(angleType(180));   // Straight angle
// console.log(angleType(110));   // Obtuse angle
// console.log(angleType(47));   // Acute angle


/**
 * 87. Write a JavaScript program to check whether two arrays of integers of same length are similar or not. 
 * The arrays will be similar if one array can 
 * be obtained from another array by swapping at most one pair of elements.
 */


 //W3RESOURCE

//  function array_checking(arra1, arra2) {

//   for(var i = 0; i < arra1.length; i++) {
//     for(var j = i; j < arra1.length; j++) {
//       var result = true,
//         temp = arra1[i];
//       arra1[i] = arra1[j];
//       arra1[j] = temp;
//       for(var k = 0; k < arra1.length; k++) {
//         if(arra1[k] !== arra2[k]) {
//           result = false;
//           break;
//         }
//       }
//       if(result) {
//         return true;
//       }
//       arra1[j] = arra1[i];
//       arra1[i] = temp;
//     }
//   }
//   return false;
// }
// console.log(array_checking([10,20,30], [10,20,30]))
// console.log(array_checking([10,20,30], [30,10,20]))
// console.log(array_checking([10,20,30,40], [10,30,20,40]))


/**
 * 88. Write a JavaScript program to check whether two given integers are similar or not, 
 * if a given divisor divides both integers and it does not divide either.
 */

 // USER

//  const divNums = (num1, num2, div) => {
//    const arg = ((num1 % div === 0) && (num2 % div === 0) || ((num1 % div !== 0) && 
//    (num2 % div !== 0))) ? true : false;

//    return arg;
//  }
//  console.log(divNums(23, 45, 5)); // false
//  console.log(divNums(84, 48, 6)) // true
//  console.log(divNums(34, 27, 9)); // false


/**
 * 89. Write a JavaScript program to check whether it is possible to 
 * replace $ in a given expression x $ y = z with one of 
 * the four signs +, -, * or / to obtain a correct expression. 
 */

//  USER

// const replace$ = (x, y, z) => {
//   const arg = ((x + y == z) || (x - y == z) || (x / y == z) || (x * y == z)) ? true : false;

//   return arg;
// }
// console.log(replace$(2, 3, 7)); // false
// console.log(replace$(4, 5, 20)); // true


/**
 * 90. Write a JavaScript program to find the kth greatest element of a given array of integers
 */

 // W3RESOURCE

//  function Kth_greatest_in_array(arr, k) {

//   for (var i = 0; i < k; i++) {
//     var max_index = i,
//       tmp = arr[i];

//     for (var j = i + 1; j < arr.length; j++) {
//       if (arr[j] > arr[max_index]) {
//         max_index = j;
//       }
//     }

//     arr[i] = arr[max_index];
//     arr[max_index] = tmp;
//   }

//   return arr[k - 1];
// }

// console.log(Kth_greatest_in_array([1,2,6,4,5], 3))
// console.log(Kth_greatest_in_array([-10,-25,-47,-36,0], 1))


// // W3RESOURCE COMMENT

// function sortFunc(arr, k) {
//   return arr.sort((a, b) => b-a)[k - 1]
//   }
//   console.log(sortFunc([1,2,6,4,5], 3)) // 4


/**
 * 91. Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers 
 * (numbers that follow each other in order.) of a given array of positive integers.
 */


// W3RESOURCE

// function array_max_consecutive_sum(nums, k) {
//   let result = 0;
//   let temp_sum = 0;
//   for (var i = 0; i < k - 1; i++) {
//     temp_sum += nums[i];
//   }
//   for (var i = k - 1; i < nums.length; i++) {
//     temp_sum += nums[i];
//     if (temp_sum > result) {
//       result = temp_sum;
//     }
//     temp_sum -= nums[i - k + 1];
//   }
//   return result;
// }
// console.log(array_max_consecutive_sum([1, 2, 3, 14, 5], 2))
// console.log(array_max_consecutive_sum([2, 3, 5, 1, 6], 3))
// console.log(array_max_consecutive_sum([9, 3, 5, 1, 7], 2))


/**
 * 92. Write a JavaScript program to find the maximal difference between any two adjacent 
 * elements of a given array of integers.
 */

//W3RESOURCE COMMENT X USER

//  const maxDiff = (arr) => {
//    let max = -1;
//    let temp;
//    for (i = 0; i < arr.length - 1; i++) {
//      temp = Math.abs(arr[i] - arr[i + 1]);
//      max = Math.max(max, temp);
//    }
//    return temp;
//  }
//   console.log(maxDiff([2, 5, 7, 9, 12, 0, 8]));
//   console.log(maxDiff([34, 56, 108, 72]));


/**
 * 93. Write a JavaScript program to find the maximal difference among all 
 * possible pairs of a given array of integers.
 */

// USER

// const maxDff = (arr) => {
//   arr.sort((a, b) => b - a);
//   return arr[0] - arr[arr.length -1];
// }
// console.log(maxDff([6, 19, 2, 14, 8]));


/**
 * 94. Write a JavaScript program to find the number which appears most in a given array of integers.
 */

 // W3RESOURCE

//  function array_element_mode(arr) {
//   const ctr = [];
//   let ans = 0;

//   for(var i = 0; i < 10; i++) {
//     ctr.push(0);
//   }
//   for(var i = 0; i < arr.length; i++) {
//     ctr[arr[i] - 1]++;
//     if(ctr[arr[i] - 1] > ctr[ans]) {
//       ans = arr[i] - 1;
//     }
//   }
//   return ans + 1;
// }
// console.log(array_element_mode([1, 2, 3, 2, 2, 8, 1, 9]));    // 2


/**
 * 95. Write a JavaScript program to replace all the numbers 
 * with a specified number of a given array of integers.
 */

 // W3RESOURCE X USER

// const replaceArray = (arr, x, y) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === x) {
//       arr[i] = y;
//     }
//   }
//   return arr;
// }
// console.log(replaceArray([2, 4, 7 , 2, 8, 2], 2, 9));

// W3RESOURCE COMMENT X USER

// const rplcgelmnt = (nums, oldN, newN) => {
//   return nums.map(el => (el === oldN) ? newN : el);
// }
// console.log(rplcgelmnt([2, 4, 7 , 2, 8, 2], 2, 9));


/**
 * 96. Write a JavaScript program to compute the sum of absolute 
 * differences of consecutive numbers of a given array of integers.
 */

 //W3RESOURCE X USER

//  const sumAbs = (arr) => {
//    let result =  0;
//    for (let i = 1; i < arr.length; i++) {
//      result += Math.abs(arr[i] - arr[i - 1]);
//    }
//    return result;
//  }
// console.log(sumAbs([8, 6, 9, 0, 3]));


/**
 * 97. Write a JavaScript program to find the shortest possible string 
 * which can create a string to make it a palindrome by adding characters to the end of it
 */

 // W3RESOURCE

//  function build_Palindrome(new_str) {
//   let flag;
//   for (let i = new_str.length;; i++) {
//     flag = true;
//     for (var j = 0; j < i - j - 1; j++) {
//       if (i - j - 1 < new_str.length && new_str[j] != new_str[i - j - 1]) {
//         flag = false;
//         break;
//       }
//     }
//     if (flag) {
//       for (var j = new_str.length; j < i; j++) {
//         new_str += new_str[i - j - 1];
//       }
//       return new_str;
//     }
//   }
// }

// console.log(build_Palindrome("abcddc"))
// console.log(build_Palindrome("122"))


/**
 * 98. Write a JavaScript program to switch case of the minimum possible number of letters 
 * to make a given string written in the upper case or in the lower case. 
 * Fox example "Write" will be "write" and "PHp" will be "PHP"
 */

 //W3RESOURCE

//  function change_case(new_str) {
//   var x = 0;
//   var y = 0;

//   for (var i = 0; i < new_str.length; i++) {
//     if (/[A-Z]/.test(new_str[i])) {
//       x++;
//     } else y++;
//   }

//   if (y > x) return new_str.toLowerCase();
//   return new_str.toUpperCase();
// }

// console.log(change_case("Write"))
// console.log(change_case("PHp"))


/**
 * 99. Write a JavaScript program to check whether it is possible to rearrange characters of a given string 
 * in such way that it will become equal to another given string.
 */

 // W3RESOURCE COMMENT

// function check(str1, str2) {
//   return str1.split('').sort().join('') === str2.split('').sort().join('');
// }
// console.log(check('xyz', 'yxz'));
// console.log(check('mnp', 'pom'));


/**
 * 100. Write a JavaScript program to check whether there is at least one element 
 * which occurs in two given sorted arrays of integers.
 */

// W3RESOURCE

// function check_common_element(arra1, arra2) {
//   for (let i = 0; i < arra1.length; i++)
//   {
//     if (arra2.includes(arra1[i])) 
//       return true;
//   }
//   return false;
// }
// console.log(check_common_element([1,2,3], [3,4,5]));   
// console.log(check_common_element([1,2,3], [5,6,7]));


/**
 * 101. Write a JavaScript program to check whether a given string contains only Latin letters and 
 * no two uppercase and no two lowercase letters are in adjacent positions.
 */

//W3RESOURCE

// function test_string(input_str) {
//   const is_lower_case = symbol => {
//     if ('a' <= symbol && symbol <= 'z') {
//       return true;
//     }
//     return false;
//   };

//   const is_upper_case = symbol => {
//     if ('A' <= symbol && symbol <= 'Z') {
//       return true;
//     }
//     return false;
//   };

//   const is_first_char_lower = is_lower_case(input_str[0]);
//   const is_first_char_upper = is_upper_case(input_str[0]);

//   if (!(is_first_char_lower || is_first_char_upper)) {
//     return false;
//   }

//   for (let i = 1; i < input_str.length; i++) {
//     if (i % 2) {
//       if (is_lower_case(input_str[i]) === is_first_char_lower ||
//         is_upper_case(input_str[i]) === is_first_char_upper) {
//         return false;
//       }
//     } else {
//       if (is_lower_case(input_str[i]) !== is_first_char_lower ||
//         is_upper_case(input_str[i]) !== is_first_char_upper) {
//         return false;
//       }
//     }
//   }

//   return true;
// }

// console.log(test_string('xYr'));   
// console.log(test_string('XXyx'));


/**
 * 102. Write a JavaScript program to find the number of inversions of a given array of integers
 * Note: Two elements of the array are stored at positions i and j to form an inversion if a[i] > a[j] and i < j.
 */

 // W3RESOURCE

//  function number_of_InversionsNaive(arr) {
//   let ctr = 0;
//   for (let i = 0; i < arr.length; i++) {
//       for (let j = i + 1; j < arr.length; j++) {
//           if (arr[i] > arr[j]) 
//             ctr++;
//       }
//   }
//   return ctr;
// }
// console.log(number_of_InversionsNaive([0, 3, 2, 5, 9]));   
// console.log(number_of_InversionsNaive([1, 5, 4, 3]));   
// console.log(number_of_InversionsNaive([10, 30, 20, -10]));  

/**
 * 103. Write a JavaScript program to find the maximal number from a 
 * given positive integer by deleting exactly one digit of the given number.
 */

 // W3RESOURCE

// function digit_delete(num) {
//     let result = 0;
//     const num_digits = [];
//     while (num) {
//         num_digits.push(num % 10);
//         num = Math.floor(num / 10);
//     }
//     for (let index_num = 0; index_num < num_digits.length; index_num++) {
//         let n = 0;
//         for (let i = num_digits.length - 1; i >= 0; i--) {
//             if (i !== index_num) {
//                 n = n * 10 + num_digits[i];
//             }
//         }
//         result = Math.max(n, result);
//     }
//     return result;
// }
// console.log(digit_delete(100));
// console.log(digit_delete(10));
// console.log(digit_delete(1245));


/**
 * 104. Write a JavaScript program to find two elements of the array such 
 * that their absolute difference is not greater than a given integer but is as close to the said integer
 */

 // W3RESOURCE

// function different_values(ara, n) {
//     let max_val = -1;
//     for (let i = 0; i < ara.length; i++) {
//         for (let j = i + 1; j < ara.length; j++) {
//             const x = Math.abs(ara[i] - ara[j]);
//             if (x <= n) {
//                 max_val = Math.max(max_val, x)
//             }
//         }
//     }
//     return max_val
// }
// console.log(different_values([12, 10, 33, 34], 10));
// console.log(different_values([12, 10, 33, 34], 24));
// console.log(different_values([12, 10, 33, 44], 40));


/**
 * 105. Write a JavaScript program to find the number of times to replace a 
 * given number with the sum of its digits until it convert to a single digit number.
 */

 // W3RESOURCE

// function digit_to_one(num) {

//     const digitSum = num => {

//         let digit_sum = 0;
//         while (num) {
//             digit_sum += num % 10;
//             num = Math.floor(num / 10);
//         }

//         return digit_sum;
//     };

//     let result = 0;

//     while (num >= 10) {
//         result += 1;
//         num = digitSum(num);
//     }

//     return result;
// }
// console.log(digit_to_one(123))
// console.log(digit_to_one(156))


/**
 * 106. Write a JavaScript program to divide an integer by another integer 
 * as long as the result is an integer and return the result.
 */

// W3RESOURCE

// function divide_digit(num, d) {
//     if (d==1)
//       return num;
//     else
//     {
//    while (num % d === 0) {
//      num /= d;
//      }
//  return num;
//     }
// }
// console.log(divide_digit(-12, 2))
// console.log(divide_digit(13, 2))
// console.log(divide_digit(13, 1))


/**
 * 107. Write a JavaScript program to find the number of sorted pairs formed by its elements of 
 * a given array of integers such that one element in the pair is divisible by the other one
 */

 // W3RESOURES COMMENT X USER

//  const findSortedArray = (arr) => {
//      let pairArr = [];

//      for (let i = 0; i < arr.length; i++) {
//          for (let j = i + 1; j < arr.length; j++) {
//              if (arr[i] % arr[j] === 0 || arr[j] % arr[i] === 0) {
//                  pairArr.push([arr[i], arr[j]]);
//              }
//          }
//      }
//      return pairArr;
//  }
//  console.log(findSortedArray([2, 4, 16]));


 /**
  * 108. Write a JavaScript program to create the dot products of two given 3D vectors
  * Note: The dot product is the sum of the products of the corresponding entries of the two sequences of numbers.
  */

  // W3RESOURCE

  // function dot_product(vector1, vector2) {
  //   let result = 0;
  //   for (let i = 0; i < 3; i++) {
  //     result += vector1[i] * vector2[i];
  //   }
  //   return result;
  // }
  // console.log(dot_product([1,2,3], [1,2,3]))
  // console.log(dot_product([2,4,6], [2,4,6]))
  // console.log(dot_product([1,1,1], [0,1,-1]))


/**
 * 109. Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer.
 */
  
// W3RESOURCE 

// function sort_prime(num) {
//     const prime_num1 = [];
//     const prime_num2 = [];
//     for (var i = 0; i <= num; i++) {
//       prime_num2.push(true);
//     }
//     for (var i = 2; i <= num; i++) {
//       if (prime_num2[i]) {
//         prime_num1.push(i);
//         for (let j = 1; i * j <= num; j++) {
//           prime_num2[i * j] = false;
//         }
//       }
//     }
  
//     return prime_num1;
//   }
//   console.log(sort_prime(5))
//   console.log(sort_prime(11))
//   console.log(sort_prime(19))


/**
 * 110. Write a JavaScript program to find the number of even values in 
 * sequence before the first occurrence of a given number.
 */
  
//  W3RESOURCE COMMENT

// function findEvenNum(arr, n) {
//     let count = 0
    
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0 && arr[i] < n) count++
//             if (arr[i] > n) break
//         }
//     return count
//     }
//     console.log(findEvenNum([1,2,3,4,5,6,7,8], 5)) // 2
//     console.log(findEvenNum([1,3,5,6,7,8], 6)) // 0


/**
 * 111. Write a JavaScript program to check a number from three 
 * given numbers where two numbers are equal, find the third one.
 */

// USER

// const notEqual = (x, y, z) => {
//     if (x === y) {
//         return z;
//     } else if (z === y) {
//         return x;
//     } else if (x === z) {
//         return y;
//     } else {
//         return 'No equal number found';
//     }
// }
// console.log(notEqual(3, 6, 3)); // 6
// console.log(notEqual(9, 0, 7)); // !=


/**
 * 112. Write a JavaScript program to find the number of trailing zeros 
 * in the decimal representation of the factorial of a given number.
 */

 // W3RESOURCE

//  function trailing_zeros_factorial(n) {
//     let result = 0;
//     for (let i = 5; i <= n; i += 5) {
//         let num = i;
//         while (num % 5 === 0) {
//             num /= 5;
//             result++;
//         }
//     }
//     return result;
// }

// console.log(trailing_zeros_factorial(8))
// console.log(trailing_zeros_factorial(9))
// console.log(trailing_zeros_factorial(10))


/**
 * 113. Write a JavaScript program to calculate the sum of n + n/2 + n/4 + n/8 + .... 
 * where n is a positive integer and all divisions are integer.
 */

 // USER

// const divNum = (n) => {
//     const sum = n + (n/2) + (n/4) + (n/8);

//     return Math.floor(sum);
// }
// console.log(divNum(26));
// console.log(divNum(8));
// console.log(divNum(9));


// W3RESOURCE

// function int_sum(num) {
//     let s_sum = 0;
//     while (num > 0) { 
//         s_sum = s_sum + num; 
//         num = Math.floor(num / 2);    
//     }
//     return s_sum;   
// }
// console.log(int_sum(8))
// console.log(int_sum(9))
// console.log(int_sum(26))


/**
 * 114. Write a JavaScript program to check whether a given string represents 
 * a correct sentence or not. A string is considered correct sentence 
 * if it starts with the capital letter and ends with a full stop (.).
 */

 // USER X W3RESOURCE

// const correctString = (str) => {
//     let alpha = str[0];
//     let omega = str[str.length -1];
//     return /[A - Z]/.test(alpha) && omega == '.';
// }
// console.log(correctString('Alafia.'));



/**
 * 115. Write a JavaScript program to check whether a matrix is a diagonal matrix or not. 
 * In linear algebra, a diagonal matrix is a matrix in which the entries outside the main 
 * diagonal are all zero (the diagonal from the upper left to the lower right).
Example:
[1, 0, 0], [0, 2, 0], [0, 0, 3] ]) = true
[1, 0, 0], [0, 2, 3], [0, 0, 3] ]) = false
 */

// W3RESOURCE

// function is_diagonal_matrix(user_matrix) {
//     for (let i = 0; i < user_matrix.length; i++) {
//         for (let j = 0; j < user_matrix.length; j++) {
//             if (i !== j && user_matrix[i][j] !== 0) 
//               return false;
//         }
//     }
//     return true;
// }
// console.log(is_diagonal_matrix([[1, 0, 0], [0, 2, 0], [0, 0, 3] ]));
// console.log(is_diagonal_matrix([[1, 0, 0], [0, 2, 3], [0, 0, 3] ]));


/**
 * 116. Write a JavaScript program to find all the possible options to replace the hash in a string 
 * (Consists of digits and one hash (#)) with a digit to produce an integer divisible by 3.
 * For a string "2#0", the output should be : ["210", "240", "270"]
 */

// W3RESOURCE

// function is_divisible_by3(mask_str) {
//     let digitSum = 0;
//     const left = '0'.charCodeAt();
//     const right = '9'.charCodeAt();
//     const result = [];
//     const mask_data = mask_str.split('');
//     let hash_pos = -1;
  
//     for (var i = 0; i < mask_data.length; i++) {
//       if (left <= mask_data[i].charCodeAt() && mask_data[i].charCodeAt() <= right)
//       {
//         digitSum += mask_data[i].charCodeAt() - left;
//       } 
//       else 
//       {
//         hash_pos = i;
//       }
//     }
  
//     for (var i = 0; i < 10; i++) {
//       if ((digitSum + i) % 3 === 0) {
//         mask_data[hash_pos] = String.fromCharCode(left + i);
//         result.push(mask_data.join(''));
//       }
//     }
  
//     return result;
//   }
//   console.log(is_divisible_by3("2#0"))
//   console.log(is_divisible_by3("4#2"))
  

/**
 * 117. Write a JavaScript program to check whether a given matrix is an identity matrix.
 * Note: In linear algebra, the identity matrix, or sometimes ambiguously called a unit matrix, 
 * of size n is the n ? n square matrix with ones on the main diagonal and zeros elsewhere.
[[1, 0, 0], [0, 1, 0], [0, 0, 1]] -> true
[[1, 0, 0], [0, 1, 0], [1, 0, 1]] -> false
 */

// USER 

//  const linear_matrix = (matrix_array) => {
//      for (let i = 0; i < matrix_array.length; i++) {
//          for (let j = 0; j < matrix_array.length; j++) {
//              if (matrix_array[i][j] !== 1 && i === j || matrix_array[i][j] && i !== j) {
//                  return false;
//              }
//          }
//      }
//      return true;
//  }

//  console.log(linear_matrix([[1, 0, 0], [0, 1, 0], [0, 0, 1]]));
//  console.log(linear_matrix([[1, 1, 0], [0, 1, 0], [0, 0, 1]]));


/**
 * 118. Write a JavaScript program to check whether a given number is in a given range.
 */

 // USER

// const numRange = (x, y, z) => {
//     return y >= x && y <= z;
// }

// console.log(numRange(3, 8, 45));
// console.log(numRange(8, 6, 9));


/**
 * 119. Write a JavaScript program to check whether a given integer has an increasing digits sequence.
 */

 // USER X W3RESOURCE COMMENT

//  const increInteger = (num) => {
//      let num_split = num.toString().split('');

//      for (let i = 0; i < num_split.length -1; i++) {
//          if (num_split[i] >= num_split[i + 1]) {
//              return false;
//          }
//      }
//      return true;
//  }
// console.log(increInteger(789));
// console.log(increInteger(762));

/**
 * ES5
 */

//  function integerIncre (num) {
//      var split_num = num.toString().split('');

//      for (var i = 0; i < split_num.length -1; i++) {
//          if (split_num[i] >= split_num[i +1]) {
//              return false;
//          }
//      }
//      return true;
//  }

//  console.log(integerIncre(123));
//  console.log(integerIncre(2456));
//  console.log(integerIncre(7879));

/**
 * 128. Write a JavaScript program to find the smallest round number that is not less than a given value
 */

// const roundNum = (n) => {
//     const arg = n % 10;  

//     if (n <= 10) {
//       return false;
//     } else {
//       return n - arg;
//     }
// }
// console.log(roundNum(63));
// console.log(roundNum(107865));



// let str = 3456;
// let coco = str.toString().split('');
// console.log(coco);