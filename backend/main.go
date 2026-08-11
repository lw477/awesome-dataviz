package main

import (
	"fmt"
	"net/http"
)

func main(){
	http.HandleFunc("/api/data", HandleChartData)

	fmt.Println("Awesome DataViz API Server running on http://localhost:8080")

	if err := http.ListenAndServe(":8080", nil); err != nil {
		panic(err)
	}
}