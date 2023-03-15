import api from "./apiConfig"

export const index = async () => {
  try {
    const response = await api.get("/api/network/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const create = async (NetworkData) => {
  try {
    const response = await api.post("/api/network/", NetworkData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const update = async (id, NetworkData) => {
  try {
    const response = await api.put(`/api/network/${id}/`, NetworkData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

  export const show = async (id, NetworkData) => {
    try {
      const response = await api.get(`/api/network/${id}/`, NetworkData);
      return response.data;
    } catch (error) {
      throw error;
    }
};