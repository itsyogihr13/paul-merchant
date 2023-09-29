import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { logoutUser } from "./redux/action";
const Userpage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user);
  const handleHome = () => {
    navigate("/");
  };
  const handleLogout = () => {
    alert("User Successfull Logout");
    dispatch(logoutUser);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <h2 className="text-4xl font-bold mb-16 text-center text-stone-900">
          User Details
        </h2>
        {loggedInUser &&
          loggedInUser.map((el, index) => (
            <div key={index} className="flex flex-col items-center mb-6">
              <CgProfile size={64} color="black" className="mt-2" />
              <p className="text-2xl font-semibold text-gray-800 mb-6">
                {el.name}
              </p>

              <p className="text-lg font-medium text-gray-600 mt-4">
                Email: {el.email}
              </p>
            </div>
          ))}

        <button
          className="bg-stone-950 text-white w-full px-4 py-2 rounded-md hover:bg-stone-1000 transition duration-300"
          onClick={handleHome}
        >
          Go To Home
        </button>
        <button
          className="bg-stone-950 text-white px-4 py-2 rounded-md hover:bg-stone-1000 transition duration-300 mt-6"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Userpage;
