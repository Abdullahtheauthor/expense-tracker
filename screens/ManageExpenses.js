import { Text } from "react-native";
function ManageExpenses({ route }) {
  const editedExpenseId = route.params.expenseId;
  const isEditing = !!editedExpenseId;
  return <Text>Manage Expenses Screen {editedExpenseId}</Text>;
}

export default ManageExpenses;
