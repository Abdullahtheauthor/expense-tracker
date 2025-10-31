import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { useState } from "react";

function ExpenseForm() {
  const [inputValues, setInputValues] = useState({
    amount: "",
    date: "",
    description: "",
  });
  function inputChangedHandler(enteredValue) {
    setInputValues(() => {});
  }
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.rowInput}>
        <Input
          label="Amount"
          textInputconfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangedHandler,
            placeholder: "59.9$",
          }}
          style={styles.allSpace}
        />
        <Input
          label="Date"
          textInputconfig={{
            placeholder: "YYYY-MM-DD",
            onChangeText: inputChangedHandler,
          }}
          style={styles.allSpace}
        />
      </View>
      <Input
        label="Description"
        textInputconfig={{
          multiline: true,
          onChangeText: inputChangedHandler,
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
