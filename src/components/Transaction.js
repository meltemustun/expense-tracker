import React from "react";

function moneyFormatter(num) {
  let p = num.toFixed(2).split(".");
  return (
    "$ " +
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1]
  );
}

function Transaction({ text, amount, id, onDelete }) {
  const sign = amount > 0 ? "+" : "-";

  return (
    <li className={amount < 0 ? "minus" : "plus"}>
      {text}{" "}
      <span>
        {sign} {moneyFormatter(amount)}
      </span>
      <button className="delete-btn" onClick={() => onDelete(id)}>
        x
      </button>
    </li>
  );
}

export default Transaction;
