import axios from "axios";

const API_URL = "https://catfact.ninja/fact";

export const fetchData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
};

