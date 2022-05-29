import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
import { DUMMY_EXPENSES } from "./components/Data/DummyExpenses";

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpense = addedExpense => {
    // setExpenses([...expenses, addedExpense]); // not a cleaner way
    setExpenses(prevState => [addedExpense, ...prevState]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
