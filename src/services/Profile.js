import api from "./apiConfig";


export const getProfile = async (id) => {
  try {
    const response = await api.get(`/api/profiles/id/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateProfile = async (id, data) => {
  try {
    const response = await api.put(`/api/profiles/id/${id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

