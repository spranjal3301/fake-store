import Link from "next/link"
import { ShoppingCart, Menu, Search } from "lucide-react"

export default function Navbar() {
  return (
    <header className="bg-white shadow dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold">FakeStore</span>
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
              Home
            </Link>
            <Link
              href="/?category=electronics"
              className="px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Electronics
            </Link>
            <Link href="/?category=jewelery" className="px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
              Jewelry
            </Link>
            <Link
              href="/?category=men's clothing"
              className="px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Men's Clothing
            </Link>
            <Link
              href="/?category=women's clothing"
              className="px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Women's Clothing
            </Link>
          </div>

          <div className="flex items-center">
            <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 mr-2">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </button>
            <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 md:hidden ml-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
