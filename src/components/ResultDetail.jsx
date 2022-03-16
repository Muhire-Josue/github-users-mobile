import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

export const ResultDetail = ({ result }) => {
  return (
    <View style={style.container}>
      <Image style={style.image} source={{ uri: result.avatar_url }} />
      <Text style={style.login}>{result.login}</Text>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 5,
  },
  login: {
    fontWeight: "bold",
    fontSize: 14,
  },
});