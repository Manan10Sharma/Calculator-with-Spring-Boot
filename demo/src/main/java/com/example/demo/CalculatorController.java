package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/")
public class CalculatorController {

    @Autowired
    private CalculatorService calculatorService;

    // In-memory list to store calculation history
    private List<String> history = new ArrayList<>();

    @GetMapping
    public String home(Model model) {
        model.addAttribute("history", history);
        return "calculator";
    }

    @PostMapping("/api/calculate")
    @ResponseBody // This annotation is crucial to return a JSON response
    public CalculationResult calculate(@RequestParam("num1") double n1,
                                       @RequestParam("num2") double n2,
                                       @RequestParam("operation") String operation) {

        try {
            double result;
            String expression = String.format("%.2f %s %.2f", n1, getOperatorSymbol(operation), n2);

            switch (operation) {
                case "add":
                    result = calculatorService.add(n1, n2);
                    break;
                case "sub":
                    result = calculatorService.subtract(n1, n2);
                    break;
                case "mul":
                    result = calculatorService.multiply(n1, n2);
                    break;
                case "div":
                    result = calculatorService.divide(n1, n2);
                    break;
                case "mod":
                    result = calculatorService.modulus(n1, n2);
                    break;
                default:
                    return new CalculationResult(0.0, "Invalid operation selected.");
            }

            String historyEntry = expression + " = " + String.format("%.2f", result);
            history.add(0, historyEntry); // Add to the beginning of the list
            if (history.size() > 5) { // Keep history limited to 5 entries
                history.remove(5);
            }

            return new CalculationResult(result);
        } catch (ArithmeticException e) {
            return new CalculationResult(0.0, e.getMessage());
        }
    }

    private String getOperatorSymbol(String operation) {
        switch (operation) {
            case "add": return "+";
            case "sub": return "-";
            case "mul": return "*";
            case "div": return "/";
            case "mod": return "%";
            default: return "";
        }
    }
}