# Arrays

- Ordered collection of values
- Arrays are objects and if used in a funciton, a copy will be made of the array. 
- Can't be easily sorted or add / remove items during run time

```go

func main(){

// Start with # of items followed by the type of the values
var colors [3]string

colors[0] = red
colors[1] = green
colors[2] = blue

fmt.Println(colors) // [Red Green Blue]
fmt.Println(colors[0]) // Red

// Values can be delcared with the intialized array name
// using curly braces
var numbers = [5]int{34, 44, 2, 0, 1}

fmt.Println(numbers) // [34 44 2 0 1]

// Find number of items in an array using len()
fmt.Println("Number of colors:", len(colors))

}

```
