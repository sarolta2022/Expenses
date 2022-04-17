import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  //function clickHandler(){}
  const [title, setTitle] = useState(props.title);
  console.log("expense item is evaluated by react");

  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
//onClick wants to have a function as a avalue

//onClick={()=>{console.log("clicked")}}
//handclicker dont add paranthesis, különben lefutna amikor létrehozza a card-ot
