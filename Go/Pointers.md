# Pointers

- Pointers do not need to intially point to a value 
- Pointers in Go are similar to reference variables in other languages


```go


func main(){

	anInt := 42

	var p = &anInt

	fmt.Println("Value of p:", *p)

	value1 := 42.13
	pointer1 := &value1
	fmt.Println("Value 1:", *pointer1)

	// Changing a valuable through a pointer
	*pointer1 = *pointer1 / 31

	
	fmt.Println("Pointer 1:", *pointer1)
	fmt.Println("Value1:", value1)
}

```
