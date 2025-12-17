import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [username, setUsername] = useState("");
  const [showShopDropdown, setShowShopDropdown] = useState(false);
  const navigate = useNavigate();

  // Get cart count from Redux
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Check if user is logged in
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${searchQuery}`);
      setSearchQuery("");
      setIsMenuOpen(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUsername("");
    alert("Logged out successfully!");
    navigate("/");
  };

  return (
    <>
      {/* Promo Banner */}
      <div className="bg-black text-white text-center py-2.5 px-5 text-sm">
        <p className="m-0">
          Sign up and get 20% off to your first order.{" "}
          <Link
            to="/signup"
            className="text-white underline font-semibold ml-2 hover:opacity-80 transition-opacity"
          >
            Sign Up Now
          </Link>
        </p>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white border-b border-gray-300 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-5 py-5 flex items-center justify-between gap-10">
          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-extrabold text-black whitespace-nowrap hover:scale-105 transition-transform tracking-tight cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            SHOP.CO
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex list-none gap-6 items-center">
            {/* Shop Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setShowShopDropdown(true)}
              onMouseLeave={() => setShowShopDropdown(false)}
            >
              <button className="bg-transparent text-black text-[15px] font-medium flex items-center gap-1 py-2 hover:text-gray-600 transition-colors">
                Shop
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  className="transition-transform"
                >
                  <path
                    d="M1 1L6 6L11 1"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {showShopDropdown && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-200 py-2 min-w-50 z-50">
                  <Link
                    to="/products?category=men"
                    className="block px-4 py-3 text-sm hover:bg-gray-100 transition-colors"
                    onClick={() => setShowShopDropdown(false)}
                  >
                    Men's Clothing
                  </Link>
                  <Link
                    to="/products?category=women"
                    className="block px-4 py-3 text-sm hover:bg-gray-100 transition-colors"
                    onClick={() => setShowShopDropdown(false)}
                  >
                    Women's Clothing
                  </Link>
                  <Link
                    to="/products?category=accessories"
                    className="block px-4 py-3 text-sm hover:bg-gray-100 transition-colors"
                    onClick={() => setShowShopDropdown(false)}
                  >
                    Accessories
                  </Link>
                  <Link
                    to="/products"
                    className="block px-4 py-3 text-sm hover:bg-gray-100 transition-colors border-t border-gray-200"
                    onClick={() => setShowShopDropdown(false)}
                  >
                    View All Products
                  </Link>
                </div>
              )}
            </li>

            {/* On Sale */}
            <li>
              <Link
                to="/products?filter=on-sale"
                className="text-black text-[15px] font-medium py-2 hover:text-gray-600 transition-colors"
              >
                On Sale
              </Link>
            </li>

            {/* ✅ NEW ARRIVALS - CHANGED TO PRODUCT DETAIL */}
            <li>
              <Link
                to="/product/1"
                className="text-black text-[15px] font-medium py-2 hover:text-gray-600 transition-colors"
              >
                New Arrivals
              </Link>
            </li>

            {/* ✅ BRANDS - KEPT AS PRODUCTS FILTER */}
            <li>
              <Link
                to="/products?filter=brands"
                className="text-black text-[15px] font-medium py-2 hover:text-gray-600 transition-colors"
              >
                Brands
              </Link>
            </li>
          </ul>

          {/* Search Bar */}
          <form
            className="hidden md:flex flex-1 max-w-lg relative"
            onSubmit={handleSearch}
          >
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
                stroke="#666"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-3 px-4 pl-12 bg-gray-100 rounded-full text-[15px] placeholder-gray-600 focus:bg-gray-200 focus:shadow-[0_0_0_3px_rgba(0,0,0,0.05)] transition-all outline-none"
            />
          </form>

          {/* Icons */}
          <div className="flex items-center gap-3.5">
            {/* Cart Icon */}
            <Link
              to="/cart"
              className="relative bg-transparent text-black p-2 rounded-full hover:bg-gray-100 hover:scale-110 transition-all flex items-center justify-center"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {cartCount > 0 && (
                <span className="absolute top-0.5 right-0.5 bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-4.5 text-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* User Icon with Dropdown */}
            {username ? (
              <div className="relative group">
                <button className="bg-transparent text-black p-2 rounded-full hover:bg-gray-100 transition-all flex items-center gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle
                      cx="12"
                      cy="8"
                      r="5"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M3 21C3 17.134 7.029 14 12 14C16.971 14 21 17.134 21 21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="hidden lg:block text-sm font-medium">
                    {username}
                  </span>
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    className="hidden lg:block"
                  >
                    <path
                      d="M1 1L6 6L11 1"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all overflow-hidden">
                  <Link
                    to="/profile"
                    className="block px-4 py-3 text-sm hover:bg-gray-100 transition-colors"
                  >
                    👤 My Profile
                  </Link>
                  <Link
                    to="/orders"
                    className="block px-4 py-3 text-sm hover:bg-gray-100 transition-colors"
                  >
                    📦 My Orders
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors border-t border-gray-200"
                  >
                    🚪 Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-transparent text-black p-2 rounded-full hover:bg-gray-100 hover:scale-110 transition-all flex items-center justify-center"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="8"
                    r="5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M3 21C3 17.134 7.029 14 12 14C16.971 14 21 17.134 21 21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </Link>
            )}

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden flex flex-col gap-1.5 bg-transparent p-2 cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`w-6 h-0.5 bg-black rounded transition-all ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-black rounded transition-all ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-black rounded transition-all ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden bg-white transition-all duration-300 ${
            isMenuOpen ? "max-h-125 border-t border-gray-300" : "max-h-0"
          }`}
        >
          <ul className="list-none p-5">
            {username && (
              <li className="border-b border-gray-300 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="bg-gray-100 rounded-full p-2"
                  >
                    <circle
                      cx="12"
                      cy="8"
                      r="5"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M3 21C3 17.134 7.029 14 12 14C16.971 14 21 17.134 21 21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div>
                    <p className="font-bold text-black">{username}</p>
                    <button
                      onClick={handleLogout}
                      className="text-sm text-red-600 hover:underline"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </li>
            )}

            {/* Shop Link */}
            <li className="border-b border-gray-300">
              <Link
                to="/products"
                onClick={() => setIsMenuOpen(false)}
                className="block py-4 text-base font-medium text-black hover:text-gray-600 hover:pl-2.5 transition-all"
              >
                Shop
              </Link>
            </li>

            {/* On Sale Link */}
            <li className="border-b border-gray-300">
              <Link
                to="/products?filter=on-sale"
                onClick={() => setIsMenuOpen(false)}
                className="block py-4 text-base font-medium text-black hover:text-gray-600 hover:pl-2.5 transition-all"
              >
                On Sale
              </Link>
            </li>

            {/* ✅ NEW ARRIVALS - MOBILE - CHANGED TO PRODUCT DETAIL */}
            <li className="border-b border-gray-300">
              <Link
                to="/product/1"
                onClick={() => setIsMenuOpen(false)}
                className="block py-4 text-base font-medium text-black hover:text-gray-600 hover:pl-2.5 transition-all"
              >
                New Arrivals
              </Link>
            </li>

            {/* ✅ BRANDS - MOBILE - KEPT AS PRODUCTS FILTER */}
            <li className="border-b border-gray-300">
              <Link
                to="/products?filter=brands"
                onClick={() => setIsMenuOpen(false)}
                className="block py-4 text-base font-medium text-black hover:text-gray-600 hover:pl-2.5 transition-all"
              >
                Brands
              </Link>
            </li>

            {!username && (
              <li className="pt-4">
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 text-center bg-black text-white rounded-full font-semibold hover:scale-105 transition-transform"
                >
                  Login / Sign Up
                </Link>
              </li>
            )}
          </ul>

          {/* Mobile Search */}
          <form className="px-5 pb-5 flex gap-2.5" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 py-3 px-4 border border-gray-300 rounded-lg text-[15px] outline-none focus:border-black transition-colors"
            />
            <button
              type="submit"
              className="py-3 px-6 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
