# FakeStore E-commerce

A modern e-commerce application built with Next.js, TypeScript, and Tailwind CSS. This project demonstrates a fully functional online store using the FakeStore API.

![FakeStore E-commerce Screenshot](https://placeholder.svg?height=400&width=800)

## 🚀 Live Demo

[View Live Demo](#) (Coming soon)

## ✨ Features

### Core Features
- **Product Listing Page** - Browse all products with images, titles, prices, and categories
- **Product Detail Page** - View detailed information about each product
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Server-side Rendering** - Fast page loads and improved SEO
- **Error Handling** - Graceful handling of API errors and invalid routes

### Bonus Features
- **Category Filtering** - Filter products by category
- **Sorting** - Sort products by price (low to high, high to low) and name (A-Z, Z-A)
- **Search** - Search products by title
- **Loading States** - Skeleton loaders for better user experience
- **URL-based Filters** - Filters persist in URL for sharing and navigation

## 🛠️ Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **FakeStore API** - Product data source
- **React Server Components** - For efficient data fetching
- **Lucide React** - For icons

## 📋 Data Fetching Strategy

This project uses React Server Components for data fetching, which offers several advantages:

1. **Server-side rendering** - Data is fetched on the server, reducing client-side JavaScript
2. **Improved SEO** - Content is available to search engines immediately
3. **Better performance** - Reduces client-side network requests and processing
4. **Automatic caching** - Uses Next.js built-in caching with revalidation

The revalidation strategy is set to 1 hour (3600 seconds), which provides a good balance between fresh data and performance. This means the data will be cached for up to an hour before being refetched, reducing the load on the FakeStore API while keeping the content reasonably up-to-date.

## 🗂️ Project Structure

```
├── app/                  # Next.js App Router
│   ├── page.tsx          # Product Listing Page
│   ├── products/[id]/    # Product Detail Page
│   ├── error.tsx         # Error handling
│   ├── not-found.tsx     # 404 page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/           # Reusable components
│   ├── ProductCard.tsx
│   ├── ProductGrid.tsx
│   ├── ProductDetail.tsx
│   ├── CategoryFilter.tsx
│   ├── SortDropdown.tsx
│   ├── SearchBar.tsx
│   └── ...
├── lib/                  # Utility functions
│   ├── api.ts            # API functions
│   └── types.ts          # TypeScript types
└── public/               # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/fakestore-ecommerce.git
   cd fakestore-ecommerce