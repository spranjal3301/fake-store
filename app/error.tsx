"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Something went wrong!</h2>
      <p className="mb-8">We encountered an error while loading the page.</p>
      <div className="flex justify-center gap-4">
        <button onClick={reset} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Try again
        </button>
        <Link href="/" className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Return to Home
        </Link>
      </div>
    </div>
  )
}
