import React, { useState, useEffect } from "react";
import apiService from "../services/apiService";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";

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
                app.courseUtility.includes(e.target.value)
        );
        setFilteredApplications(filtered);
    };

    const handleStatusChange = async (id, status) => {
        await apiService.updateApplicationStatus(id, status);
        const updatedApplications = applications.map((app) =>
            app._id === id ? { ...app, status } : app
        );
        setApplications(updatedApplications);
        setFilteredApplications(updatedApplications);
    };

    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(filteredApplications);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Applications");
        XLSX.writeFile(wb, "applications.xlsx");
    };

    const exportToCSV = () => {
        const ws = XLSX.utils.json_to_sheet(filteredApplications);
        const csv = XLSX.utils.sheet_to_csv(ws);
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        saveAs(blob, "applications.csv");
    };

    const getStatusStatistics = () => {
        const statusCount = filteredApplications.reduce((acc, app) => {
            acc[app.status] = (acc[app.status] || 0) + 1;
            return acc;
        }, {});
        return statusCount;
    };

    const statusStatistics = getStatusStatistics();

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
            <div className="mb-4 flex space-x-2">
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    onClick={exportToExcel}
                >
                    Export to Excel
                </button>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={exportToCSV}
                >
                    Export to CSV
                </button>
            </div>
            <div className="mb-4">
                <h3 className="text-xl font-semibold">
                    Application Statistics
                </h3>
                <ul>
                    {Object.entries(statusStatistics).map(([status, count]) => (
                        <li key={status}>
                            {status}: {count}
                        </li>
                    ))}
                </ul>
            </div>
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
                                "Created At",
                                "Last Modified At",
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
                            <tr key={app._id}>
                                <td className="py-2 px-4 border-b border-gray-200">
                                    {app.fullName}
                                </td>
                                <td className="py-2 px-4 border-b border-gray-200">
                                    {app.email}
                                </td>
                                <td className="py-2 px-4 border-b border-gray-200">
                                    {app.phone}
                                </td>
                                <td className="py-2 px-4 border-b border-gray-200">
                                    {app.age}
                                </td>
                                <td className="py-2 px-4 border-b border-gray-200">
                                    {app.gender}
                                </td>
                                <td className="py-2 px-4 border-b border-gray-200">
                                    {app.sector}
                                </td>
                                <td className="py-2 px-4 border-b border-gray-200">
                                    {app.organization}
                                </td>
                                <td className="py-2 px-4 border-b border-gray-200">
                                    {app.jobTitle}
                                </td>
                                <td className="py-2 px-4 border-b border-gray-200">
                                    {app.excelKnowledge}
                                </td>
                                <td className="py-2 px-4 border-b border-gray-200">
                                    {app.laptop}
                                </td>
                                <td className="py-2 px-4 border-b border-gray-200">
                                    {app.offlineAttendance}
                                </td>
                                <td className="py-2 px-4 border-b border-gray-200">
                                    {app.courseUtility}
                                </td>
                                <td className="py-2 px-4 border-b border-gray-200">
                                    {app.nextSteps}
                                </td>
                                <td className="py-2 px-4 border-b border-gray-200">
                                    {app.createdAt}
                                </td>
                                <td className="py-2 px-4 border-b border-gray-200">
                                    {app.modifiedAt}
                                </td>
                                <td className="py-2 px-4 border-b border-gray-200">
                                    {app.status}
                                </td>
                                <td className="py-2 px-4 border-b border-gray-200">
                                    <button
                                        className="bg-blue-500 text-white px-2 py-1 rounded mr-2 hover:bg-blue-600"
                                        onClick={() =>
                                            handleStatusChange(
                                                app._id,
                                                "Approved"
                                            )
                                        }
                                    >
                                        Approve
                                    </button>
                                    <button
                                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                        onClick={() =>
                                            handleStatusChange(
                                                app._id,
                                                "Denied"
                                            )
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
