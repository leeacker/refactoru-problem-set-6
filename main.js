// Write a function secondGreatLow that takes a single array of numbers and returns the second lowest and second greatest numbers, respectively, separated by a space. For example: if the array contains [7, 7, 12, 98, 106] the output should be "12 98". The array will not be empty and will contain at least 2 numbers. It can get tricky if there's just two numbers!

var secondGreatLow = function(array){
	var sorted = array.sort(function(a,b){
		return a - b;
	});
	var newArray = [];
	newArray.push(sorted[1]);
	newArray.push(sorted[sorted.length-2]);

	return newArray;
};
console.log(secondGreatLow([7, 7, 12, 98, 106]));
console.log(secondGreatLow([7, 106]));






// Write a function timeConvert that takes a number parameter and returns the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon.

var timeConvert = function(num){
	var min = num%60;
	var hours = Math.floor(num/60);
	return hours + ':' + min;
};

console.log(timeConvert(63));
console.log(timeConvert(103));







// Bonus:
// Write a function bracketMatcher that takes a single string parameter and returns true if the brackets are correctly matched and each one is accounted for. Otherwise return false. For example: if str is "(hello (world))", then the output should be true, but if str is "((hello (world))" the the output should be false because the brackets do not correctly match up. "(()())" should return true. Only "(" and ")" will be used as brackets. If str contains no brackets return true.

var bracketMatcher = function(string){
	var array = string.split('');
	var brackets = [];
	if(array.indexOf('(') !== -1){
		for(var i = 0 ; i < array.length ; i++){
			if(array[i] === '('){
				brackets.push(array[i]);
			} else if (array[i] === ')'){
				if(brackets.length > 0 && brackets.indexOf('(') !== -1){
					var index = brackets.indexOf('(');
					brackets.splice(index, 1);
				} else {
					return false;
				}
			}
		}
	} else {
		return true;
	}

	if(brackets.length === 0){
		return true;
	} else {
		return false;
	}
	
};	

	console.log(bracketMatcher("(()())"));
	console.log(bracketMatcher("word"));
	console.log(bracketMatcher("((hello (world))"));
	console.log(bracketMatcher("(hello (world))"));
