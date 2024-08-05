import { useContext } from "react";
import { ExpenseTrackerContext } from "../context/ExpenseTrackerState"

export const Balance = () => {
  const { transactions } = useContext(ExpenseTrackerContext);

  const amounts = transactions.map(transaction => transaction.amount)

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${ total }
      </h1>
    </>
  );
}
