import React from "react";
import Banner from "../../assets/website/orange-pattern.jpg";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "90%",
};

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="m-16 rounded-xl  bg-gray-100 dark:bg-gray-800 text-white shadow-lg"
      style={BannerImg}
    >
      <div className="container mx-auto px-6 py-12 backdrop-blur-sm">
        <div className="space-y-6 text-center sm:text-left">
          <h1 className="text-2xl sm:text-4xl font-bold text-center">
            Get Notified About New Products
          </h1>
          <p className="text-black text-sm sm:text-base">
            Sign up to our newsletter to receive grooming tips, style inspiration,
            exclusive access to pre-launch product pricing and more.
          </p>
          <div className="flex flex-col sm:flex-row text-centeritems-center gap-4 max-w-md mx-auto sm:mx-0">
            <input
              data-aos="fade-up"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button className="px-6 py-3 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
