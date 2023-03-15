import api from "./apiConfig";


export const getProfile = async (id) => {
  try {
    const response = await api.get(`/api/profiles/id/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

