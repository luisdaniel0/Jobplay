import api from "./apiConfig"

export const index = async () => {
  try {
    const response = await api.get("/api/skills/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createSkill = async (SkillData) => {
  try {
    const response = await api.post("/api/skills/", SkillData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const update = async (id, SkillData) => {
  try {
    const response = await api.put(`/api/skills/${id}/`, SkillData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

