package com.example.demo;

public class CalculationResult {
    private double result;
    private String error;

    public CalculationResult(double result) {
        this.result = result;
    }

    public CalculationResult(double result, String error) {
        this.result = result;
        this.error = error;
    }

    public double getResult() {
        return result;
    }

    public void setResult(double result) {
        this.result = result;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }
}