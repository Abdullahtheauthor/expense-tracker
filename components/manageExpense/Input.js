import { Text, TextInput, View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Input({ label, textInputconfig, style }) {
  const inputStyles = [styles.input];

  if (textInputconfig && textInputconfig.multiline) {
    inputStyles.push(styles.multiline);
  }
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.label}>{label}</Text>

      <TextInput style={inputStyles} {...textInputconfig}></TextInput>
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    color: GlobalStyles.colors.primary700,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  multiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
export default Input;
