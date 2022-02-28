import react, { useState } from 'react';
import { View, Text } from 'react-native';
import { SearchBar } from "../components/SearchBar";
import github from '../api/github';
export const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [users, setUsers] = useState([]);
  return (
    <View>
      <SearchBar term={users} onTermChange={(newTerm) => setTerm(newTerm)} />
      <Text>Search....</Text>
      <Text>{users.length}</Text>
    </View>
  );
}
