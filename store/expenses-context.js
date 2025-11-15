import { createContext, useReducer } from "react";

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  updateExpense: (id, { description, amount, date }) => {},
  deleteExpense: (id) => {},
  setExpense: (expenses) => {},
});

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      // const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload }, ...state];
    case "UPDATE":
      const expenseUpdatedIndex = state.findIndex(
        (expense) => action.payload.id === expense.id
      );
      const updatebleExpense = state[expenseUpdatedIndex];
      const updatedItem = { ...updatebleExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[expenseUpdatedIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    case "SET":
      const inverted = action.payload.reverse();
      return inverted;
    default:
      return state;
  }
};
const ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(reducer, []);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }
  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }
  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }
  function setExpense(expenses) {
    dispatch({ type: "SET", payload: expenses });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    updateExpense: updateExpense,
    deleteExpense: deleteExpense,
    setExpense: setExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;
