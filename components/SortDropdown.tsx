"use client"

import { useRouter, usePathname } from "next/navigation"

export default function SortDropdown({ selectedSort }: { selectedSort?: string }) {
  const router = useRouter()
  const pathname = usePathname()

  const handleSortChange = (sort: string) => {
    const params = new URLSearchParams(window.location.search)

    if (sort === "default") {
      params.delete("sort")
    } else {
      params.set("sort", sort)
    }

    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="w-full">
      <label htmlFor="sort-dropdown" className="block text-sm font-medium mb-2">
        Sort By
      </label>
      <select
        id="sort-dropdown"
        value={selectedSort || "default"}
        onChange={(e) => handleSortChange(e.target.value)}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black text-white"
      >
        <option className="bg-black text-white" value="default">Default</option>
        <option className="bg-black text-white" value="price-asc">Price: Low to High</option>
        <option className="bg-black text-white" value="price-desc">Price: High to Low</option>
        <option className="bg-black text-white" value="title-asc">Name: A to Z</option>
        <option className="bg-black text-white" value="title-desc">Name: Z to A</option>
      </select>
    </div>
  )
}
