import axios from "axios";

const BASIC_URL =
  "https://expense-tracker-app-197b1-default-rtdb.europe-west1.firebasedatabase.app/";

export async function storeExpense(expenseData) {
  const response = await axios.post(BASIC_URL + "/expense.json", expenseData);
  const id = response.data.name;
  return id;
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

export function updateExpense(id, updatedExpense) {
  return axios.put(BASIC_URL + `/expense/${id}.json`, updatedExpense);
}

export function deleteExpense(id) {
  return axios.delete(BASIC_URL + `/expense/${id}.json`);
}
