import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { useContext, useEffect, useState } from "react";
import { getDaeMinusDays } from "../util/date";
import { fetchExpense } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";

function RecentExpenses() {
  const expenseCtx = useContext(ExpensesContext);
  // const [fetchedExpenses, setFetchedExpenses] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    async function getExpenses() {
      const expenses = await fetchExpense();
      console.log("my_expenses", expenses);
      setIsFetching(false);
      // setFetchedExpenses(expenses);
      expenseCtx.setExpense(expenses);
    }
    getExpenses();
  }, []);
  if (isFetching) {
    return <LoadingOverlay></LoadingOverlay>;
  }
  const recentExpenses = expenseCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDaeMinusDays(today, 7);
    return expense.date >= date7DaysAgo && expense.date <= today;
  });
  return (
    <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 days" />
  );
}

export default RecentExpenses;
