package main

import (
	"encoding/json"
	"net/http"
)

type DataPoint struct {
	Label string  `json:"label"`
	Value float64 `json:"value"`
}

func enableCORS(w http.ResponseWriter) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET,POST,OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
}

func HandleChartData(w http.ResponseWriter, r *http.Request) {
	enableCORS(w)

	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	}

	data := []DataPoint{
		{Label: "一月", Value: 120},
		{Label: "二月", Value: 200},
		{Label: "三月", Value: 150},
		{Label: "四月", Value: 80},
		{Label: "五月", Value: 70},
		{Label: "六月", Value: 110},
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(data)
}
