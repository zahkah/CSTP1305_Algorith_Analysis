//reverse an integer IN JS


/**Given an integer x, return the integer obtained by reversing the digits
of x.
If its a negative number , the sign should preserve
Test Case 1: Positive Number
● Input: x = 123
● Expected Output: 321
● Explanation: The digits of 123 are reversed to 321.
Test Case 2: Negative Number
● Input: x = -456
● Expected Output: -654
● Explanation: The digits of -456 are reversed to -654, with the
negative sign preserved.
*/


functionToReverseInteger(x)
{

    let x = -456;
    let reversedInteger = x.toString().split('').reverse().join('');
    if(x < 0){
        return -parseInt(reversedInteger);
    }
    return parseInt(reversedInteger);
}

//test the function
console.log(functionToReverseInteger(123)); // Expected output: 321
console.log(functionToReverseInteger(-456)); // Expected output: -654








