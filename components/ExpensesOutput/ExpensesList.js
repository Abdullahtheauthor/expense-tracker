import { View, Text, FlatList } from "react-native";
import ExpenesItem from "./ExpenseItem";

function renderExpenseItem(itemData) {
  return <ExpenesItem {...itemData.item}></ExpenesItem>;
}
function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpensesList;
