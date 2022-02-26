import react from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export const SearchBar = () => {
  return (
    <View style={styles.background}>
      <Feather name="search" size={30} />
      <TextInput style={styles.inputStyle} placeholder='Search...'/>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#D1D1D1",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  inputStyle: {
    borderColor: "black",
    borderWidth: 1,
  },
});