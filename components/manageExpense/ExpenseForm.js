import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../UI/Button";

function ExpenseForm({ onCancel, onSubmit, sumbitButtonLabel }) {
  const [inputValues, setInputValues] = useState({
    amount: "",
    date: "",
    description: "",
  });
  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputValues((currentInputValues) => {
      return { ...currentInputValues, [inputIdentifier]: enteredValue };
      // 🧠 [inputIdentifier] makes the key dynamic — JS replaces it with the variable's value.
      // e.g. if inputIdentifier = "amount", this becomes { amount: enteredValue }
      // Reminder: the brackets [] tell JS to *use the variable's value* as the property name,
      // not the literal text "inputIdentifier".
    });
  }

  function sumbitHandler() {}
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.rowInput}>
        <Input
          label="Amount"
          textInputconfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangedHandler.bind(this, "amount"), // use bind to force js to have a first argument that I specified and make the default entered values as a second argument
            placeholder: "59.9$",
            value: inputValues.amount,
          }}
          style={styles.allSpace}
        />
        <Input
          label="Date"
          textInputconfig={{
            placeholder: "YYYY-MM-DD",
            onChangeText: inputChangedHandler.bind(this, "date"),
            value: inputValues.date,
          }}
          style={styles.allSpace}
        />
      </View>
      <Input
        label="Description"
        textInputconfig={{
          multiline: true,
          onChangeText: inputChangedHandler.bind(this, "description"),
          value: inputValues.description,
          // autoCorrect: falses   //default is true
        }}
      />
      <View style={styles.buttons}>
        <Button onpress={sumbitHandler} style={styles.button}>
          {sumbitButtonLabel ? "Update" : "Add"}
        </Button>
        <Button mode="flat" onpress={onCancel} style={styles.button}>
          cancel
        </Button>
      </View>
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
  buttons: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
export default ExpenseForm;
