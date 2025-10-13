import { useLayoutEffect } from "react";
import { Text } from "react-native";
function ManageExpenses({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expenses" : "Add Expense",
    });
  }, [navigation, isEditing]);

  return <Text>Manage Expenses Screen {editedExpenseId}</Text>;
}

export default ManageExpenses;
