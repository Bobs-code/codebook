# Memory Management in Go

## Linked In Learning

- Application depends on Go runtime which operates in the background on managed threads. It is statically lonked into application

- Memory is allocatted and deallocated (by the garbage collector [GC]) automatically. All managed in the background

- Ojbects out of scope or set to nil are eligible for garbage collection

- Using maps requires initialization using make() or new()

- New() allocates but does not initialize memory
 - results in zeroed storage but returns a memory address
- Make() allocates non-zeroed storage and returns a memory address



```go

New()

m := new(map[string]int)
m["theAnswer"] = 42
fmt.Println(m)

// invalid operation: m["theAnswer"]
// (type *map[string]int does not support indexing)


Make()

m := make(map[string]int)
m["theAnswer"] = 42


```

## Further Information

- [Go Docs](https://golang.org/pkg/runtime)
- [Talk](https://talks.golang.org/2015/go-gc.pdf)

