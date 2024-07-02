import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ApplicationForm from "./components/ApplicationForm";
import AdminDashboard from "./components/AdminDashboard";
import "./App.css"; // Import any additional global styles
import "./index.css"; // Import Tailwind CSS

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen bg-gray-100">
                <header className="bg-blue-600 text-white p-4">
                    <h1 className="text-3xl font-bold">
                        Course Application Service
                    </h1>
                </header>
                <main className="flex-grow p-4">
                    <Routes>
                        <Route path="/" element={<ApplicationForm />} />
                        <Route path="/admin" element={<AdminDashboard />} />
                    </Routes>
                </main>
                <footer className="bg-blue-600 text-white p-4 text-center">
                    <p>© 2024 High Technology Park. All rights reserved.</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
