# react-investment-calculator-app

This is a simple React application that allows users to calculate and visualize the potential growth of their investments over time, based on the initial investment, annual contributions, expected returns, and duration.

## Features

- Input fields for initial investment, annual investment, expected return, and duration.
- Displays results in a table, including yearly breakdown of interest, invested capital, and total interest accumulated.
- Validates user input for the duration field (must be greater than 0).

## Technologies Used

- **React** for building the UI.
- **CSS** for basic styling.

## Installation and Setup

To run these apps locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ShawonBarman/react-investment-calculator-app.git
   cd react-investment-calculator-app
   ```

2. **Install dependencies:**

   Make sure you have Node.js and npm installed.

   ```bash
   npm install
   ```

3. **Run the applications:**

   ```bash
   npm start
   ```

This will start the app at http://localhost:3000.

## Usage

1. Fill in the form fields for the initial investment, annual investment, expected return, and duration.
2. View the results table, which shows the investment value, interest accrued each year, total interest, and invested capital.

## Folder Structure

```
  src/
  │
  ├── components/
  │   ├── Header.jsx        # The header component
  │   ├── UserInputs.jsx    # The form for user inputs
  │   └── Results.jsx       # The results table component
  │
  ├── util/
  │   └── investment.js     # Utility functions for investment calculations
  │
  ├── App.jsx               # Main application component
  └── index.css             # Styling for the app
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
