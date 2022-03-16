import React from "react";
import { Text } from "react-native";
// import { useNavigation } from "@react-navigation/native";

export const ShowResult = ({ route: { params } }) => {
  const { id } = params;
  return <Text>User ID: {id}</Text>;
};
