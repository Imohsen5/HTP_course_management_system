const backendUrl = process.env.REACT_APP_BACKEND_URL;

const handleErrors = async (response) => {
    if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response:", errorText);
        throw new Error(`Network response was not ok: ${errorText}`);
    }
    return response.json();
};

const apiService = {
    submitApplication: async (data) => {
        try {
            const response = await fetch(`${backendUrl}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            return handleErrors(response);
        } catch (error) {
            console.error("Error in submitApplication:", error);
            throw error;
        }
    },
    getApplications: async () => {
        try {
            const response = await fetch(`${backendUrl}`);
            return handleErrors(response);
        } catch (error) {
            console.error("Error in getApplications:", error);
            throw error;
        }
    },
    updateApplicationStatus: async (id, status) => {
        try {
            const response = await fetch(`${backendUrl}/${id}/status`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ status }),
            });
            return handleErrors(response);
        } catch (error) {
            console.error("Error in updateApplicationStatus:", error);
            throw error;
        }
    },
};

export default apiService;
