# 🍕 Zomato Clone - Food Delivery App

A modern, fully responsive clone of the Zomato food delivery application built with React, showcasing dynamic UI components, responsive design, and integration with external APIs.

**Developed by:** Siddharth Pande  
**Learning:** MERN Stack at WsCube Tech

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Components](#components)
- [Installation & Setup](#installation--setup)
- [Running the Project](#running-the-project)
- [Project Highlights](#project-highlights)
- [Future Enhancements](#future-enhancements)
- [Learning Outcomes](#learning-outcomes)

---

## 🎯 Project Overview

Zomato Clone is a front-end focused project that replicates the core user interface and functionality of Zomato, one of the world's leading food delivery platforms. The application demonstrates expertise in building responsive, component-driven interfaces using modern React practices and styling techniques.

This project is part of my MERN stack learning journey at **WsCube Tech**, where I'm developing full-stack web development skills under experienced instructors.

---

## ✨ Key Features

### 🏠 **Homepage**

- Dynamic hero section with location and restaurant search
- Real-time recipe/food inspiration carousel powered by DummyJSON API
- Carousel navigation with smooth scrolling

### 🍔 **Restaurant Showcase**

- "Top Brands for You" section displaying restaurant cards
- Each restaurant card shows:
  - Restaurant image
  - Restaurant name
  - Average delivery time
  - Rating and cuisines
  - Special offers
- Interactive carousel navigation with prev/next controls

### 🎨 **Responsive Design**

- **Mobile First Approach:** Optimized experience for mobile, tablet, and desktop
- Adaptive layouts that scale from small screens to large displays
- Touch-friendly navigation and buttons

### 🔍 **Advanced Filters & Search**

- Location-based filtering
- Cuisine type selection
- "Pure Veg" filter option
- Restaurant search functionality
- Price range filters

### 📱 **Footer Section**

- Popular localities display
- Explore options near user's location
- Links to cuisine categories
- Restaurant type recommendations
- Social media links integration
- Language and currency selectors

### 🎪 **Carousel Components**

- Smooth, animated carousel for restaurant browsing
- Responsive carousel items that adapt to screen size
- Easy navigation with previous/next buttons
- Auto-responsive grid layout

---

## 🛠️ Tech Stack

### **Frontend Framework**

- **React 19.2.0** - Latest React with hooks and modern patterns
- **Vite 7.3.1** - Lightning-fast build tool and development server
- **React Router 7.13.1** - Client-side routing for navigation

### **Styling & UI**

- **Tailwind CSS 4.2.1** - Utility-first CSS framework for rapid UI development
- **Shadcn UI** - Pre-built, customizable React components
- **Embla Carousel 8.6.0** - Lightweight carousel library for React

### **Icons & Utilities**

- **Lucide React 0.575.0** - Modern, lightweight SVG icons
- **React Icons 5.5.0** - Popular icon libraries (Font Awesome, Feather, etc.)
- **Axios 1.13.6** - Promise-based HTTP client for API requests
- **Class Variance Authority** - Type-safe component variants
- **clsx & tailwind-merge** - Utility functions for className management

### **Development Tools**

- **ESLint 9.39.1** - Code quality and best practices
- **Node.js** - JavaScript runtime

---

## 📁 Project Structure

```
zomato-clone/
├── public/                          # Static assets
├── src/
│   ├── assets/
│   │   ├── fonts/                   # Custom fonts (Okra font)
│   │   └── images/                  # Images and SVGs
│   ├── components/
│   │   ├── CommonLayout.jsx         # Shared layout wrapper with Header & Footer
│   │   ├── Header.jsx               # Navigation and search header
│   │   ├── Footer.jsx               # Footer with localities and links
│   │   ├── SectionInspiration.jsx   # Carousel for food inspiration
│   │   ├── TopBrands.jsx            # Restaurant carousel section
│   │   ├── EndSearch.jsx            # End of search results indicator
│   │   └── ui/                      # Reusable UI components
│   │       ├── carousel.jsx         # Carousel component (Embla-based)
│   │       ├── card.jsx             # Card component with variants
│   │       └── button.jsx           # Button component
│   ├── css/
│   │   └── styles.css               # Global styles and Tailwind configuration
│   ├── lib/
│   │   ├── data.js                  # Mock restaurant data
│   │   └── utils.js                 # Utility functions (cn function)
│   ├── pages/
│   │   └── Homepage.jsx             # Main homepage component
│   ├── main.jsx                     # React app entry point
│   └── css/
│       └── styles.css               # Global styling
├── index.html                       # HTML entry point
├── vite.config.js                   # Vite configuration
├── package.json                     # Project dependencies
├── components.json                  # Shadcn UI configuration
├── jsconfig.json                    # JavaScript path aliases
├── eslint.config.js                 # ESLint rules
└── README.md                        # Project documentation
```

---

## 🧩 Components

### **CommonLayout.jsx**

Wrapper component that provides consistent layout structure across all pages with Header and Footer.

```jsx
- Renders Header for navigation
- Provides outlet for page content
- Includes Footer
```

### **Header.jsx**

Main navigation header with search and filter capabilities

- Location selector
- Restaurant/cuisine search bar
- Filter buttons (Filters, Pure Veg, Cuisines)
- Authentication buttons (Log in, Sign up)
- Responsive hamburger menu for mobile

### **Footer.jsx**

Comprehensive footer section with:

- Popular localities in user's area
- Expandable cards for different categories
- Social media links
- Company information

### **SectionInspiration.jsx**

Shows food inspiration items in a carousel format

- Displays dynamic recipe data from DummyJSON API
- Circular image containers
- Smooth carousel navigation
- Responsive grid (changes from 2-4 items per view based on screen size)

### **TopBrands.jsx**

Restaurant showcase carousel

- Restaurant cards with images and details
- Shows: name, delivery time, ratings
- Smooth carousel with navigation controls
- Responsive layout adaptation

### **EndSearch.jsx**

End of search results indicator with illustrative image

### **UI Components (ui/)**

**carousel.jsx**

- Embla Carousel wrapper with React context
- Custom hook `useCarousel()` for component control
- Supports horizontal/vertical orientation
- Navigation buttons and keyboard support

**card.jsx**

- Flexible card component system
- Card, CardHeader, CardTitle, CardDescription variants
- `NewCard` for custom implementations

**button.jsx**

- Styled button component
- Multiple variants and sizes

---

## 🚀 Installation & Setup

### **Prerequisites**

- Node.js (v14 or higher recommended)
- npm or yarn package manager

### **Step 1: Clone or Navigate to Project**

```bash
cd /Users/sid/Desktop/personal-work/wscubetech/projects\ made\ by\ me/zomato-clone
```

### **Step 2: Install Dependencies**

```bash
npm install
```

This will install all required packages including:

- React and React Router
- Tailwind CSS and related utilities
- Shadcn UI components
- Embla Carousel
- Axios for API calls
- Icon libraries

### **Step 3: Verify Installation**

Check if Tailwind is properly configured:

```bash
npm run lint
```

---

## 🏃 Running the Project

### **Development Mode**

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### **Production Build**

Create an optimized production build:

```bash
npm run build
```

### **Preview Production Build**

Preview the production build locally:

```bash
npm run preview
```

### **Code Quality Check**

Run ESLint to check code quality:

```bash
npm run lint
```

---

## 🌟 Project Highlights

### **1. Modern React Patterns**

- Functional components with hooks (useState, useEffect, useContext)
- Custom hooks for carousel management
- React Router for client-side navigation
- Context API for state management

### **2. API Integration**

- DummyJSON API integration for dynamic recipe data
- Axios for HTTP requests
- Error handling and loading states
- Real-time data fetching

### **3. Responsive Design Principles**

- Mobile-first approach using Tailwind CSS
- Breakpoints: `md:` (768px), `lg:` (1024px)
- Flexible grid and flex layouts
- Adaptive images and typography

### **4. Component Reusability**

- Shadcn UI components for consistency
- Custom carousel component for multiple use cases
- Utility functions for common operations (cn function)
- DRY principle throughout codebase

### **5. Styling Architecture**

- Tailwind CSS for utility-first styling
- CSS variables for theme management
- Custom font integration (Okra font)
- Dark mode support setup in CSS

### **6. Performance Considerations**

- Vite for fast development and optimized builds
- Lazy loading carousel items
- Optimized images with object-cover
- Efficient bundle size with modular imports

---

## 📈 Learning Outcomes

Through building this Zomato Clone, I've gained hands-on experience in:

✅ **React Fundamentals**

- Component composition and props
- State management with hooks
- Component lifecycle with useEffect
- React Router for navigation

✅ **CSS & Styling**

- Tailwind CSS utility classes
- Responsive design with breakpoints
- CSS Grid and Flexbox
- Custom CSS variables and theming

✅ **UI/UX Best Practices**

- Component design patterns
- Carousel/slider implementation
- Accessibility considerations
- User-friendly interfaces

✅ **API Integration**

- Fetching data with Axios
- Handling async operations
- Error handling
- Dynamic data rendering

✅ **Developer Tools**

- Vite development server
- ESLint for code quality
- Git version control
- Component library integration (Shadcn UI)

✅ **Project Structure**

- File organization
- Modular component architecture
- Separation of concerns
- Reusable utilities

---

## 🔮 Future Enhancements

Potential improvements and features for future versions:

1. **Authentication System**
   - User login/registration
   - JWT-based session management
   - User profiles and preferences

2. **Backend Integration**
   - Connect to real backend API
   - MongoDB database for restaurants
   - Order management system

3. **Shopping Cart & Checkout**
   - Add to cart functionality
   - Cart management
   - Payment integration

4. **Advanced Search**
   - Location-based search with maps
   - Real-time filters
   - Saved favorites/bookmarks

5. **Order Management**
   - Order history
   - Order tracking in real-time
   - Rating and reviews system

6. **Performance**
   - Image optimization with Next.js Image
   - Code splitting and lazy loading
   - Infinite scroll pagination

7. **Enhanced Features**
   - Dark mode toggle
   - Multi-language support
   - PWA capabilities
   - Push notifications

---

## 📚 Resources & References

- [React Documentation](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [Vite Guide](https://vitejs.dev/)
- [Shadcn UI Components](https://ui.shadcn.com/)
- [Embla Carousel Documentation](https://www.embla-carousel.com/)
- [React Router Documentation](https://reactrouter.com/)

---

## 🎓 About the Developer

**Siddharth Pande** - MERN Stack Developer in Training

Currently learning full-stack web development at **WsCube Tech** under experienced instructors. This project demonstrates practical application of React fundamentals, responsive design, and component-driven architecture.

**Skills Developed:**

- Frontend: HTML, CSS, JavaScript, React
- Styling: Tailwind CSS, Shadcn UI
- API Integration: Axios, RESTful APIs
- Tools: Vite, Git, ESLint
- Learning: MERN Stack (MongoDB, Express, React, Node.js)

---

## 📞 Contact & Support

For questions or feedback about this project:

- **Email:** [Your Email]
- **GitHub:** [Your GitHub Profile]
- **LinkedIn:** [Your LinkedIn Profile]

---

## 📄 License

This project is created for educational purposes as part of MERN Stack learning at WsCube Tech.

---

## 🙏 Acknowledgments

Special thanks to:

- **WsCube Tech** and instructors for guidance and mentorship
- React and open-source community for excellent libraries and tools
- DummyJSON API for providing mock data

---

**Last Updated:** March 2026  
**Status:** Active Development 🚀

---

_Happy Coding!_ 💻✨
