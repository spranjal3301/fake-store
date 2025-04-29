import { Suspense } from "react"
import ProductGrid from "@/components/ProductGrid"
import ProductGridSkeleton from "@/components/ProductGridSkeleton"
import CategoryFilter from "@/components/CategoryFilter"
import SortDropdown from "@/components/SortDropdown"
import SearchBar from "@/components/SearchBar"

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  
  const category = typeof searchParams.category === "string" ? searchParams.category : undefined
  const sort = typeof searchParams.sort === "string" ? searchParams.sort : undefined
  const search = typeof searchParams.search === "string" ? searchParams.search : undefined

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Products</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="w-full md:w-1/3">
          <CategoryFilter selectedCategory={category} />
        </div>
        <div className="w-full md:w-1/3">
          <SortDropdown selectedSort={sort} />
        </div>
        <div className="w-full md:w-1/3">
          <SearchBar initialSearch={search} />
        </div>
      </div>

      <Suspense fallback={<ProductGridSkeleton />}>
        <ProductGrid category={category} sort={sort} search={search} />
      </Suspense>
    </main>
  )
}
