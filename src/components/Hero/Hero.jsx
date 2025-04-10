import React from "react";
import Image1 from "../../assets/hero/Bhringraj.png";
import Image2 from "../../assets/hero/Rosemary.png";
import Image3 from "../../assets/hero/TeaTree.png";
import Image4 from "../../assets/hero/RosemaryWater.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Bhringraj Hair Oil ",
    price: '200',
    description:
      "Bthingraj oil promotes hair growth, prevents dandruff and strengthens the roots. Regular use increases the scalp and reduces hair loss naturally. This Ayurvedic agent nourishes deeply, reinforcing brightness and volume. Experience the benefits of beaten oil for thick, healthy hair with your herbal goods, which makes the hair care really effective.",
  },
  {
    id: 2,
    img: Image2,
    title: "Rosemary Hair Oil ",
    price: '1200',

    description:
      "Rosemary hair oils increase circulation, stimulates hair growth. Its antioxidant properties prevent premature grams, while its antimicrobial nature fights dandruff. Regular use strengthens threads, reduces fractures. Unlock the benefit of daily hair oil for voluntary, healthy hair with this natural remedy, ensure long -lasting strength and shine spontaneously.",
  },
  {
    id: 3,
    img: Image3,
    title: "Tea tree shampoo",
    price: '900',

    description:
      "The shampoo of the tea tree soaked dandruff, itchy skulls and removed the build -up. Its fungicid properties tend to the roots and combat infection. Ideal for oily hair, this skull balances health, promotes freshness. For a revived, healthy varieties, experiences the power of the shampoo on the tea tree, keep your hair clean, strong and fresh every day.",
  },
  {
    id: 4,
    img: Image4,
    title: "Rosemary Water",
    price: '800',
    description:
      "Rosemary water increases hair growth, reduces dandruff and naturally strengthens roots. This improves the circulation in the scalp, prevents thinning. Regular use restores shine, ensures smooth, healthy thread. Experience the benefits of henna water for hair by incorporating this herbal shelf, unlocked its nutritious properties easily for beautiful, flexible locks.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <p>
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button
                      onClick={handleOrderPopup}
                      className="bg-gradient-to-r text- from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
  <div
    data-aos="zoom-in"
    data-aos-once="true"
    className="relative z-10"
  >
    <img
      src={data.img}
      alt=""
      className="object-cover mx-auto rounded-md shadow-lg hover:shadow-xl transition-all duration-300 h-96 "
    />
  </div>
</div>

              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
