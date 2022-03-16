import { useEffect, useState } from "react";
import github from "../api/github";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErroMessage] = useState("");
  const searchUser = async () => {
    console.log("Hi there!");
    try {
      const response = await github.get(`/users`, {
        params: { per_page: 5 },
      });
      setResults(response.data);
    } catch (error) {
      setErroMessage(error.message);
    }
  };
  useEffect(() => {
    searchUser();
  }, []);
  return [searchUser, results, errorMessage];
};
