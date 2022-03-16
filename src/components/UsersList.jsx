import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { ResultDetail } from "./ResultDetail";

export const UsersList = ({ results }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultDetail result={item} />;
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
