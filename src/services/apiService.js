const backendUrl = process.env.REACT_APP_BACKEND_URL;

const apiService = {
    submitApplication: async (data) => {
        const response = await fetch(backendUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error("Network response was not ok. 1");
        return response.json();
    },
    getApplications: async () => {
        const response = await fetch(backendUrl);
        if (!response.ok) throw new Error("Network response was not ok. 2");
        return response.json();
    },
    updateApplicationStatus: async (id, status) => {
        const response = await fetch(`${backendUrl}/${id}/status`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ status }),
        });
        if (!response.ok) throw new Error("Network response was not ok. 3");
        return response.json();
    },
};

export default apiService;
