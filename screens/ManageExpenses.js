import { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/expenses-context";
import { useContext } from "react";
import ExpenseForm from "../components/manageExpense/ExpenseForm";

function ManageExpenses({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const expenseCtx = useContext(ExpensesContext);
  const isEditing = !!editedExpenseId;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expenses" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    expenseCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }
  function cancelButtonHandler() {
    navigation.goBack();
  }
  function confirmButtonHandler() {
    if (isEditing) {
      expenseCtx.updateExpense(editedExpenseId, {
        description: "test",
        amount: 19.99,
        date: new Date(),
      });
    } else {
      expenseCtx.addExpense({
        description: "test addedddddd",
        amount: 19.99,
        date: new Date(),
      });
    }
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <ExpenseForm></ExpenseForm>
      <View style={styles.buttons}>
        <Button onpress={confirmButtonHandler} style={styles.button}>
          {isEditing ? "Update" : "Add"}
        </Button>
        <Button mode="flat" onpress={cancelButtonHandler} style={styles.button}>
          cancel
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            size={36}
            color={GlobalStyles.colors.error500}
            onPress={deleteExpenseHandler}
          ></IconButton>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttons: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});

export default ManageExpenses;
