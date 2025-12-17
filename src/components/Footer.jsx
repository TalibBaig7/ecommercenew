import { Link } from "react-router-dom";

const Footer = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for subscribing!");
  };

  return (
    <footer className="bg-white">
      {/* Newsletter Section */}
      <div className="bg-black px-5 py-10 mt-16">
        <div className="max-w-310 mx-auto flex items-center justify-between gap-10 flex-wrap">
          <h2 className="text-4xl font-extrabold text-white leading-tight max-w-125">
            STAY UPTO DATE ABOUT
            <br />
            OUR LATEST OFFERS
          </h2>
          <form
            className="flex gap-3.5 flex-1 max-w-125 flex-wrap"
            onSubmit={handleNewsletterSubmit}
          >
            <div className="relative flex-1 min-w-62.5">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M2.5 6.25L10 11.25L17.5 6.25M3.75 15H16.25C17.2165 15 18 14.2165 18 13.25V6.75C18 5.7835 17.2165 5 16.25 5H3.75C2.7835 5 2 5.7835 2 6.75V13.25C2 14.2165 2.7835 15 3.75 15Z"
                  stroke="#666"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="w-full py-3.5 px-4 pl-12 bg-white rounded-full text-[15px] placeholder-gray-600 outline-none"
              />
            </div>
            <button
              type="submit"
              className="py-3.5 px-8 bg-white text-black rounded-full font-semibold text-[15px] hover:scale-105 hover:shadow-lg transition-all whitespace-nowrap"
            >
              Subscribe to Newsletter
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-gray-50 px-5 py-16">
        <div className="max-w-310 mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr_3fr] gap-16">
          {/* Brand Section */}
          <div className="flex flex-col gap-5">
            <Link
              to="/"
              className="text-3xl font-extrabold text-black tracking-tight"
            >
              SHOP.CO
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed max-w-70">
              We have clothes that suits your style and which you're proud to
              wear. From women to men.
            </p>
            <div className="flex gap-3 mt-2">
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-300 hover:bg-black hover:text-white hover:-translate-y-1 hover:scale-110 hover:shadow-xl transition-all"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-300 hover:bg-black hover:text-white hover:-translate-y-1 hover:scale-110 hover:shadow-xl transition-all"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-300 hover:bg-black hover:text-white hover:-translate-y-1 hover:scale-110 hover:shadow-xl transition-all"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-300 hover:bg-black hover:text-white hover:-translate-y-1 hover:scale-110 hover:shadow-xl transition-all"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold tracking-[2px] mb-2">
                COMPANY
              </h3>
              <ul className="list-none flex flex-col gap-3">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-600 text-sm hover:text-black hover:translate-x-1 transition-all inline-block"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/features"
                    className="text-gray-600 text-sm hover:text-black hover:translate-x-1 transition-all inline-block"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="/works"
                    className="text-gray-600 text-sm hover:text-black hover:translate-x-1 transition-all inline-block"
                  >
                    Works
                  </Link>
                </li>
                <li>
                  <Link
                    to="/career"
                    className="text-gray-600 text-sm hover:text-black hover:translate-x-1 transition-all inline-block"
                  >
                    Career
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold tracking-[2px] mb-2">
                HELP
              </h3>
              <ul className="list-none flex flex-col gap-3">
                <li>
                  <Link
                    to="/support"
                    className="text-gray-600 text-sm hover:text-black hover:translate-x-1 transition-all inline-block"
                  >
                    Customer Support
                  </Link>
                </li>
                <li>
                  <Link
                    to="/delivery"
                    className="text-gray-600 text-sm hover:text-black hover:translate-x-1 transition-all inline-block"
                  >
                    Delivery Details
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-gray-600 text-sm hover:text-black hover:translate-x-1 transition-all inline-block"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="text-gray-600 text-sm hover:text-black hover:translate-x-1 transition-all inline-block"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold tracking-[2px] mb-2">FAQ</h3>
              <ul className="list-none flex flex-col gap-3">
                <li>
                  <Link
                    to="/account"
                    className="text-gray-600 text-sm hover:text-black hover:translate-x-1 transition-all inline-block"
                  >
                    Account
                  </Link>
                </li>
                <li>
                  <Link
                    to="/deliveries"
                    className="text-gray-600 text-sm hover:text-black hover:translate-x-1 transition-all inline-block"
                  >
                    Manage Deliveries
                  </Link>
                </li>
                <li>
                  <Link
                    to="/orders"
                    className="text-gray-600 text-sm hover:text-black hover:translate-x-1 transition-all inline-block"
                  >
                    Orders
                  </Link>
                </li>
                <li>
                  <Link
                    to="/payments"
                    className="text-gray-600 text-sm hover:text-black hover:translate-x-1 transition-all inline-block"
                  >
                    Payments
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold tracking-[2px] mb-2">
                RESOURCES
              </h3>
              <ul className="list-none flex flex-col gap-3">
                <li>
                  <Link
                    to="/ebooks"
                    className="text-gray-600 text-sm hover:text-black hover:translate-x-1 transition-all inline-block"
                  >
                    Free eBooks
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tutorials"
                    className="text-gray-600 text-sm hover:text-black hover:translate-x-1 transition-all inline-block"
                  >
                    Development Tutorial
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-gray-600 text-sm hover:text-black hover:translate-x-1 transition-all inline-block"
                  >
                    How to - Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/youtube"
                    className="text-gray-600 text-sm hover:text-black hover:translate-x-1 transition-all inline-block"
                  >
                    Youtube Playlist
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-50 px-5 py-5 border-t border-gray-300">
        <div className="max-w-310 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <p className="text-gray-600 text-sm">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div className="flex gap-3 items-center flex-wrap">
            <img
              src="data:image/svg+xml,%3Csvg width='46' height='30' viewBox='0 0 46 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='46' height='30' rx='5' fill='%231434CB'/%3E%3Cpath d='M17.5 20.5L13 9.5H15.5L18.5 17.5L21.5 9.5H24L19.5 20.5H17.5Z' fill='white'/%3E%3Cpath d='M25 20.5V9.5H27.5V20.5H25Z' fill='white'/%3E%3Cpath d='M33 12.5C31.3431 12.5 30 13.8431 30 15.5C30 17.1569 31.3431 18.5 33 18.5C34.6569 18.5 36 17.1569 36 15.5C36 13.8431 34.6569 12.5 33 12.5Z' fill='%23F7B600'/%3E%3C/svg%3E"
              alt="Visa"
              className="h-7.5 rounded-md hover:scale-105 transition-transform"
            />
            <img
              src="data:image/svg+xml,%3Csvg width='46' height='30' viewBox='0 0 46 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='46' height='30' rx='5' fill='%23EB001B'/%3E%3Ccircle cx='17' cy='15' r='8' fill='%23EB001B'/%3E%3Ccircle cx='29' cy='15' r='8' fill='%23F79E1B'/%3E%3Cpath d='M23 8C25.7614 8 28 10.2386 28 13C28 15.7614 25.7614 18 23 18C20.2386 18 18 15.7614 18 13C18 10.2386 20.2386 8 23 8Z' fill='%23FF5F00'/%3E%3C/svg%3E"
              alt="Mastercard"
              className="h-7.5 rounded-md hover:scale-105 transition-transform"
            />
            <img
              src="data:image/svg+xml,%3Csvg width='46' height='30' viewBox='0 0 46 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='46' height='30' rx='5' fill='%23003087'/%3E%3Cpath d='M16 11H18.5V19H16V11Z' fill='%23009CDE'/%3E%3Cpath d='M19 11H21.5V19H19V11Z' fill='%23012169'/%3E%3Cpath d='M26 12C24.3431 12 23 13.3431 23 15C23 16.6569 24.3431 18 26 18H31V16H26C25.4477 16 25 15.5523 25 15C25 14.4477 25.4477 14 26 14H31V12H26Z' fill='%23009CDE'/%3E%3C/svg%3E"
              alt="PayPal"
              className="h-7.5 rounded-md hover:scale-105 transition-transform"
            />
            <img
              src="data:image/svg+xml,%3Csvg width='46' height='30' viewBox='0 0 46 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='46' height='30' rx='5' fill='black'/%3E%3Cpath d='M11 15L14 12V18L11 15Z' fill='white'/%3E%3Cpath d='M31 15H18' stroke='white' stroke-width='2'/%3E%3Cpath d='M32 15L35 12V18L32 15Z' fill='white'/%3E%3C/svg%3E"
              alt="Apple Pay"
              className="h-7.5 rounded-md hover:scale-105 transition-transform"
            />
            <img
              src="data:image/svg+xml,%3Csvg width='46' height='30' viewBox='0 0 46 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='46' height='30' rx='5' fill='white' stroke='%23E0E0E0'/%3E%3Ctext x='23' y='20' font-family='Arial' font-size='12' font-weight='bold' fill='%234285F4' text-anchor='middle'%3EG%3C/text%3E%3Ctext x='26' y='20' font-family='Arial' font-size='8' fill='%23EA4335' text-anchor='start'%3EPay%3C/text%3E%3C/svg%3E"
              alt="Google Pay"
              className="h-7.5 rounded-md hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
