import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";

const Products = () => {
  const [searchParams] = useSearchParams();
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [sortBy, setSortBy] = useState("most-popular");
  const [showFilters, setShowFilters] = useState(false);

  const category = searchParams.get("category") || "casual";

  const colors = [
    { name: "Green", hex: "#00C12B" },
    { name: "Red", hex: "#F50606" },
    { name: "Yellow", hex: "#F5DD06" },
    { name: "Orange", hex: "#F57906" },
    { name: "Cyan", hex: "#06CAF5" },
    { name: "Blue", hex: "#063AF5" },
    { name: "Purple", hex: "#7D06F5" },
    { name: "Pink", hex: "#F506A4" },
    { name: "Black", hex: "#000000" },
  ];

  const sizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "3X-Large",
    "4X-Large",
  ];

  const products = [
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      price: 145,
      oldPrice: 242,
      discount: 40,
      rating: 3.5,
      image:
        "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=400&q=80",
    },
    {
      id: 2,
      name: "Polo with Tipping Details",
      price: 180,
      oldPrice: 242,
      discount: 20,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&q=80",
    },
    {
      id: 3,
      name: "Black Striped T-shirt",
      price: 120,
      oldPrice: 160,
      discount: 30,
      rating: 5.0,
      image:
        "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&q=80",
    },
    {
      id: 4,
      name: "Skinny Fit Jeans",
      price: 240,
      oldPrice: 260,
      discount: 20,
      rating: 3.5,
      image:
        "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80",
    },
    {
      id: 5,
      name: "Checkered Shirt",
      price: 180,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80",
    },
    {
      id: 6,
      name: "Sleeve Striped T-shirt",
      price: 130,
      oldPrice: 160,
      discount: 30,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&q=80",
    },
    {
      id: 7,
      name: "Vertical Striped Shirt",
      price: 212,
      oldPrice: 232,
      discount: 20,
      rating: 5.0,
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&q=80",
    },
    {
      id: 8,
      name: "Courage Graphic T-shirt",
      price: 145,
      rating: 4.0,
      image:
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80",
    },
    {
      id: 9,
      name: "Loose Fit Bermuda Shorts",
      price: 80,
      rating: 3.0,
      image:
        "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&q=80",
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="w-4 h-4" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
            fill="#FFC633"
          />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-4 h-4" viewBox="0 0 16 16" fill="none">
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="#FFC633" />
              <stop offset="50%" stopColor="#E5E5E5" />
            </linearGradient>
          </defs>
          <path
            d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
            fill="url(#half)"
          />
        </svg>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg
          key={`empty-${i}`}
          className="w-4 h-4"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
            fill="#E5E5E5"
          />
        </svg>
      );
    }

    return stars;
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
      <div className="py-5 border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-5 flex items-center gap-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <span>›</span>
          <span className="text-black font-medium capitalize">{category}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 py-6 grid grid-cols-1 lg:grid-cols-[295px_1fr] gap-6">
        {/* Filters Sidebar */}
        <aside
          className={`bg-white border border-gray-300 rounded-3xl p-6 h-fit lg:sticky lg:top-24 flex flex-col gap-6 ${
            showFilters
              ? "fixed top-0 left-0 w-full max-w-md h-screen z-50 overflow-y-auto"
              : "hidden lg:flex"
          }`}
        >
          <div className="flex justify-between items-center pb-5 border-b border-gray-300">
            <h2 className="text-xl font-bold">Filters</h2>
            <button
              className="lg:hidden p-1"
              onClick={() => setShowFilters(false)}
              aria-label="Close filters"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Categories */}
          <div className="flex flex-col gap-4">
            {["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map(
              (cat, i) => (
                <button
                  key={cat}
                  className={`flex justify-between items-center py-2 text-left text-[15px] ${
                    i === 0
                      ? "text-black font-semibold"
                      : "text-gray-600 hover:text-black hover:pl-2"
                  } transition-all`}
                >
                  <span>{cat}</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M6 4L10 8L6 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              )
            )}
          </div>

          {/* Price */}
          <div className="flex flex-col gap-4 pb-5 border-b border-gray-300">
            <h3 className="text-base font-bold">Price</h3>
            <div className="flex flex-col gap-4">
              <input
                type="range"
                min="0"
                max="200"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                className="w-full h-1.5 rounded-full bg-black appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-md"
              />
              <div className="flex justify-between text-sm font-semibold">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </div>

          {/* Colors */}
          <div className="flex flex-col gap-4 pb-5 border-b border-gray-300">
            <h3 className="text-base font-bold">Colors</h3>
            <div className="grid grid-cols-5 gap-3">
              {colors.map((color) => (
                <button
                  key={color.name}
                  className={`w-10 h-10 rounded-full border transition-all flex items-center justify-center ${
                    selectedColors.includes(color.name)
                      ? "border-2 border-black shadow-lg"
                      : "border-gray-300 hover:scale-110"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  onClick={() =>
                    setSelectedColors((prev) =>
                      prev.includes(color.name)
                        ? prev.filter((c) => c !== color.name)
                        : [...prev, color.name]
                    )
                  }
                  aria-label={color.name}
                >
                  {selectedColors.includes(color.name) && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8L6.5 11.5L13 5"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="flex flex-col gap-4 pb-5 border-b border-gray-300">
            <h3 className="text-base font-bold">Size</h3>
            <div className="grid grid-cols-2 gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`py-2.5 px-3 rounded-full text-[13px] font-medium text-center transition-all ${
                    selectedSizes.includes(size)
                      ? "bg-black text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  onClick={() =>
                    setSelectedSizes((prev) =>
                      prev.includes(size)
                        ? prev.filter((s) => s !== size)
                        : [...prev, size]
                    )
                  }
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button className="px-4 py-4 bg-black text-white rounded-full text-[15px] font-semibold hover:-translate-y-1 hover:shadow-xl transition-all mt-2">
            Apply Filter
          </button>
        </aside>

        {/* Products Main */}
        <main className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold capitalize">{category}</h1>
            <div className="flex justify-between items-center flex-wrap gap-4">
              <p className="text-sm text-gray-600">
                Showing 1-10 of 100 Products
              </p>
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-600">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 pr-8 bg-gray-100 rounded-full text-sm font-medium cursor-pointer"
                >
                  <option value="most-popular">Most Popular</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
              <button
                className="lg:hidden flex items-center gap-2 px-5 py-2.5 bg-gray-100 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors"
                onClick={() => setShowFilters(true)}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M4 6H16M6 10H14M8 14H12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                Filters
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="flex flex-col gap-3 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="w-full h-80 rounded-3xl overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-bold">{product.name}</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-[13px] font-medium">
                      {product.rating}/5
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold">${product.price}</span>
                    {product.oldPrice && (
                      <>
                        <span className="text-xl font-bold text-gray-400 line-through">
                          ${product.oldPrice}
                        </span>
                        <span className="bg-red-100 text-red-600 px-2.5 py-1 rounded-full text-[11px] font-semibold">
                          -{product.discount}%
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center pt-6 border-t border-gray-300 mt-5 flex-wrap gap-4">
            <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M12.5 15L7.5 10L12.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              Previous
            </button>

            <div className="flex items-center gap-2 flex-wrap justify-center">
              <button className="w-10 h-10 flex items-center justify-center rounded-lg text-sm font-medium bg-black text-white">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                3
              </button>
              <span>...</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                8
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                9
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                10
              </button>
            </div>

            <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
              Next
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </main>
      </div>
    </motion.div>
  );
};

export default Products;
