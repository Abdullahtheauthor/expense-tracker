import { Text } from "react-native";
function ManageExpenses({ route }) {
  const editedExpenseId = route.params.expenseId;
  return <Text>Manage Expenses Screen {editedExpenseId}</Text>;
}

export default ManageExpenses;
