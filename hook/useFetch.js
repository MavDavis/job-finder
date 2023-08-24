import axios from "axios";
import { useEffect, useState } from "react";
import Rapid_Key from "@env";
const rapidapiKey = Rapid_API_key;
const useFetch = (endpoint) => {
  const [data, setDate] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const axios = require("axios");

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      query: "Python developer in Texas, USA",
      page: "1",
      num_pages: "1",
    },
    headers: {
      "X-RapidAPI-Key": rapidapiKey,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  // try {
  // 	const response = await axios.request(options);
  // 	console.log(response.data);
  // } catch (error) {
  // 	console.error(error);
  // }
};

export default useFetch;
