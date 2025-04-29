import Image from "next/image"
import type { Product } from "@/lib/types"
import { ShoppingCart, Star } from "lucide-react"

export default function ProductDetail({ product }: { product: Product }) {
  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            width={400}
            height={400}
            className="object-contain max-h-[400px]"
            priority
          />
        </div>

        <div>
          <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-gray-200 text-gray-700 mb-4">
            {product.category}
          </span>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

          <div className="flex items-center mb-4">
            <div className="flex mr-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < Math.round(product.rating.rate) ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {product.rating.rate} ({product.rating.count} reviews)
            </span>
          </div>

          <p className="text-3xl font-bold mb-6">${product.price.toFixed(2)}</p>

          <p className="text-gray-700 mb-8">{product.description}</p>

          <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
