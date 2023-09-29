import React, { useState } from "react";
import { validateEmail, validateMobileNumber } from "./FormValidation";
import { useDispatch } from "react-redux";
import { loginUser } from "./redux/action";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    Mobile_number: "",
    age: "",
  });
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!validateMobileNumber(formData.Mobile_number)) {
      newErrors.Mobile_number = "Invalid mobile number format";
    }

    if (!formData.age) {
      newErrors.age = "Invalid age format";
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
      alert("User Registred successfully");
      navigate("/login");
      dispatch(loginUser(formData));
    }
  };
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-md shadow-md w-[90%] md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-semibold mb-4">Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
            {errors.name && <div className="text-red-500">{errors.name}</div>}
            <label htmlFor="email" className="block text-sm font-medium mt-4">
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
            {errors.email && <div className="text-red-500">{errors.email}</div>}
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
                {show ? (
                  <AiFillEyeInvisible size={24} color="black" />
                ) : (
                  <AiFillEye size={24} color="black" />
                )}
              </span>
            </div>

            {errors.password && (
              <div className="text-red-500">{errors.password}</div>
            )}

            <label
              htmlFor="Mobile_number"
              className="block text-sm font-medium mt-4"
            >
              Mobile number:
            </label>
            <input
              type="number"
              id="Mobile_number"
              name="Mobile_number"
              value={formData.Mobile_number}
              onChange={handleInputChange}
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
            {errors.Mobile_number && (
              <div className="text-red-500">{errors.Mobile_number}</div>
            )}
            <label htmlFor="age" className="block text-sm font-medium mt-4">
              Age:
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
            {errors.age && <div className="text-red-500">{errors.age}</div>}
          </div>
          <button
            type="submit"
            className="bg-stone-950 text-white px-4 py-2 rounded-md hover:bg-stone-1000 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
