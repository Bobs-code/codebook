# 8kyu Logic Drill - Traffic Lights

## 8 kyu - Javascript - Completed: 12/14/2022

*You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.*

*Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.*

*For example, when the input is green, output should be yellow*

```JavaScript

function updateLight(current) {

  return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';

}

```

# Logic Drills - School Paperwork

## 8 kyu - Beginner Series #1 School Paperwork

*Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.*

*Your task is to calculate how many blank pages you need. If n < 0 or m < 0 return 0.*

```Javascript

function paperWork(n, m){
	if (n < 0 || m < 0){
		return 0
	} else {
		return n * m
	}

}
```
