import api from "./apiConfig"

const index = async () => {
    try {
        const response = await api.get("/api/badge/");
        return response.data;
    } catch (error) {
        throw error;
    }
}

export { index }