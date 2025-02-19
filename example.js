document.write( 'The Output String' ) // output to the HTML document
window.alert( 'The Alert Text' ) // output to a separate alert window
confirm('Confirm or cancel') // displays text; returns OK (T) or cancel (F)
prompt('Enter your age', 21) // get input from the user
console.log('THE ERROR')

var str1 = 'variable'
str1.length // number of characters in the string
str1.indexOf('i') // index of the character ‘i’; 0 indexed
str1.charAt(2) // character at index 2
str1.substring(1,4) // substring in str1 from 1 to 3, not including 4
var num = 1234;
var str2 = num.toString( ); // convert number to string

var x = -10
Math.abs(x) // absolute value of x
Math.sqrt(x) // sqrt of x

function myFunction(){
        console.log("Hello World!");
}