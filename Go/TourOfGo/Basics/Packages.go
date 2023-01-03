//
package main

// Imports should be grouped into a "factored" import statement but they can technically be separated. 
import (
	"fmt"
	"math"
)

// Exported names of functions are denoted by capitlizing the first letter as in Println from them fmt package
func main(){
	// When importing a package, you can refer only ot its exported names. Any unexported names are not accessible from outside the package. 
	fmt.Println("Now you have %g problems. \n", math.Sqrt(100))
	fmt.Println(math.Pi)
}

