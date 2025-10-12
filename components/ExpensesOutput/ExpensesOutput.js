import { View, Text, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.99,
    date: new Date("2022-01-05"),
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
    date: new Date("2022-02-19"),
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

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 0,
    paddingTop: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});

export default ExpensesOutput;
