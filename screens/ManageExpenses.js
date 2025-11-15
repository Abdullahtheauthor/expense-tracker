import { useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/expenses-context";
import { useContext } from "react";
import ExpenseForm from "../components/manageExpense/ExpenseForm";
import { deleteExpense, storeExpense, updateExpense } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

function ManageExpenses({ route, navigation }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState();

  const editedExpenseId = route.params?.expenseId;
  const expenseCtx = useContext(ExpensesContext);
  const isEditing = !!editedExpenseId;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expenses" : "Add Expense",
    });
  }, [navigation, isEditing]);

  async function deleteExpenseHandler() {
    setIsSubmitting(true);
    try {
      await deleteExpense(editedExpenseId);
      expenseCtx.deleteExpense(editedExpenseId);
      navigation.goBack();
    } catch (error) {
      setError("Can't delete expense item. Please try again letter");
      setIsSubmitting(false);
    }
  }
  function cancelButtonHandler() {
    navigation.goBack();
  }
  async function confirmButtonHandler(expenseData) {
    setIsSubmitting(true);
    try {
      if (isEditing) {
        await updateExpense(editedExpenseId, expenseData);
        expenseCtx.updateExpense(editedExpenseId, expenseData);
      } else {
        const id = await storeExpense(expenseData);
        expenseCtx.addExpense({ ...expenseData, id: id });
      }
      navigation.goBack();
    } catch (error) {
      setError("Can't save expense");
      setIsSubmitting(false);
    }
  }
  const selectedExpense = expenseCtx.expenses.find(
    (expense) => expense.id === editedExpenseId
  );

  if (error && !isSubmitting) {
    return <ErrorOverlay message={error}></ErrorOverlay>;
  }
  if (isSubmitting) {
    return <LoadingOverlay></LoadingOverlay>;
  }
  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={cancelButtonHandler}
        sumbitButtonLabel={isEditing ? "Update" : "Add"}
        onSubmit={confirmButtonHandler}
        defaultValues={selectedExpense}
      ></ExpenseForm>

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

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});

export default ManageExpenses;
