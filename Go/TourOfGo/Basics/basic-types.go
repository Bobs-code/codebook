//Basic types are
// bool | string | int (8, 16, 32, 64) | uint (8, 16, 32, 64) uintptr |
// byte (alias for unit8) | rune (alias for int32) | float (32, 64) | complex (64, 126

package main

import (
	"fmt"
	"math/cmplx"
	"math"
)
// Variable declarations can be factored into blocks (as with import statements)

// The int, uint, and uintpr are usually 32 bits wide on 32bit systmes and 64 bits wide on 64it systems. Use int if you need an integer value unless there is as specific reason to used a sized or unsized integer type
var (
	ToBe 	bool 		= false
	MaxInt 	uint64 		= 1<<64 - 1
	z 	complex128 	= cmplx.Sqrt(-5 + 12i)
)
// Vlaues delcared w/o an explicit initial value are given their zero value

var i int
var f float64
var b bool
var s string

// Type conversions: Expression T(v) converts the value v to the type T. float64(value)

var x, y int = 3, 4
var c float64 = math.Sqrt(float64(x*x + y+y))
var u uint = uint(c)

func main (){
	fmt.Printf("Type: %T Value: %v\n", ToBe, ToBe)
	fmt.Println("--------------------------------")
	fmt.Printf("Type: %T Value: %v\n", MaxInt, MaxInt)
	fmt.Println("--------------------------------")
	fmt.Printf("Type: %T Value %v\n", z, z)
	fmt.Printf("%v %v %v %q\n", i, f, b, s)
	fmt.Println(x, y, u)

}
