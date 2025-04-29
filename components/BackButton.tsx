"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export default function BackButton() {
  const router = useRouter()

  return (
    <button onClick={() => router.back()} className="flex items-center text-blue-600 hover:text-blue-800 mb-6">
      <ArrowLeft className="h-4 w-4 mr-1" />
      Back to Products
    </button>
  )
}
