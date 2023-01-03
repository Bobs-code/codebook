package main

import "fmt"


// Types are declared after variable names. 
// When two or more consecutive named function parameters share a type, you can omit the type from all but the last
func add(x, y, z int) int {
	return x + y + z
}

// A function can return any number of results
func swap(x, y string)(string, string){
	return y, x
}

// Return values may be named. If so, they are treated as variables defined at the top of the function
// Names should be used to document the meaning of the return values
func split(sum int) (x, y int) {
	x = sum * 4 / 9
	y = sum - x
	return

}


func main(){
	a, b := swap("hello", "world")
	fmt.Println(a, b)
	fmt.Println(add(42,13, 17))
	fmt.Println("----------------------------")
	fmt.Println(split(17))
}
