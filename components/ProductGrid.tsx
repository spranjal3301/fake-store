import { getProducts } from "@/lib/api"
import ProductCard from "./ProductCard"

export default async function ProductGrid({
  category,
  sort,
  search,
}: {
  category?: string
  sort?: string
  search?: string
}) {
  const products = await getProducts()

  // Filter by category if specified
  let filteredProducts =
    category && category !== "all" ? products.filter((product) => product.category === category) : products

  // Filter by search term if specified
  if (search) {
    const searchLower = search.toLowerCase()
    filteredProducts = filteredProducts.filter((product) => product.title.toLowerCase().includes(searchLower))
  }

  // Sort products if specified
  if (sort) {
    switch (sort) {
      case "price-asc":
        filteredProducts.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        filteredProducts.sort((a, b) => b.price - a.price)
        break
      case "title-asc":
        filteredProducts.sort((a, b) => a.title.localeCompare(b.title))
        break
      case "title-desc":
        filteredProducts.sort((a, b) => b.title.localeCompare(a.title))
        break
      default:
        break
    }
  }

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold mb-2">No products found</h2>
        <p className="text-gray-600">Try changing your filters or search term</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
