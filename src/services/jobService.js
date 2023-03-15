import api from "./apiConfig"

const index = async () => {
    try {
        const response = await api.get("/api/jobs/");
        return response.data;
    } catch (error) {
        throw error;
    }
}

const createJob = async (jobData) => {
    try {
        const response = await api.post("/api/jobs/", jobData);
        return response.data;
    } catch (error) {
        throw error;
    }
}

const updateJob = async (id, jobData) => {
    try {
        const response = await api.put(`/api/jobs/${id}/`, jobData);
        return response.data;
    } catch (error) {
        throw error;
    }
}

const deleteJob = async (id) => {
    try {
        const response = await api.delete(`/api/jobs/${id}/`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

const showJob = async (id, jobData) => {
    try {
        const response = await api.get(`/api/jobs/${id}/`, jobData);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export { index, createJob, updateJob, deleteJob, showJob }