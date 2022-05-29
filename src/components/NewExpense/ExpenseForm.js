import { useState } from "react";

// const ExpenseForm = () => {
//   const submitHandler = e => {
//     e.preventDefault();
//     let title = e.target.elements.title;
//     let amount = e.target.elements.amount;
//     let date = e.target.elements.date;
//     const expenseData = {
//       title: title.value,
//       amount: +amount.value,
//       date: new Date(date.value),
//     };
//     if (title && amount && date) {
//       console.log(expenseData);
//     }
//     title.value = amount.value = date.value = "";
//   };

//   return (
//     <form onSubmit={submitHandler}>
//       <div className="new-expense__controls">
//         <div className="new-expense__control">
//           <label>Title</label>
//           <input type="text" name="title"></input>
//         </div>
//         <div className="new-expense__control">
//           <label>Amount</label>
//           <input type="number" min="0.01" step="0.01" name="amount"></input>
//         </div>
//         <div className="new-expense__control">
//           <label>Date</label>
//           <input
//             type="date"
//             min="01-01-2019"
//             max="31-12-2022"
//             name="date"
//           ></input>
//         </div>
//       </div>
//       <div className="new-expense__actions">
//         <button type="submit">Submit</button>
//       </div>
//     </form>
//   );
// };

const ExpenseForm = props => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = e => {
    setTitle(e.target.value);
  };

  const amountChangeHandler = e => {
    setAmount(e.target.value);
  };

  const dateChangeHandler = e => {
    setDate(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    const expenseData = {
      id: +new Date(),
      title,
      amount: +amount,
      date: new Date(date),
    };
    if (date && title && amount) props.onAddExpense(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
    props.hideFormHandler();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title-id">Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={title}
            id="title-id"
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount-id">Amount</label>
          <input
            id="amount-id"
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date-id">Date</label>
          <input
            id="date-id"
            type="date"
            min="01-01-2019"
            max="31-12-2022"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.hideFormHandler}>Cancel</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
