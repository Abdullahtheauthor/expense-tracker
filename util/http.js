import axios from "axios";

const BASIC_URL =
  "https://expense-tracker-app-197b1-default-rtdb.europe-west1.firebasedatabase.app/";

export function storeExpense(expenseData) {
  axios.post(BASIC_URL + "/expense.json", expenseData);
}

export async function getExpense(expenseData) {
  const response = awaitaxios.post(BASIC_URL + "/expense.json");
  console.log(response);
}
