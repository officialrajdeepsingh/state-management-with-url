import { searchParamsCache } from '@/utils/searchParams'
 import Link from "next/link"
export default function Page({
  searchParams
}: {
  searchParams: Record<string, string | string[] | undefined>
}) {

  const { name, age } = searchParamsCache.parse(searchParams)

  return (

      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div className="grid grid-cols-1">
          <div className="w-full max-w-lg mx-auto my-4 bg-white shadow-xl rounded-xl">
                      <Link
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium  bg-black text-white hover:bg-black/90 h-10 px-3 py-2 w-full"
              href='/'
            >
              Back
            </Link>
            <div className="p-6 lg:text-center">
              <h4 className="mt-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Search Results for {name} </h4>
              <p className="mt-3 text-base leading-relaxed text-gray-500">Age {age}.</p>
            </div>
          </div>
        </div>
      </div>
  )
}
 

