const apiService = {
    submitApplication: async (data) => {
        const response = await fetch(
            "https://expert-memory-ppx6j65xj5rh5jg-5000.app.github.dev/api/applications",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        );
        return response.json();
    },
    getApplications: async () => {
        const response = await fetch(
            "https://expert-memory-ppx6j65xj5rh5jg-5000.app.github.dev/api/applications"
        );
        return response.json();
    },
    updateApplicationStatus: async (id, status) => {
        const response = await fetch(
            `https://expert-memory-ppx6j65xj5rh5jg-5000.app.github.dev/api/applications/${id}/status`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ status }),
            }
        );
        return response.json();
    },
};

export default apiService;
