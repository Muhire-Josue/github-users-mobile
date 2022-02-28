import react from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export const SearchBar = ({term, onTermChange}) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconsStyle} />
      <TextInput style={styles.inputStyle} placeholder="Search..."
        value={term}
        onChangeText={newTerm => onTermChange(newTerm)}
        onTermSubmit={() => console.log('Term was submitted')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: "#D1D1D1",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconsStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});