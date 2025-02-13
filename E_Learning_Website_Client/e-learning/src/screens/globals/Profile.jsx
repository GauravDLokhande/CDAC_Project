import { useState, useEffect } from "react";
import { Camera } from "lucide-react"; // Import Camera icon from Lucide
import login_bg from "../../assets/login_bg.jpg";
import Navbar from "../../components/Navbar.jsx";

const Profile = () => {
  const [image, setImage] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await fetch("http://localhost:8080/api/profile/upload", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          alert("Profile picture uploaded successfully");
          const reader = new FileReader();
          reader.onload = () => setImage(reader.result);
          reader.readAsDataURL(file);
        } else {
          const errorText = await response.text();
          alert(`Failed to upload profile picture: ${errorText}`);
        }
      } catch (error) {
        console.error("Error uploading profile picture:", error);
        alert("Error uploading profile picture");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bio = document.getElementById("bio").value;
    const contactInfo = document.getElementById("contact_info").value;

    if (!firstName || !lastName) {
      alert("First and last names are required!");
      return;
    }

    const formData = new FormData();
    formData.append("userId", 1); // Replace with actual userId
    formData.append("bio", bio);
    formData.append("contactInfo", contactInfo);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);

    try {
      const response = await fetch("http://localhost:8080/api/profile/update", {
        method: "PUT",
        body: formData,
      });

      if (response.ok) {
        alert("Profile updated successfully!");
      } else {
        const errorText = await response.text();
        alert(`Failed to update profile: ${errorText}`);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Error updating profile");
    }
  };

  const fetchProfilePicture = async (filename) => {
    try {
      const response = await fetch(`http://localhost:8080/api/profile/image/${filename}`);
      if (response.ok) {
        const imageUrl = await response.text();
        setImage(imageUrl);
      } else {
        alert("Failed to fetch profile picture");
      }
    } catch (error) {
      console.error("Error fetching profile picture:", error);
      alert("Error fetching profile picture");
    }
  };

  useEffect(() => {
    fetchProfilePicture("default.jpg");
  }, []);

  return (
    <div className="relative min-h-screen w-full">
      <img
        src={login_bg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover filter blur-sm"
      />

      <div className="relative z-100">
        <Navbar />
      </div>

      <div className="relative z-10 flex max-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mt-10 w-[800px] m-auto bg-white/30 backdrop-blur-3xl rounded-lg p-8 shadow-2xl">
          <div className="mx-auto w-[600px]">
            <h1 className="lg:text-3xl md:text-2xl text-xl font-serif font-semibold mb-2 text-[#424874]">
              Profile
            </h1>
            <h2 className="text-sm mb-4 text-[#424874]">Create Profile</h2>

            {/* Profile Picture Upload */}
            <div className="flex flex-col items-center mb-6 relative">
              <label htmlFor="profilePic" className="cursor-pointer relative group">
                <div className="w-32 h-32 rounded-full border-4 border-[#424874] flex items-center justify-center overflow-hidden">
                  {image ? (
                    <img src={image} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <Camera color="#424874" size={24} />
                  )}
                </div>
                <input
                  type="file"
                  id="profilePic"
                  onChange={handleImageChange}
                  className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
                />
              </label>
            </div>

            {/* Profile Update Form */}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="firstName" className="block text-sm font-medium text-[#424874]">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full p-2 mt-1 border border-[#424874] rounded-lg"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="lastName" className="block text-sm font-medium text-[#424874]">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full p-2 mt-1 border border-[#424874] rounded-lg"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="bio" className="block text-sm font-medium text-[#424874]">
                  Bio
                </label>
                <textarea
                  id="bio"
                  className="w-full p-2 mt-1 border border-[#424874] rounded-lg"
                  rows="4"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="contact_info" className="block text-sm font-medium text-[#424874]">
                  Contact Info
                </label>
                <input
                  type="text"
                  id="contact_info"
                  className="w-full p-2 mt-1 border border-[#424874] rounded-lg"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-[#424874] text-white rounded-lg"
              >
                Update Profile
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
