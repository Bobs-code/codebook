# Maps

- Maps are unordered collections of key/value pairs as data 
- Keys can be any type that can be comparable (for the purpose of sorting) and values can be of any other type. 

- *seems to most resemble associative arrays from PHP*

```go 

func main(){
	states := make(map[string]string)

	states["WA"] = "Washington"
	states["OR"] = "Oregon"
	states["CA"] = "California"

	fmt.Println(states) 
	// map[CA:California OR:Oregon WA:Washington]

	california := states["CA"]

	// iterating
	for k, v := range states {
		// Order is not guaranteed 
		fmt.Printf("%v: %v\n", k, v)
	}

	keys := make([]string, len(states))

	i := 0
	for k := ranges states {
		keys[i] = k
		i++
	}
	fmt.Println(keys) // [CA WA NY]
	sort.Strings(keys)
	fmt.Println(keys) // CA NY WA

	for i := range keys {
		fmt.Println(states[keys[i]])
	}
}

```




