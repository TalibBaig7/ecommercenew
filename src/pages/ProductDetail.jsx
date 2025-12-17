import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState("Medium");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("reviews");
  const [mainImage, setMainImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedColor(0);
    setSelectedSize("Medium");
    setQuantity(1);
    setActiveTab("reviews");
    setMainImage(0);
  }, [id]);

  const product = {
    id: parseInt(id),
    name: "ONE LIFE GRAPHIC T-SHIRT",
    price: 260,
    oldPrice: 300,
    discount: 40,
    rating: 4.5,
    reviewCount: 451,
    description:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80",
    ],
    colors: [
      { name: "Olive Green", hex: "#4F5D2F" },
      { name: "Navy Blue", hex: "#1E3A5F" },
      { name: "Black", hex: "#000000" },
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
  };

  const reviews = [
    {
      name: "Samantha D.",
      rating: 5,
      date: "August 13, 2023",
      text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable.",
      verified: true,
    },
    {
      name: "Alex M.",
      rating: 4,
      date: "August 14, 2023",
      text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch.",
      verified: true,
    },
    {
      name: "Ethan R.",
      rating: 4,
      date: "August 15, 2023",
      text: "This t-shirt is a must-have for anyone who appreciates good design.",
      verified: true,
    },
    {
      name: "Olivia P.",
      rating: 4,
      date: "August 16, 2023",
      text: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt represents those principles.",
      verified: true,
    },
  ];

  const relatedProducts = [
    {
      id: 101,
      name: "Polo with Contrast Trims",
      price: 212,
      oldPrice: 242,
      image:
        "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&q=80",
    },
    {
      id: 102,
      name: "Gradient Graphic T-shirt",
      price: 145,
      image:
        "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=400&q=80",
    },
    {
      id: 103,
      name: "Polo with Tipping Details",
      price: 180,
      image:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80",
    },
    {
      id: 104,
      name: "Black Striped T-shirt",
      price: 120,
      oldPrice: 160,
      image:
        "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&q=80",
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="w-5 h-5" viewBox="0 0 22 22" fill="none">
          <path
            d="M11 0L13.4697 8.03647H21.8042L15.1673 13.0138L17.637 21.0503L11 16.073L4.36301 21.0503L6.83268 13.0138L0.195818 8.03647H8.53035L11 0Z"
            fill="#FFC633"
          />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-5 h-5" viewBox="0 0 22 22" fill="none">
          <defs>
            <linearGradient id="half-star">
              <stop offset="50%" stopColor="#FFC633" />
              <stop offset="50%" stopColor="#E5E5E5" />
            </linearGradient>
          </defs>
          <path
            d="M11 0L13.4697 8.03647H21.8042L15.1673 13.0138L17.637 21.0503L11 16.073L4.36301 21.0503L6.83268 13.0138L0.195818 8.03647H8.53035L11 0Z"
            fill="url(#half-star)"
          />
        </svg>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg
          key={`empty-${i}`}
          className="w-5 h-5"
          viewBox="0 0 22 22"
          fill="none"
        >
          <path
            d="M11 0L13.4697 8.03647H21.8042L15.1673 13.0138L17.637 21.0503L11 16.073L4.36301 21.0503L6.83268 13.0138L0.195818 8.03647H8.53035L11 0Z"
            fill="#E5E5E5"
          />
        </svg>
      );
    }

    return stars;
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[mainImage],
        images: product.images,
        selectedSize,
        selectedColor: product.colors[selectedColor],
        quantity,
      })
    );
    alert("Added to cart!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
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
          <Link to="/products" className="hover:text-black transition-colors">
            Shop
          </Link>
          <span>›</span>
          <Link
            to="/products?category=men"
            className="hover:text-black transition-colors"
          >
            Men
          </Link>
          <span>›</span>
          <span className="text-black font-medium">T-shirts</span>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-6 md:py-10">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
            {/* Images - RESPONSIVE FIX */}
            <div className="flex flex-col md:flex-row gap-4">
              {/* Thumbnail Images */}
              <div className="flex flex-row md:flex-col gap-3 md:gap-4 order-2 md:order-1 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setMainImage(index)}
                    className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-32 lg:w-32 lg:h-36 shrink-0 rounded-2xl md:rounded-3xl overflow-hidden border-2 transition-all ${
                      mainImage === index
                        ? "border-black shadow-lg scale-105"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Main Display Image */}
              <div className="flex-1 h-87.5 sm:h-112.5 md:h-125 lg:h-132.5 rounded-3xl overflow-hidden bg-gray-100 order-1 md:order-2">
                <motion.img
                  key={mainImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  src={product.images[mainImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col gap-4 md:gap-5">
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
                {product.name}
              </h1>

              <div className="flex items-center gap-3">
                <div className="flex gap-1">{renderStars(product.rating)}</div>
                <span className="text-sm font-medium">{product.rating}/5</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl md:text-3xl font-bold">
                  ${product.price}
                </span>
                <span className="text-2xl md:text-3xl font-bold text-gray-400 line-through">
                  ${product.oldPrice}
                </span>
                <span className="bg-red-100 text-red-600 px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-semibold">
                  -{product.discount}%
                </span>
              </div>

              <p className="text-sm md:text-base text-gray-600 leading-relaxed pb-4 md:pb-5 border-b border-gray-300">
                {product.description}
              </p>

              {/* Color Selection */}
              <div className="flex flex-col gap-3 pb-4 md:pb-5 border-b border-gray-300">
                <h3 className="text-sm font-semibold text-gray-600">
                  Select Colors
                </h3>
                <div className="flex gap-3">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      className={`w-9 h-9 md:w-10 md:h-10 rounded-full border transition-all flex items-center justify-center ${
                        selectedColor === index
                          ? "border-2 border-black shadow-lg ring-2 ring-offset-2 ring-black"
                          : "border-gray-300 hover:scale-110"
                      }`}
                      style={{ backgroundColor: color.hex }}
                      onClick={() => setSelectedColor(index)}
                      aria-label={color.name}
                    >
                      {selectedColor === index && (
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M3 8L6.5 11.5L13 5"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  Selected:{" "}
                  <span className="font-semibold text-black">
                    {product.colors[selectedColor].name}
                  </span>
                </p>
              </div>

              {/* Size Selection */}
              <div className="flex flex-col gap-3 pb-4 md:pb-5 border-b border-gray-300">
                <h3 className="text-sm font-semibold text-gray-600">
                  Choose Size
                </h3>
                <div className="flex gap-2 md:gap-3 flex-wrap">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`px-4 md:px-6 py-2.5 md:py-3 rounded-full text-sm font-medium transition-all ${
                        selectedSize === size
                          ? "bg-black text-white scale-105 shadow-lg"
                          : "bg-gray-100 hover:bg-gray-200"
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 md:pt-5">
                <div className="flex items-center justify-between sm:justify-start gap-5 bg-gray-100 px-5 py-3 md:py-4 rounded-full">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="hover:scale-125 transition-transform"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M5 10H15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                  <span className="text-base font-semibold min-w-5 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="hover:scale-125 transition-transform"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M10 5V15M5 10H15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
                <button
                  className="flex-1 bg-black text-white px-8 md:px-14 py-3 md:py-4 rounded-full text-sm md:text-base font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-6 md:py-10">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex gap-2 border-b border-gray-300 mb-6 md:mb-8 overflow-x-auto">
            <button
              className={`px-4 md:px-6 py-3 md:py-4 text-sm md:text-base font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeTab === "details"
                  ? "text-black border-black"
                  : "text-gray-600 border-transparent hover:text-black"
              }`}
              onClick={() => setActiveTab("details")}
            >
              Product Details
            </button>
            <button
              className={`px-4 md:px-6 py-3 md:py-4 text-sm md:text-base font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeTab === "reviews"
                  ? "text-black border-black"
                  : "text-gray-600 border-transparent hover:text-black"
              }`}
              onClick={() => setActiveTab("reviews")}
            >
              Rating & Reviews
            </button>
            <button
              className={`px-4 md:px-6 py-3 md:py-4 text-sm md:text-base font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeTab === "faqs"
                  ? "text-black border-black"
                  : "text-gray-600 border-transparent hover:text-black"
              }`}
              onClick={() => setActiveTab("faqs")}
            >
              FAQs
            </button>
          </div>

          {activeTab === "reviews" && (
            <div className="flex flex-col gap-6 md:gap-8">
              <div className="flex justify-between items-center flex-wrap gap-4">
                <h2 className="text-xl md:text-2xl font-bold">
                  All Reviews ({product.reviewCount})
                </h2>
                <button className="px-4 md:px-6 py-2.5 md:py-3 bg-black text-white rounded-full text-sm font-semibold hover:scale-105 transition-transform">
                  Write a Review
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-300 rounded-3xl p-5 md:p-6 flex flex-col gap-3"
                  >
                    <div className="flex gap-1">
                      {renderStars(review.rating)}
                    </div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-base md:text-lg font-bold">
                        {review.name}
                      </h4>
                      {review.verified && (
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <circle cx="10" cy="10" r="10" fill="#01AB31" />
                          <path
                            d="M5 10L8.5 13.5L15 7"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {review.text}
                    </p>
                    <p className="text-xs md:text-sm text-gray-600 mt-2">
                      Posted on {review.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12 md:py-16 px-5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 md:mb-12 tracking-tight">
            YOU MIGHT ALSO LIKE
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((item) => (
              <Link
                key={item.id}
                to="/products"
                className="flex flex-col gap-2 md:gap-3 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="w-full h-48 sm:h-60 md:h-72 rounded-2xl md:rounded-3xl overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-1 md:gap-2">
                  <h3 className="text-sm md:text-base font-bold line-clamp-2">
                    {item.name}
                  </h3>
                  <div className="flex gap-2 items-center flex-wrap">
                    <span className="text-lg md:text-xl font-bold">
                      ${item.price}
                    </span>
                    {item.oldPrice && (
                      <span className="text-lg md:text-xl font-bold text-gray-400 line-through">
                        ${item.oldPrice}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProductDetail;
