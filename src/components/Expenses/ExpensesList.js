import ExpenseItem from "./ExpenseItem";

const ExpensesList = props => {
  if (props.items.length === 0) {
    return (
      <h2 className="expenses-list__fallback">
        No Expense Found in {props.year}
      </h2>
    );
  }

  return (
    <ul className="expenses-list">
      {props.items.map(curr => (
        <ExpenseItem item={curr} key={curr.id} />
      ))}
      ;
    </ul>
  );
};

export default ExpensesList;
