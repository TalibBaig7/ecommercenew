import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [promoCode, setPromoCode] = useState("");

  // Track current image index for each cart item
  const [imageIndices, setImageIndices] = useState({});

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.2;
  const deliveryFee = cartItems.length > 0 ? 15 : 0;
  const total = subtotal - discount + deliveryFee;

  // Function to change image for a specific cart item
  const changeImage = (itemIndex, direction) => {
    setImageIndices((prev) => {
      const currentIndex = prev[itemIndex] || 0;
      const item = cartItems[itemIndex];
      const totalImages = item.images ? item.images.length : 1;

      let newIndex;
      if (direction === "next") {
        newIndex = (currentIndex + 1) % totalImages;
      } else {
        newIndex = (currentIndex - 1 + totalImages) % totalImages;
      }

      return { ...prev, [itemIndex]: newIndex };
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-white"
    >
      {/* Breadcrumb */}
      <div className="py-4 md:py-5 border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-5 flex items-center gap-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <span>›</span>
          <span className="text-black font-medium">Cart</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 py-6 md:py-10">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 md:mb-8">
          YOUR CART
        </h1>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 md:py-20 text-center gap-6">
            <svg
              width="100"
              height="100"
              className="md:w-30 md:h-30"
              viewBox="0 0 120 120"
              fill="none"
            >
              <circle cx="60" cy="60" r="60" fill="#F0F0F0" />
              <path
                d="M30 40H36L44 70H80L88 40H94M44 80C44 82.2091 42.2091 84 40 84C37.7909 84 36 82.2091 36 80C36 77.7909 37.7909 76 40 76C42.2091 76 44 77.7909 44 80ZM84 80C84 82.2091 82.2091 84 80 84C77.7909 84 76 82.2091 76 80C76 77.7909 77.7909 76 80 76C82.2091 76 84 77.7909 84 80Z"
                stroke="#9CA3AF"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h2 className="text-2xl md:text-3xl font-bold">
              Your cart is empty
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-md">
              Looks like you haven't added anything to your cart yet
            </p>
            <Link
              to="/products"
              className="inline-block px-10 md:px-14 py-3 md:py-4 bg-black text-white rounded-full text-sm md:text-base font-semibold hover:-translate-y-1 hover:scale-105 hover:shadow-2xl transition-all mt-4"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_400px] gap-5 md:gap-6 items-start">
            {/* Cart Items */}
            <div className="flex flex-col gap-3 md:gap-4 bg-white border border-gray-300 rounded-2xl md:rounded-3xl p-4 md:p-6">
              {cartItems.map((item, index) => {
                const currentImageIndex = imageIndices[index] || 0;
                const displayImage = item.images
                  ? item.images[currentImageIndex]
                  : item.image;
                const hasMultipleImages = item.images && item.images.length > 1;

                return (
                  <div
                    key={`${item.id}-${index}`}
                    className="flex flex-col sm:flex-row gap-3 md:gap-4 p-3 md:p-4 rounded-xl md:rounded-2xl hover:bg-gray-50 transition-colors border-b border-gray-200 last:border-0"
                  >
                    {/* Product Image with Carousel - RESPONSIVE */}
                    <div className="relative w-full sm:w-24 md:w-28 lg:w-32 h-32 sm:h-24 md:h-28 lg:h-32 shrink-0 rounded-xl overflow-hidden bg-gray-100 group">
                      <motion.img
                        key={currentImageIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        src={displayImage}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />

                      {/* Image Navigation Arrows (Only if multiple images) */}
                      {hasMultipleImages && (
                        <>
                          {/* Previous Button */}
                          <button
                            onClick={() => changeImage(index, "prev")}
                            className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                            aria-label="Previous image"
                          >
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M10 12L6 8L10 4"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>

                          {/* Next Button */}
                          <button
                            onClick={() => changeImage(index, "next")}
                            className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                            aria-label="Next image"
                          >
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M6 12L10 8L6 4"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>

                          {/* Image Indicator Dots */}
                          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1">
                            {item.images.map((_, imgIndex) => (
                              <button
                                key={imgIndex}
                                onClick={() =>
                                  setImageIndices((prev) => ({
                                    ...prev,
                                    [index]: imgIndex,
                                  }))
                                }
                                className={`w-1 h-1 rounded-full transition-all ${
                                  currentImageIndex === imgIndex
                                    ? "bg-white w-3"
                                    : "bg-white/50"
                                }`}
                                aria-label={`View image ${imgIndex + 1}`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 flex flex-col gap-2 md:gap-3">
                      {/* Title & Remove Button */}
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="text-base md:text-lg font-bold flex-1 leading-tight">
                          {item.name}
                        </h3>
                        <button
                          onClick={() => dispatch(removeFromCart(index))}
                          className="p-1 hover:scale-110 transition-transform text-red-600 hover:text-red-700 shrink-0"
                          aria-label="Remove item"
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M3 6H21M8 6V4C8 3.44772 8.44772 3 9 3H15C15.5523 3 16 3.44772 16 4V6M19 6V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V6H19Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>

                      {/* Color & Size */}
                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {/* Size Badge */}
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs md:text-sm text-gray-600">
                            Size:
                          </span>
                          <span className="bg-gray-100 px-2.5 py-0.5 rounded-full text-xs md:text-sm font-semibold text-black">
                            {item.selectedSize}
                          </span>
                        </div>

                        {/* Color with Circle */}
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs md:text-sm text-gray-600">
                            Color:
                          </span>
                          <div className="flex items-center gap-1.5">
                            <span
                              className="w-5 h-5 rounded-full border-2 border-gray-300 shadow-sm"
                              style={{
                                backgroundColor:
                                  item.selectedColor?.hex || "#000",
                              }}
                            ></span>
                            <span className="text-xs md:text-sm font-semibold text-black">
                              {item.selectedColor?.name || "Default"}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Price & Quantity */}
                      <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 mt-auto">
                        {/* Quantity Control */}
                        <div className="flex items-center justify-between sm:justify-start gap-3 md:gap-5 bg-gray-100 px-3 md:px-5 py-2 md:py-3 rounded-full">
                          <button
                            onClick={() =>
                              dispatch(
                                updateQuantity({
                                  index,
                                  quantity: item.quantity - 1,
                                })
                              )
                            }
                            className="hover:scale-125 transition-transform disabled:opacity-50"
                            disabled={item.quantity <= 1}
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                d="M5 10H15"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                            </svg>
                          </button>
                          <span className="text-sm md:text-base font-semibold min-w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              dispatch(
                                updateQuantity({
                                  index,
                                  quantity: item.quantity + 1,
                                })
                              )
                            }
                            className="hover:scale-125 transition-transform"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                d="M10 5V15M5 10H15"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                            </svg>
                          </button>
                        </div>

                        {/* Total Price */}
                        <div className="text-xl md:text-2xl font-bold text-center sm:text-left">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Order Summary - Sticky Sidebar */}
            <div className="bg-white border border-gray-300 rounded-2xl md:rounded-3xl p-5 md:p-6 flex flex-col gap-4 md:gap-5 lg:sticky lg:top-24">
              <h2 className="text-xl md:text-2xl font-bold">Order Summary</h2>

              {/* Subtotal */}
              <div className="flex justify-between items-center text-sm md:text-base">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-bold text-black">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              {/* Discount */}
              <div className="flex justify-between items-center text-sm md:text-base">
                <span className="text-gray-600">Discount (-20%)</span>
                <span className="font-bold text-red-600">
                  -${discount.toFixed(2)}
                </span>
              </div>

              {/* Delivery Fee */}
              <div className="flex justify-between items-center text-sm md:text-base">
                <span className="text-gray-600">Delivery Fee</span>
                <span className="font-bold text-black">
                  ${deliveryFee.toFixed(2)}
                </span>
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-300 my-1 md:my-2"></div>

              {/* Total */}
              <div className="flex justify-between items-center text-lg md:text-xl">
                <span className="font-bold text-black">Total</span>
                <span className="font-bold text-black">
                  ${total.toFixed(2)}
                </span>
              </div>

              {/* Promo Code */}
              <div className="flex gap-2 md:gap-3 pt-2 md:pt-3">
                <div className="flex-1 relative flex items-center">
                  <svg
                    className="absolute left-3 md:left-4 pointer-events-none"
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M8 3H3V8L10 15L17 8L10 3H8Z"
                      stroke="#9CA3AF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="6" cy="6" r="1" fill="#9CA3AF" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Add promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="w-full py-2.5 md:py-3.5 pl-10 md:pl-12 pr-3 md:pr-4 bg-gray-100 rounded-full text-sm md:text-[15px] placeholder-gray-600 focus:bg-gray-200 transition-all outline-none"
                  />
                </div>
                <button className="px-4 md:px-6 py-2.5 md:py-3.5 bg-black text-white rounded-full text-sm md:text-[15px] font-semibold hover:scale-105 transition-transform whitespace-nowrap">
                  Apply
                </button>
              </div>

              {/* Checkout Button */}
              <button className="w-full px-4 py-3 md:py-4 bg-black text-white rounded-full text-sm md:text-base font-semibold flex items-center justify-center gap-2 md:gap-3 hover:-translate-y-1 hover:shadow-2xl transition-all mt-2">
                Go to Checkout
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M7.5 15L12.5 10L7.5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Cart;
