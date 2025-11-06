import axios from "axios";

const BASIC_URL =
  "https://expense-tracker-app-197b1-default-rtdb.europe-west1.firebasedatabase.app/";

export function storeExpense(expenseData) {
  axios.post(BASIC_URL + "/expense.json", expenseData);
}

export async function fetchExpense(expenseData) {
  const response = await axios.get(BASIC_URL + "/expense.json");
  console.log(response.data);

  const expenses = [];
  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }
  return expenses;
}
