<h1>Spring Boot Calculator App 🧮</h1>
This is a modern web-based calculator application built with Spring Boot for the back-end logic and HTML, CSS, and JavaScript for a responsive and interactive front-end. It features a sleek glassmorphism design and provides real-time calculation results without page reloads.

<h1>✨ Features</h1>
Basic Arithmetic Operations: Perform addition, subtraction, multiplication, division, and modulus.

Responsive UI: A clean and modern user interface with a glassmorphism design that adapts to different screen sizes.

Real-time Calculations: Utilizes AJAX to send calculation requests to the server asynchronously, providing instant results without full page refreshes.

Calculation History: Keeps a log of recent calculations for easy reference.

Robust Error Handling: Provides user-friendly error messages for invalid operations, such as division by zero.

Clean Separation of Concerns: Clearly separates front-end presentation from back-end business logic using a RESTful API approach.

<h1>🛠️ Technologies Used</h1>
Backend:

Java ☕

Spring Boot

Thymeleaf (for initial page rendering and history display)

Frontend:

HTML5

CSS3 (with custom styles for glassmorphism)

JavaScript (ES6+) for interactive logic and AJAX calls

<h1>📂 Project Structure</h1>
.
└── src
    └── main
        ├── java
        │   └── com
        │       └── example
        │           └── demo
        │               ├── CalculatorAppApplication.java   // Main Spring Boot application entry point
        │               ├── CalculatorController.java       // Handles web requests and API endpoints
        │               ├── CalculatorService.java          // Contains core calculation logic
        │               └── CalculationResult.java          // DTO for API responses
        └── resources
            ├── static
            │   ├── css
            │   │   └── style.css                   // Styling for the calculator and layout
            │   └── js
            │       └── script.js                   // Frontend logic (AJAX, UI updates)
            ├── templates
            │   └── calculator.html                 // Thymeleaf template for the main calculator UI
            └── application.properties              // Spring Boot application configuration

<h1>🚀 Getting Started</h1>
Follow these instructions to get a copy of the project up and running on your local machine.

Prerequisites
Java Development Kit (JDK) 17+

Maven (usually bundled with IDEs like IntelliJ IDEA or VS Code Spring Boot Extension)

A code editor (e.g., IntelliJ IDEA, VS Code)

Installation
Clone the repository:

git clone <repository_url>
cd calculator-app

(Replace <repository_url> with the actual URL if this project is hosted on Git).

Build the project (using Maven):

mvn clean install

Running the Application
From your IDE:

Open the project in your preferred IDE (IntelliJ IDEA, VS Code, Eclipse).

Locate the CalculatorAppApplication.java file.

Run the main method.

From the command line:

Navigate to the project root directory in your terminal.

Run the Spring Boot application:

mvn spring-boot:run

The application will start on http://localhost:8080 (or the port specified in application.properties).

<h1>💡 Usage</h1>
Open your web browser and navigate to http://localhost:8080.

Input Numbers: Click on the number buttons (0-9) and the decimal point (.) to enter the first number.

Select Operator: Click on an operator button (+, -, *, /, %). The display will show the first number and the operator.

Enter Second Number: Type in the second number.

Calculate: Press the equals (=) button to see the result.

Clear: Use the C button to clear the current input and reset the calculator.

Delete: Use the DEL button to remove the last digit from the current input.

History: Your last few calculations will appear in the "History" section on the right.

<h1>📈 Improvements & Future Enhancements</h1>
Advanced Operations: Add support for more complex mathematical functions (e.g., square root, powers, trigonometric functions, logarithms).

Keyboard Support: Implement full keyboard support for input, operators, and actions.

Theming Options: Allow users to switch between different visual themes.

Persistent History: Store calculation history persistently (e.g., using a database like H2, MySQL, or PostgreSQL) so it's not lost when the server restarts.

Unit and Integration Tests: Write comprehensive tests for both the front-end (using tools like Jest, React Testing Library) and back-end (using JUnit, Mockito) to ensure robustness.

User Interface Enhancements: Implement features like:

Scrolling for long expressions in the display.

Animations for button presses.

<img width="1303" height="863" alt="image" src="https://github.com/user-attachments/assets/9ae9a322-db1a-4f99-a2ab-6605f96384b5" />
