import { motion } from "motion/react";
import { Link } from "react-router-dom";

const Home = () => {
  const newArrivals = [
    {
      id: 1,
      name: "T-shirt with Tape Details",
      price: 120,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80",
    },
    {
      id: 2,
      name: "Skinny Fit Jeans",
      price: 240,
      oldPrice: 260,
      discount: 20,
      rating: 3.5,
      image:
        "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80",
    },
    {
      id: 3,
      name: "Checkered Shirt",
      price: 180,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80",
    },
    {
      id: 4,
      name: "Sleeve Striped T-shirt",
      price: 130,
      oldPrice: 160,
      discount: 20,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&q=80",
    },
  ];

  const topSelling = [
    {
      id: 5,
      name: "Vertical Striped Shirt",
      price: 212,
      oldPrice: 232,
      discount: 20,
      rating: 5.0,
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&q=80",
    },
    {
      id: 6,
      name: "Courage Graphic T-shirt",
      price: 145,
      rating: 4.0,
      image:
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80",
    },
    {
      id: 7,
      name: "Loose Fit Bermuda Shorts",
      price: 80,
      rating: 3.0,
      image:
        "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&q=80",
    },
    {
      id: 8,
      name: "Faded Skinny Jeans",
      price: 210,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80",
    },
  ];

  const dressStyles = [
    {
      name: "Casual",
      image:
        "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=600&q=80",
    },
    {
      name: "Formal",
      image:
        "https://images.unsplash.com/photo-1634476542932-eebf84bd61d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdoaXRlJTIwYmFja2dyb3VuZCUyMGZvcm1hbCUyMHNoaXJ0fGVufDB8fDB8fHww",
    },
    {
      name: "Party",
      image:
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80",
    },
    {
      name: "Gym",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
    },
  ];

  const testimonials = [
    {
      name: "Alex K.",
      rating: 5,
      text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co.",
      verified: true,
    },
    {
      name: "James L.",
      rating: 5,
      text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co.",
      verified: true,
    },
    {
      name: "Emily R.",
      rating: 5,
      text: "The site is so easy to navigate, and the clothes are fantastic!",
      verified: true,
    },
    {
      name: "Michael T.",
      rating: 5,
      text: "Beyond the amazing clothes, the customer service here is fantastic.",
      verified: true,
    },
  ];

  const brands = ["VERSACE", "ZARA", "GUCCI", "PRADA", "Calvin Klein"];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="w-4 h-4" viewBox="0 0 18 18" fill="none">
          <path
            d="M9 0L11.1329 6.56434H18L12.4335 10.6213L14.5664 17.1857L9 13.1287L3.43357 17.1857L5.56646 10.6213L0 6.56434H6.86709L9 0Z"
            fill="#FFC633"
          />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-4 h-4" viewBox="0 0 18 18" fill="none">
          <defs>
            <linearGradient id="half-fill">
              <stop offset="50%" stopColor="#FFC633" />
              <stop offset="50%" stopColor="#E5E5E5" />
            </linearGradient>
          </defs>
          <path
            d="M9 0L11.1329 6.56434H18L12.4335 10.6213L14.5664 17.1857L9 13.1287L3.43357 17.1857L5.56646 10.6213L0 6.56434H6.86709L9 0Z"
            fill="url(#half-fill)"
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
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M9 0L11.1329 6.56434H18L12.4335 10.6213L14.5664 17.1857L9 13.1287L3.43357 17.1857L5.56646 10.6213L0 6.56434H6.86709L9 0Z"
            fill="#E5E5E5"
          />
        </svg>
      );
    }

    return stars;
  };

  const ProductCard = ({ product }) => (
    <Link
      to={`/product/${product.id}`}
      className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="w-full aspect-square bg-gray-100 rounded-2xl overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="pt-3 px-2 flex flex-col gap-1.5">
        <h3 className="text-sm sm:text-base lg:text-lg font-bold text-black line-clamp-1">
          {product.name}
        </h3>
        <div className="flex items-center gap-1.5">
          <div className="flex gap-0.5">{renderStars(product.rating)}</div>
          <span className="text-xs sm:text-sm font-medium text-black">
            {product.rating}/5
          </span>
        </div>
        <div className="flex items-center gap-2 mt-0.5 flex-wrap">
          <span className="text-lg sm:text-xl lg:text-2xl font-bold text-black">
            ${product.price}
          </span>
          {product.oldPrice && (
            <>
              <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-400 line-through">
                ${product.oldPrice}
              </span>
              <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded-full text-xs font-semibold">
                -{product.discount}%
              </span>
            </>
          )}
        </div>
      </div>
    </Link>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="min-h-screen bg-white"
    >
      {/* Hero Section - FIXED: Image first on mobile */}
      <section className="py-6 md:py-10 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          {/* MAGIC: flex-col-reverse on mobile, flex-row on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* Text Content - Shows SECOND on mobile, FIRST on desktop */}
            <div className="flex flex-col gap-4 lg:gap-6 order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <Link
                to="/products"
                className="inline-block w-full sm:w-auto px-12 py-3 bg-black text-white rounded-full text-sm font-semibold text-center hover:-translate-y-1 hover:scale-105 hover:shadow-2xl transition-all"
              >
                Shop Now
              </Link>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 pt-4 lg:pt-6 border-t border-gray-300">
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                    200+
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    International Brands
                  </p>
                </div>
                <div className="border-l border-gray-300 pl-3 sm:pl-4 lg:pl-6">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                    2,000+
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    High-Quality Products
                  </p>
                </div>
                <div className="border-l border-gray-300 pl-3 sm:pl-4 lg:pl-6">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                    30,000+
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    Happy Customers
                  </p>
                </div>
              </div>
            </div>

            {/* Image - Shows FIRST on mobile, SECOND on desktop */}
            <div className="relative h-72 sm:h-80 lg:h-96 xl:h-125 rounded-2xl lg:rounded-3xl overflow-hidden order-1 lg:order-2">
              <img
                src="/home.jpg"
                alt="Fashion models"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="bg-black py-6 sm:py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex justify-around items-center flex-wrap gap-4 sm:gap-6 lg:gap-10">
          {brands.map((brand) => (
            <div
              key={brand}
              className="text-white text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105 tracking-wider"
            >
              {brand}
            </div>
          ))}
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-center mb-6 sm:mb-8 lg:mb-12 tracking-tight">
            NEW ARRIVALS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-6 sm:mb-8 lg:mb-12">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/products"
              className="inline-block px-10 sm:px-12 py-2.5 sm:py-3 border border-gray-300 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-black hover:text-white hover:border-black hover:scale-105"
            >
              View All
            </Link>
          </div>
        </div>
      </section>

      {/* Top Selling Section */}
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-center mb-6 sm:mb-8 lg:mb-12 tracking-tight">
            TOP SELLING
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-6 sm:mb-8 lg:mb-12">
            {topSelling.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/products?filter=top-selling"
              className="inline-block px-10 sm:px-12 py-2.5 sm:py-3 border border-gray-300 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-black hover:text-white hover:border-black hover:scale-105"
            >
              View All
            </Link>
          </div>
        </div>
      </section>

      {/* Browse by Dress Style */}
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-gray-50 rounded-2xl lg:rounded-3xl xl:rounded-[40px] p-5 sm:p-6 lg:p-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-center mb-6 sm:mb-8 lg:mb-12 tracking-tight">
            BROWSE BY DRESS STYLE
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
            <Link
              to="/products?style=casual"
              className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden relative transition-all duration-300 hover:scale-105 hover:shadow-2xl h-48 sm:h-52 lg:h-56"
            >
              <img
                src={dressStyles[0].image}
                alt="Casual"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                loading="lazy"
              />
              <h3
                className="absolute top-3 left-3 sm:top-4 sm:left-4 lg:top-6 lg:left-6 text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-black z-10"
                style={{ textShadow: "0 2px 8px rgba(255, 255, 255, 0.6)" }}
              >
                Casual
              </h3>
            </Link>
            <Link
              to="/products?style=formal"
              className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden relative transition-all duration-300 hover:scale-105 hover:shadow-2xl h-48 sm:h-52 lg:h-56 sm:col-span-2 md:col-span-2"
            >
              <img
                src={dressStyles[1].image}
                alt="Formal"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                loading="lazy"
              />
              <h3
                className="absolute top-3 left-3 sm:top-4 sm:left-4 lg:top-6 lg:left-6 text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-black z-10"
                style={{ textShadow: "0 2px 8px rgba(255, 255, 255, 0.6)" }}
              >
                Formal
              </h3>
            </Link>
            <Link
              to="/products?style=party"
              className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden relative transition-all duration-300 hover:scale-105 hover:shadow-2xl h-48 sm:h-52 lg:h-56 sm:col-span-2 md:col-span-2"
            >
              <img
                src={dressStyles[2].image}
                alt="Party"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                loading="lazy"
              />
              <h3
                className="absolute top-3 left-3 sm:top-4 sm:left-4 lg:top-6 lg:left-6 text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-black z-10"
                style={{ textShadow: "0 2px 8px rgba(255, 255, 255, 0.6)" }}
              >
                Party
              </h3>
            </Link>
            <Link
              to="/products?style=gym"
              className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden relative transition-all duration-300 hover:scale-105 hover:shadow-2xl h-48 sm:h-52 lg:h-56"
            >
              <img
                src={dressStyles[3].image}
                alt="Gym"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                loading="lazy"
              />
              <h3
                className="absolute top-3 left-3 sm:top-4 sm:left-4 lg:top-6 lg:left-6 text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-black z-10"
                style={{ textShadow: "0 2px 8px rgba(255, 255, 255, 0.6)" }}
              >
                Gym
              </h3>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6 sm:mb-8 lg:mb-12 flex-wrap gap-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight">
              OUR HAPPY CUSTOMERS
            </h2>
            <div className="flex gap-2">
              <button
                className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-white border border-gray-300 flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white hover:border-black hover:scale-110"
                aria-label="Previous"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="sm:w-5 sm:h-5"
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-white border border-gray-300 flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white hover:border-black hover:scale-110"
                aria-label="Next"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="sm:w-5 sm:h-5"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white border border-gray-300 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-5 lg:p-7 flex flex-col gap-2 sm:gap-3 lg:gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="flex gap-0.5">
                  {renderStars(testimonial.rating)}
                </div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm sm:text-base lg:text-lg font-bold">
                    {testimonial.name}
                  </h4>
                  {testimonial.verified && (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="sm:w-4.5 sm:h-4.5"
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
                <p className="text-xs sm:text-sm leading-relaxed text-gray-600">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
