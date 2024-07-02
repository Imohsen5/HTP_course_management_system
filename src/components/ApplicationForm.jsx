import React, { useState } from "react";
import apiService from "../services/apiService";

const ApplicationForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        age: "",
        gender: "",
        sector: "",
        organization: "",
        jobTitle: "",
        excelKnowledge: "",
        laptop: "",
        offlineAttendance: "",
        courseUtility: "",
        nextSteps: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await apiService.submitApplication(formData);
        alert("Application submitted successfully");
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded shadow-md w-full max-w-lg"
            >
                <h2 className="text-2xl font-bold mb-6">
                    Course Application Form
                </h2>
                <div className="space-y-4">
                    <input
                        className="block w-full p-2 border border-gray-300 rounded"
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="block w-full p-2 border border-gray-300 rounded"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="block w-full p-2 border border-gray-300 rounded"
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="block w-full p-2 border border-gray-300 rounded"
                        type="number"
                        name="age"
                        placeholder="Age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="block w-full p-2 border border-gray-300 rounded"
                        type="text"
                        name="gender"
                        placeholder="Gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="block w-full p-2 border border-gray-300 rounded"
                        type="text"
                        name="sector"
                        placeholder="Sector"
                        value={formData.sector}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="block w-full p-2 border border-gray-300 rounded"
                        type="text"
                        name="organization"
                        placeholder="Organization"
                        value={formData.organization}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="block w-full p-2 border border-gray-300 rounded"
                        type="text"
                        name="jobTitle"
                        placeholder="Job Title"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="block w-full p-2 border border-gray-300 rounded"
                        type="text"
                        name="excelKnowledge"
                        placeholder="Excel Knowledge"
                        value={formData.excelKnowledge}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="block w-full p-2 border border-gray-300 rounded"
                        type="text"
                        name="laptop"
                        placeholder="Availability of Laptop"
                        value={formData.laptop}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="block w-full p-2 border border-gray-300 rounded"
                        type="text"
                        name="offlineAttendance"
                        placeholder="Offline Attendance"
                        value={formData.offlineAttendance}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="block w-full p-2 border border-gray-300 rounded"
                        type="text"
                        name="courseUtility"
                        placeholder="Course Utility"
                        value={formData.courseUtility}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="block w-full p-2 border border-gray-300 rounded"
                        type="text"
                        name="nextSteps"
                        placeholder="Next Steps"
                        value={formData.nextSteps}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button
                    className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ApplicationForm;
