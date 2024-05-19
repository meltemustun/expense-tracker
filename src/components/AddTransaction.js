import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddTransaction({ onAddTransaction }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const addTransactions = (e) => {
    e.preventDefault();
    onAddTransaction({
      id: uuidv4(),
      text: text,
      amount: +amount,
    });
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={addTransactions}>
        <label htmlFor="text">Text</label>
        <input
          type="text"
          placeholder="Enter text..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <label htmlFor="text">
          Amount
          <br />
          (negative - expense, positive - income)
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        ></input>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
