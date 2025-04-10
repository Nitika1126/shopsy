import React, {useState} from "react";
import Cart from '../Cart/Cart.jsx';
import Logo from "../../assets/logo.jpeg";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "../Products/DarkMode.jsx";
import CartSidebar from "../CartSidebar/CartSidebar";
import { useNavigate } from "react-router-dom";
import { useCart } from '../context/CartContext';
import { ProductsData } from '../Products/Products';
import SearchBar from "../SearchBar/SearchBar.jsx";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "About Us",
    link: "/#services",
  },
  {
    id: 3,
    name: "Product",
    link: "/#",
  },
  {
    id: 4,
    name: "Contact",
    link: "/#",
  },
  {
    id: 5,
    name: "Blog",
    link: "/#",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const searchTerm = searchQuery.toLowerCase();
      const product = ProductsData.find(p => 
        p.title.toLowerCase().includes(searchTerm)
      );
      
      if (product) {
        navigate(`/product/${product.id}`);
      }
    }
  };

  return (
    <nav className="shadow-sm w-full">
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200  relative z-40">
        <CartSidebar 
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
        />
        
        {/* upper Navbar */}
        <div className="bg-primary/40 py-2">
          <div className="container flex justify-between items-center">
            {/* Logo */}
            <div>
              <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                <img src={Logo} alt="Logo" className="w-10" />
                Glority
              </a>
            </div>

            {/* Right Side Items */}
            <div className="flex items-center gap-4">
              {/* Search Bar */}
              <div className="w-[300px]">
                <SearchBar products={ProductsData} />
              </div>
              <div className="relative">
                <button 
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="hover:text-orange-500 transition-colors"
                >
                  <FaUser className="text-xl text-gray-700 dark:text-white" />
                </button>

                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link
                      to="/signup"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setShowProfileMenu(false)}
                    >
                      Sign Up
                    </Link>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setShowProfileMenu(false)}
                    >
                      Profile
                    </Link>
                  </div>
                )}
              </div>
              {/* Cart Button */}
              <div className="relative">
                <button
                  onClick={() => navigate("/cart")}
                  className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
                >
                  <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
                  {cartItems.length > 0 && (
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {cartItems.length}
                    </div>
                  )}
                </button>
              </div>

              {/* Darkmode Switch */}
              <div>
                <DarkMode />
              </div>
            </div>
          </div>
        </div>

        {/* lower Navbar */}
        <div data-aos="zoom-in" className="flex justify-center">
          <ul className="sm:flex hidden items-center gap-4">
            {Menu.map((data) => (
              <li key={data.id}>
                <a href={data.link} className="">
                  {data.name}
                </a>
              </li>
            ))}
            <li className="group relative cursor-pointer">
              <a href="#" className="flex items-center gap-[2px] py-2">
                Testimonial
              </a>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;