export default function ProductDetailSkeleton() {
  return (
    <div className="mt-8 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-200 rounded-lg h-[400px]"></div>

        <div>
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-10 bg-gray-200 rounded mb-4"></div>

          <div className="flex items-center mb-4">
            <div className="h-5 bg-gray-200 rounded w-32"></div>
          </div>

          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>

          <div className="space-y-2 mb-8">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>

          <div className="h-12 bg-gray-200 rounded-lg w-40"></div>
        </div>
      </div>
    </div>
  )
}
