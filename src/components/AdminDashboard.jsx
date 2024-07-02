import React, { useState, useEffect } from "react";
import apiService from "../services/apiService";

const AdminDashboard = () => {
    const [applications, setApplications] = useState([]);
    const [searchCriteria, setSearchCriteria] = useState("");
    const [filteredApplications, setFilteredApplications] = useState([]);

    useEffect(() => {
        async function fetchApplications() {
            const response = await apiService.getApplications();
            setApplications(response);
            setFilteredApplications(response);
        }
        fetchApplications();
    }, []);

    const handleSearch = (e) => {
        setSearchCriteria(e.target.value);
        const filtered = applications.filter(
            (app) =>
                app.fullName.includes(e.target.value) ||
                app.email.includes(e.target.value) ||
                app.phone.includes(e.target.value) ||
                app.jobTitle.includes(e.target.value)
        );
        setFilteredApplications(filtered);
    };

    const handleStatusChange = async (id, status) => {
        await apiService.updateApplicationStatus(id, status);
        const updatedApplications = applications.map((app) =>
            app.id === id ? { ...app, status } : app
        );
        setApplications(updatedApplications);
        setFilteredApplications(updatedApplications);
    };

    const exportToCSV = () => {
        // Implement export logic here
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search applications..."
                    value={searchCriteria}
                    onChange={handleSearch}
                    className="p-2 border border-gray-300 rounded w-full"
                />
            </div>
            <button
                className="mb-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={exportToCSV}
            >
                Export to CSV
            </button>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border">
                    <thead>
                        <tr>
                            {[
                                "Full Name",
                                "Email",
                                "Phone",
                                "Age",
                                "Gender",
                                "Sector",
                                "Organization",
                                "Job Title",
                                "Excel Knowledge",
                                "Laptop",
                                "Offline Attendance",
                                "Course Utility",
                                "Next Steps",
                                "Status",
                                "Actions",
                            ].map((header) => (
                                <th
                                    key={header}
                                    className="py-2 px-4 border-b border-gray-200 bg-gray-100"
                                >
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredApplications.map((app) => (
                            <tr key={app.id}>
                                {Object.values(app).map((value, index) => (
                                    <td
                                        key={index}
                                        className="py-2 px-4 border-b border-gray-200"
                                    >
                                        {value}
                                    </td>
                                ))}
                                <td className="py-2 px-4 border-b border-gray-200">
                                    <button
                                        className="bg-blue-500 text-white px-2 py-1 rounded mr-2 hover:bg-blue-600"
                                        onClick={() =>
                                            handleStatusChange(
                                                app.id,
                                                "Approved"
                                            )
                                        }
                                    >
                                        Approve
                                    </button>
                                    <button
                                        className="bg-red-500 text-white px-2 py-1 rounded mr-2 hover:bg-red-600"
                                        onClick={() =>
                                            handleStatusChange(app.id, "Denied")
                                        }
                                    >
                                        Deny
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminDashboard;
