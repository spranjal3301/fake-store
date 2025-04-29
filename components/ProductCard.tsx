import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/lib/types"

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative h-64 bg-gray-100 p-4 flex items-center justify-center">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          width={200}
          height={200}
          className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-300"
          priority={false}
        />
      </div>
      <div className="p-4">
        <div className="inline-block px-2 py-1 mb-2 text-xs font-semibold rounded-full bg-gray-200 text-gray-700">
          {product.category}
        </div>
        <h3 className="font-semibold text-lg mb-1 line-clamp-2">{product.title}</h3>
        <p className="font-bold text-xl">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  )
}
