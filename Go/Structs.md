# Structs

- Data structure encapsulating both data and methods
- each are independent and can be typed custom


```go

func main() {
	// Creating an instance of the struct. 
	// Sort of like constructors in other languages
	// Diff is that you aren't calling a method to 
	// construct the object.
	// Values passed in order they are declared
	poodle := Dog{"Poodle", 10}
	fmt.Println(poodle) // {Poodle 10}
	fmt.Printf("%+v\n", poodle) 

	// We can call / access the structs values using dot notation
	fmt.Printf("Breed: %v\nWeight: %v\n", poodle.Breed, poodle.Weight)
}

// Dog is a struct
type Dog struct {
	// Properties can be either exported or non-exported
	Breed string
	Weight int



}

```
