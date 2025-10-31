import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";

function ExpenseForm() {
  function amountChangeHandler() {}
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.rowInput}>
        <Input
          label="Amount"
          textInputconfig={{
            keyboardType: "decimal-pad",
            onChangeText: amountChangeHandler,
            placeholder: "59.9$",
          }}
          style={styles.allSpace}
        />
        <Input
          label="Date"
          textInputconfig={{
            placeholder: "YYYY-MM-DD",
            onChangeText: () => {},
          }}
          style={styles.allSpace}
        />
      </View>
      <Input
        label="Description"
        textInputconfig={{
          multiline: true,
          // autoCorrect: falses   //default is true
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  form: { marginTop: 40 },
  title: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 24,
    fontWeight: "bold",
  },
  rowInput: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  allSpace: {
    flex: 1,
  },
});
export default ExpenseForm;
