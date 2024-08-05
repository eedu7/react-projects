import PropTypes from "prop-types";
import { useContext } from "react";
import { ExpenseTrackerContext } from "../context/ExpenseTrackerState";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(ExpenseTrackerContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
    </li>
  );
};

Transaction.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
};
