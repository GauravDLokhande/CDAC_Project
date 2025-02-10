import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ✅ UseNavigate at top level
import login_bg from "../assets/login_bg.jpg";

const Register = () => {
    const navigate = useNavigate(); // ✅ Initialize useNavigate outside handleSubmit

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "ROLE_STUDENT", // Stored as ROLE_STUDENT
        bio: "",
        contactInfo: "",
        profilePic: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const response = await axios.post("http://localhost:8080/user/createuser", {
                username: formData.username,
                email: formData.email,
                password: formData.password,
                role: formData.role, // Always "ROLE_STUDENT"
                bio: formData.bio,
                contactInfo: formData.contactInfo,
                profilePic: formData.profilePic,
            });

            console.log("Response from server:", response); // ✅ Debugging

            if (response.status === 200 || response.status === 201) {
                alert("User registered successfully!");
                navigate("/login"); // ✅ Navigate to login page
            } else {
                alert("Registration failed: " + (response.data.message || "Unknown error"));
            }
        } catch (error) {
            console.error("Error registering user:", error);

            if (error.response) {
                alert("Registration failed: " + (error.response.data.message || "Unknown error"));
            } else {
                alert("An error occurred. Please try again.");
            }
        }
    };

    return (
        <div className="relative min-h-screen w-full">
            <img
                src={login_bg}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover filter blur-xs"
            />
            <div className="flex items-center justify-center p-6">
                <div className="mx-auto w-full max-w-md">
                    <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-white/30 backdrop-blur-xl">
                        <div className="mb-4">
                            <label className="mb-2 block text-base font-medium text-black">Username</label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="Enter your username"
                                className="w-full rounded-md border border-gray-300 bg-white py-2 px-4"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="mb-2 block text-base font-medium text-black">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="w-full rounded-md border border-gray-300 bg-white py-2 px-4"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="mb-2 block text-base font-medium text-black">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                className="w-full rounded-md border border-gray-300 bg-white py-2 px-4"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="mb-2 block text-base font-medium text-black">Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Re-enter your password"
                                className="w-full rounded-md border border-gray-300 bg-white py-2 px-4"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="mb-2 block text-base font-medium text-black">Role</label>
                            <input
                                type="text"
                                value="Student" // Displayed as "Student"
                                disabled // Field is visible but cannot be edited
                                className="w-full rounded-md border border-gray-300 bg-gray-200 py-2 px-4 text-gray-600 cursor-not-allowed"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="mb-2 block text-base font-medium text-black">Bio</label>
                            <textarea
                                name="bio"
                                value={formData.bio}
                                onChange={handleChange}
                                placeholder="Tell us about yourself"
                                className="w-full rounded-md border border-gray-300 bg-white py-2 px-4"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="mb-2 block text-base font-medium text-black">Contact Info</label>
                            <input
                                type="number"
                                name="contactInfo"
                                value={formData.contactInfo}
                                onChange={handleChange}
                                placeholder="Enter your phone number"
                                className="w-full rounded-md border border-gray-300 bg-white py-2 px-4"
                            />
                        </div>

                        <button
                            type="submit"
                            className="hover:shadow-form w-full rounded-md bg-blue-600 py-2 px-8 text-white"
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
