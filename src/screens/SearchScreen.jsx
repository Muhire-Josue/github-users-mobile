import react from 'react';
import { View, Text } from 'react-native';
import { SearchBar } from "../components/SearchBar";

export const SearchScreen = () => {
  return (
    <View>
      <SearchBar />
      <Text>Search....</Text>
    </View>
  )
}
