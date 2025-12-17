# SHOP.CO - Modern E-Commerce Website

A modern, responsive e-commerce fashion website built with React and Vite.

## Features

- 🏠 **Home Page**: Hero section, brand showcase, new arrivals, top selling products, dress styles, and customer testimonials
- 🛍️ **Product Listing Page**: Advanced filtering (price, color, size, dress style), sorting options, and pagination
- 📦 **Product Detail Page**: Image gallery, size/color selection, quantity picker, reviews section, and related products
- 🛒 **Shopping Cart**: Add/remove items, quantity management, promo code input, and order summary
- 📱 **Fully Responsive**: Mobile-friendly design with smooth animations
- 🎨 **Modern UI**: Clean design with Unbounded font for headings and Inter for body text

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **CSS3** - Styling with custom properties and animations
- **Google Fonts** - Unbounded & Inter font families

## Project Structure

```
shop-co/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Header with navigation
│   │   ├── Navbar.css
│   │   ├── Footer.jsx         # Footer with links
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.jsx           # Home page
│   │   ├── Home.css
│   │   ├── Products.jsx       # Product listing with filters
│   │   ├── Products.css
│   │   ├── ProductDetail.jsx  # Single product view
│   │   ├── ProductDetail.css
│   │   ├── Cart.jsx           # Shopping cart
│   │   └── Cart.css
│   ├── App.jsx                # Main app with routing
│   ├── App.css
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Installation & Setup

### Prerequisites
- Node.js 16+ and npm installed

### Steps

1. **Navigate to the project directory:**
   ```bash
   cd shop-co
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - The app will be running at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Routes

- `/` - Home page
- `/products` - Product listing page with filters
- `/products?filter=on-sale` - Products on sale
- `/products?style=casual` - Products by dress style
- `/product/:id` - Individual product detail page
- `/cart` - Shopping cart page

## Features Breakdown

### Home Page
- Promotional banner at top
- Hero section with statistics
- Brand showcase (Versace, Zara, Gucci, Prada, Calvin Klein)
- New arrivals product grid
- Top selling products section
- Browse by dress style (Casual, Formal, Party, Gym)
- Customer testimonials carousel
- Newsletter subscription
- Comprehensive footer

### Products Page
- Sidebar filters for:
  - Product categories
  - Price range slider
  - Color selection
  - Size options
  - Dress style
- Sort by: Most Popular, Newest, Price (Low/High)
- Responsive product grid
- Pagination
- Mobile-friendly filter drawer

### Product Detail Page
- Image gallery with thumbnails
- Product information (name, price, rating)
- Color selection
- Size selection
- Quantity picker
- Add to cart functionality
- Tabbed sections (Product Details, Reviews, FAQs)
- Reviews with ratings
- Related products section

### Cart Page
- List of cart items with images
- Quantity adjustment
- Remove items
- Order summary with:
  - Subtotal
  - Discount
  - Delivery fee
  - Total
- Promo code input
- Checkout button
- Empty cart state

## Customization

### Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --primary-black: #000000;
  --primary-white: #FFFFFF;
  --light-gray: #F0F0F0;
  --discount-red: #FF3333;
  --star-yellow: #FFC633;
}
```

### Fonts
The project uses:
- **Unbounded**: Display font for headings
- **Inter**: Body font for text

Update in `index.html` if you want to change fonts.

## Future Enhancements

- Backend integration for:
  - User authentication
  - Product management
  - Order processing
  - Payment gateway
- User account/profile pages
- Wishlist functionality
- Product search with autocomplete
- Advanced filtering options
- Order tracking
- Customer reviews and ratings system

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for learning or commercial purposes.

## Credits

Built with ❤️ using React and Vite
Images from Unsplash
