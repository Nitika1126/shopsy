import React, { useState } from "react";
import { useCart } from '../context/CartContext';
import { FaShoppingCart, FaHeart, FaCheckCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Img1 from "../../assets/women/BhringrajP.jpg";
import Img2 from "../../assets/women/RosemaryP.jpg";
import Img3 from "../../assets/women/TeaTreeP.jpg";
import Img4 from "../../assets/women/RosemaryWaterP.jpg";

export const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Bhringraj Hair Oil",
    price: 'Rs.900',
    rating: 4,
    aosDelay: "0",
    description: "Bthingraj oil promotes hair growth, prevents dandruff and strengthens the roots. Regular use increases the scalp and reduces hair loss naturally. This Ayurvedic agent nourishes deeply, reinforcing brightness and volume. Experience the benefits of beaten oil for thick, healthy hair with your herbal goods, which makes the hair care really effective."
  },
  {
    id: 2,
    img: Img2,
    title: "Rosemary Hair Oil",
    price: 'Rs.800',
    color: "Red",
    aosDelay: "200",
    description: "Rosemary hair oils increase circulation, stimulates hair growth. Its antioxidant properties prevent premature grams, while its antimicrobial nature fights dandruff. Regular use strengthens threads, reduces fractures. Unlock the benefit of daily hair oil for voluntary, healthy hair with this natural remedy, ensure long -lasting strength and shine spontaneously."
  },
  {
    id: 3,
    img: Img3,
    title: "Tea Tree Shampoo",
    price: 'Rs.700',
    color: "brown",
    aosDelay: "400",
    description: "The shampoo of the tea tree soaked dandruff, itchy skulls and removed the build -up. Its fungicid properties tend to the roots and combat infection. Ideal for oily hair, this skull balances health, promotes freshness. For a revived, healthy varieties, experiences the power of the shampoo on the tea tree, keep your hair clean, strong and fresh every day."
  },
  {
    id: 4,
    img: Img4,
    title: "RosemaryWater",
    price: 'Rs.600',
    color: "Yellow",
    aosDelay: "600",
    description: "Rosemary water increases hair growth, reduces dandruff and naturally strengthens roots. This improves the circulation in the scalp, prevents thinning. Regular use restores shine, ensures smooth, healthy thread. Experience the benefits of henna water for hair by incorporating this herbal shelf, unlocked its nutritious properties easily for beautiful, flexible locks."
  },
];

const Products = () => {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [addedItem, setAddedItem] = useState(null);
   const [selectedProduct, setSelectedProduct] = useState(null);
  const { cartItems, addToCart } = useCart();
  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = (e, product) => {
    e.stopPropagation(); // Prevent navigation when clicking the cart button
    addToCart(product);
    setAddedItem(product);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 5000);
  };

  const handleWishlist = (e, product) => {
    e.stopPropagation(); // Prevent navigation when clicking the wishlist button
    if (wishlist.find(item => item.id === product.id)) {
      setWishlist(wishlist.filter(item => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  const handleProductClick = (e, data) => {
    e.stopPropagation(); 
    navigate(`/product/${data.id}`);
    setSelectedProduct(data);
    setShowModal(true);
  };

  return (
    <div className="mt-14 mb-12 relative">
      {showPopup && addedItem && (
        <div className="fixed top-4 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg shadow-lg z-50 animate-fade-in-down flex items-center gap-2">
          <FaCheckCircle className="text-green-500" />
          <span>{addedItem.title} added to cart!</span>
        </div>
      )}


{showModal && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-2xl w-full relative">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
            >
              
            </button>
            <div className="flex flex-col gap-6">
              <img 
                src={selectedProduct.img} 
                alt={selectedProduct.title}
                className="w-full h-[300px] object-cover rounded-xl" 
              />
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {selectedProduct.title}
                </h3>
                <p className="text-xl font-bold text-orange-500 mb-4">
                  {selectedProduct.price}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {selectedProduct.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Product
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
       
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 place-items-center gap-12">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              className="bg-white cursor-pointer h-full rounded-2xl p-4 w-[335px] shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl relative group"
            >
              <div onClick={(e) => handleProductClick(e, data)}>
                <img 
                  src={data.img} 
                  alt={data.title} 
                  className="p-1 rounded-2xl object-cover w-full "
                />
              </div>
              <p className="text-xl font-bold text-orange-500 mb-2 text-center ">{data.price}</p>
              <div className="text-center">
                <h3 className="font-semibold text-gray-800 text-xl mb-2">{data.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {data.description.substring(0, 30) + '...'}
                </p>
                  <div className="flex justify-center gap-3">
                    <button 
                      onClick={(e) => handleAddToCart(e, data)}
                      className="bg-orange-400 text-white py-2 px-6 rounded-full transition-all duration-300 hover:bg-orange-500 flex items-center gap-2"
                    >
                      <FaShoppingCart />
                      <span>Add to Cart</span>
                    </button>
                    <button 
                      onClick={(e) => handleWishlist(e, data)}
                      className={`p-2 rounded-full transition-all duration-300 ${
                        wishlist.find(item => item.id === data.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-200 text-gray-600 hover:bg-red-500 hover:text-white'
                      }`}
                    >
                      <FaHeart />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div> 
        </div>
      </div>
    
  );
};

export default Products;