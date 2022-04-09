//wrapper component

import "./Card.css";

function Card(props) {
  const classes = "card " + props.className; //to keep all others classes
  return <div className={classes}>{props.children}</div>;
}
//children is all the content between opening and closing tag - where we useCard component

//this card's children what is inside of the Card tag in the file expenseitem

export default Card;
