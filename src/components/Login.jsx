import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const LoginPage = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState("");
  const registerData = useSelector((store) => store.user);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [show, setShow] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const handlePassword = () => {
    setShow((prev) => !prev);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const registeredUser = registerData.find(
        (user) => user.email === formData.email
      );

      if (registeredUser && registeredUser.password === formData.password) {
        alert("User login Successfully");
        navigate("/home");
      } else {
        alert("Invalid email or password");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[90%] max-w-md p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Login Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mt-2">
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
            {errors.name && <div className="text-red-500">{errors.name}</div>}

            <label
              htmlFor="password"
              className="block text-sm font-medium mt-4"
            >
              Password:
            </label>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
              <span
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                onClick={handlePassword}
              >
                {!show ? (
                  <AiFillEyeInvisible size={24} color="black" />
                ) : (
                  <AiFillEye size={24} color="black" />
                )}
              </span>
            </div>
            {errors.password && (
              <div className="text-red-500">{errors.password}</div>
            )}
          </div>
          <button
            type="submit"
            className="bg-stone-950 text-white px-4 py-2 rounded-md hover:bg-stone-1000 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
