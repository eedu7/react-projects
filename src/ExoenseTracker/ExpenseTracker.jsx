import "./index.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import { ExpenseTrackerProvider } from "./context/ExpenseTrackerState";
function ExpenseTrackerApp() {
  return (
    <ExpenseTrackerProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </ExpenseTrackerProvider>
  );
}

export default ExpenseTrackerApp;
