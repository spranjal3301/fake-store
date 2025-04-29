import { Suspense } from "react"
import { notFound } from "next/navigation"
import ProductDetail from "@/components/ProductDetail"
import ProductDetailSkeleton from "@/components/ProductDetailSkeleton"
import { getProduct } from "@/lib/api"
import BackButton from "@/components/BackButton"

export async function generateMetadata({ params }: { params: { id: string } }) {
  try {
    const product = await getProduct(params.id)
    return {
      title: `${product.title} | FakeStore`,
      description: product.description,
    }
  } catch (error) {
    return {
      title: "Product | FakeStore",
      description: "Product details",
    }
  }
}

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <main className="container mx-auto px-4 py-8">
      <BackButton />
      <Suspense fallback={<ProductDetailSkeleton />}>
        <ProductDetailWrapper id={params.id} />
      </Suspense>
    </main>
  )
}

async function ProductDetailWrapper({ id }: { id: string }) {
  try {
    const product = await getProduct(id)
    return <ProductDetail product={product} />
  } catch (error) {
    notFound()
  }
}
