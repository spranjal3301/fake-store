"use client"

import type React from "react"

import { useRouter, usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Search } from "lucide-react"

export default function SearchBar({ initialSearch }: { initialSearch?: string }) {
  const router = useRouter()
  const pathname = usePathname()
  const [searchTerm, setSearchTerm] = useState(initialSearch || "")

  useEffect(() => {
    setSearchTerm(initialSearch || "")
  }, [initialSearch])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    const params = new URLSearchParams(window.location.search)

    if (searchTerm.trim()) {
      params.set("search", searchTerm.trim())
    } else {
      params.delete("search")
    }

    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="w-full">
      <label htmlFor="search-input" className="block text-sm font-medium mb-2">
        Search Products
      </label>
      <form onSubmit={handleSearch} className="relative">
        <input
          id="search-input"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
          className="w-full p-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="absolute left-0 top-0 h-full px-3 flex items-center" aria-label="Search">
          <Search className="h-4 w-4 text-gray-500" />
        </button>
      </form>
    </div>
  )
}
