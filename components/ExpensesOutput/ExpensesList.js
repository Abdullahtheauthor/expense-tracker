import { View, Text, FlatList } from "react-native";

function renderExpenseItem(itemData) {
  return <Text>{itemData.item.describtion}</Text>;
}
function ExpenesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpenesList;
