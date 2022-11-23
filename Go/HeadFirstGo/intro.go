

// Every go package starts with a package clause. Collection of code thatall does similar things. Gives the name of the package that this file's code will become a part of

//Says all the rest of the code in this file belongs to the "main" package
package main

// Go files almost always have at least one import statements. Need to import other packages before its code can use the code those other packages contain

//This import statement states that we'll be usin tex-formatting code form the "fmt" package
import (
	"fmt"
	"strings"
	"math"
)


// When a Go program runs it looks for a function named main and runs that first 
func main(){
	fmt.Println(math.Floor(2.75))
	fmt.Println(strings.Title("head first go"))
}





