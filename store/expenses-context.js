import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2025-10-15"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.99,
    date: new Date("2025-10-14"),
  },
  {
    id: "e3",
    description: "Some bananass",
    amount: 59.99,
    date: new Date("2022-12-01"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 14.99,
    date: new Date("2022-02-19"),
  },
  {
    id: "e5",
    description: "Another bookk",
    amount: 18.59,
    date: new Date("2025-10-16"),
  },
  {
    id: "e6",
    description: "Some bananass",
    amount: 59.99,
    date: new Date("2022-12-01"),
  },
  {
    id: "e7",
    description: "A book",
    amount: 14.99,
    date: new Date("2022-02-19"),
  },
  {
    id: "e8",
    description: "Another bookk",
    amount: 18.59,
    date: new Date("2022-02-19"),
  },
  {
    id: "e9",
    description: "Some bananass",
    amount: 59.99,
    date: new Date("2022-12-01"),
  },
  {
    id: "e10",
    description: "A book",
    amount: 14.99,
    date: new Date("2022-02-19"),
  },
  {
    id: "e11",
    description: "Another bookk",
    amount: 18.59,
    date: new Date("2022-02-19"),
  },
  {
    id: "e12",
    description: "Some bananass",
    amount: 59.99,
    date: new Date("2022-12-01"),
  },
  {
    id: "e13",
    description: "A book",
    amount: 14.99,
    date: new Date("2022-02-19"),
  },
  {
    id: "e14",
    description: "Another bookk",
    amount: 18.59,
    date: new Date("2022-02-19"),
  },
  {
    id: "e15",
    description: "Some bananass",
    amount: 59.99,
    date: new Date("2022-12-01"),
  },
  {
    id: "e16",
    description: "A book",
    amount: 14.99,
    date: new Date("2022-02-19"),
  },
  {
    id: "e17",
    description: "Another bookk",
    amount: 18.59,
    date: new Date("2022-02-19"),
  },
  {
    id: "e18",
    description: "Some bananass",
    amount: 59.99,
    date: new Date("2022-12-01"),
  },
  {
    id: "e19",
    description: "A book",
    amount: 14.99,
    date: new Date("2022-02-19"),
  },
  {
    id: "e20",
    description: "Another bookk",
    amount: 18.59,
    date: new Date("2022-02-19"),
  },
];
export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  updateExpense: (id, { description, amount, date }) => {},
  deleteExpense: (id) => {},
});

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
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
    default:
      return state;
  }
};
const ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(reducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }
  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }
  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    updateExpense: updateExpense,
    deleteExpense: deleteExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;
