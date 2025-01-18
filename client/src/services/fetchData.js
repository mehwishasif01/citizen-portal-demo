import apiClient from "../apiClient";

export const fetchCategories = async () => {
  const { data } = await apiClient.get("/categories");
  return data;
};

export const fetchQuestionsByCategory = async (category) => {
  const { data } = await apiClient.get(`/questions?category=${category}`);
  return data;
};
