import { useContext } from "react";
import { ExpenseTrackerContext } from "../context/ExpenseTrackerState";
import { Transaction } from "./Transaction"

export const TransactionList = () => {
  const { transactions } = useContext(ExpenseTrackerContext);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        { transactions.map(transaction => (
                <Transaction
                key={transaction.id}
                transaction={transaction}
                />
        ))}
  
      </ul>
    </>
  );
};
