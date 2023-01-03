package main 

import "fmt"

// Var declares a list of variabls; as in funciton arguments lists, the type is last
var c, python, java bool

// A var declaration can include intitlaizers, one per variable. Here k is initialized as 1 and j as 2
var k, j int = 1, 2

// The := short assignment statement can be used in place of a var declaration with implicit type
// Outside a funciton every statement begins with a keyword(var, func, and so on) and so the := construct is not avaialable
var l, m int = 1, 2

// Var statements can be at package or function level
func main(){
	var i int
	// If an initializer is present, the type can be omitted; the variable will take the type of the initialize
	var cpp, php, rust = true, "no!", false
	fmt.Println(i, c, python, java)
	fmt.Println(k, cpp, php, rust)
	fmt.Println("-----------------------------")
	k := 3
	house := true
	fmt.Println(k, house)

}
