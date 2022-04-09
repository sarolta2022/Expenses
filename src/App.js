//old react projects import React from "react";
// instead of what we are useing at index.js
//import ReactDOM from 'react-dom';

import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

//or arrow function
// const App = () => {}

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

/* the same in 

  return React.createElement("div", {}, React.createElement("h2", {}, "Lets get started"),
  React.createElement(Expenses, {items:expenses})); 
  secons argument is the propeties which should be set
  
  return (
    <div>
    <h2>lets get stRTED</h2>
    <Expenses items={expenses}>
    </div>
    );*/
