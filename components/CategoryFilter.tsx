"use client"

import { useRouter, usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { getCategories } from "@/lib/api"

export default function CategoryFilter({ selectedCategory }: { selectedCategory?: string }) {
  const router = useRouter()
  const pathname = usePathname()
  const [categories, setCategories] = useState<string[]>(["all"])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchedCategories = await getCategories()
        setCategories(["all", ...fetchedCategories])
        setIsLoading(false)
      } catch (error) {
        console.error("Failed to fetch categories:", error)
        setIsLoading(false)
      }
    }

    fetchCategories()
  }, [])

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(window.location.search)

    if (category === "all") {
      params.delete("category")
    } else {
      params.set("category", category)
    }

    router.push(`${pathname}?${params.toString()}`)
  }

  if (isLoading) {
    return (
      <div className="w-full">
        <label className="block text-sm font-medium mb-2">Category</label>
        <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
      </div>
    )
  }

  return (
    <div className="w-full">
      <label htmlFor="category-filter" className="block text-sm font-medium mb-2">
        Category
      </label>
      <select
        id="category-filter"
        value={selectedCategory || "all"}
        onChange={(e) => handleCategoryChange(e.target.value)}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category === "all" ? "All Categories" : category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>
    </div>
  )
}
