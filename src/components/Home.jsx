import React from "react";
import emailjs from "emailjs-com";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const images = [
  {
    img: "https://png.pngitem.com/pimgs/s/20-202889_man-kick-ball-png-transparent-png.png",
  },
  {
    img: "https://png.pngitem.com/pimgs/s/115-1154896_sports-png-hd-tennis-png-transparent-png.png",
  },
  {
    img: "https://png.pngitem.com/pimgs/s/20-202915_png-sport-transparent-png.png",
  },
  {
    img: "https://png.pngitem.com/pimgs/s/20-202889_man-kick-ball-png-transparent-png.png",
  },
  {
    img: "https://png.pngitem.com/pimgs/s/115-1154896_sports-png-hd-tennis-png-transparent-png.png",
  },
  {
    img: "https://png.pngitem.com/pimgs/s/20-202915_png-sport-transparent-png.png",
  },
  {
    img: "https://png.pngitem.com/pimgs/s/20-202889_man-kick-ball-png-transparent-png.png",
  },
  {
    img: "https://png.pngitem.com/pimgs/s/115-1154896_sports-png-hd-tennis-png-transparent-png.png",
  },
  {
    img: "https://png.pngitem.com/pimgs/s/20-202915_png-sport-transparent-png.png",
  },
];
export const Home = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      toname: "Abhishek Singh",
      email: formData.get("email"),
      mobile: formData.get("mobile"),
      message: formData.get("message"),
    };

    emailjs
      .send("service_5tzc55p", "template_lmdtvsn", data, "7xH4lD6URwHmc5Xhg")
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          alert("Email Sended Succesfully");
        },
        (error) => {
          console.error("Email sending failed:", error);
        }
      );
  };

  return (
    <div className="container mx-auto p-4">
      <h1
        onClick={() => navigate("/")}
        className="text-3xl font-bold mt-8 mb-4 cursor-pointer"
      >
        Home Page
      </h1>
      <div className="mb-8">
        <img
          src="https://wallpapercrafter.com/sizes/2560x1440/36947-Karlie-Kloss-Nike-weight-loss-relax-Fitness.jpg"
          alt="Hero Image"
          className="w-full"
        />
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4"> Heading</h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Consectetur, rerum?
        </p>
      </div>
      <div className="mb-8">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          arrows={true} // Set arrows to true
        >
          {images.map((el, index) => (
            <div key={index}>
              <img src={el.img} alt="img" />
            </div>
          ))}
        </Carousel>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4">Another Heading</h2>
        <p className="mb-4">
          More lorem ipsum text here. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptatibus vitae odio ex itaque sit temporibus ab
          quidem eaque nemo doloribus!
        </p>{" "}
        <br /> <br />
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="border border-gray-300 p-2 rounded mx-4 "
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="border border-gray-300 p-2 rounded mx-4"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mobile">Mobile:</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              required
              className="border border-gray-300 p-2 rounded mx-4"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mobile">Message:</label>
            <input
              type="text"
              id="message"
              name="message"
              required
              className="border border-gray-300 p-2 rounded mx-4"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
