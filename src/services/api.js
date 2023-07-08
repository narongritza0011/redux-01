import axios from "axios";
// const URL = "https://animals-3a6fqd6fv-narongritza0011.vercel.app";
const URL = "http://localhost:4001";


export const authLogin = async (values) => {
  try {
    const response = await axios.post(`${URL}/api/v1/login`,  values );
    return await response.json;
  } catch (error) {
    
    return await error;
  }
};

export const authLogin1 = async (values, event) => {
  const response = await fetch("http://localhost:3001/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });
  return await response.json();
};

export const signup = async (formData) => {
  const response = await fetch("http://localhost:3001/auth/register", {
    method: "POST",
    body: formData,
  });
  return await response.json();
};
