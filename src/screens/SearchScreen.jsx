import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResult from "../hook/useResult";
import { UsersList } from "../components/UsersList";
const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchUser, results, errorMessage] = useResult();
  return (
    <View style={{ flex: 1 }}>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchUser} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <UsersList results={results} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
