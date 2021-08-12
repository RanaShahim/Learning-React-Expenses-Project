import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import { useState } from "react";
import "./Expense.css";
import ExpensesFilter from "../NewExpense/ExpenseFilter";
function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterByYear = (year) => {
    setFilteredYear(year);
  };

  const filteringYear = props.items.filter((el) => {
    return el.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterByYear} />
      {filteredYear.length === 0 && <p>No Expenses to show!</p>}
      {filteredYear.length > 0 &&
        filteringYear.map((expense, index) => (
          <ExpenseItem
            key={index}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </Card>
  );
}
export default Expense;
