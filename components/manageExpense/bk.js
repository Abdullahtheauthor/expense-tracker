import { Alert, StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { useState, useEffect } from "react";
import Button from "../UI/Button";
import { GlobalStyles } from "../../constants/styles";

function ExpenseForm({ onCancel, onSubmit, sumbitButtonLabel, defaultValues }) {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultValues ? defaultValues.date.toISOString().slice(0, 10) : "",
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: true,
    },
  });

  //wrong way, it will render indefinitely
  // if (sumbitButtonLabel === "Update") {
  //   setInputValues(defaultValues);
  // }

  //another way to put default value in the inputs depending on the sumbitButtonLabel
  // useEffect(() => {
  //   if (sumbitButtonLabel === "Update" && defaultValues) {
  //     setInputValues(defaultValues);
  //   }
  // }, [sumbitButtonLabel, defaultValues]);
  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputs((currentInputs) => {
      return { ...currentInputs, [inputIdentifier]: enteredValue };
      // 🧠 [inputIdentifier] makes the key dynamic — JS replaces it with the variable's value.
      // e.g. if inputIdentifier = "amount", this becomes { amount: enteredValue }
      // Reminder: the brackets [] tell JS to *use the variable's value* as the property name,
      // not the literal text "inputIdentifier".
    });
  }

  function sumbitHandler() {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const datesValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (amountIsValid && datesValid && descriptionIsValid) {
      onSubmit(expenseData);
    } else {
      setInputs((curInputs) => {
        return {
          amount: { value: curInputs.amount.value, isValid: amountIsValid },
          date: { value: curInputs.date.value, isValid: datesValid },
          description: {
            value: curInputs.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
    }
  }
  const formIsInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;
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
            value: inputs.amount.value,
            // defaultValue: "Hello",
          }}
          style={styles.allSpace}
        />
        <Input
          label="Date"
          textInputconfig={{
            placeholder: "YYYY-MM-DD",
            onChangeText: inputChangedHandler.bind(this, "date"),
            value: inputs.date.value,
          }}
          style={styles.allSpace}
        />
      </View>
      <Input
        label="Description"
        textInputconfig={{
          multiline: true,
          onChangeText: inputChangedHandler.bind(this, "description"),
          value: inputs.description.value,
          // autoCorrect: falses   //default is true
        }}
      />
      {formIsInvalid && <Text style={styles.errorText}>Input is invalid</Text>}
      <View style={styles.buttons}>
        <Button onpress={sumbitHandler} style={styles.button}>
          {sumbitButtonLabel}
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
  errorText: {
    textAlign: "center",
    color: GlobalStyles.colors.error500,
    margin: 8,
  },
});
export default ExpenseForm;
