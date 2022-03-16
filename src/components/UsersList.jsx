import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { ResultDetail } from "./ResultDetail";

export const UsersList = ({results}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FlatList
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("ShowResult", {id: item.id})}
            >
              <ResultDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: 5
  }
});
