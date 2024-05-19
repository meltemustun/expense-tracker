import React from "react";
import Transaction from "./Transaction";

function TransactionList({ transactions, onDelete }) {
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction
            text={transaction.text}
            amount={transaction.amount}
            id={transaction.id}
            key={transaction.id}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
