import type { Product } from "./types"

const API_URL = "https://fakestoreapi.com"

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${API_URL}/products`, { next: { revalidate: 3600 } })

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error("Error fetching products:", error)
    throw error
  }
}

export async function getProduct(id: string): Promise<Product> {
  try {
    const response = await fetch(`${API_URL}/products/${id}`, { next: { revalidate: 3600 } })

    if (!response.ok) {
      throw new Error(`Failed to fetch product: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error)
    throw error
  }
}

export async function getCategories(): Promise<string[]> {
  try {
    const response = await fetch(`${API_URL}/products/categories`, { next: { revalidate: 3600 } })

    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error("Error fetching categories:", error)
    throw error
  }
}
