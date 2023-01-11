# Slices
- 
- allocates required memory creates array in background but returns the slice
- resizable, easily sortable

```go

func main() {

	var colors = []string{"Red", "Green", "Blue"}
	fmt.Println(colors)

	colors = append(colors, "Purple")
	fmt.PRintln(colors)

		
	// start with item one and go to the end of the slice
	colors = append(colors[1:len(colors)]

	// Making a slice using make() function. Value types, size of slice, max capacity
	numbers := make([]int, 3)
	numbers[0] = 134
	numbers[1] = 33
	numbers[2] = 22

}

```
