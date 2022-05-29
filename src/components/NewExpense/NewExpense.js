import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = props => {
  const [showForm, setShowForm] = useState(false);

  const showFormHandler = () => {
    setShowForm(true);
  };

  const hideFormHandler = () => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {!showForm && <button onClick={showFormHandler}>Add Expense</button>}
      {showForm && (
        <ExpenseForm
          onAddExpense={props.onAddExpense}
          hideFormHandler={hideFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
