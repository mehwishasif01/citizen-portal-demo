import apiClient from "../utils/apiClient";

export const sendMessage = async (questionData) => {
  const { data } = await apiClient.post("/chatbot/", questionData);
  return data;
};
