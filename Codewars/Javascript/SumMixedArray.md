# 8kyu Sum Mixed Array

## 8 kyu - Javascript - Completed: 12/12/2022

*Given an array of integers as strings and numbers, return the sum of the array values as if all values were numbers. Return your answer as a number*

```JavaScript

function sumMix(x){

	let sum = 0

	for (let i = 0; i < x.length; i++){
		sum += Number(x[i])
	}

	return sum
}

```



