// Function to check if a year is a leap year
isLeapYear = (year) => {
    // First check if the year is divisible by 4
    if(year % 4 === 0) {
        // If it is divisible by 4, check if it is also divisible by 100
        if (year % 100 === 0) {
            // If divisible by 100, it must also be divisible by 400 to be a leap year
            return (year % 400 === 0);
        }
        // If it's divisible by 4 but not 100, it's a leap year
        return true;
    }
    // If the year is not divisible by 4, it's not a leap year
    return false;
}

// Test cases for different years
let year = 2000;
console.log(`The year ${year} is ${isLeapYear(year) ? 'a leap year' : 'not a leap year'}.`);

year = 2001;
console.log(`The year ${year} is ${isLeapYear(year) ? 'a leap year' : 'not a leap year'}.`);

year = 2002;
console.log(`The year ${year} is ${isLeapYear(year) ? 'a leap year' : 'not a leap year'}.`);

year = 2003;
console.log(`The year ${year} is ${isLeapYear(year) ? 'a leap year' : 'not a leap year'}.`);

year = 2004;
console.log(`The year ${year} is ${isLeapYear(year) ? 'a leap year' : 'not a leap year'}.`);

year = 2005;
console.log(`The year ${year} is ${isLeapYear(year) ? 'a leap year' : 'not a leap year'}.`);
